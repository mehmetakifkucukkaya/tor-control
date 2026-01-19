import { BarChart3, DollarSign, Target, HeadphonesIcon, Coins } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Real-time analytics and insights to monitor your streaming performance and growth metrics.",
    color: "cyan",
  },
  {
    icon: DollarSign,
    title: "Earnings Monitoring",
    description: "Track your income, view detailed breakdowns, and forecast your monthly earnings.",
    color: "magenta",
  },
  {
    icon: Target,
    title: "Goal & Mission System",
    description: "Set weekly targets, complete missions, and earn bonus rewards for achieving milestones.",
    color: "purple",
  },
  {
    icon: HeadphonesIcon,
    title: "Real-time Support",
    description: "24/7 dedicated manager support to help you optimize and grow your streaming career.",
    color: "pink",
  },
  {
    icon: Coins,
    title: "Jeton Optimization",
    description: "Maximize your virtual gift rewards with our strategic jeton support program.",
    color: "cyan",
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
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            What We{" "}
            <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to succeed as a TikTok Live streamer, all in one platform.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            const Icon = feature.icon;
            
            return (
              <div
                key={index}
                className={`group glass-card p-8 rounded-2xl border border-border/50 transition-all duration-500 hover:scale-[1.02] ${colors.border} ${colors.glow}`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
