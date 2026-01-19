import { ClipboardCheck, ShieldCheck, Users, Target, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Apply",
    description: "Fill out our simple application form with your TikTok details.",
    color: "cyan",
  },
  {
    icon: ShieldCheck,
    title: "Verification",
    description: "Our team reviews your profile and streaming history.",
    color: "purple",
  },
  {
    icon: Users,
    title: "Meet Your Manager",
    description: "Get assigned a dedicated support manager for personalized guidance.",
    color: "magenta",
  },
  {
    icon: Target,
    title: "Set Goals",
    description: "Work with your manager to create achievable weekly targets.",
    color: "pink",
  },
  {
    icon: Rocket,
    title: "Start Earning More",
    description: "Launch your optimized streaming career and watch your earnings grow.",
    color: "cyan",
  },
];

const colorClasses = {
  cyan: "from-neon-cyan to-neon-cyan/50 text-neon-cyan",
  purple: "from-neon-purple to-neon-purple/50 text-neon-purple",
  magenta: "from-neon-magenta to-neon-magenta/50 text-neon-magenta",
  pink: "from-neon-pink to-neon-pink/50 text-neon-pink",
};

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            How It{" "}
            <span className="text-neon-magenta neon-text">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started is easy. Follow these simple steps to join our community of successful streamers.
          </p>
        </div>

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
                  <div key={index} className="relative group">
                    {/* Step card */}
                    <div className="glass-card p-6 rounded-2xl text-center transition-all duration-500 hover:scale-105 hover:glow-purple border border-border/50 hover:border-neon-purple/50">
                      {/* Step number */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-magenta flex items-center justify-center text-sm font-bold z-10">
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${gradient} bg-opacity-20 flex items-center justify-center mt-4`}>
                        <Icon className="w-8 h-8" />
                      </div>

                      {/* Content */}
                      <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>

                    {/* Arrow connector (mobile/tablet) */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center my-4">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-neon-purple to-neon-magenta opacity-50" />
                      </div>
                    )}
                  </div>
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
