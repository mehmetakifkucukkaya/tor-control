import { TrendingUp, Clock, DollarSign, Gift, Target } from "lucide-react";
import sectionBg from "@/assets/section-bg.jpg";

const PerformanceShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${sectionBg})` }}
      />
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Performans{" "}
            <span className="text-neon-cyan neon-text">Önizleme</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            TikTok Live yayıncıları için tasarlanmış güçlü performans yönetim sistemimize bir göz atın.
          </p>
        </div>

        {/* Dashboard showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main stats panel */}
            <div className="lg:col-span-2 glass-card neon-border p-6 md:p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse" />
                <h3 className="font-display font-semibold text-lg">Canlı Performans Metrikleri</h3>
              </div>

              {/* Stats grid */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8">
                <div className="glass-card p-4 md:p-6 rounded-2xl group hover:glow-cyan transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-neon-cyan/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <span className="text-sm text-muted-foreground">Aylık Yayın Saati</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-display font-bold text-neon-cyan">156s 32d</p>
                  <p className="text-sm text-neon-magenta mt-2">↑ Geçen aya göre %18</p>
                </div>

                <div className="glass-card p-4 md:p-6 rounded-2xl group hover:glow-magenta transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-neon-magenta/20 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-neon-magenta" />
                    </div>
                    <span className="text-sm text-muted-foreground">Tahmini Kazanç</span>
                  </div>
                  <p className="text-3xl md:text-4xl font-display font-bold text-neon-magenta">₺36.500</p>
                  <p className="text-sm text-neon-cyan mt-2">↑ Geçen aya göre %32</p>
                </div>
              </div>

              {/* Performance chart */}
              <div className="glass-card p-4 md:p-6 rounded-2xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-neon-purple" />
                    <span className="font-semibold">Haftalık Performans</span>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-neon-cyan" />
                      <span className="text-muted-foreground">İzlenme</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-neon-magenta" />
                      <span className="text-muted-foreground">Kazanç</span>
                    </div>
                  </div>
                </div>

                {/* Chart bars */}
                <div className="h-48 flex items-end justify-between gap-1 md:gap-2">
                  {[
                    { views: 65, earnings: 45 },
                    { views: 80, earnings: 60 },
                    { views: 55, earnings: 40 },
                    { views: 90, earnings: 75 },
                    { views: 70, earnings: 55 },
                    { views: 95, earnings: 85 },
                    { views: 85, earnings: 70 },
                  ].map((data, i) => (
                    <div key={i} className="flex-1 flex items-end gap-0.5 md:gap-1">
                      <div
                        className="flex-1 bg-gradient-to-t from-neon-cyan/60 to-neon-cyan rounded-t transition-all hover:from-neon-cyan/80 hover:to-neon-cyan"
                        style={{ height: `${data.views}%` }}
                      />
                      <div
                        className="flex-1 bg-gradient-to-t from-neon-magenta/60 to-neon-magenta rounded-t transition-all hover:from-neon-magenta/80 hover:to-neon-magenta"
                        style={{ height: `${data.earnings}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Side panels */}
            <div className="space-y-6">
              {/* Jeton Support */}
              <div className="glass-card neon-border p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-neon-purple/20 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold">Jeton Desteği</h4>
                    <p className="text-xs text-muted-foreground">Bu ayın ilerlemesi</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Kullanılan Destek</span>
                      <span className="text-neon-cyan font-semibold">78%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-gradient-to-r from-neon-purple via-neon-magenta to-neon-cyan rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between text-sm pt-2">
                    <span className="text-muted-foreground">Toplam Jeton</span>
                    <span className="text-neon-magenta font-bold">12.450</span>
                  </div>
                </div>
              </div>

              {/* Goals */}
              <div className="glass-card neon-border p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-neon-pink/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold">Haftalık Hedefler</h4>
                    <p className="text-xs text-muted-foreground">5 hedeften 3'ü tamamlandı</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "20 saat yayın yap", progress: 100, completed: true },
                    { name: "5K izleyiciye ulaş", progress: 100, completed: true },
                    { name: "500 jeton kazan", progress: 100, completed: true },
                    { name: "3 işbirliği yap", progress: 66, completed: false },
                    { name: "1K takipçi kazan", progress: 45, completed: false },
                  ].map((goal, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${goal.completed ? 'bg-neon-cyan' : 'bg-muted'}`}>
                        {goal.completed && <span className="text-xs">✓</span>}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm ${goal.completed ? 'text-muted-foreground line-through' : ''}`}>{goal.name}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">%{goal.progress}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceShowcase;
