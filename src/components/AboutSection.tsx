import { Users, Trophy, Heart, Zap } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const values = [
  {
    icon: Users,
    title: "Yayıncı Odaklı",
    description: "Her kararımızı yayıncılarımızın başarısını düşünerek alıyoruz.",
    color: "cyan",
  },
  {
    icon: Trophy,
    title: "Sonuç Odaklı",
    description: "Somut sonuçlar ve ölçülebilir büyüme sağlamaya odaklanıyoruz.",
    color: "magenta",
  },
  {
    icon: Heart,
    title: "Şeffaflık",
    description: "Tüm süreçlerimizde açık ve dürüst iletişim kuruyoruz.",
    color: "purple",
  },
  {
    icon: Zap,
    title: "Yenilikçilik",
    description: "Sektördeki en son trendleri takip ederek stratejilerimizi sürekli güncelliyoruz.",
    color: "pink",
  },
];

const colorClasses = {
  cyan: "text-neon-cyan bg-neon-cyan/20",
  magenta: "text-neon-magenta bg-neon-magenta/20",
  purple: "text-neon-purple bg-neon-purple/20",
  pink: "text-neon-pink bg-neon-pink/20",
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left - About content */}
          <ScrollAnimationWrapper animation="fade-right">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                Biz{" "}
                <span className="gradient-text">Kimiz?</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <span className="text-neon-cyan font-semibold">Tor Control</span>, Türkiye'nin önde gelen TikTok Live 
                  yayıncı ajansıdır. Yüzlerce içerik üreticisinin dijital kariyerlerini 
                  şekillendirmelerine yardımcı oluyoruz.
                </p>
                <p>
                  Deneyimli yönetici kadromuz, sektör bilgisi ve kişiselleştirilmiş stratejilerle 
                  yayıncılarımızın potansiyellerini maksimuma çıkarmalarını sağlıyoruz.
                </p>
                <p>
                  Sadece kazanç değil, sürdürülebilir bir kariyer inşa etmenize odaklanıyoruz. 
                  Marka işbirlikleri, içerik stratejisi ve kitle büyütme konularında profesyonel 
                  destek sunuyoruz.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center glass-card p-4 rounded-xl">
                  <p className="text-2xl font-display font-bold text-neon-cyan">500+</p>
                  <p className="text-sm text-muted-foreground">Aktif Yayıncı</p>
                </div>
                <div className="text-center glass-card p-4 rounded-xl">
                  <p className="text-2xl font-display font-bold text-neon-magenta">15+</p>
                  <p className="text-sm text-muted-foreground">Uzman Kadro</p>
                </div>
                <div className="text-center glass-card p-4 rounded-xl">
                  <p className="text-2xl font-display font-bold text-neon-purple">7/24</p>
                  <p className="text-sm text-muted-foreground">Destek</p>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Right - Values */}
          <div className="space-y-4">
            <ScrollAnimationWrapper animation="fade-left">
              <h3 className="text-xl font-display font-semibold mb-6 text-center lg:text-left">
                Değerlerimiz
              </h3>
            </ScrollAnimationWrapper>
            
            {values.map((value, index) => {
              const Icon = value.icon;
              const colors = colorClasses[value.color as keyof typeof colorClasses];
              
              return (
                <ScrollAnimationWrapper
                  key={index}
                  animation="fade-left"
                  delay={index * 100}
                >
                  <div className="glass-card p-5 rounded-2xl flex gap-4 group hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-neon-purple/30">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${colors} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-lg mb-1">{value.title}</h4>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
