"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  BadgeCheck,
  ChevronDown,
  Clapperboard,
  Crown,
  Film,
  Flame,
  Headphones,
  Layers,
  Menu,
  Monitor,
  Play,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Tv,
  Users,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";
import { content, languages, type Lang } from "@/lib/content";

const phoneNumber = "4592457053";
const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

const bgImages = {
  hero:
    "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2200&q=85",
  cinema:
    "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1800&q=85",
  screen:
    "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1800&q=85",
  seats:
    "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1800&q=85",
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: "easeOut",
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -34,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.42,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 34,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.42,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.045,
    },
  },
};

const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.38,
      ease: "easeOut",
    },
  },
};

const isLanguage = (value: string | null): value is Lang =>
  languages.some(({ code }) => code === value);

export default function Home() {
  const [lang, setLang] = useState<Lang>("tr");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (!isLanguage(savedLang) || savedLang === "tr") {
      return;
    }

    const frameId = window.requestAnimationFrame(() => setLang(savedLang));

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [categoryPreviewImages, setCategoryPreviewImages] = useState<
    Record<number, string>
  >({});

  const previewUrlsRef = useRef<Record<number, string>>({});

  const t = content[lang];
  const heroHighlights = [t.strip[0], t.strip[4], t.strip[7]];

  const handleCategoryImageUpload = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (previewUrlsRef.current[index]) {
      URL.revokeObjectURL(previewUrlsRef.current[index]);
    }

    const imageUrl = URL.createObjectURL(file);
    previewUrlsRef.current[index] = imageUrl;

    setCategoryPreviewImages((prev) => ({
      ...prev,
      [index]: imageUrl,
    }));
  };

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t.whatsapp)}`;
  }, [t.whatsapp]);

  const popupWhatsappUrl = useMemo(() => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      t.popupWhatsapp
    )}`;
  }, [t.popupWhatsapp]);

  useEffect(() => {
    const previewUrls = previewUrlsRef.current;

    return () => {
      Object.values(previewUrls).forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setPopupOpen(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { href: "#home", label: t.nav.home },
    { href: "#experience", label: t.nav.experience },
    { href: "#categories", label: t.nav.categories },
    { href: "#devices", label: t.nav.devices },
    { href: "#setup", label: t.nav.setup },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#reseller", label: t.nav.reseller },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site">
      <header className="header">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brandMark">
            <Crown size={18} />
          </span>
          <span>{t.brand}</span>
        </a>

        <nav className="desktopNav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="headerActions">
          <div className="langBox">
            {languages.map((item) => (
              <button
                key={item.code}
                className={lang === item.code ? "activeLang" : ""}
                onClick={() => setLang(item.code)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a href={whatsappUrl} className="headerWp" {...externalLinkProps}>
            WhatsApp
          </a>

          <button
            className="menuBtn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobileMenu"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}

              <div className="mobileLangBox">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    className={lang === item.code ? "activeLang" : ""}
                    onClick={() => {
                      setLang(item.code);
                      closeMenu();
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <a href={whatsappUrl} className="mobileWp" {...externalLinkProps}>
                WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {popupOpen && (
          <motion.div
            className="popupOverlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="resellerPopup"
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 24,
                scale: 0.95,
              }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <div className="popupLight" />

              <button
                className="popupClose"
                onClick={() => setPopupOpen(false)}
                aria-label={t.popup.close}
              >
                <X size={20} />
              </button>

              <div className="popupIcon">
                <Rocket size={28} />
              </div>

              <span className="popupBadge">{t.reseller.badge}</span>
              <h3>{t.popup.title}</h3>
              <p>{t.popup.text}</p>

              <a
                href={popupWhatsappUrl}
                className="popupWhatsapp"
                {...externalLinkProps}
              >
                {t.popup.button}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="home"
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(42,4,12,0.98) 0%, rgba(53,5,15,0.88) 45%, rgba(69,8,20,0.56) 100%), url(${bgImages.hero})`,
        }}
      >
        <div className="grain" />
        <div className="cinemaCurtain" />
        <div className="heroLight heroLightOne" />
        <div className="heroLight heroLightTwo" />
        <div className="scanLine" />

        <motion.div
          className="heroText"
          initial="hidden"
          animate="show"
          variants={stagger}
        >
          <motion.span className="eyebrow" variants={fadeUp}>
            <Sparkles size={15} />
            {t.hero.badge}
          </motion.span>

          <motion.h1 variants={fadeUp}>{t.hero.title}</motion.h1>

          <motion.p className="lead" variants={fadeUp}>
            {t.hero.subtitle}
          </motion.p>

          <motion.div className="heroButtons" variants={fadeUp}>
            <a href={whatsappUrl} className="primaryBtn" {...externalLinkProps}>
              {t.hero.primary}
            </a>
            <a href="#reseller" className="secondaryBtn">
              {t.hero.secondary}
            </a>
          </motion.div>

          <motion.div className="heroHighlights" variants={fadeUp}>
            {heroHighlights.map((item, index) => (
              <span key={`hero-highlight-${index}`}>
                <BadgeCheck size={17} />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.p className="note" variants={fadeUp}>
            {t.hero.note}
          </motion.p>
        </motion.div>

        <motion.div
          className="heroShowcase"
          initial={{
            opacity: 0,
            x: 48,
            rotate: 4,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 0,
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="screenFrame"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="screenTop">
              <span />
              <span />
              <span />
            </div>

            <div className="screenPoster">
              <div className="playOrb">
                <Play size={28} fill="white" />
              </div>
              <strong>{t.brand}</strong>
              <p>10.000+ Live • 100.000+ VOD • 4K</p>
            </div>

            <div className="screenStats">
              <div>
                <span>4K</span>
                <small>HD / FHD / 4K</small>
              </div>
              <div>
                <span>24/7</span>
                <small>Live Support</small>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="floatingMiniCard miniOne"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Clapperboard size={18} />
            100.000+ VOD
          </motion.div>

          <motion.div
            className="floatingMiniCard miniTwo"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Users size={18} />
            10.000+ Live
          </motion.div>
        </motion.div>

        <div className="scrollHint">
          <ChevronDown size={24} />
        </div>
      </section>

      <section className="marquee">
        <div className="marqueeInner">
          {[...t.strip, ...t.strip].map((item, index) => (
            <span key={`strip-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section id="experience" className="section split">
        <motion.div
          className="sectionIntro"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="eyebrow">
            <Film size={15} />
            {t.experience.badge}
          </span>
          <h2>{t.experience.title}</h2>
          <p>{t.experience.text}</p>
        </motion.div>

        <motion.div
          className="featureGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {t.experience.cards.map((card, index) => (
            <motion.article
              key={`experience-${index}`}
              className="featureCard cinematicCard"
              variants={cardReveal}
            >
              <span className="cardIcon">
                {index === 0 && <Clapperboard size={22} />}
                {index === 1 && <Film size={22} />}
                {index === 2 && <Headphones size={22} />}
                {index === 3 && <ShieldCheck size={22} />}
              </span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section
        id="categories"
        className="section categorySection"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(76,7,20,0.8), rgba(33,3,10,0.96)), url(${bgImages.cinema})`,
        }}
      >
        <div className="sceneSeparator" />

        <motion.div
          className="centerIntro"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="eyebrow">
            <Layers size={15} />
            {t.categories.badge}
          </span>
          <h2>{t.categories.title}</h2>
          <p>{t.categories.text}</p>
        </motion.div>

        <motion.div
          className="categoryGrid photoCategoryGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {t.categories.items.map((item, index) => {
            const imageSrc = categoryPreviewImages[index] ?? item.image;

            return (
              <motion.div
                key={`category-${index}`}
                className="categoryPhotoCard liveCategoryCard"
                variants={cardReveal}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="categoryImageWrap">
                  <img src={imageSrc} alt={item.title} />
                  <div className="categoryPhotoOverlay" />
                  <div className="categoryGlow" />
                </div>

                <div className="categoryImageTools">
                  <span className="categoryImageHint">
                    {String(index + 1).padStart(2, "0")} / Görsel alanı
                  </span>

                  <label className="categoryUploadBtn">
                    Görsel yükle
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) =>
                        handleCategoryImageUpload(index, event)
                      }
                    />
                  </label>
                </div>

                <div className="categoryPhotoText">
                  <Flame size={20} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section id="devices" className="section devicesWrap">
        <motion.div
          className="centerIntro"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="eyebrow">
            <Tv size={15} />
            {t.devices.badge}
          </span>
          <h2>{t.devices.title}</h2>
          <p>{t.devices.text}</p>
        </motion.div>

        <motion.div
          className="deviceGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {t.devices.items.map((item, index) => {
            const icons = [
              Tv,
              Tv,
              Monitor,
              Tv,
              Smartphone,
              Smartphone,
              Monitor,
              Monitor,
            ];
            const Icon = icons[index];

            return (
              <motion.div
                key={`device-${index}`}
                className="deviceCard cinematicCard"
                variants={cardReveal}
              >
                <Icon size={24} />
                <span>{item}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section id="setup" className="section setupSection">
        <motion.div
          className="centerIntro"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="eyebrow">
            <BadgeCheck size={15} />
            {t.setup.badge}
          </span>
          <h2>{t.setup.title}</h2>
        </motion.div>

        <div className="timeline">
          {t.setup.steps.map((step, index) => (
            <motion.article
              key={`setup-${index}`}
              className="timelineCard cinematicCard"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -42 : 42,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.42,
                delay: index * 0.04,
                ease: "easeOut",
              }}
            >
              <span className="stepNo">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="pricing" className="section pricingSection">
        <motion.div
          className="centerIntro"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="eyebrow">
            <Sparkles size={15} />
            {t.pricing.badge}
          </span>
          <h2>{t.pricing.title}</h2>
          <p>{t.pricing.text}</p>
        </motion.div>

        <motion.div
          className="pricingGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {t.pricing.plans.map((plan, index) => (
            <motion.article
              key={`plan-${index}`}
              className={`pricingCard cinematicCard ${
                plan.highlight ? "featuredPrice" : ""
              }`}
              variants={cardReveal}
            >
              {plan.highlight && (
                <span className="campaignRibbon">
                  {t.pricing.campaignLabel}
                </span>
              )}

              <div className="priceTop">
                <span className="priceDuration">{plan.duration}</span>
                <h3>{plan.name}</h3>
                <p>{plan.text}</p>
              </div>

              <div className="priceValue">
                {plan.oldPrice && <small>{plan.oldPrice}</small>}
                <strong>{plan.price}</strong>
              </div>

              <div className="priceFeatures">
                {plan.features.map((feature, index) => (
                  <span key={`plan-feature-${index}`}>
                    <ShieldCheck size={17} />
                    {feature}
                  </span>
                ))}
              </div>

              <a href={whatsappUrl} className="priceButton" {...externalLinkProps}>
                {plan.button}
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="pricingTrust"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {t.pricing.trust.map((item, index) => (
            <motion.span key={`pricing-trust-${index}`} variants={cardReveal}>
              <BadgeCheck size={17} />
              {item}
            </motion.span>
          ))}
        </motion.div>
      </section>

      <section
        id="reseller"
        className="section reseller"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(52,4,14,0.96), rgba(104,10,30,0.76)), url(${bgImages.seats})`,
        }}
      >
        <div className="sceneSeparator" />

        <motion.div
          className="resellerText"
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="eyebrow">
            <Crown size={15} />
            {t.reseller.badge}
          </span>
          <h2>{t.reseller.title}</h2>
          <p>{t.reseller.text}</p>

          <div className="heroButtons">
            <a
              href={popupWhatsappUrl}
              className="primaryBtn"
              {...externalLinkProps}
            >
              {t.reseller.primary}
            </a>
            <a href="#contact" className="secondaryBtn">
              {t.reseller.secondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          className="resellerPanel"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {t.reseller.points.map((point, index) => (
            <div key={`reseller-point-${index}`} className="resellerPoint">
              <ShieldCheck size={19} />
              <span>{point}</span>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="section whySection">
        <motion.div
          className="centerIntro"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="eyebrow">
            <Star size={15} />
            {t.why.badge}
          </span>
          <h2>{t.why.title}</h2>
        </motion.div>

        <motion.div
          className="whyGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {t.why.items.map((item, index) => (
            <motion.article
              key={`why-${index}`}
              className="whyCard cinematicCard"
              variants={cardReveal}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="faq" className="section faqSection">
        <motion.div
          className="centerIntro"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="eyebrow">{t.faq.badge}</span>
          <h2>{t.faq.title}</h2>
        </motion.div>

        <motion.div
          className="faqList"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {t.faq.items.map((item, index) => (
            <motion.details
              key={`faq-${index}`}
              className="faqItem cinematicCard"
              variants={cardReveal}
            >
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </motion.details>
          ))}
        </motion.div>
      </section>

      <section className="section reviews">
        <motion.div
          className="centerIntro"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="eyebrow">{t.reviews.badge}</span>
          <h2>{t.reviews.title}</h2>
        </motion.div>

        <motion.div
          className="reviewGrid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {t.reviews.items.map((item, index) => (
            <motion.article
              key={`review-${index}`}
              className="reviewCard cinematicCard"
              variants={cardReveal}
            >
              <p>“{item.text}”</p>
              <strong>{item.name}</strong>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="contact" className="section contact">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Headphones size={36} />
          <span className="eyebrow">{t.contact.badge}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <a href={whatsappUrl} className="primaryBtn" {...externalLinkProps}>
            {t.contact.button}
          </a>
        </motion.div>
      </section>

      <a href={whatsappUrl} className="floatingWp" {...externalLinkProps}>
        WhatsApp
      </a>
    </main>
  );
}
