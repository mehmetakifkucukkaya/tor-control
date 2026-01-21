import { UserPlus, MousePointer, FileText, Search, Mail } from "lucide-react";
import timelineBg from "@/assets/timeline-bg.jpg";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const steps = [
  {
    icon: UserPlus,
    title: "Profil Gir",
    description: "Tor Control profiline gir.",
    color: "cyan",
  },
  {
    icon: MousePointer,
    title: "Başvur Tıkla",
    description: "'Başvur' butonuna tıkla.",
    color: "purple",
  },
  {
    icon: FileText,
    title: "Bilgi Doldur",
    description: "Bilgilerini eksiksiz doldur.",
    color: "magenta",
  },
  {
    icon: Search,
    title: "Değerlendirme",
    description: "Başvurunu inceliyoruz.",
    color: "pink",
  },
  {
    icon: Mail,
    title: "Davet Al",
    description: "Uygun görülürsen davet alırsın.",
    color: "cyan",
  },
];

const colorClasses = {
  cyan: "from-neon-cyan/20 to-neon-cyan/5 text-neon-cyan border-neon-cyan/30",
  purple: "from-neon-purple/20 to-neon-purple/5 text-neon-purple border-neon-purple/30",
  magenta: "from-neon-magenta/20 to-neon-magenta/5 text-neon-magenta border-neon-magenta/30",
  pink: "from-neon-pink/20 to-neon-pink/5 text-neon-pink border-neon-pink/30",
};

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${timelineBg})` }}
      />
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <ScrollAnimationWrapper animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Nasıl <span className="text-neon-magenta neon-text">Başvurursun?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tor Media Agency ailesine katılmak çok kolay. Bu basit adımları takip et ve yayın kariyerini güçlendir.
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">
            "Birlikte uyumlu çalışabileceğimiz yayıncıları seçiyoruz."
          </p>
        </ScrollAnimationWrapper>

        {/* Steps timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta opacity-30" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const gradient = colorClasses[step.color as keyof typeof colorClasses];

                return (
                  <ScrollAnimationWrapper key={index} animation="zoom-in" delay={index * 150}>
                    <div className="relative group h-full">
                      {/* Step card */}
                      <div className="relative glass-card p-6 pt-10 rounded-3xl text-center transition-all duration-500 hover:scale-105 border border-border/30 hover:border-neon-purple/50 backdrop-blur-xl overflow-hidden h-full min-h-[220px] flex flex-col">
                        {/* Gradient background glow */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                        />

                        {/* Step number badge */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-magenta rounded-full blur-md opacity-50" />
                            <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-magenta flex items-center justify-center text-sm font-bold shadow-lg border border-white/20">
                              {index + 1}
                            </div>
                          </div>
                        </div>

                        {/* Icon container with modern styling */}
                        <div
                          className={`relative w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mt-4 border group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}
                        >
                          <div className="absolute inset-1 rounded-xl bg-background/80 flex items-center justify-center">
                            <Icon className="w-7 h-7" />
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="font-display font-semibold text-base mb-2 relative z-10">{step.title}</h3>
                        <p className="text-sm text-muted-foreground relative z-10 flex-grow">{step.description}</p>
                      </div>

                      {/* Arrow connector (mobile/tablet) */}
                      {index < steps.length - 1 && (
                        <div className="lg:hidden flex justify-center my-4">
                          <div className="w-0.5 h-8 bg-gradient-to-b from-neon-purple to-neon-magenta opacity-50" />
                        </div>
                      )}
                    </div>
                  </ScrollAnimationWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
