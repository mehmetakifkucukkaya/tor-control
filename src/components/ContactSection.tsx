import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import patternBg from "@/assets/pattern-bg.jpg";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.");
    setFormData({ name: "", company: "", phone: "", email: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        <div className="max-w-5xl mx-auto">
          <ScrollAnimationWrapper animation="zoom-in">
            <div className="glass-card neon-border p-6 md:p-8 lg:p-12 rounded-3xl">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left content */}
                <ScrollAnimationWrapper animation="fade-right" delay={200}>
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-neon-cyan/30">
                      <Sparkles className="w-4 h-4 text-neon-cyan" />
                      <span className="text-sm">Bizimle İletişime Geçin</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold">
                      Markanızı{" "}
                      <span className="gradient-text">Dijital Dünyada</span>{" "}
                      Parlatmaya Hazır Mısınız?
                    </h2>

                    <p className="text-muted-foreground">
                      Projeleriniz hakkında konuşmak için formu doldurun veya 
                      doğrudan bizimle iletişime geçin. Ekibimiz 24 saat içinde size dönüş yapacak.
                    </p>

                    {/* Contact info */}
                    <div className="space-y-4 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-neon-cyan" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">E-posta</p>
                          <p className="font-medium">info@tormedya.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-neon-magenta/20 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-neon-magenta" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Telefon</p>
                          <p className="font-medium">+90 (xxx) xxx xx xx</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-neon-purple" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Adres</p>
                          <p className="font-medium">İstanbul, Türkiye</p>
                        </div>
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="flex gap-3 pt-4">
                      <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform border border-border/50 hover:border-neon-cyan/50">
                        <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform border border-border/50 hover:border-neon-magenta/50">
                        <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform border border-border/50 hover:border-neon-purple/50">
                        <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </ScrollAnimationWrapper>

                {/* Right - Form */}
                <ScrollAnimationWrapper animation="fade-left" delay={300}>
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
                          name="company"
                          placeholder="Şirket / Marka Adı"
                          value={formData.company}
                          onChange={handleChange}
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

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-muted/50 border border-border/50 focus:border-neon-purple h-12 rounded-xl px-4 text-foreground"
                    >
                      <option value="" className="bg-background">İlgilendiğiniz Hizmet</option>
                      <option value="tiktok" className="bg-background">TikTok İçerik Üretimi</option>
                      <option value="influencer" className="bg-background">Influencer Marketing</option>
                      <option value="social" className="bg-background">Sosyal Medya Yönetimi</option>
                      <option value="ads" className="bg-background">Reklam Yönetimi</option>
                      <option value="seo" className="bg-background">SEO & Web Tasarım</option>
                      <option value="branding" className="bg-background">Branding & Strateji</option>
                    </select>

                    <Textarea
                      name="message"
                      placeholder="Projeniz hakkında bilgi verin..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-muted/50 border-border/50 focus:border-neon-purple rounded-xl resize-none"
                    />

                    <Button type="submit" variant="neon" size="xl" className="w-full group">
                      Teklif Al
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
