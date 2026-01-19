import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    tiktokUsername: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We'll contact you soon.");
    setFormData({ name: "", tiktokUsername: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="apply" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card neon-border p-8 md:p-12 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-cyan/30">
                  <Sparkles className="w-4 h-4 text-neon-cyan" />
                  <span className="text-sm">Start Your Journey</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Ready to{" "}
                  <span className="gradient-text">Level Up</span>{" "}
                  Your TikTok Live Career?
                </h2>

                <p className="text-muted-foreground">
                  Join our agency and unlock your full potential as a TikTok Live streamer. 
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                      <span className="text-neon-cyan text-sm">✓</span>
                    </div>
                    <span className="text-sm">No upfront fees required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon-magenta/20 flex items-center justify-center">
                      <span className="text-neon-magenta text-sm">✓</span>
                    </div>
                    <span className="text-sm">24-hour response time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center">
                      <span className="text-neon-purple text-sm">✓</span>
                    </div>
                    <span className="text-sm">Personal onboarding support</span>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border/50 focus:border-neon-purple h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="tiktokUsername"
                      placeholder="TikTok Username"
                      value={formData.tiktokUsername}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border/50 focus:border-neon-purple h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border/50 focus:border-neon-purple h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border/50 focus:border-neon-purple h-12 rounded-xl"
                    />
                  </div>
                </div>

                <Textarea
                  name="message"
                  placeholder="Tell us about your streaming experience..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-muted/50 border-border/50 focus:border-neon-purple rounded-xl resize-none"
                />

                <Button type="submit" variant="neon" size="xl" className="w-full group">
                  Submit Application
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
