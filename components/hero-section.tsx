"use client";

import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BookOpen, Code, Briefcase } from "lucide-react";

export function HeroSection() {
  const { language, t } = useLanguage();
  const ArrowIcon = language === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            {t("منصة تعليمية متميزة", "A Distinguished Educational Platform")}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance">
            {t("كن سابق...", "Be Ahead...")}
            <br />
            <span className="text-primary">
              {t("وابدأ مستقبلك من الآن", "Start Your Future Now")}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            {t(
              "نؤمن بأن التعليم الجيد هو مفتاح النجاح. نقدم لك دروساً خصوصية متميزة، تعليم البرمجة، ومهارات العمل الحر لبناء مستقبلك المشرق.",
              "We believe that quality education is the key to success. We offer you distinguished private lessons, programming education, and freelancing skills to build your bright future."
            )}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group"
            >
              {t("احجز الآن", "Book Now")}
              <ArrowIcon className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              {t("تعرف علينا", "Learn More")}
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card shadow-sm border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">
                {t("دروس خصوصية", "Private Lessons")}
              </span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card shadow-sm border border-border">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Code className="w-5 h-5 text-accent" />
              </div>
              <span className="font-medium text-foreground">
                {t("تعليم البرمجة", "Learn Programming")}
              </span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card shadow-sm border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">
                {t("مهارات العمل الحر", "Freelancing Skills")}
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-muted-foreground">
            {t("اكتشف المزيد", "Discover More")}
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
