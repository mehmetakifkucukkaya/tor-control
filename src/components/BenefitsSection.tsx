import { Check } from "lucide-react";
import benefitsBg from "@/assets/benefits-bg.jpg";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const benefits = [
  {
    title: "Resmi TikTok Ajansı",
    description: "TikTok tarafından onaylı resmi ajans statüsü ile güvenle çalışabilirsiniz.",
  },
  {
    title: "Ekipman Desteği",
    description: "Gaming chair, ring light, mikrofon ve profesyonel yayın setleri sağlıyoruz.",
  },
  {
    title: "Jeton ve Prim Bonusları",
    description: "Performansa göre jeton desteği ve prim ödemeleri ile kazancını artır.",
  },
  {
    title: "Kişisel Strateji Danışmanı",
    description: "Her yayıncıya özel büyüme stratejileri ve birebir yönlendirme.",
  },
  {
    title: "Günlük Birebir Destek",
    description: "Her gün iletişim halinde olduğumuz ajans desteği ve profesyonel rehberlik.",
  },
  {
    title: "Topluluk Avantajı",
    description: "500+ yayıncı ağımızın gücünden faydalan, networking ve işbirliği fırsatları yakala.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${benefitsBg})` }}
      />
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background" />

      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <ScrollAnimationWrapper animation="fade-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Neden <span className="gradient-text">Tor Media Agency?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              TikTok resmi LIVE ajansı olarak, yayıncılarımızın başarısını ön planda tutuyoruz. Ekipman desteği, jeton
              bonusları ve profesyonel eğitim ile fark yaratıyoruz.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <ScrollAnimationWrapper animation="zoom-in" delay={200}>
                <div className="glass-card p-4 md:p-6 rounded-2xl text-center group hover:glow-purple transition-all duration-300">
                  <p className="text-2xl md:text-3xl font-display font-bold text-neon-purple mb-2">3x</p>
                  <p className="text-sm text-muted-foreground">Ortalama Gelir Artışı</p>
                </div>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper animation="zoom-in" delay={300}>
                <div className="glass-card p-4 md:p-6 rounded-2xl text-center group hover:glow-cyan transition-all duration-300">
                  <p className="text-2xl md:text-3xl font-display font-bold text-neon-cyan mb-2">7/24</p>
                  <p className="text-sm text-muted-foreground">Ajans Desteği</p>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </ScrollAnimationWrapper>

          {/* Right - Benefits list */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <ScrollAnimationWrapper key={index} animation="fade-left" delay={index * 100}>
                <div className="glass-card p-4 md:p-6 rounded-2xl flex gap-4 group hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-neon-cyan/30">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Check className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
