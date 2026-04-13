"use client";

import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { GraduationCap, Code2, Globe, ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    ar: {
      title: "دروس خصوصية",
      subtitle: "المرحلة الإعدادية",
      desc: "دروس متخصصة للمرحلة الإعدادية في جميع المواد الدراسية، مع التركيز على الفهم العميق والتطبيق العملي.",
      features: ["رياضيات", "علوم", "لغة عربية", "لغة إنجليزية"],
    },
    en: {
      title: "Private Tutoring",
      subtitle: "Preparatory Stage",
      desc: "Specialized lessons for the preparatory stage in all subjects, focusing on deep understanding and practical application.",
      features: ["Mathematics", "Sciences", "Arabic", "English"],
    },
    color: "primary",
  },
  {
    icon: Code2,
    title: "coding",
    ar: {
      title: "أساسيات البرمجة",
      subtitle: "من الصفر للاحتراف",
      desc: "تعلم البرمجة من البداية بأسلوب عملي وممتع. ابدأ رحلتك في عالم التكنولوجيا والابتكار.",
      features: ["Python", "HTML & CSS", "JavaScript", "مشاريع عملية"],
    },
    en: {
      title: "Programming Basics",
      subtitle: "From Zero to Hero",
      desc: "Learn programming from scratch in a practical and enjoyable way. Start your journey in the world of technology and innovation.",
      features: ["Python", "HTML & CSS", "JavaScript", "Practical Projects"],
    },
    color: "accent",
  },
  {
    icon: Globe,
    ar: {
      title: "مهارات العمل الحر",
      subtitle: "العمل أونلاين",
      desc: "تعلم كيف تبدأ العمل الحر وتبني مصدر دخل مستقل عبر الإنترنت باستخدام مهاراتك.",
      features: ["إنشاء الملف الشخصي", "التسويق الذاتي", "إدارة المشاريع", "التعامل مع العملاء"],
    },
    en: {
      title: "Freelancing Skills",
      subtitle: "Work Online",
      desc: "Learn how to start freelancing and build an independent income source online using your skills.",
      features: ["Profile Creation", "Self Marketing", "Project Management", "Client Relations"],
    },
    color: "primary",
  },
];

export function ServicesSection() {
  const { t, language } = useLanguage();
  const ArrowIcon = language === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            {t("خدماتنا", "Our Services")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t(
              "نقدم لك أفضل الخدمات التعليمية",
              "We offer you the best educational services"
            )}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t(
              "خدمات متنوعة تلبي احتياجاتك التعليمية وتساعدك على تحقيق أهدافك",
              "Diverse services that meet your educational needs and help you achieve your goals"
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const content = language === "ar" ? service.ar : service.en;
            const isAccent = service.color === "accent";

            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-transparent hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isAccent
                      ? "bg-gradient-to-br from-accent/5 to-accent/10"
                      : "bg-gradient-to-br from-primary/5 to-primary/10"
                  }`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      isAccent
                        ? "bg-accent/10 group-hover:bg-accent"
                        : "bg-primary/10 group-hover:bg-primary"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 transition-colors ${
                        isAccent
                          ? "text-accent group-hover:text-white"
                          : "text-primary group-hover:text-primary-foreground"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <span
                    className={`text-sm font-medium ${
                      isAccent ? "text-accent" : "text-primary"
                    }`}
                  >
                    {content.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mt-1 mb-4">
                    {content.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {content.desc}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {content.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className={`group/btn p-0 h-auto font-medium ${
                      isAccent
                        ? "text-accent hover:text-accent"
                        : "text-primary hover:text-primary"
                    }`}
                  >
                    {t("اعرف المزيد", "Learn More")}
                    <ArrowIcon className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
