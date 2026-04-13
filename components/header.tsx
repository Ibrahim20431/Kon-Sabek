"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

const navItems = [
  { ar: "الرئيسية", en: "Home", href: "#hero" },
  { ar: "من نحن", en: "About", href: "#about" },
  { ar: "خدماتنا", en: "Services", href: "#services" },
  { ar: "مميزاتنا", en: "Features", href: "#features" },
  { ar: "قيمنا", en: "Values", href: "#values" },
  { ar: "آراء العملاء", en: "Testimonials", href: "#testimonials" },
  { ar: "تواصل معنا", en: "Contact", href: "#contact" },
];

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
              <Image
          src="/logo.png"
          alt="كن سابق"
          width={50}
          height={50}
        />
        <span className="text-xl font-bold">كن سابق</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {t(item.ar, item.en)}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "ar" ? "EN" : "عربي"}</span>
            </button>

            {/* CTA Button - Desktop */}
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              {t("احجز الآن", "Book Now")}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                >
                  {t(item.ar, item.en)}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t("احجز الآن", "Book Now")}
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
