import { Check } from "lucide-react";
import benefitsBg from "@/assets/benefits-bg.jpg";

const benefits = [
  {
    title: "Daha Yüksek Aylık Kazanç",
    description: "Optimize edilmiş yayın stratejilerimiz ve jeton destek programlarımızla gelirinizi maksimuma çıkarın.",
  },
  {
    title: "Haftalık Hedef Desteği",
    description: "Kişiselleştirilmiş haftalık hedefler ve doğru yolda kalmanıza yardımcı olmak için özel destek.",
  },
  {
    title: "Detaylı Performans Raporları",
    description: "Performansınızı anlamanız ve geliştirmeniz için kapsamlı analitik ve içgörüler.",
  },
  {
    title: "Özel Eğitim Programı",
    description: "En iyi performans gösteren yayıncılardan premium eğitim içeriklerine ve stratejilere erişim.",
  },
  {
    title: "Kişiye Özel Destek Yöneticisi",
    description: "Yayın yolculuğunuzun her adımında size rehberlik edecek 7/24 kişisel yönetici.",
  },
  {
    title: "Yapılandırılmış Büyüme Programı",
    description: "Yayın kariyerinizi hızlandırmak için tasarlanmış net yol haritası ve kilometre taşları.",
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
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Neden{" "}
              <span className="gradient-text">Ajansımıza Katılmalısınız?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              TikTok Live yayıncılığınızı başarılı bir kariyere dönüştürmeniz için ihtiyacınız olan her şeyi sağlıyoruz. 
              Bizimle birlikte büyümelerini hızlandıran yüzlerce yayıncıya katılın.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="glass-card p-4 md:p-6 rounded-2xl text-center group hover:glow-purple transition-all duration-300">
                <p className="text-2xl md:text-3xl font-display font-bold text-neon-purple mb-2">3x</p>
                <p className="text-sm text-muted-foreground">Ortalama Gelir Artışı</p>
              </div>
              <div className="glass-card p-4 md:p-6 rounded-2xl text-center group hover:glow-cyan transition-all duration-300">
                <p className="text-2xl md:text-3xl font-display font-bold text-neon-cyan mb-2">48s</p>
                <p className="text-sm text-muted-foreground">Ort. Yanıt Süresi</p>
              </div>
            </div>
          </div>

          {/* Right - Benefits list */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card p-4 md:p-6 rounded-2xl flex gap-4 group hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-neon-cyan/30"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
