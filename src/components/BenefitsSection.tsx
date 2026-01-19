import { Check } from "lucide-react";

const benefits = [
  {
    title: "Higher Monthly Earnings",
    description: "Maximize your income with our optimized streaming strategies and jeton support programs.",
  },
  {
    title: "Weekly Goal Assistance",
    description: "Personalized weekly targets and dedicated support to help you stay on track.",
  },
  {
    title: "Detailed Performance Reports",
    description: "Comprehensive analytics and insights to understand and improve your performance.",
  },
  {
    title: "Exclusive Training Program",
    description: "Access to premium training content and strategies from top-performing streamers.",
  },
  {
    title: "Dedicated Support Manager",
    description: "24/7 personal manager to guide you through every step of your streaming journey.",
  },
  {
    title: "Structured Growth Program",
    description: "Clear roadmap and milestones designed to accelerate your streaming career.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Why Join{" "}
              <span className="gradient-text">Our Agency?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We provide everything you need to transform your TikTok Live streaming into a successful career. 
              Join hundreds of streamers who have already accelerated their growth with us.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl text-center group hover:glow-purple transition-all duration-300">
                <p className="text-3xl font-display font-bold text-neon-purple mb-2">3x</p>
                <p className="text-sm text-muted-foreground">Average Income Growth</p>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center group hover:glow-cyan transition-all duration-300">
                <p className="text-3xl font-display font-bold text-neon-cyan mb-2">48h</p>
                <p className="text-sm text-muted-foreground">Avg. Response Time</p>
              </div>
            </div>
          </div>

          {/* Right - Benefits list */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl flex gap-4 group hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-neon-cyan/30"
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
