import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Star, Gift, Users, TrendingUp, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const PANEL_URL = "https://play.google.com/store/apps/details?id=com.yearflow.year_flow";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "#", icon: Home, color: "bg-neon-magenta" },
    { name: "Avantajlar", href: "#benefits", icon: Star, color: "bg-yellow-500" },
    { name: "Destekler", href: "#features", icon: Gift, color: "bg-rose-500" },
    { name: "Yayıncılar", href: "#testimonials", icon: Users, color: "bg-orange-500" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card border-b border-border/30" : ""
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-neon-cyan/20 rounded-xl blur-md group-hover:bg-neon-cyan/30 transition-all duration-300" />
              <img src={logo} alt="Tor Control Logo" className="h-10 w-auto relative z-10 drop-shadow-[0_0_8px_rgba(0,228,255,0.5)]" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-xl bg-gradient-to-r from-neon-cyan to-foreground bg-clip-text text-transparent">
                TOR
              </span>
              <span className="font-display font-bold text-sm text-neon-magenta -mt-1">
                CONTROL
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#apply">
              <Button variant="neon" size="sm">
                Başvur
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-xl z-40 animate-fade-in overflow-y-auto">
            <div className="container px-4 py-6">
              {/* Navigation Links */}
              <div className="space-y-2 mb-6">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className={`w-10 h-10 ${link.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-medium">{link.name}</span>
                    </a>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-muted-foreground tracking-wider">KURUMSAL</span>
                <div className="flex-1 h-px bg-border/50" />
              </div>

              {/* Corporate Links */}
              <div className="space-y-2 mb-8">
                <a
                  href="#how-it-works"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-neon-cyan/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <span className="text-lg font-medium">Nasıl Başvurulur</span>
                </a>
              </div>

              {/* Panel Card - Bottom */}
              <a
                href={PANEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card neon-border p-4 rounded-2xl hover:scale-[1.02] transition-transform"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-neon-cyan" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">Tor Control Panel</span>
                        <span className="px-2 py-0.5 bg-neon-cyan/20 text-neon-cyan text-xs font-bold rounded-full">
                          YENİ
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Yayıncı Yönetim Paneli</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-neon-cyan" />
                </div>
              </a>

              {/* Apply Button */}
              <div className="mt-6">
                <a href="#apply" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="neon" size="lg" className="w-full">
                    Hemen Başvur
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
