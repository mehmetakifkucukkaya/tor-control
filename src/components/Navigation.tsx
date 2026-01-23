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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Ana Sayfa", href: "/", icon: Home, color: "bg-neon-magenta", isRoute: true },
    { name: "Hakkımızda", href: "/hakkimizda", icon: Users, color: "bg-neon-cyan", isRoute: true },
    { name: "Avantajlar", href: "#benefits", icon: Star, color: "bg-yellow-500", isRoute: false },
    { name: "Destekler", href: "#features", icon: Gift, color: "bg-rose-500", isRoute: false },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isRoute: boolean) => {
    setIsMobileMenuOpen(false);

    if (isRoute) {
      // Let the browser handle route navigation naturally
      return;
    }

    e.preventDefault();
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? "bg-background/95 backdrop-blur-xl border-b border-border/30" : ""
        }`}
      >
        <div className="container px-4">
          <div className="flex items-center justify-between h-20 md:h-28">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group relative z-[60]">
              <img
                src={logo}
                alt="Tor Control Logo"
                className="h-16 md:h-24 w-auto drop-shadow-[0_0_25px_rgba(0,0,0,0.8)] filter"
              />
              <span className="md:hidden text-lg font-bold gradient-text">Tor Media Agency</span>
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
              className="md:hidden p-2 relative z-[60]"
              onClick={toggleMenu}
              aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              <div className="relative w-6 h-6">
                <X
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                  }`}
                />
                <Menu
                  className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl z-40 transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container px-4 py-6 h-full overflow-y-auto">
          {/* Navigation Links */}
          <div className="space-y-2 mb-6">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms" }}
                  onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
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
          <div
            className={`flex items-center gap-3 mb-4 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "200ms" : "0ms" }}
          >
            <span className="text-xs font-semibold text-muted-foreground tracking-wider">KURUMSAL</span>
            <div className="flex-1 h-px bg-border/50" />
          </div>

          {/* Social Links */}
          <div className="space-y-2 mb-8">
            <a
              href="https://www.tiktok.com/@tormedya"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "250ms" : "0ms" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
              <span className="text-lg font-medium">TikTok</span>
            </a>
            <a
              href="https://www.instagram.com/torajans.tiktok"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span className="text-lg font-medium">Instagram</span>
            </a>
          </div>

          {/* Panel Card - Bottom */}
          <a
            href={PANEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`block glass-card neon-border p-4 rounded-2xl hover:scale-[1.02] transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
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
          <div
            className={`mt-6 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "350ms" : "0ms" }}
          >
            <a href="#apply" onClick={(e) => handleNavClick(e, "#apply", false)}>
              <Button variant="neon" size="lg" className="w-full">
                Hemen Başvur
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
