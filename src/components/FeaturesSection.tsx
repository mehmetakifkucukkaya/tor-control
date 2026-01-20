import { Gamepad2, Coins, GraduationCap, Monitor, Users, Headphones } from "lucide-react";
import featuresBg from "@/assets/features-bg.jpg";
import tiktokFeatures from "@/assets/tiktok-features.png";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const features = [
  {
    icon: Gamepad2,
    title: "Ekipman Destekleri",
    description: "Gaming chair, ring light, mikrofon ve profesyonel yayın set-up'ı ile donatıyoruz.",
    color: "cyan",
  },
  {
    icon: Coins,
    title: "Jeton ve Hediye Bonusları",
    description: "Kotalara göre jeton desteği, hediye bonusları ve performansa göre primler sunuyoruz.",
    color: "magenta",
  },
  {
    icon: GraduationCap,
    title: "Eğitim ve Strateji",
    description: "CANLI yayın eğitimleri, büyüme stratejileri ve yayıncıya özel yönlendirme.",
    color: "purple",
  },
  {
    icon: Monitor,
    title: "Profesyonel Yayın Desteği",
    description: "Teknik destek, yayın optimizasyonu ve içerik danışmanlığı hizmetleri.",
    color: "pink",
  },
  {
    icon: Users,
    title: "Topluluk ve Aidiyet",
    description: "Tor Control ailesi ile moral desteği ve güçlü bir topluluk deneyimi.",
    color: "cyan",
  },
  {
    icon: Headphones,
    title: "Günlük Birebir Destek",
    description: "Günlük birebir ajans desteği, sürekli takip ve profesyonel yönlendirme.",
    color: "magenta",
  },
];

const colorClasses = {
  cyan: {
    icon: "text-neon-cyan",
    glow: "group-hover:glow-cyan",
    border: "group-hover:border-neon-cyan/50",
  },
  magenta: {
    icon: "text-neon-magenta",
    glow: "group-hover:glow-magenta",
    border: "group-hover:border-neon-magenta/50",
  },
  purple: {
    icon: "text-neon-purple",
    glow: "group-hover:glow-purple",
    border: "group-hover:border-neon-purple/50",
  },
  pink: {
    icon: "text-neon-pink",
    glow: "group-hover:glow-magenta",
    border: "group-hover:border-neon-pink/50",
  },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${featuresBg})` }}
      />
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section header with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          {/* Left - TikTok image */}
          <ScrollAnimationWrapper animation="fade-right" className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-magenta/20 blur-3xl scale-110" />
              <img 
                src={tiktokFeatures} 
                alt="TikTok LIVE Yayıncı Destekleri" 
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-[0_0_30px_rgba(0,228,255,0.3)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </ScrollAnimationWrapper>
          
          {/* Right - Text content */}
          <ScrollAnimationWrapper animation="fade-left" className="text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Sağladığımız{" "}
              <span className="gradient-text">Destekler</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              TikTok LIVE yayıncılarına kapsamlı destek sunuyoruz. Ekipmandan eğitime, 
              jeton bonusundan topluluk desteğine kadar her alanda yanındayız.
            </p>
          </ScrollAnimationWrapper>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            const Icon = feature.icon;
            
            return (
              <ScrollAnimationWrapper
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div
                  className={`group glass-card p-8 rounded-2xl border border-border/50 transition-all duration-500 hover:scale-[1.02] h-full ${colors.border} ${colors.glow}`}
                >
                  <div className={`w-14 h-14 rounded-xl bg-muted/50 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}>
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollAnimationWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
