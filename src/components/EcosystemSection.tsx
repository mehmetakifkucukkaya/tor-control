import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import ecosystemAcademy from "@/assets/ecosystem-academy.png";
import ecosystemTv from "@/assets/ecosystem-tv.png";
import ecosystemAgency from "@/assets/ecosystem-agency.png";
import ecosystemControl from "@/assets/ecosystem-control.png";

const ecosystemItems = [
  {
    image: ecosystemAgency,
    title: "Tor Media Agency",
    description: "Türkiye'nin en güçlü TikTok ajansı",
  },
  {
    image: ecosystemControl,
    title: "Tor Control",
    description: "Gelişmiş yayıncı kontrol paneli",
  },
  {
    image: ecosystemAcademy,
    title: "Tor Media Academy",
    description: "Yayıncıyı zirveye taşıyan eğitimler",
  },
  {
    image: ecosystemTv,
    title: "Tor Media TV",
    description: "TikTok & Shorts viral içerikler",
  },
];

const EcosystemSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollAnimationWrapper animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Tor Media</span> Ekosistemi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Yayıncılık kariyerini bir üst seviyeye taşımak için ihtiyacın olan her şey tek bir çatı altında.
            </p>
          </ScrollAnimationWrapper>

          {/* Ecosystem Card */}
          <ScrollAnimationWrapper animation="zoom-in" delay={200}>
            <div className="glass-card neon-border p-6 md:p-8 rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {ecosystemItems.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl aspect-square md:aspect-[3/4] cursor-pointer"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Overlay gradient - only on desktop */}
                    <div className="hidden md:block absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/90 to-transparent" />
                    
                    {/* Content - hidden on mobile, shown on desktop */}
                    <div className="hidden md:block absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-display font-bold text-lg text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                    
                    {/* Hover border effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-cyan/50 rounded-2xl transition-colors duration-300" />
                  </div>
                ))}
              </div>
              
              {/* Bottom text */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="text-neon-cyan font-semibold">Tor Media Agency</span> ile TikTok'ta zirveye birlikte çıkalım
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
