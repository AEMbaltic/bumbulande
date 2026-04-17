import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-display text-2xl font-semibold">
              <span className="inline-flex h-10 w-10 rounded-2xl bg-coral items-center justify-center text-white font-bold">
                B
              </span>
              BumbuLande
            </div>
            <p className="mt-4 text-white/70 max-w-md text-sm leading-relaxed">
              Piepūšamo atrakciju noma bērnu ballītēm, dārza svētkiem un korporatīvajiem pasākumiem
              Rīgā un visā Latvijā. Drošība un prieks iekļauts cenā.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-coral flex items-center justify-center transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sunshine">Ātrās saites</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li><a href="#atrakcijas" className="hover:text-coral">Atrakcijas</a></li>
              <li><a href="#pakas" className="hover:text-coral">Pakas</a></li>
              <li><a href="#rezervet" className="hover:text-coral">Rezervēt</a></li>
              <li><a href="#faq" className="hover:text-coral">FAQ</a></li>
              <li><a href="#kontakti" className="hover:text-coral">Kontakti</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sunshine">Juridiskā info</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li><a href="#" className="hover:text-coral">Noteikumi</a></li>
              <li><a href="#" className="hover:text-coral">Privātuma politika</a></li>
              <li><a href="#" className="hover:text-coral">Drošības noteikumi</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-sm text-white/50">
          <p>© {new Date().getFullYear()} BumbuLande. Visas tiesības aizsargātas.</p>
          <p>Izgatavots ar mīlestību Latvijā 🇱🇻</p>
        </div>
      </div>
    </footer>
  );
}
