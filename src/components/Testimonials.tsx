import { Star, Quote, Heart, ShieldEllipsis, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";

export default function Testimonials() {
  const { isUrdu, t, localizedTestimonials } = useLanguage();

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background soft focus bubble */}
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent-soft/40 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20" id="testimonials-header">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent-gold-dark block">
            {t("testimonials_subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-clinical-900 tracking-tight">
            {t("testimonials_title")}
          </h2>
          <div className="w-16 h-1 bg-accent-gold mx-auto rounded-full" />
          <p className="text-clinical-600 text-sm sm:text-base leading-relaxed">
            {isUrdu 
              ? "شفا پانے والے مریضوں کی آپ بیتی (مریضوں کی سخت رازداری برقرار رکھنے کے لئے صرف نام کے مخفف اور حتمی نتائج کسٹمر رضامندی سے شائع کیے گئے ہیں)۔"
              : "Honest logs shared with permission (initials only to enforce patient confidentiality). Read how compassionate guidance helped people recover emotional balance."}
          </p>
        </div>

        {/* Testimonials Deck */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isUrdu ? "direction-rtl text-right" : "text-left"}`} id="testimonials-cards-grid">
          {localizedTestimonials.map((tItem, idx) => (
            <motion.div
              key={tItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-clinical-50/40 hover:bg-clinical-50 border border-clinical-100 p-8 rounded-3xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
            >
              {/* Overlaid background quote sign */}
              <Quote className={`absolute top-6 w-12 h-12 text-clinical-100 pointer-events-none ${isUrdu ? "left-6" : "right-6"}`} />

              <div className="space-y-6">
                {/* 5-Star Rating row */}
                <div className={`flex items-center gap-1.5 text-yellow-500 ${isUrdu ? "justify-start flex-row-reverse" : ""}`}>
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-500" />
                  ))}
                </div>

                {/* Main feedback body text */}
                <p className="text-sm text-clinical-700 leading-relaxed font-sans italic font-medium">
                  "{tItem.feedback}"
                </p>
              </div>

              {/* Patient Info Footer */}
              <div className="mt-8 pt-6 border-t border-clinical-100/60 space-y-3">
                {/* Feeling Highlight Badge (Direct therapeutic value outcome) */}
                <div className={`inline-flex items-center gap-2 bg-clinical-100/80 px-3 py-1.5 rounded-xl border border-clinical-200.5/30 text-clinical-850 ${isUrdu ? "flex-row-reverse text-right" : ""}`}>
                  <Heart className="w-3.5 h-3.5 text-clinical-600 fill-clinical-600/10 shrink-0" />
                  <span className="text-xs font-semibold leading-tight">{tItem.feelingText}</span>
                </div>

                <div className={`flex items-center justify-between text-xs text-clinical-450 font-mono ${isUrdu ? "flex-row-reverse" : ""}`}>
                  <div className={`flex items-center gap-1.5 ${isUrdu ? "flex-row-reverse" : ""}`}>
                    <span className="font-bold text-clinical-800 text-sm leading-none shrink-0 border border-clinical-200 w-7 h-7 bg-white rounded-full flex items-center justify-center text-center">
                      {tItem.patientInitials}
                    </span>
                    <span className="leading-none text-clinical-500">{tItem.location} • {isUrdu ? "تصدیق شدہ مریض" : "Verified Patient"}</span>
                  </div>
                  <span className="font-semibold text-accent-gold-dark">{tItem.timeframe}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Confidentiality promise row */}
        <div className={`mt-16 text-center max-w-lg mx-auto bg-clinical-50/70 border border-clinical-100 p-5 rounded-2xl flex items-center justify-center gap-3 ${isUrdu ? "flex-row-reverse text-right" : "text-left"}`}>
          <ShieldEllipsis className="w-5 h-5 text-accent-gold-dark shrink-0" />
          <p className="text-xs text-clinical-600 font-sans font-medium">
            {isUrdu ? (
              <>
                <strong>اعلیٰ اخلاقی رازداری کا وعدہ:</strong> پی ایم ڈی سی (PMDC) کوڈ آف ایتھکس کے عمل کے تحت مریض کا ڈیٹا سو فیصد بند کمرے کی رازداری کا حامل ہے۔ ہم کبھی بھی مریض کے چہروں کی تشہیر نہیں کرتے۔
              </>
            ) : (
              <>
                <strong>Confidentiality Pledge:</strong> In compliance with the PMDC Code of Medical Ethics, patient files are protected behind offline protocols. We never advertise face-identifiable patient photos.
              </>
            )}
          </p>
        </div>

      </div>
    </section>
  );
}
