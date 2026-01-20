import { Play, ExternalLink, TrendingUp, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const portfolioItems = [
  {
    title: "Viral TikTok Kampanyası",
    brand: "Moda Markası",
    category: "TikTok İçerik",
    stats: { views: "2.5M", likes: "180K", growth: "+340%" },
    color: "cyan",
  },
  {
    title: "Influencer İş Birliği",
    brand: "Kozmetik Firması",
    category: "Influencer Marketing",
    stats: { views: "4.2M", likes: "320K", growth: "+520%" },
    color: "magenta",
  },
  {
    title: "Sosyal Medya Yönetimi",
    brand: "E-ticaret Sitesi",
    category: "Sosyal Medya",
    stats: { views: "1.8M", likes: "95K", growth: "+280%" },
    color: "purple",
  },
  {
    title: "TikTok Ads Kampanyası",
    brand: "Teknoloji Markası",
    category: "Reklam Yönetimi",
    stats: { views: "3.1M", likes: "210K", growth: "+410%" },
    color: "pink",
  },
  {
    title: "Challenge Kampanyası",
    brand: "Yiyecek/İçecek",
    category: "TikTok İçerik",
    stats: { views: "5.7M", likes: "420K", growth: "+680%" },
    color: "cyan",
  },
  {
    title: "Marka Bilinirliği",
    brand: "Startup Projesi",
    category: "Branding",
    stats: { views: "1.2M", likes: "78K", growth: "+190%" },
    color: "magenta",
  },
];

const colorClasses = {
  cyan: {
    bg: "bg-gradient-to-br from-neon-cyan/20 to-neon-cyan/5",
    border: "border-neon-cyan/30 hover:border-neon-cyan/60",
    accent: "text-neon-cyan",
    badge: "bg-neon-cyan/20 text-neon-cyan",
  },
  magenta: {
    bg: "bg-gradient-to-br from-neon-magenta/20 to-neon-magenta/5",
    border: "border-neon-magenta/30 hover:border-neon-magenta/60",
    accent: "text-neon-magenta",
    badge: "bg-neon-magenta/20 text-neon-magenta",
  },
  purple: {
    bg: "bg-gradient-to-br from-neon-purple/20 to-neon-purple/5",
    border: "border-neon-purple/30 hover:border-neon-purple/60",
    accent: "text-neon-purple",
    badge: "bg-neon-purple/20 text-neon-purple",
  },
  pink: {
    bg: "bg-gradient-to-br from-neon-pink/20 to-neon-pink/5",
    border: "border-neon-pink/30 hover:border-neon-pink/60",
    accent: "text-neon-pink",
    badge: "bg-neon-pink/20 text-neon-pink",
  },
};

const PortfolioSection = () => {
  const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <ScrollAnimationWrapper animation="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Başarılı{" "}
            <span className="gradient-text">Projelerimiz</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Markalarla gerçekleştirdiğimiz başarılı kampanyalar ve elde ettiğimiz 
            sonuçlardan bazı örnekler.
          </p>
        </ScrollAnimationWrapper>

        {/* Portfolio grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => {
            const colors = colorClasses[item.color as keyof typeof colorClasses];
            
            return (
              <ScrollAnimationWrapper
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div
                  className={`group glass-card rounded-2xl border transition-all duration-500 hover:scale-[1.02] overflow-hidden ${colors.border}`}
                >
                  {/* Card header with gradient */}
                  <div className={`${colors.bg} p-6 relative`}>
                    <div className="absolute inset-0 bg-grid-white/5" />
                    <div className="relative">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colors.badge} mb-3`}>
                        {item.category}
                      </span>
                      <h3 className="text-xl font-display font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.brand}</p>
                    </div>
                    
                    {/* Play button overlay */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                      <Play className={`w-4 h-4 ${colors.accent}`} />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="p-6 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Eye className={`w-3 h-3 ${colors.accent}`} />
                        <span className="text-sm font-semibold">{item.stats.views}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Görüntüleme</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Heart className={`w-3 h-3 ${colors.accent}`} />
                        <span className="text-sm font-semibold">{item.stats.likes}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Beğeni</span>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp className={`w-3 h-3 ${colors.accent}`} />
                        <span className="text-sm font-semibold">{item.stats.growth}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Büyüme</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollAnimationWrapper animation="fade-up" delay={600} className="text-center mt-12">
          <Button variant="neon" size="lg" className="group" onClick={scrollToApply}>
            Projenizi Başlatalım
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default PortfolioSection;
