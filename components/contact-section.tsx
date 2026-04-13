"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send, Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    alert(
      language === "ar"
        ? "شكراً لتواصلك معنا! سنرد عليك قريباً."
        : "Thank you for contacting us! We will respond soon."
    );
  };

  const whatsappNumber = "201000000000"; // Replace with actual number
  const whatsappMessage = encodeURIComponent(
    language === "ar"
      ? "مرحباً، أود الاستفسار عن خدماتكم التعليمية"
      : "Hello, I would like to inquire about your educational services"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t("تواصل معنا", "Contact Us")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {t(
                "هل لديك أي استفسار؟",
                "Do you have any questions?"
              )}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed text-pretty">
              {t(
                "نحن هنا لمساعدتك! تواصل معنا عبر أي من الطرق التالية وسنرد عليك في أقرب وقت ممكن.",
                "We are here to help! Contact us through any of the following methods and we will respond as soon as possible."
              )}
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("اتصل بنا", "Call Us")}
                  </p>
                  <p className="font-medium text-foreground" dir="ltr">
                    +20 100 000 0000
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("البريد الإلكتروني", "Email")}
                  </p>
                  <p className="font-medium text-foreground">
                    info@beahead.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("الموقع", "Location")}
                  </p>
                  <p className="font-medium text-foreground">
                    {t("مصر - أونلاين في كل مكان", "Egypt - Online Everywhere")}
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-medium hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-6 h-6" />
              {t("تواصل عبر واتساب", "Chat on WhatsApp")}
            </a>
          </div>

          {/* Right Side - Form */}
          <div className="bg-background rounded-3xl p-8 md:p-10 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t("أرسل لنا رسالة", "Send Us a Message")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("الاسم الكامل", "Full Name")}
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("أدخل اسمك الكامل", "Enter your full name")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-12 rounded-xl"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("البريد الإلكتروني", "Email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("أدخل بريدك الإلكتروني", "Enter your email")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("رقم الهاتف", "Phone Number")}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t("أدخل رقم هاتفك", "Enter your phone")}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12 rounded-xl"
                    dir="ltr"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  {t("الرسالة", "Message")}
                </label>
                <Textarea
                  id="message"
                  placeholder={t(
                    "اكتب رسالتك هنا...",
                    "Write your message here..."
                  )}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-xl text-lg"
              >
                {t("إرسال الرسالة", "Send Message")}
                <Send className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
