import { useState } from "react";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#", icon: "♡", active: true },
    { label: "MiniCamping RosaAlba", href: "#", icon: "⛺" },
    { label: "Route & Bereikbaarheid", href: "#", icon: "◎" },
    { label: "Routekaart", href: "#", icon: "📍" },
    { label: "Kunst in RosaAlba", href: "#", icon: "◎" },
    { label: "Spelen met Licht", href: "#" },
    { label: "Wandeltochten", href: "#", icon: "🚶" },
    { label: "Voor in de Winter", href: "+" },
  ];

  return (
    <header className="w-full bg-white border-b border-[hsl(var(--border))] sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[hsl(30,15%,93%)] text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[hsl(25,20%,35%)]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Sarrey, Haute-Marne (Frankrijk)
            </span>
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              06-39104841 / 0031-6-39104841
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3" />
              info@maison-rosa-alba.nl
            </span>
            <span>Wouter van Meekeren</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[hsl(350,60%,75%)] flex items-center justify-center text-white text-lg">
              🌸
            </div>
            <div className="leading-tight">
              <div className="text-xl font-semibold text-[hsl(25,30%,15%)] font-serif">
                Maison
                <br />
                Rosa
                <br />
                Alba
              </div>
              <div className="text-[10px] tracking-widest uppercase text-[hsl(25,15%,50%)] mt-0.5">
                Sarrey ·<br />
                Frankrijk
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className={`px-3 py-2 rounded-full text-sm whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  item.active
                    ? "bg-[hsl(20,45%,38%)] text-white"
                    : "text-[hsl(25,30%,25%)] hover:bg-[hsl(30,20%,94%)]"
                }`}
              >
                {item.icon && <span className="text-xs">{item.icon}</span>}
                {item.label}
              </a>
            ))}
            <Button className="ml-2 bg-[hsl(20,45%,38%)] hover:bg-[hsl(20,42%,32%)] text-white rounded-full px-5 text-sm">
              Informatie & Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden pb-4 border-t pt-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    item.active
                      ? "bg-[hsl(20,45%,38%)] text-white"
                      : "text-[hsl(25,30%,25%)] hover:bg-[hsl(30,20%,94%)]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-2 bg-[hsl(20,45%,38%)] hover:bg-[hsl(20,42%,32%)] text-white rounded-full w-fit">
                Informatie & Contact
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
