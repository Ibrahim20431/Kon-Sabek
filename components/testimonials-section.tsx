"use client";

import { useLanguage } from "@/lib/language-context";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    ar: {
      name: "أحمد محمد",
      role: "طالب - المرحلة الإعدادية",
      text: "كن سابق غيرت حياتي الدراسية. أصبحت أفهم الرياضيات بشكل أعمق وتحسنت درجاتي بشكل ملحوظ. شكراً للأساتذة المتميزين!",
    },
    en: {
      name: "Ahmed Mohamed",
      role: "Student - Preparatory Stage",
      text: "Be Ahead changed my academic life. I now understand math more deeply and my grades have improved significantly. Thanks to the excellent teachers!",
    },
    rating: 5,
  },
  {
    ar: {
      name: "سارة علي",
      role: "طالبة برمجة",
      text: "بدأت من الصفر في البرمجة والآن أستطيع بناء مواقع وتطبيقات بسيطة. الأسلوب العملي والمشاريع التطبيقية كانت رائعة!",
    },
    en: {
      name: "Sara Ali",
      role: "Programming Student",
      text: "I started from zero in programming and now I can build simple websites and apps. The practical approach and hands-on projects were amazing!",
    },
    rating: 5,
  },
  {
    ar: {
      name: "أم محمد",
      role: "ولية أمر",
      text: "أخيراً وجدت مكاناً يهتم بابني بشكل حقيقي. المتابعة المستمرة والتقارير الدورية تجعلني مطمئنة على مستواه.",
    },
    en: {
      name: "Um Mohamed",
      role: "Parent",
      text: "I finally found a place that truly cares about my son. The continuous follow-up and regular reports give me peace of mind about his progress.",
    },
    rating: 5,
  },
  {
    ar: {
      name: "يوسف خالد",
      role: "متدرب عمل حر",
      text: "تعلمت كيف أبدأ العمل الحر وحصلت على أول عميل لي خلال شهر واحد! المحتوى عملي ومباشر.",
    },
    en: {
      name: "Youssef Khaled",
      role: "Freelancing Trainee",
      text: "I learned how to start freelancing and got my first client within one month! The content is practical and direct.",
    },
    rating: 5,
  },
];

export function TestimonialsSection() {
  const { t, language } = useLanguage();

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            {t("آراء العملاء", "Testimonials")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t(
              "ماذا يقول عملاؤنا عنا؟",
              "What Do Our Clients Say?"
            )}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t(
              "نفخر بثقة عملائنا ونسعى دائماً لتقديم الأفضل",
              "We are proud of our clients' trust and always strive to deliver the best"
            )}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const content = language === "ar" ? testimonial.ar : testimonial.en;

            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 rtl:left-auto rtl:right-6">
                  <Quote className="w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
                </div>

                {/* Content */}
                <div className="relative z-10 pt-8">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-accent fill-accent"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-lg text-foreground mb-6 leading-relaxed">
                    &ldquo;{content.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {content.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">
                        {content.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {content.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
