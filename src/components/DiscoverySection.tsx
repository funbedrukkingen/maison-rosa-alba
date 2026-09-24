import { ArrowRight } from "lucide-react";

const discoveryCards = [
  {
    icon: "⛺",
    title: "MiniCamping RosaAlba",
    description:
      "Kamperen in de stilte van de natuur. Ideaal voor rustzoekers en natuurliefhebbers.",
    linkText: "Bekijk camping",
  },
  {
    icon: "🎨",
    title: "Kunst in RosaAlba",
    description:
      "Inspirerende kunst, tentoonstellingen en creatieve ontmoetingen in ons atelier.",
    linkText: "Ontdek kunst",
  },
  {
    icon: "☀️",
    title: "Spelen met Licht",
    description:
      "Glaskunst, glas in lood en bijzondere lichtreflecties in de Franse zon.",
    linkText: "Bekijk glaskunst",
  },
  {
    icon: "🥾",
    title: "Wandeltochten & Route",
    description:
      "Prachtige wandelroutes door de bossen en velden rondom Sarrey en de Marne.",
    linkText: "Bekijk routes",
  },
];

const DiscoverySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[hsl(40,25%,96%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-[hsl(25,12%,88%)] text-xs font-medium text-[hsl(20,45%,38%)] mb-4">
            Veelzijdig Aanbod
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(25,30%,15%)] font-serif mb-4">
            Ontdek Wat Rosa Alba Je Biedt
          </h2>
          <p className="text-[hsl(25,15%,42%)] max-w-2xl mx-auto">
            Klik door naar alle werkende subpagina&apos;s voor gedetailleerde
            informatie.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {discoveryCards.map((card, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl p-6 border border-[hsl(25,12%,88%)] hover:shadow-lg hover:border-[hsl(20,35%,78%)]/30 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[hsl(30,25%,94%)] flex items-center justify-center text-2xl mb-4 group-hover:bg-[hsl(20,45%,38%)]/10 transition-colors">
                {card.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-[hsl(25,30%,15%)] font-serif mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-[hsl(25,15%,42%)] leading-relaxed flex-grow mb-4">
                {card.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(20,45%,38%)] hover:text-[hsl(20,42%,30%)] transition-colors group/link"
              >
                {card.linkText}
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
