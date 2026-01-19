import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30 relative">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Tor Control Logo" className="h-10 w-auto" />
            <span className="font-display font-bold text-xl">Tor Control</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#apply" className="text-muted-foreground hover:text-neon-cyan transition-colors">
              Başvur
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
              İletişim
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
              Kullanım Koşulları
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Tor Control. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
