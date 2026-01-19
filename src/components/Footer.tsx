import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30 relative">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-neon-cyan/15 rounded-xl blur-md" />
              <img src={logo} alt="Tor Control Logo" className="h-10 w-auto relative z-10 drop-shadow-[0_0_6px_rgba(0,228,255,0.4)]" />
            </div>
            <span className="font-display font-bold text-xl bg-gradient-to-r from-foreground to-neon-cyan bg-clip-text text-transparent">
              Tor Control
            </span>
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
