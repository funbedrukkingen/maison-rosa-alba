import { Heart, Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[hsl(40,33%,99%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(30,25%,91%)] text-[hsl(20,35%,40%)] text-xs font-medium tracking-wide uppercase">
              <span>✦</span>
              Oase van Rust in Frankrijk
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[hsl(25,30%,15%)] leading-[1.1] font-serif">
              De plek om tot rust
              <br />
              en tot jezelf te
              <br />
              komen.
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-[hsl(25,15%,40%)] max-w-lg leading-relaxed">
              In het schilderachtige dorpje Sarrey (Haute-Marne, Frankrijk)
              initieerde{" "}
              <strong className="text-[hsl(25,30%,20%)]">
                Wouter van Meekeren
              </strong>{" "}
              in 2009 het opzetten van een ecologische leef-woongemeenschap,
              holistisch spiritueel centrum en sfeervolle minicamping.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="bg-[hsl(20,45%,38%)] hover:bg-[hsl(20,42%,32%)] text-white rounded-full px-7 gap-2"
              >
                <Heart className="w-4 h-4" />
                Informatie & Aanmelden
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-7 gap-2 border-[hsl(25,15%,85%)] text-[hsl(25,30%,25%)] hover:bg-[hsl(30,20%,94%)]"
              >
                <Triangle className="w-4 h-4" />
                Ontdek de MiniCamping
              </Button>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-4 pt-4 text-sm text-[hsl(25,20%,40%)]">
              <span className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full border border-[hsl(20,45%,38%)] flex items-center justify-center text-[10px] text-[hsl(20,45%,38%)]">
                  ⊙
                </span>
                Ecologisch beheer
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full border border-[hsl(20,45%,38%)] flex items-center justify-center text-[10px] text-[hsl(20,45%,38%)]">
                  ⊙
                </span>
                Holistisch & Cursussen
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full border border-[hsl(20,45%,38%)] flex items-center justify-center text-[10px] text-[hsl(20,45%,38%)]">
                  ⊙
                </span>
                Sfeervolle MiniCamping
              </span>
            </div>
          </div>

          {/* Right image card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[hsl(20,40%,30%)]/15">
              <img
                src="https://vibe.filesafe.space/1788007052745913058/attachments/f0c0dc77-a571-483b-b62b-3cf64bcf909d.png"
                alt="Maison Rosa Alba - Karaktervol Frans Landhuis"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Overlay badge on image */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="inline-block px-3 py-1 rounded-full bg-[hsl(20,45%,38%)] text-white text-xs font-medium mb-2">
                    Maison Rosa Alba
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(25,30%,15%)] font-serif">
                    Karaktervol Frans Landhuis
                  </h3>
                </div>
              </div>
            </div>
            {/* Floating tooltip */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-[hsl(25,12%,88%)] max-w-[200px]">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[hsl(120,35%,82%)] flex items-center justify-center text-sm shrink-0 mt-0.5">
                  🌱
                </div>
                <div>
                  <p className="text-xs font-semibold text-[hsl(25,30%,15%)]">
                    Harmonie met de Natuur
                  </p>
                  <p className="text-[11px] text-[hsl(25,15%,45%)] leading-snug mt-0.5">
                    Eenheid van lichaam, geest en groene omgeving
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
