import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force video to play on mount
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, video will show poster instead
        console.log("Autoplay prevented by browser");
      });
    }
  }, []);

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
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/15 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/15 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--neon-purple) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--neon-purple) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-purple/30 opacity-0 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm text-muted-foreground">Tor Control</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight opacity-0 animate-fade-in-up animate-delay-100">
              TikTok Live'da{" "}
              <span className="gradient-text">Daha Hızlı Büyü.</span>
              <br />
              Profesyonel Destekle{" "}
              <span className="text-neon-cyan neon-text">Daha Fazla Kazan.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up animate-delay-200">
              Lider TikTok Live ajansına katıl ve kazanç potansiyelini maksimuma çıkar. 
              Uzman rehberliği, performans takibi ve özel destek al.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animate-delay-300">
              <Button variant="neon" size="xl" className="group">
                Yayıncı Olarak Başvur
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="neon-outline" size="xl">
                Bize Ulaşın
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 opacity-0 animate-fade-in-up animate-delay-400">
              {[
                { value: "500+", label: "Aktif Yayıncı" },
                { value: "₺15M+", label: "Aylık Gelir" },
                { value: "95%", label: "Memnuniyet Oranı" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-display font-bold text-neon-cyan">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Dashboard mockup */}
          <div className="relative opacity-0 animate-fade-in-up animate-delay-300">
            <div className="relative float">
              {/* Main dashboard card */}
              <div className="glass-card neon-border p-6 rounded-3xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-semibold text-lg">Performans Paneli</h3>
                      <p className="text-sm text-muted-foreground">Ocak 2025</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-neon flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-xl">
                      <p className="text-xs text-muted-foreground mb-1">Aylık Saat</p>
                      <p className="text-2xl font-display font-bold text-neon-cyan">156h 32m</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <p className="text-xs text-muted-foreground mb-1">Tahmini Kazanç</p>
                      <p className="text-2xl font-display font-bold text-neon-magenta">₺36.500</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Haftalık Hedef</span>
                      <span className="text-neon-cyan">78%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-gradient-to-r from-neon-purple via-neon-magenta to-neon-cyan rounded-full" />
                    </div>
                  </div>

                  {/* Mini chart */}
                  <div className="h-20 flex items-end gap-1">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-neon-purple/60 to-neon-cyan/60 rounded-t transition-all hover:from-neon-purple hover:to-neon-cyan"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl border border-neon-cyan/30 animate-float">
                <p className="text-xs text-muted-foreground">Canlı İzleyici</p>
                <p className="text-lg font-display font-bold text-neon-cyan">2.4K</p>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl border border-neon-magenta/30 animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-xs text-muted-foreground">Bugünkü Jetonlar</p>
                <p className="text-lg font-display font-bold text-neon-magenta">1,250</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
