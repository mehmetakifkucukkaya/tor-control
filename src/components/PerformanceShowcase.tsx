import { ArrowUpRight, TrendingUp, Users, Coins, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const stats = [
  { icon: TrendingUp, label: "Ortalama Büyüme", value: "+285%", color: "cyan" },
  { icon: Users, label: "Aktif Yayıncı", value: "500+", color: "magenta" },
  { icon: Coins, label: "Jeton Desteği", value: "10M+", color: "purple" },
  { icon: Gift, label: "Dağıtılan Ekipman", value: "1000+", color: "pink" },
];

const colorClasses = {
  cyan: "text-neon-cyan",
  magenta: "text-neon-magenta",
  purple: "text-neon-purple",
  pink: "text-neon-pink",
};

const PerformanceShowcase = () => {
  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimationWrapper animation="fade-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Yayıncı{" "}
              <span className="gradient-text">Paneli</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tor Control ile çalışan yayıncılar, özel yayıncı panelimiz üzerinden 
              tüm istatistiklerini, kazançlarını ve desteklerini takip edebilir.
            </p>
          </ScrollAnimationWrapper>

          {/* Dashboard Preview */}
          <ScrollAnimationWrapper animation="zoom-in" delay={200}>
            <div className="glass-card neon-border p-6 md:p-8 rounded-3xl">
              {/* Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-2">
                    Yayıncı Dashboard
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Gerçek zamanlı performans takibi ve kazanç analizi
                  </p>
                </div>
                <Button variant="neon" size="sm" onClick={scrollToApply} className="group">
                  Panele Eriş
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  const colorClass = colorClasses[stat.color as keyof typeof colorClasses];
                  
                  return (
                    <div
                      key={index}
                      className="glass-card p-4 md:p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
                    >
                      <Icon className={`w-8 h-8 ${colorClass} mx-auto mb-3`} />
                      <p className={`text-2xl md:text-3xl font-display font-bold ${colorClass} mb-1`}>
                        {stat.value}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Features List */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card p-4 rounded-xl border border-border/30 hover:border-neon-cyan/30 transition-colors">
                  <h4 className="font-semibold mb-2 text-neon-cyan">Kazanç Takibi</h4>
                  <p className="text-sm text-muted-foreground">
                    Günlük, haftalık ve aylık kazançlarını detaylı grafiklerle takip et.
                  </p>
                </div>
                <div className="glass-card p-4 rounded-xl border border-border/30 hover:border-neon-magenta/30 transition-colors">
                  <h4 className="font-semibold mb-2 text-neon-magenta">Hediye Analizi</h4>
                  <p className="text-sm text-muted-foreground">
                    Aldığın hediyeleri ve bonus kazançlarını anlık olarak gör.
                  </p>
                </div>
                <div className="glass-card p-4 rounded-xl border border-border/30 hover:border-neon-purple/30 transition-colors">
                  <h4 className="font-semibold mb-2 text-neon-purple">Ajans Desteği</h4>
                  <p className="text-sm text-muted-foreground">
                    Kişisel yöneticinle doğrudan iletişime geç ve destek al.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default PerformanceShowcase;
