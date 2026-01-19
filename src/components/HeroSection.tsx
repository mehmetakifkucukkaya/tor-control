import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-cyan/15 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Grid overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--neon-purple) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--neon-purple) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-purple/30 opacity-0 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm text-muted-foreground">TikTok Live Agency</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight opacity-0 animate-fade-in-up animate-delay-100">
              Grow Faster on{" "}
              <span className="gradient-text">TikTok Live.</span>
              <br />
              Earn More with{" "}
              <span className="text-neon-cyan neon-text">Professional Support.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-up animate-delay-200">
              Join the leading TikTok Live agency and unlock your full earning potential. 
              Get expert guidance, performance tracking, and dedicated support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in-up animate-delay-300">
              <Button variant="neon" size="xl" className="group">
                Apply as a Streamer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="neon-outline" size="xl">
                Contact Agency
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 opacity-0 animate-fade-in-up animate-delay-400">
              {[
                { value: "500+", label: "Active Streamers" },
                { value: "$2M+", label: "Monthly Revenue" },
                { value: "95%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-display font-bold text-neon-cyan">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Dashboard mockup */}
          <div className="relative opacity-0 animate-fade-in-up animate-delay-300">
            <div className="relative float">
              {/* Main dashboard card */}
              <div className="glass-card neon-border p-6 rounded-3xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-semibold text-lg">Performance Dashboard</h3>
                      <p className="text-sm text-muted-foreground">January 2025</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-neon flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-foreground" />
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 rounded-xl">
                      <p className="text-xs text-muted-foreground mb-1">Monthly Hours</p>
                      <p className="text-2xl font-display font-bold text-neon-cyan">156h</p>
                      <p className="text-xs text-neon-magenta">+12% from last month</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <p className="text-xs text-muted-foreground mb-1">Est. Earnings</p>
                      <p className="text-2xl font-display font-bold text-neon-magenta">$4,250</p>
                      <p className="text-xs text-neon-cyan">+23% from last month</p>
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Weekly Goal</span>
                        <span className="text-neon-cyan">85%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Jeton Support</span>
                        <span className="text-neon-magenta">92%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-[92%] bg-gradient-to-r from-neon-magenta to-neon-pink rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Mini chart */}
                  <div className="h-24 flex items-end justify-between gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-neon-purple to-neon-cyan rounded-t opacity-80 hover:opacity-100 transition-opacity"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full border border-neon-cyan/50 glow-cyan">
                <span className="text-sm font-semibold text-neon-cyan">🔥 Top Performer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
