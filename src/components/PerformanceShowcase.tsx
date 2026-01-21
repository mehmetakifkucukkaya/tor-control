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

const PANEL_URL = "https://play.google.com/store/apps/details?id=com.yearflow.year_flow";

const PerformanceShowcase = () => {
  const openPanel = () => {
    window.open(PANEL_URL, "_blank", "noopener,noreferrer");
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
        <div className="max-w-5xl mx-auto">

          {/* Dashboard Preview - Based on reference design */}
          <ScrollAnimationWrapper animation="zoom-in" delay={200}>
            <div className="glass-card neon-border p-6 md:p-10 rounded-3xl">
              {/* Header */}
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  <span className="text-neon-cyan">TOR</span>{" "}
                  <span className="text-neon-magenta">CONTROL</span>
                </h3>
                <p className="text-muted-foreground">
                  Yayıncılar için özel tasarlanmış kontrol paneli
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-10 max-w-xl mx-auto">
                <div className="flex items-start gap-4 p-4 glass-card rounded-xl border border-border/30 hover:border-neon-cyan/30 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-neon-cyan mt-1.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Yayın Süresi & Performans Takibi</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Günlük, haftalık ve aylık yayın sürelerinizi anlık olarak takip edin.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 glass-card rounded-xl border border-border/30 hover:border-neon-magenta/30 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-neon-magenta mt-1.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Jeton & Destek Hak Edişi</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Kazandığınız jetonları ve destek haklarınızı detaylı görüntüleyin.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 glass-card rounded-xl border border-border/30 hover:border-neon-purple/30 transition-colors">
                  <div className="w-3 h-3 rounded-full bg-neon-purple mt-1.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Otomatik Uyarı & Ödül Sistemi</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Hedeflerinize ulaştığınızda otomatik bildirimler ve ödüller kazanın.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  const colorClass = colorClasses[stat.color as keyof typeof colorClasses];

                  return (
                    <div
                      key={index}
                      className="glass-card p-4 md:p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
                    >
                      <Icon className={`w-8 h-8 ${colorClass} mx-auto mb-3`} />
                      <p className={`text-2xl md:text-3xl font-display font-bold ${colorClass} mb-1`}>{stat.value}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Slogan & CTA */}
              <div className="text-center">
                <p className="text-lg md:text-xl font-display font-bold mb-6">
                  <span className="text-neon-cyan">Kontrol Bizde,</span>{" "}
                  <span className="text-neon-magenta">Güç Bizde</span>
                </p>
                <Button variant="neon" size="lg" onClick={openPanel} className="group">
                  Panele Erişin
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default PerformanceShowcase;
