"use client";

import { useLanguage } from "@/lib/language-context";
import { Shield, Heart, Clock, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Shield,
    ar: { title: "الالتزام", desc: "نلتزم بمواعيدنا ووعودنا. الالتزام هو أساس الثقة والنجاح." },
    en: { title: "Commitment", desc: "We honor our schedules and promises. Commitment is the foundation of trust and success." },
    number: "01",
  },
  {
    icon: Heart,
    ar: { title: "الاحترام", desc: "نحترم طلابنا ونقدر جهودهم. بيئة محترمة تعني تعلماً أفضل." },
    en: { title: "Respect", desc: "We respect our students and value their efforts. A respectful environment means better learning." },
    number: "02",
  },
  {
    icon: Clock,
    ar: { title: "الانضباط", desc: "الانضباط مفتاح التفوق. نساعد طلابنا على بناء عادات إيجابية." },
    en: { title: "Discipline", desc: "Discipline is the key to excellence. We help our students build positive habits." },
    number: "03",
  },
  {
    icon: TrendingUp,
    ar: { title: "عقلية النمو", desc: "نؤمن بأن كل طالب قادر على التطور والتحسن المستمر." },
    en: { title: "Growth Mindset", desc: "We believe every student is capable of continuous development and improvement." },
    number: "04",
  },
];

export function ValuesSection() {
  const { t, language } = useLanguage();

  return (
    <section id="values" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            {t("قيمنا", "Our Values")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t(
              "القيم التي نؤمن بها",
              "Values We Believe In"
            )}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t(
              "قيمنا هي البوصلة التي توجه كل ما نقوم به. نسعى لغرسها في طلابنا",
              "Our values are the compass that guides everything we do. We strive to instill them in our students"
            )}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            const content = language === "ar" ? value.ar : value.en;

            return (
              <div
                key={index}
                className="group relative flex gap-6 p-8 rounded-3xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Number */}
                <div className="absolute top-6 left-6 rtl:left-auto rtl:right-6 text-6xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                  {value.number}
                </div>

                {/* Icon */}
                <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {content.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
