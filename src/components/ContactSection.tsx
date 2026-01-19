import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import patternBg from "@/assets/pattern-bg.jpg";

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
    toast.success("Başvurunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.");
    setFormData({ name: "", tiktokUsername: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="apply" className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${patternBg})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/15 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card neon-border p-6 md:p-8 lg:p-12 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-cyan/30">
                  <Sparkles className="w-4 h-4 text-neon-cyan" />
                  <span className="text-sm">Yolculuğuna Başla</span>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold">
                  TikTok Live Kariyerini{" "}
                  <span className="gradient-text">Bir Üst Seviyeye</span>{" "}
                  Taşımaya Hazır Mısın?
                </h2>

                <p className="text-muted-foreground">
                  Ajansımıza katılın ve TikTok Live yayıncısı olarak tam potansiyelinizi açığa çıkarın. 
                  Formu doldurun, ekibimiz 24 saat içinde size ulaşacak.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                      <span className="text-neon-cyan text-sm">✓</span>
                    </div>
                    <span className="text-sm">Ön ödeme gerektirmez</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon-magenta/20 flex items-center justify-center">
                      <span className="text-neon-magenta text-sm">✓</span>
                    </div>
                    <span className="text-sm">24 saat içinde yanıt</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center">
                      <span className="text-neon-purple text-sm">✓</span>
                    </div>
                    <span className="text-sm">Kişisel katılım desteği</span>
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
                      placeholder="Adınız Soyadınız"
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
                      placeholder="TikTok Kullanıcı Adı"
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
                      placeholder="Telefon Numarası"
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
                      placeholder="E-posta Adresi"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-muted/50 border-border/50 focus:border-neon-purple h-12 rounded-xl"
                    />
                  </div>
                </div>

                <Textarea
                  name="message"
                  placeholder="Yayın deneyiminiz hakkında bilgi verin..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-muted/50 border-border/50 focus:border-neon-purple rounded-xl resize-none"
                />

                <Button type="submit" variant="neon" size="xl" className="w-full group">
                  Başvuru Gönder
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
