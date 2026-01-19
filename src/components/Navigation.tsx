import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

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
    { name: "Özellikler", href: "#features" },
    { name: "Avantajlar", href: "#benefits" },
    { name: "Nasıl Çalışır", href: "#how-it-works" },
    { name: "Referanslar", href: "#testimonials" },
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
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-magenta flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-foreground" />
            </div>
            <span className="font-display font-bold text-lg hidden sm:block">Tor Connector</span>
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
            <Button variant="ghost" size="sm">
              İletişim
            </Button>
            <Button variant="neon" size="sm">
              Hemen Başvur
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
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
          <div className="md:hidden glass-card rounded-2xl p-6 mb-4 animate-fade-in-up">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-border/30" />
              <div className="flex flex-col gap-3 pt-2">
                <Button variant="neon-outline" size="lg" className="w-full">
                  İletişim
                </Button>
                <Button variant="neon" size="lg" className="w-full">
                  Hemen Başvur
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
