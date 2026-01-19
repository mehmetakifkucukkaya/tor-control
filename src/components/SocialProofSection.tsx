import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "TikTok Creator",
    avatar: "SC",
    content: "Joining this agency was the best decision for my streaming career. My earnings tripled in just 3 months!",
    rating: 5,
  },
  {
    name: "Mike Rodriguez",
    role: "Live Streamer",
    avatar: "MR",
    content: "The support team is incredible. They helped me optimize my content and grow my audience exponentially.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Content Creator",
    avatar: "EW",
    content: "Professional, supportive, and results-driven. I've never felt more confident about my streaming future.",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Active Streamers", suffix: "" },
  { value: "$2M", label: "Monthly Revenue", suffix: "+" },
  { value: "150%", label: "Avg. Growth Rate", suffix: "" },
  { value: "98%", label: "Satisfaction Rate", suffix: "" },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Trusted by{" "}
            <span className="gradient-text">Top Streamers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the community of successful creators who have transformed their streaming careers with us.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card neon-border p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-neon-cyan mb-2">
                {stat.value}<span className="text-neon-magenta">{stat.suffix}</span>
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl border border-border/50 hover:border-neon-purple/30 transition-all duration-300 hover:glow-purple group"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
