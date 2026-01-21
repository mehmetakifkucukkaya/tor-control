import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Gamepad2, GraduationCap, Coins } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay prevented by browser");
      });
    }
  }, []);

  const scrollToApply = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        poster={heroBg}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/15 rounded-full blur-3xl animate-glow-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/15 rounded-full blur-3xl animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-glow-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--neon-purple) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--neon-purple) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-purple/30 opacity-0 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-muted-foreground">TikTok Resmi LIVE Ajansı</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight opacity-0 animate-fade-in-up animate-delay-100">
            <span className="gradient-text">TikTok Live'da</span> Kariyerini
            <br />
            <span className="text-neon-cyan neon-text">Zirveye Taşıyoruz</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up animate-delay-200">
            Tor Media Agency olarak 500+ yayıncıya profesyonel destek sağlıyoruz. Kişisel yönetici, marka işbirlikleri
            ve güvenilir ödeme sistemiyle yayın kariyerinizi bir üst seviyeye taşıyoruz.
          </p>

          {/* Slogan */}
          <p className="text-lg font-display font-semibold text-neon-magenta opacity-0 animate-fade-in-up animate-delay-250">
            Hızlı • Güvenilir • Resmi
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animate-delay-300">
            <Button variant="neon" size="xl" className="group" onClick={scrollToApply}>
              Hemen Başvur
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="neon-outline" size="xl" onClick={scrollToApply}>
              Daha Fazla Bilgi
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 opacity-0 animate-fade-in-up animate-delay-400">
            {[
              { icon: Users, value: "500+", label: "Aktif Yayıncı" },
              { icon: Gamepad2, value: "1000+", label: "Dağıtılan Ekipman" },
              { icon: Coins, value: "10M+", label: "Jeton Desteği" },
              { icon: GraduationCap, value: "200+", label: "Başarılı İş Birliği" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-4 rounded-xl text-center group hover:scale-105 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-neon-cyan mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-display font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Welcome message */}
          <p className="text-sm text-muted-foreground opacity-0 animate-fade-in-up animate-delay-500">
            🎮 TikTok'ta CANLI YAYIN açıyorsan doğru yerdesin! • Tor Media Agency ailesine Hoşgeldin!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
