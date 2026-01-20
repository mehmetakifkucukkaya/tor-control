import { Star, Quote } from "lucide-react";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const testimonials = [
  {
    name: "Elif Arslan",
    role: "E-ticaret Marka Sahibi",
    avatar: "EA",
    content: "Tormedya ile çalışmaya başladıktan sonra TikTok satışlarımız %340 arttı. İçerik stratejileri gerçekten işe yarıyor!",
    rating: 5,
  },
  {
    name: "Burak Özdemir",
    role: "Startup Kurucusu",
    avatar: "BO",
    content: "Influencer kampanyalarımızı profesyonelce yönettiler. 2 ayda hedef kitlemizi 5 kat büyüttük.",
    rating: 5,
  },
  {
    name: "Selin Yıldız",
    role: "Kozmetik Markası CEO'su",
    avatar: "SY",
    content: "Sosyal medya yönetimi ve reklam stratejileri konusunda aldığımız destek paha biçilemez. Kesinlikle tavsiye ederim!",
    rating: 5,
  },
];

const stats = [
  { value: "150+", label: "Başarılı Proje", suffix: "" },
  { value: "80+", label: "Mutlu Müşteri", suffix: "" },
  { value: "50M+", label: "Toplam Erişim", suffix: "" },
  { value: "200+", label: "Influencer Ağı", suffix: "" },
];

const SocialProofSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <ScrollAnimationWrapper animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Müşterilerimiz{" "}
            <span className="gradient-text">Ne Diyor?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Birlikte çalıştığımız markaların deneyimlerini ve başarı hikayelerini keşfedin.
          </p>
        </ScrollAnimationWrapper>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <ScrollAnimationWrapper
              key={index}
              animation="zoom-in"
              delay={index * 100}
            >
              <div
                className="glass-card neon-border p-4 md:p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
              >
                <p className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-neon-cyan mb-2">
                  {stat.value}<span className="text-neon-magenta">{stat.suffix}</span>
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimationWrapper
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <div
                className="glass-card p-6 md:p-8 rounded-2xl border border-border/50 hover:border-neon-purple/30 transition-all duration-300 hover:glow-purple group h-full"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-neon-purple/30 mb-4 group-hover:text-neon-purple/50 transition-colors" />

                {/* Content */}
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-neon-cyan text-neon-cyan" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-magenta flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-display font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
