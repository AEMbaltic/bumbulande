import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Calendar, User, Truck, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { bookingSchema, type BookingForm } from "@/lib/validation";
import { products } from "@/data/products";

const steps = [
  { id: 1, label: "Datums un atrakcija", icon: Calendar },
  { id: 2, label: "Kontaktinformācija", icon: User },
  { id: 3, label: "Piegāde", icon: Truck },
  { id: 4, label: "Apstiprinājums", icon: ClipboardCheck },
];

// Sample booked dates for demo
const bookedDates = [
  new Date(new Date().setDate(new Date().getDate() + 3)),
  new Date(new Date().setDate(new Date().getDate() + 8)),
  new Date(new Date().setDate(new Date().getDate() + 14)),
];

export function BookingFlow() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { delivery: "delivery", attraction: "" },
    mode: "onTouched",
  });

  useEffect(() => {
    const handler = (e: Event) => {
      const slug = (e as CustomEvent<string>).detail;
      setValue("attraction", slug, { shouldValidate: true });
    };
    window.addEventListener("preselect-attraction", handler);
    return () => window.removeEventListener("preselect-attraction", handler);
  }, [setValue]);

  const values = watch();
  const selectedProduct = products.find((p) => p.slug === values.attraction);
  const deliveryFee = values.delivery === "delivery" ? 0 : 0;
  const deposit = 50;
  const total = (selectedProduct?.pricePerDay ?? 0) + deliveryFee + deposit;

  const next = async () => {
    let fields: (keyof BookingForm)[] = [];
    if (step === 1) fields = ["attraction", "date"];
    if (step === 2) fields = ["name", "phone", "email", "address", "city"];
    if (step === 3) fields = ["delivery"];
    const ok = await trigger(fields);
    if (ok) setStep((s) => Math.min(4, s + 1));
  };

  const onSubmit = (data: BookingForm) => {
    // Placeholder: would POST to Formspree/Resend webhook
    console.log("Booking submitted", data);
    setSubmitted(true);
    confetti({
      particleCount: 140,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#FFC93C", "#FF6B6B", "#4ECDC4", "#1A365D"],
    });
  };

  return (
    <section id="rezervet" className="py-20 lg:py-28 bg-cream scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-handwritten text-2xl text-coral">Rezervācija</span>
          <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy">
            Pārbaudi datumu un rezervē
          </h2>
          <p className="mt-4 text-navy/70">
            Atbildam 24 stundu laikā ar apstiprinājumu un rēķinu.
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-white shadow-lift overflow-hidden">
          {!submitted ? (
            <>
              {/* Progress */}
              <div className="px-6 lg:px-10 pt-8">
                <ol className="flex items-center justify-between gap-2">
                  {steps.map((s, i) => {
                    const active = step === s.id;
                    const done = step > s.id;
                    return (
                      <li key={s.id} className="flex-1 flex flex-col items-center gap-2">
                        <div className="flex items-center w-full">
                          <div className={`h-1 flex-1 ${i === 0 ? "opacity-0" : done || active ? "bg-coral" : "bg-navy/10"}`} />
                          <div
                            className={`h-9 w-9 shrink-0 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                              done ? "bg-coral text-white" : active ? "bg-navy text-white" : "bg-navy/10 text-navy/50"
                            }`}
                          >
                            {done ? <CheckCircle2 className="h-5 w-5" /> : s.id}
                          </div>
                          <div className={`h-1 flex-1 ${i === steps.length - 1 ? "opacity-0" : done ? "bg-coral" : "bg-navy/10"}`} />
                        </div>
                        <span className={`text-[11px] sm:text-xs font-medium text-center ${active ? "text-navy" : "text-navy/50"}`}>
                          {s.label}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-6 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step === 1 && (
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <Label className="text-navy font-semibold">Izvēlies atrakciju</Label>
                          <div className="mt-3 space-y-2">
                            {products.map((p) => (
                              <label
                                key={p.slug}
                                className={`flex items-center gap-3 p-3 rounded-2xl border-2 cursor-pointer transition-all ${
                                  values.attraction === p.slug
                                    ? "border-coral bg-coral/5"
                                    : "border-navy/10 hover:border-navy/20"
                                }`}
                              >
                                <input
                                  type="radio"
                                  value={p.slug}
                                  {...register("attraction")}
                                  className="sr-only"
                                />
                                <img src={p.image} alt="" className="h-14 w-14 rounded-xl object-cover" />
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-navy text-sm truncate">{p.name}</div>
                                  <div className="text-xs text-navy/60">€{p.pricePerDay}/dienā</div>
                                </div>
                              </label>
                            ))}
                          </div>
                          {errors.attraction && (
                            <p className="mt-2 text-sm text-coral">{errors.attraction.message}</p>
                          )}
                        </div>

                        <div>
                          <Label className="text-navy font-semibold">Izvēlies datumu</Label>
                          <div className="mt-3 rounded-2xl border-2 border-navy/10 p-3 flex justify-center">
                            <Controller
                              control={control}
                              name="date"
                              render={({ field }) => (
                                <DayPicker
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={[{ before: new Date() }, ...bookedDates]}
                                  showOutsideDays
                                />
                              )}
                            />
                          </div>
                          {errors.date && (
                            <p className="mt-2 text-sm text-coral">{errors.date.message}</p>
                          )}
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Field label="Vārds, uzvārds *" error={errors.name?.message}>
                          <Input {...register("name")} placeholder="Anna Bērziņa" />
                        </Field>
                        <Field label="Telefons *" error={errors.phone?.message}>
                          <Input {...register("phone")} placeholder="+371 20 000 000" />
                        </Field>
                        <Field label="E-pasts *" error={errors.email?.message}>
                          <Input type="email" {...register("email")} placeholder="anna@piemers.lv" />
                        </Field>
                        <Field label="Pilsēta / novads *" error={errors.city?.message}>
                          <Input {...register("city")} placeholder="Rīga" />
                        </Field>
                        <div className="sm:col-span-2">
                          <Field label="Piegādes adrese *" error={errors.address?.message}>
                            <Input {...register("address")} placeholder="Brīvības iela 100, Rīga" />
                          </Field>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-3">
                        {[
                          {
                            value: "delivery" as const,
                            title: "Piegāde un uzstādīšana",
                            desc: "Bezmaksas Rīgā un 10 km rādiusā. Tālāk €0.50/km.",
                            icon: "🚚",
                          },
                          {
                            value: "pickup" as const,
                            title: "Pašsavākšana",
                            desc: "Rīga, Rūpniecības iela 12. Atlaide €30.",
                            icon: "🚗",
                          },
                        ].map((opt) => (
                          <label
                            key={opt.value}
                            className={`flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                              values.delivery === opt.value
                                ? "border-coral bg-coral/5"
                                : "border-navy/10 hover:border-navy/20"
                            }`}
                          >
                            <input type="radio" value={opt.value} {...register("delivery")} className="sr-only" />
                            <span className="text-3xl">{opt.icon}</span>
                            <div>
                              <div className="font-semibold text-navy">{opt.title}</div>
                              <div className="text-sm text-navy/60 mt-0.5">{opt.desc}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    )}

                    {step === 4 && (
                      <div className="space-y-5">
                        <div className="rounded-2xl bg-cream p-6 space-y-3">
                          <SummaryRow label="Atrakcija" value={selectedProduct?.name ?? "—"} />
                          <SummaryRow
                            label="Datums"
                            value={values.date ? values.date.toLocaleDateString("lv-LV") : "—"}
                          />
                          <SummaryRow label="Vārds" value={values.name || "—"} />
                          <SummaryRow label="Adrese" value={`${values.address || "—"}, ${values.city || ""}`} />
                          <SummaryRow
                            label="Piegāde"
                            value={values.delivery === "delivery" ? "Piegāde un uzstādīšana" : "Pašsavākšana"}
                          />
                          <hr className="border-navy/10" />
                          <SummaryRow label="Atrakcija" value={`€${selectedProduct?.pricePerDay ?? 0}`} />
                          <SummaryRow label="Piegāde" value={`€${deliveryFee}`} />
                          <SummaryRow label="Depozīts (atgriežams)" value={`€${deposit}`} />
                          <div className="flex justify-between items-baseline pt-2">
                            <span className="font-semibold text-navy">Kopā</span>
                            <span className="font-display text-3xl font-bold text-coral">€{total}</span>
                          </div>
                        </div>

                        <Controller
                          control={control}
                          name="terms"
                          render={({ field }) => (
                            <label className="flex items-start gap-3 cursor-pointer">
                              <Checkbox
                                checked={!!field.value}
                                onCheckedChange={(c) => field.onChange(c === true)}
                                className="mt-0.5"
                              />
                              <span className="text-sm text-navy/80">
                                Esmu iepazinies ar{" "}
                                <a href="#" className="text-coral underline">noteikumiem</a> un piekrītu rezervācijas nosacījumiem.
                              </span>
                            </label>
                          )}
                        />
                        {errors.terms && (
                          <p className="text-sm text-coral">{errors.terms.message}</p>
                        )}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-10 flex items-center justify-between gap-4">
                  <Button
                    type="button"
                    variant="ghost"
                    disabled={step === 1}
                    onClick={() => setStep((s) => Math.max(1, s - 1))}
                  >
                    Atpakaļ
                  </Button>
                  {step < 4 ? (
                    <Button type="button" variant="coral" size="lg" onClick={next}>
                      Tālāk
                    </Button>
                  ) : (
                    <Button type="submit" variant="coral" size="lg">
                      Apstiprināt rezervāciju
                    </Button>
                  )}
                </div>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 lg:p-16 text-center"
            >
              <div className="mx-auto h-20 w-20 rounded-full bg-sky/20 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-sky" />
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-navy">Paldies!</h3>
              <p className="mt-3 text-navy/70 max-w-md mx-auto">
                Apstiprinājums nosūtīts uz tavu e-pastu. Sazināsimies ar tevi 24 stundu laikā,
                lai saskaņotu detaļas.
              </p>
              <Button variant="outline" className="mt-8" onClick={() => { setSubmitted(false); setStep(1); }}>
                Veikt jaunu rezervāciju
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <Label className="text-navy font-medium">{label}</Label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-sm text-coral">{error}</p>}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 text-sm">
      <span className="text-navy/60">{label}</span>
      <span className="font-medium text-navy text-right">{value}</span>
    </div>
  );
}
