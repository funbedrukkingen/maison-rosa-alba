import { ArrowRight } from "lucide-react";

const features = [
  {
    tag: "Persoonlijke Groei",
    tagColor: "text-[hsl(25,45%,40%)]",
    image:
      "https://vibe.filesafe.space/1788007052745913058/attachments/6e008bfe-db4e-4723-afb7-a285aa5243e0.png",
    title: "Persoonlijke Begeleiding & Groepen",
    description:
      "Het is de bedoeling dat er op zo'n manier gewerkt wordt, dat je persoonlijke begeleiding kan ontvangen of inspirerend met groepen kan samenwerken.",
    linkText: "Lees meer over creativiteit",
  },
  {
    tag: "MiniCamping",
    tagColor: "text-[hsl(30,40%,40%)]",
    image:
      "https://vibe.filesafe.space/1788007052745913058/attachments/6d18df42-3daa-4007-a9a0-93ba9b8d37a0.png",
    title: "Rustieke Groene MiniCamping",
    description:
      "Kamperen in kleinschalige, rustige natuur. Geniet van de zuivere lucht, de rust van Sarrey en een warme, gastvrije sfeer op het terrein.",
    linkText: "Bekijk MiniCamping details",
  },
  {
    tag: "Creativiteit & Educatie",
    tagColor: "text-[hsl(340,45%,45%)]",
    image:
      "https://vibe.filesafe.space/1788007052745913058/attachments/2b536c44-dbcf-4cbe-bc29-08ce5cce3cf4.png",
    title: "Gastdocenten & Eigen Programma",
    description:
      "Gastdocenten bieden weekcursussen aan. Na de verbouwing zijn de ruimtes ook af te huren voor je eigen cursus. Tevens plek voor ecotuiniëren, Franse taal oefrissen of schrijven.",
    linkText: "Ontdek de Mogelijkheden",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(25,30%,15%)] font-serif mb-4">
            Leven in Harmonie met de Natuur
          </h2>
          <p className="text-[hsl(25,15%,42%)] max-w-2xl mx-auto leading-relaxed">
            Maison Rosa Alba stimuleert de eenheid tussen lichaam, geest en
            omgeving door middel van bezinning, creativiteit en gastvrijheid.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-[hsl(25,12%,90%)] hover:shadow-xl hover:shadow-[hsl(20,40%,30%)]/8 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute top-3 left-3 text-xs font-semibold ${feature.tagColor} bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full`}
                >
                  {feature.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-[hsl(25,30%,15%)] font-serif leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-[hsl(25,15%,42%)] leading-relaxed">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(20,45%,38%)] hover:text-[hsl(20,42%,30%)] transition-colors group/link mt-2"
                >
                  {feature.linkText}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
