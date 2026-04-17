import { z } from "zod";

export const bookingSchema = z.object({
  attraction: z.string().min(1, "Lūdzu, izvēlies atrakciju"),
  date: z.date({ required_error: "Lūdzu, izvēlies datumu" }),
  name: z
    .string()
    .trim()
    .min(2, "Vārds ir pārāk īss")
    .max(100, "Vārds ir pārāk garš"),
  phone: z
    .string()
    .trim()
    .regex(/^(\+371\s?)?[2-9]\d{7}$|^\+371\s?[2-9]\d{7}$/, "Nederīgs Latvijas numurs"),
  email: z.string().trim().email("Nederīgs e-pasts").max(255),
  address: z.string().trim().min(3, "Lūdzu, ievadi adresi").max(200),
  city: z.string().trim().min(2, "Lūdzu, ievadi pilsētu").max(100),
  delivery: z.enum(["delivery", "pickup"]),
  terms: z.literal(true, {
    errorMap: () => ({ message: "Lūdzu, apstiprini noteikumus" }),
  }),
});

export type BookingForm = z.infer<typeof bookingSchema>;
