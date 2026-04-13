"use client";

import { useLanguage } from "@/lib/language-context";
import { Users, Clock, UserCheck, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    ar: { title: "مجموعات صغيرة", desc: "نحرص على أن تكون المجموعات صغيرة لضمان الاهتمام بكل طالب" },
    en: { title: "Small Groups", desc: "We ensure small groups to guarantee attention to each student" },
  },
  {
    icon: Clock,
    ar: { title: "حصص أطول", desc: "حصص مطولة تتيح فهماً أعمق وتطبيقاً أكثر للمفاهيم" },
    en: { title: "Longer Sessions", desc: "Extended sessions allow deeper understanding and more practical application" },
  },
  {
    icon: UserCheck,
    ar: { title: "اهتمام شخصي", desc: "متابعة فردية لكل طالب وفق احتياجاته الخاصة" },
    en: { title: "Personal Attention", desc: "Individual follow-up for each student according to their specific needs" },
  },
  {
    icon: Heart,
    ar: { title: "فهم حقيقي", desc: "نركز على الفهم الحقيقي وليس الحفظ فقط" },
    en: { title: "True Understanding", desc: "We focus on real understanding, not just memorization" },
  },
];

export function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t("من نحن", "About Us")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              {t(
                "نؤمن بأن كل طالب يستحق تعليماً متميزاً",
                "We believe every student deserves distinguished education"
              )}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              {t(
                'في "كن سابق"، نقدم تجربة تعليمية فريدة تجمع بين الخبرة العلمية والتقنيات الحديثة. نسعى لبناء جيل قادر على مواجهة تحديات المستقبل بثقة وكفاءة.',
                'At "Be Ahead", we provide a unique educational experience that combines scientific expertise with modern techniques. We strive to build a generation capable of facing future challenges with confidence and competence.'
              )}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {t(
                "نحن لا نقدم مجرد دروس، بل نبني علاقة تعليمية قائمة على الفهم والتطوير المستمر.",
                "We don't just offer lessons; we build an educational relationship based on understanding and continuous development."
              )}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const content = language === "ar" ? feature.ar : feature.en;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {content.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
