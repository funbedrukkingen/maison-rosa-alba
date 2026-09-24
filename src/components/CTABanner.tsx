import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[hsl(20,45%,40%)] to-[hsl(18,42%,32%)] p-10 lg:p-16 text-center relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                                radial-gradient(circle at 80% 20%, white 1px, transparent 1px),
                                radial-gradient(circle at 50% 80%, white 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative space-y-6">
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-xs font-medium tracking-wide uppercase backdrop-blur-sm border border-white/20">
              INFORMATIE & AANMELDEN
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif">
              Voorjaar & Zomer op Rosa Alba
            </h2>

            {/* Description */}
            <p className="text-white/85 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
              Neem vrijblijvend contact op met initiatiefnemer{" "}
              <strong className="text-white font-semibold">
                Wouter van Meekeren
              </strong>{" "}
              voor vragen, reserveringen op de minicamping of deelname aan
              cursussen.
            </p>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2.5 text-white text-sm border border-white/20">
                <Phone className="w-4 h-4" />
                <span>0031 - 6 - 39104841 / 06-39104841</span>
              </div>
              <div className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2.5 text-white text-sm border border-white/20">
                <Mail className="w-4 h-4" />
                <span>maisonrosaalba@gmail.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-white text-[hsl(20,45%,38%)] hover:bg-white/90 rounded-full px-8 font-semibold shadow-lg shadow-black/10"
            >
              Stuur een Bericht
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
