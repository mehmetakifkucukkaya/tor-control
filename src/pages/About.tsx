import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import { Users, Headphones, Monitor, TrendingUp, Heart, Shield, Target } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Headphones,
      title: "Eğitim Desteği",
      description: "Canlı yayın öncesi, yayın anı ve yayın sonrası eğitim desteği",
    },
    {
      icon: Monitor,
      title: "Ekipman Destekleri",
      description: "Yayın kalitesini artırmaya yönelik ekipman destekleri",
    },
    {
      icon: Users,
      title: "Birebir Rehberlik",
      description: "Gelişimi hızlandıran birebir rehberlik ve danışmanlık",
    },
    {
      icon: TrendingUp,
      title: "Büyüme Planları",
      description: "Uzun vadeli kazanç ve istikrar odaklı büyüme planları",
    },
  ];

  const values = [
    { icon: Heart, title: "Samimiyet", color: "text-rose-400" },
    { icon: Shield, title: "Güvenilirlik", color: "text-neon-cyan" },
    { icon: Target, title: "Şeffaflık", color: "text-yellow-400" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-28 md:pt-36">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/10 via-background to-background" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-neon-magenta/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px]" />
          
          <div className="container px-4 relative z-10">
            <ScrollAnimationWrapper animation="fade-up">
              <div className="text-center max-w-4xl mx-auto">
                <span className="inline-block px-4 py-2 rounded-full bg-neon-magenta/20 text-neon-magenta text-sm font-semibold mb-6">
                  Hakkımızda
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="gradient-text">Tor Media Agency</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Dijital yayıncılığın hızla büyüyen dünyasında yayıncıları desteklemek, 
                  geliştirmek ve sürdürülebilir başarıya ulaştırmak amacıyla kurulmuş 
                  bir canlı yayın ajansıdır.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-20">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimationWrapper animation="fade-right">
                <div className="glass-card neon-border p-8 md:p-10 rounded-3xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Misyonumuz
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Biz, yalnızca yayın açmayı değil; <span className="text-foreground font-medium">doğru yayın yapmayı</span>, 
                    <span className="text-foreground font-medium"> istikrarlı büyümeyi</span> ve 
                    <span className="text-foreground font-medium"> güçlü bir yayıncı kimliği oluşturmayı</span> hedefliyoruz.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Tor Media Agency olarak her yayıncıyı bir ekip arkadaşı olarak görür, 
                    yolculuğun her aşamasında yanında oluruz.
                  </p>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper animation="fade-left" delay={200}>
                <div className="space-y-4">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-neon-cyan" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-muted/20">
          <div className="container px-4">
            <ScrollAnimationWrapper animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Değerlerimiz
                </h2>
                <p className="text-muted-foreground">
                  Deneyimli veya yeni başlayan fark etmeksizin, yayıncılığa adım atan herkes için 
                  şeffaf, güvenilir ve samimi bir yapı kuruyoruz.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="zoom-in" delay={200}>
              <div className="flex flex-wrap justify-center gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="glass-card p-6 rounded-2xl text-center min-w-[140px] hover:scale-105 transition-transform"
                    >
                      <Icon className={`w-10 h-10 mx-auto mb-3 ${value.color}`} />
                      <h3 className="font-semibold">{value.title}</h3>
                    </div>
                  );
                })}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <ScrollAnimationWrapper animation="fade-up">
              <div className="max-w-4xl mx-auto text-center">
                <div className="glass-card neon-border p-8 md:p-12 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple" />
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Vizyonumuz
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Amacımız kısa vadeli kazançlar değil; yayıncılarımızla birlikte 
                    <span className="text-foreground font-medium"> uzun soluklu başarı hikâyeleri</span> yazmak.
                  </p>
                  <p className="text-lg md:text-xl font-medium text-foreground mb-8">
                    Tor Media Agency, yayıncıların yalnız olmadığı bir ekosistem oluşturur.
                  </p>
                  
                  <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 border border-neon-cyan/30">
                    <p className="text-lg font-semibold gradient-text">
                      "Yayın açarsınız, biz arkanızda dururuz."
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
