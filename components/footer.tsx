"use client";

import { useLanguage } from "@/lib/language-context";
import { Heart } from "lucide-react";

const quickLinks = [
  { ar: "الرئيسية", en: "Home", href: "#hero" },
  { ar: "من نحن", en: "About", href: "#about" },
  { ar: "خدماتنا", en: "Services", href: "#services" },
  { ar: "تواصل معنا", en: "Contact", href: "#contact" },
];

const services = [
  { ar: "دروس خصوصية", en: "Private Tutoring", href: "#services" },
  { ar: "تعليم البرمجة", en: "Programming", href: "#services" },
  { ar: "العمل الحر", en: "Freelancing", href: "#services" },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-xl">ك</span>
              </div>
              <span className="font-bold text-xl">
                {t("كن سابق", "Be Ahead")}
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              {t(
                "منصة تعليمية رائدة تسعى لبناء جيل قادر على مواجهة تحديات المستقبل بثقة وكفاءة.",
                "A leading educational platform striving to build a generation capable of facing future challenges with confidence and competence."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">
              {t("روابط سريعة", "Quick Links")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {t(link.ar, link.en)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">
              {t("خدماتنا", "Our Services")}
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {t(service.ar, service.en)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">
              {t("تواصل معنا", "Contact Us")}
            </h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li dir="ltr" className="text-right rtl:text-right">
                +20 100 000 0000
              </li>
              <li>info@beahead.com</li>
              <li>
                {t("مصر - أونلاين في كل مكان", "Egypt - Online Everywhere")}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
              {t("جميع الحقوق محفوظة", "All Rights Reserved")} © {currentYear}{" "}
              {t("كن سابق", "Be Ahead")}
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
              {t("صنع بـ", "Made with")}{" "}
              <Heart className="w-4 h-4 text-accent fill-accent" />{" "}
              {t("في مصر", "in Egypt")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
