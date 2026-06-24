import { MapPin, Phone, Mail, GraduationCap, Heart, ArrowUp, CalendarClock } from "lucide-react";
import { DOCTOR_INFO } from "../data";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { isUrdu, t } = useLanguage();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const seoTags = isUrdu 
    ? [
        "نوابشاہ میں ماہر نفسیات",
        "حیدرآباد میں ماہر امراض نفسيات",
        "ڈپریشن کا سائنسی علاج",
        "اینگزائٹی اور گھبراہٹ کا علاج",
        "بے خوابی کا طبی علاج",
        "ڈاکٹر فہد الزین",
        "پیر سے جمعہ او پی ڈی",
        "اتوار کی او پی ڈی",
        "رازداری کے ساتھ کونسلنگ",
        "ذہنی برن آؤٹ"
      ]
    : [
        "Psychiatrist in Nawabshah",
        "Psychiatrist in Hyderabad",
        "Mental Health Specialist",
        "Anxiety Treatment",
        "Depression Treatment",
        "Consultant Psychiatrist",
        "Mental Health Clinic",
        "Psychiatric Consultation",
        "Sleep Disorder Treatment",
        "Stress Management"
      ];

  return (
    <footer className="bg-clinical-950 text-clinical-300 border-t border-clinical-850 pt-16 pb-8" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 ${isUrdu ? "direction-rtl text-right" : "text-left"}`}>
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4" id="footer-col-1">
            <div className={`flex items-center gap-2 ${isUrdu ? "flex-row-reverse" : ""}`}>
              <div className="w-8 h-8 rounded-full bg-clinical-500 flex items-center justify-center text-white">
                <Heart className="w-4.5 h-4.5 fill-white/10" />
              </div>
              <span className="text-lg font-serif font-bold text-white tracking-tight">
                {isUrdu ? "ڈاکٹر فہد الزین" : "Dr. Fahad Ul Zain"}
              </span>
            </div>
            <p className="text-xs text-clinical-400 leading-relaxed font-sans font-medium">
              {t("footer_desc")}
            </p>
            <div className={`text-xs font-mono text-accent-gold-dark font-semibold ${isUrdu ? "text-right" : "text-left"}`}>
              {isUrdu ? "پی ایم ڈی سی نمبر: 54095-S" : `PMDC Reg: ${DOCTOR_INFO.pmdc}`}
            </div>
          </div>

          {/* Col 2: Timings Hours */}
          <div className="space-y-4" id="footer-col-2">
            <h4 className={`text-xs font-mono uppercase font-bold text-white tracking-widest flex items-center gap-1.5 ${isUrdu ? "flex-row-reverse" : ""}`}>
              <CalendarClock className="w-4 h-4 text-accent-gold shrink-0" />
              <span>{isUrdu ? "ملاقات کے اوقات" : "Consultation Times"}</span>
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="block font-semibold text-white">
                  {isUrdu ? "ولی سائیکاٹری نوابشاہ" : "Wali Psychiatry Nawabshah"}
                </span>
                <span className="block text-clinical-400 mt-0.5 font-sans">
                  {isUrdu ? "سوموار تا جمعہ: 4:00 PM سے 9:00 PM" : "Mon – Fri: 4:00 PM – 9:00 PM"}
                </span>
              </div>
              <div>
                <span className="block font-semibold text-white">
                  {isUrdu ? "حیدرآباد سنڈے کلینک" : "Hyderabad Sunday Clinic"}
                </span>
                <span className="block text-clinical-400 mt-0.5 font-sans">
                  {isUrdu ? "ہر اتوار: 2:00 PM سے 5:00 PM" : "Sunday: 2:00 PM – 5:00 PM"}
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Addresses Info */}
          <div className="space-y-4" id="footer-col-3">
            <h4 className={`text-xs font-mono uppercase font-bold text-white tracking-widest flex items-center gap-1.5 ${isUrdu ? "flex-row-reverse" : ""}`}>
              <MapPin className="w-4 h-4 text-accent-gold" />
              <span>{isUrdu ? "کلینکل پتے" : "Clinic Addresses"}</span>
            </h4>
            <div className="space-y-3 text-xs">
              <div className={`flex gap-2 items-start ${isUrdu ? "flex-row-reverse text-right" : ""}`}>
                <MapPin className="w-4 h-4 text-clinical-500 shrink-0 mt-0.5" />
                <span>
                  {isUrdu ? "ولی سائیکاٹری سینٹر، سکرنڈ روڈ، نوابشاہ" : "Wali Psychiatry Centre, Sakrand Road, Nawabshah"}
                </span>
              </div>
              <div className={`flex gap-2 items-start ${isUrdu ? "flex-row-reverse text-right" : ""}`}>
                <MapPin className="w-4 h-4 text-clinical-500 shrink-0 mt-0.5" />
                <span>
                  {isUrdu ? "حیدرآباد کنسلٹیشن کلینک، حیدرآباد سٹی" : "Hyderabad Consultation Clinic, Hyderabad City"}
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Rapid Contact */}
          <div className="space-y-4" id="footer-col-4">
            <h4 className="text-xs font-mono uppercase font-bold text-white tracking-widest">
              {isUrdu ? "رابطہ کے ذرائع" : "Direct Channels"}
            </h4>
            <div className="space-y-3 text-xs">
              <a href="tel:+923000000000" className={`flex gap-2 items-center hover:text-white transition-colors ${isUrdu ? "flex-row-reverse" : ""}`}>
                <Phone className="w-4 h-4 text-clinical-500 shrink-0" />
                <span className="text-left font-sans">+92 300 0000000</span>
              </a>
              <a
                href="https://wa.me/923000000000?text=Hello%20Dr.%20Fahad%20Ul%20Zain..."
                target="_blank"
                rel="noopener noreferrer"
                className={`flex gap-2 items-center hover:text-white transition-colors ${isUrdu ? "flex-row-reverse" : ""}`}
              >
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{isUrdu ? "واٹس ایپ اپوائنٹمنٹ" : "WhatsApp Appointment"}</span>
              </a>
              <a href={DOCTOR_INFO.scholarUrl} target="_blank" rel="noopener noreferrer" className={`flex gap-2 items-center hover:text-white transition-colors text-accent-gold ${isUrdu ? "flex-row-reverse" : ""}`}>
                <GraduationCap className="w-4 h-4 shrink-0" />
                <span>{isUrdu ? "گوگل اسکالر پروفائل" : "Google Scholar citations"}</span>
              </a>
            </div>
          </div>

        </div>

        {/* SEO Tags Paragraph Indexing */}
        <div className="border-t border-clinical-850/60 pt-8 pb-4 text-center space-y-3">
          <span className="text-[10px] font-mono tracking-widest uppercase text-clinical-500 block font-bold">
            {isUrdu ? "طبی تحقیق اور کلینکل فیلڈ" : "Health Care Specialty Specialties"}
          </span>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {seoTags.map((tag) => (
              <span
                key={tag}
                className="text-clinical-450 hover:text-white text-[10px] uppercase font-mono tracking-wide transition-colors"
                title={`Clinical support for ${tag}`}
              >
                • {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Dynamic bottom copyrights */}
        <div className={`border-t border-clinical-850/40 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-clinical-500 font-mono gap-4 ${isUrdu ? "sm:flex-row-reverse" : ""}`}>
          <p>{t("footer_copyright").replace("{year}", "2026")}</p>
          <button
            onClick={handleScrollToTop}
            className={`flex items-center gap-1 hover:text-white transition-colors cursor-pointer bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg ${isUrdu ? "flex-row-reverse" : ""}`}
            aria-label="Back to top"
          >
            <span>{isUrdu ? "اوپر واپس جائیں" : "Back to top"}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
