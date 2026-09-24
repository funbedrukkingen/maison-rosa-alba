import { MapPin, Phone, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { label: "Home & Visie", icon: "♡" },
    { label: "MiniCamping RosaAlba", icon: "⛺" },
    { label: "Route & Adres", icon: "◎" },
    { label: "Kunst & Glaskunst", icon: "◎" },
  ];

  return (
    <footer className="bg-[hsl(40,25%,96%)] border-t border-[hsl(25,12%,88%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🌸</span>
              <span className="font-bold text-[hsl(25,30%,15%)] font-serif text-lg">
                Maison Rosa Alba
              </span>
            </div>
            <p className="text-sm text-[hsl(25,15%,42%)] leading-relaxed">
              Een holistisch, spiritueel, ecologisch woongemeenschap en
              cursuscentrum in de hartverwarmende Haute-Marne in Frankrijk.
            </p>
            <blockquote className="italic text-sm text-[hsl(20,45%,38%)] border-l-2 border-[hsl(20,45%,38%)] pl-3 mt-4">
              "De plek om tot rust en tot jezelf te komen."
            </blockquote>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-[hsl(25,30%,15%)] mb-4 font-serif">
              Snel Navigeren
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-sm text-[hsl(25,20%,38%)] hover:text-[hsl(20,45%,38%)] transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-bold text-[hsl(25,30%,15%)] mb-4 font-serif">
              Contact & Initiatief
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-[hsl(25,30%,20%)]">
                  Wouter van Meekeren
                </p>
                <p className="flex items-center gap-1.5 text-sm text-[hsl(25,20%,38%)] mt-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  Sarrey (Haute-Marne), Frankrijk
                </p>
              </div>
              <p className="flex items-center gap-1.5 text-sm text-[hsl(25,20%,38%)]">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                06-39104841 / 0031-6-39104841
              </p>
              <p className="flex items-center gap-1.5 text-sm text-[hsl(25,20%,38%)]">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                info@maison-rosa-alba.nl
                <br />
                maisonrosaalba@gmail.com
              </p>
            </div>
          </div>

          {/* CTA box */}
          <div>
            <div className="bg-white rounded-2xl p-5 border border-[hsl(25,12%,88%)] shadow-sm">
              <h3 className="font-bold text-[hsl(25,30%,15%)] mb-2 font-serif text-sm">
                Verblijf of Cursus Boeken?
              </h3>
              <p className="text-xs text-[hsl(25,15%,42%)] leading-relaxed mb-4">
                Wil je langskomen voor ecotuiniëren, bezinning, workshop geven
                of minicampen? Neem direct contact op met Wouter.
              </p>
              <Button
                size="sm"
                className="w-full bg-[hsl(20,45%,38%)] hover:bg-[hsl(20,42%,32%)] text-white rounded-full text-xs"
              >
                Bericht Sturen / Aanmelden
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[hsl(25,12%,88%)] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[hsl(25,20%,45%)]">
          <p>
            © 2009 - 2026 Maison & Mini Camping RosaAlba. Alle rechten
            voorbehouden.
          </p>
          <p className="flex items-center gap-1">
            Met zorg vernieuwd voor rust, harmonie & inspiratie{" "}
            <Heart className="w-3 h-3 text-[hsl(350,60%,60%)]" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
