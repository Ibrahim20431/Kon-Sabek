"use client";

import { useLanguage } from "@/lib/language-context";
import { Users, Video, RefreshCw, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    ar: {
      title: "مجموعات صغيرة",
      desc: "لا تتجاوز المجموعة 20 طلاب لضمان التركيز والاهتمام الفردي بكل طالب",
    },
    en: {
      title: "Small Groups",
      desc: "Groups do not exceed 20 students to ensure focus and individual attention for each student",
    },
    stat: { ar: "15", en: "15" },
    statLabel: { ar: "طلاب بالمجموعة", en: "students per group" },
  },
  {
    icon: Video,
    ar: {
      title: "حصص تفاعلية",
      desc: "حصص أونلاين تفاعلية باستخدام أحدث التقنيات والأدوات التعليمية",
    },
    en: {
      title: "Interactive Sessions",
      desc: "Interactive online sessions using the latest technologies and educational tools",
    },
    stat: { ar: "٢+", en: "2+" },
    statLabel: { ar: "ساعة لكل حصة", en: "hours per session" },
  },
  {
    icon: RefreshCw,
    ar: {
      title: "متابعة مستمرة",
      desc: "متابعة دورية لمستوى الطالب وتقديم تقارير للأهالي عن التقدم",
    },
    en: {
      title: "Continuous Follow-up",
      desc: "Regular follow-up on student progress and providing reports to parents",
    },
    stat: { ar: "٢٤/٧", en: "24/7" },
    statLabel: { ar: "دعم متواصل", en: "continuous support" },
  },
  {
    icon: Award,
    ar: {
      title: "أفضل المعلمين",
      desc: "معلمون ذوو خبرة عالية وشغف حقيقي بالتعليم والتطوير",
    },
    en: {
      title: "Best Teachers",
      desc: "Highly experienced teachers with a genuine passion for teaching and development",
    },
    stat: { ar: "١٠٠٪", en: "100%" },
    statLabel: { ar: "رضا العملاء", en: "customer satisfaction" },
  },
];

export function FeaturesSection() {
  const { t, language } = useLanguage();

  return (
    <section id="features" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
            {t("مميزاتنا", "Our Features")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t(
              "لماذا تختار كن سابق؟",
              "Why Choose Be Ahead?"
            )}
          </h2>
          <p className="text-lg text-primary-foreground/80 text-pretty">
            {t(
              "نقدم لك تجربة تعليمية متكاملة مع مميزات حصرية تضمن نجاحك",
              "We offer you a complete educational experience with exclusive features that ensure your success"
            )}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const content = language === "ar" ? feature.ar : feature.en;
            const stat = language === "ar" ? feature.stat.ar : feature.stat.en;
            const statLabel = language === "ar" ? feature.statLabel.ar : feature.statLabel.en;

            return (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl bg-primary-foreground/5 hover:bg-primary-foreground/10 border border-primary-foreground/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-accent" />
                </div>

                {/* Stat */}
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat}
                </div>
                <div className="text-sm text-primary-foreground/60 mb-4">
                  {statLabel}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{content.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">
                  {content.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
