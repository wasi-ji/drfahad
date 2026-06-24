import { useState, useEffect } from "react";
import { Menu, X, Calendar, MessageCircle, Heart, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const { language, setLanguage, isUrdu, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("nav_home"), href: "#home" },
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_conditions"), href: "#conditions" },
    { label: t("nav_treatments"), href: "#treatments" },
    { label: t("nav_research"), href: "#research" },
    { label: t("nav_assessment"), href: "#assessment" },
    { label: t("nav_faqs"), href: "#faqs" },
    { label: t("nav_contact"), href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Modern language picker pill component
  const LanguageSwitcher = () => (
    <div className="flex items-center gap-1 border border-clinical-200/80 bg-clinical-50/50 p-1 rounded-full shadow-inner relative z-50">
      <Globe className="w-3.5 h-3.5 text-clinical-500 mx-1.5" />
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all duration-200 cursor-pointer ${
          language === "en" ? "bg-clinical-700 text-white shadow-sm" : "text-clinical-600 hover:text-clinical-950"
        }`}
        title="Switch to English"
        id="btn-lang-en"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("ur")}
        className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all duration-200 cursor-pointer ${
          language === "ur" ? "bg-clinical-700 text-white shadow-sm font-sans" : "text-clinical-600 hover:text-clinical-950"
        }`}
        title="اردو زبان منتخب کریں"
        id="btn-lang-ur"
      >
        اردو
      </button>
    </div>
  );

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-clinical-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className={`flex items-center ${isUrdu ? "flex-row-reverse text-right" : "flex-row text-left"} gap-2.5 group`}
            id="header-logo"
          >
            <div className="w-10 h-10 rounded-full bg-clinical-500 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
              <Heart className="w-5.5 h-5.5 text-accent-soft fill-accent-soft/10" />
            </div>
            <div>
              <span className="block text-base sm:text-lg font-serif font-bold text-clinical-900 tracking-tight leading-none">
                {isUrdu ? "ڈاکٹر فہد الزین" : "Dr. Fahad Ul Zain"}
              </span>
              <span className="block text-[10px] font-sans font-semibold tracking-wide text-clinical-500 mt-0.5">
                {isUrdu ? "ماہرِ امراضِ نفسيات (کنسلٹنٹ سائیکاٹرسٹ)" : "Consultant Psychiatrist"}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-[13px] font-medium text-clinical-600 hover:text-clinical-900 transition-colors duration-200 uppercase tracking-wider relative group"
              >
                {item.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="https://wa.me/923000000000?text=Hello%20Dr.%20Fahad%20Ul%20Zain,%20I%20would%20like%20to%20book%20a%20psychiatry%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-clinical-700 bg-clinical-50 hover:bg-clinical-100 hover:text-clinical-900 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border border-clinical-200"
              id="header-whatsapp-btn"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/15" />
              <span>{t("btn_whatsapp_us")}</span>
            </a>
            <button
              onClick={onBookClick}
              className="flex items-center gap-1.5 bg-clinical-700 text-white hover:bg-clinical-850 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 shadow-sm border border-transparent cursor-pointer"
              id="header-booking-btn"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t("btn_book_appointment")}</span>
            </button>
          </div>

          {/* Mobile Actions Overlay */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-clinical-700 hover:text-clinical-900 hover:bg-clinical-50 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
              id="mobile-menu-trigger"
            >
              {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-clinical-100 overflow-hidden shadow-lg mt-2"
            id="mobile-drawer"
          >
            <div className={`px-4 pt-2 pb-6 space-y-1 ${isUrdu ? "text-right" : "text-left"}`}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                     e.preventDefault();
                     handleNavClick(item.href);
                  }}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-clinical-700 hover:text-clinical-900 hover:bg-clinical-50"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2 px-3">
                <a
                  href="https://wa.me/923000000000?text=Hello%20Dr.%20Fahad%20Ul%20Zain,%20I%20would%20like%20to%20book%20a%20psychiatry%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-clinical-700 bg-clinical-50 hover:bg-clinical-100 py-2.5 rounded-lg text-xs font-medium border border-clinical-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>{t("btn_whatsapp_us")}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="flex items-center justify-center gap-1.5 bg-clinical-700 text-white hover:bg-clinical-800 py-2.5 rounded-lg text-xs font-medium shadow-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t("btn_request_appointment")}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
