import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30 relative">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-magenta flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-foreground" />
            </div>
            <span className="font-display font-bold text-xl">TikTok Live Agency</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#apply" className="text-muted-foreground hover:text-neon-cyan transition-colors">
              Apply
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
              Contact
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 TikTok Live Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
