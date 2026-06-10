import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  ChevronUp
} from "lucide-react";
import { useMotionValue, useSpring, useInView } from "motion/react";
import { useRef } from "react";
import { MapPin } from "lucide-react";

import heroDiya from "../assets/hero-diya.png";
import templeBg from "../assets/temple-bg.jpg"
import pujaRitual from "../assets/puja-ritual.jpg";
import dholPathak from "../assets/dhol-pathak.jpg";
import aartiPandits from "../assets/aarti-pandits.jpg";
import artistAbhi from "../assets/artist-abhi.jpg";
import artistJJ from "../assets/artist-jj.jpg";
import artistAnuj from "../assets/artist-anuj.jpg";
import artistSwami from "../assets/artist-swami.jpg";
import spiritualLeader from "../assets/spiritual-leader.jpg";
import navagrahaMandala from "../assets/navagraha-mandala.jpg";
import concertCrowd from "../assets/concert-crowd.jpg";


import logo from "../assets/logo.png";

import { Particles } from "../components/navam/Particles";
import { Ornament, CornerOrnament } from "../components/navam/Ornament";
import { Countdown } from "../components/navam/Countdown";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NAVAM" },
      {
        name: "description",
        content:
          "Join Maha Navagraha Puja 2026 on 19 July at Shanmukhananda Auditorium, Mumbai. A divine evening of Vedic rituals, Siddhivinayak Aarti, Nashik Dhol, and live devotional music with Abhi Dutt & JJ Vyck.",
      },
      { property: "og:title", content: "Maha Navagraha Puja 2026 — Festival of Nine Divine" },
      { property: "og:description", content: "19 July 2026 · Mumbai. Reserve your seat for a cosmic evening of devotion, music and divine energy." },
      { property: "og:type", content: "event" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" },{ rel: "icon", type: "image/png", href: "/favicon.png" },],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Maha Navagraha Puja 2026",
          startDate: "2026-07-19T18:00:00+05:30",
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "Shanmukhananda Auditorium",
            address: "Mumbai, India",
          },
          description: "A grand spiritual gathering — Vedic rituals, Siddhivinayak Aarti, Nashik Dhol Pathak, and devotional music.",
        }),
      },
    ],
  }),
  component: NavamLanding,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

function NavamLanding() {
  return (
    <div className="min-h-screen w-full bg-ivory text-foreground overflow-x-hidden">
      <main className="relative w-full">
        <Nav />
        <Hero />
        <Intro />
        <Timeline />
        <Highlights />
        <Navagrahas />
        <Performers />
        <SpiritualLeader />
        <SwamiVedraj />
        <SocialProof />
        <FAQ />
        <FinalCTA />
        <Footer />
        <ScrollToTopButton />
      </main>
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-8 left-0 right-3 z-50 px-4 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-center gap-4 lg:gap-8">

          {/* Left Pill */}
          <div
            className="
              hidden md:flex
              items-center
              gap-6
              px-12
              py-6
              rounded-full
              border border-gold/20
              bg-ivory/80
              backdrop-blur-xl
              shadow-divine
            "
          >
            <a
              href="#experience"
              className="text-sm uppercase tracking-[0.2em] text-brass/80 hover:text-gold-deep transition"
            >
              Experience
            </a>

            <a
              href="#planets"
              className="text-sm uppercase tracking-[0.2em] text-brass/80 hover:text-gold-deep transition"
            >
              Navagrahas
            </a>
          </div>

          {/* Logo */}
          <a
            href="#hero"
            className="relative shrink-0 z-10"
          >
            <img
              src={logo}
              alt="Sacred Souls"
              className="
                h-24
                sm:h-28
                md:h-32
                lg:h-36
                w-auto
                object-contain
                drop-shadow-xl
              "
            />
          </a>

          {/* Right Pill */}
          <div
            className="
              hidden md:flex
              items-center
              gap-6
              px-12
              py-6
              rounded-full
              border border-gold/20
              bg-ivory/80
              backdrop-blur-xl
              shadow-divine
            "
          >
            <a
              href="#performers"
              className="text-sm uppercase tracking-[0.2em] text-brass/80 hover:text-gold-deep transition"
            >
              Performers
            </a>

            <a
              href="https://www.district.in/events/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                bg-gradient-gold
                px-5
                py-2.5
                text-xs
                uppercase
                tracking-[0.25em]
                text-ivory
                shadow-gold
                hover:scale-105
                transition
              "
            >
              Reserve
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center pt-40 md:pt-52 pb-12"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroDiya})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-ivory/30 to-ivory" />

      {/* Particles */}
      <Particles count={50} />

      {/* Corner ornaments */}
      <div className="absolute left-6 top-24 w-16 h-16 text-gold">
        <CornerOrnament className="w-full h-full" />
      </div>

      <div className="absolute right-6 top-24 w-16 h-16 text-gold scale-x-[-1]">
        <CornerOrnament className="w-full h-full" />
      </div>

      <div className="absolute left-6 bottom-6 w-16 h-16 text-gold scale-y-[-1]">
        <CornerOrnament className="w-full h-full" />
      </div>

      <div className="absolute right-6 bottom-6 w-16 h-16 text-gold scale-[-1]">
        <CornerOrnament className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xs uppercase tracking-[0.5em] text-brass/80"
        >
          Sacred Souls Presents
        </motion.p>

        <Ornament className="mt-6" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-6 font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[1.05]"
          style={{ color: "#926c15" }}
        >
          MAHA NAVAGRAHA
          <span className="block font-extrabold text-4xl sm:text-6xl md:text-7xl mt-2">
            PUJA · 2026
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-8 font-serif text-xl sm:text-2xl text-brass max-w-3xl mx-auto italic"
        >
          A Journey of Cosmic Alignment Through Devotion, Music & Divine Energy
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-lg md:text-xl uppercase tracking-[0.25em] text-brass/90"
        >
          <span>19 July 2026</span>
          <span className="hidden sm:inline text-gold">◆</span>
          <span>Shanmukhnanda Auditorium Mumbai</span>
          <span className="hidden sm:inline text-gold">◆</span>
          <span>6:00 PM Onwards</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://www.district.in/events/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full bg-gradient-gold px-10 py-4 text-sm uppercase tracking-[0.3em] text-ivory shadow-divine hover:scale-105 transition"
          >
            <span className="relative z-10">Reserve Your Seat</span>
            <span className="absolute inset-0 animate-shimmer" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16"
        >
          <Countdown />
        </motion.div>

      </div>
    </section>
  );
}

/* ---------------- INTRO ---------------- */
function Intro() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url(${templeBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-transparent to-ivory" />

      <motion.div {...fadeUp} className="relative mx-auto max-w-4xl px-6 text-center">
        <Ornament />
        <p className="mt-6 text-xs uppercase tracking-[0.5em] text-brass/70">A Celebration Of</p>
        <h2 className="mt-6 font-display text-4xl sm:text-6xl text-gold-foil leading-tight">
          Devotion, Tradition &amp; Divine Energy
        </h2>
        <p className="mt-10 font-serif text-xl sm:text-2xl text-brass/90 leading-relaxed">
          A grand spiritual gathering uniting sacred Vedic rituals, the legendary Siddhivinayak Aarti,
          the rhythmic thunder of the Nashik Dhol Pathak, and soul-stirring devotional music 
          all conducted under the guidance of renowned spiritual leaders.
        </p>
        <p className="mt-6 font-serif text-lg text-brass/70 italic">
          One evening. Nine planets. Infinite blessings.
        </p>
        <Ornament className="mt-10" />
      </motion.div>
    </section>
  );
}

/* ---------------- TIMELINE ---------------- */
const TIMELINE = [
  { time: "6:30 PM", title: "Grand Nashik Dhol Procession", icon: "◉" },
  { time: "6:45 PM", title: "Siddhivinayak Aarti", icon: "卐" },
  { time: "7:00 PM", title: "Welcome & Invocation", icon: "ॐ" },
  { time: "7:15 PM", title: "Devotional Concert & Sacred Music", icon: "♪" },
  { time: "8:40 PM", title: "Refreshment Break", icon: "✦" },
  { time: "9:00 PM", title: "Maha Navagraha Puja", icon: "☀" },
  { time: "10:00 PM", title: "Prasad & Closing Ceremony", icon: "❀" },
];

function Timeline() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <motion.div {...fadeUp} className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-brass/70">
            The Experience
          </p>

          <h2 className="mt-4 font-display text-4xl sm:text-6xl text-gold-foil">
            Sacred Timeline
          </h2>

          <Ornament className="mt-6" />
        </div>

        <div className="relative mt-16 md:mt-20">
          {/* Desktop Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden md:block w-px bg-gradient-to-b from-transparent via-gold to-transparent" />

          {/* Mobile Line */}
          <div className="absolute left-6 top-0 bottom-0 md:hidden w-px bg-gradient-to-b from-transparent via-gold to-transparent" />

          <div className="space-y-10 md:space-y-12">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.time}
                {...fadeUp}
                transition={{
                  duration: 0.7,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
              >
                {/* MOBILE */}
                <div className="flex items-start gap-4 md:hidden">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
                    <span className="font-display text-lg text-ivory">
                      {item.icon}
                    </span>
                  </div>

                  <div className="pt-1">
                    <p className="font-display text-lg text-gold-deep tracking-wide">
                      {item.time}
                    </p>

                    <h3 className="mt-1 text-base text-brass leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* DESKTOP */}
                <div
                  className={`hidden md:flex items-center gap-8 ${
                    i % 2 === 0
                      ? "flex-row"
                      : "flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <div
                      className={
                        i % 2 === 0
                          ? "text-right"
                          : "text-left"
                      }
                    >
                      <p className="font-display text-2xl text-gold-deep tracking-widest">
                        {item.time}
                      </p>

                      <h3 className="mt-2 font-display text-xl text-brass">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-gold shadow-gold animate-glow">
                    <span className="font-display text-2xl text-ivory">
                      {item.icon}
                    </span>
                  </div>

                  <div className="flex-1" />
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </motion.div>
          {/* CTA BUTTON */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16 flex justify-center"
    >
      <a
        href="https://www.district.in/events/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-full bg-gradient-gold px-10 py-4 text-sm uppercase tracking-[0.3em] text-ivory shadow-divine hover:scale-105 transition"
      >
        <span className="relative z-10">Reserve Your Seat</span>
        <span className="absolute inset-0 animate-shimmer" />
      </a>
    </motion.div>
    </section>
  );
}

/* ---------------- HIGHLIGHTS ---------------- */
const HIGHLIGHTS = [
  { title: "Maha Navagraha Puja", desc: "Cosmic alignment ritual for all nine planets", icon: "☉" },
  { title: "50-Member Nashik Dhol", desc: "Thunderous procession that opens the gates", icon: "◉" },
  { title: "Siddhivinayak Aarti", desc: "Performed by 21 revered pandits", icon: "卐" },
  { title: "Live Devotional Concert", desc: "Cinematic sound, sacred verses", icon: "♪" },
  { title: "Abhi Dutt Live", desc: "Bhakti rock that moves the soul", icon: "✶" },
  { title: "JJ Vyck Live", desc: "Contemporary voice of devotion", icon: "✷" },
  { title: "Sacred Prasad", desc: "Blessed offerings for every devotee", icon: "❀" },
  { title: "Energized Navagraha Bracelet", desc: "A keepsake charged with divine energy", icon: "◈" },
];

function Highlights() {
  return (
    <section className="relative py-32 bg-gradient-parchment">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-brass/70">What Awaits You</p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl text-gold-foil">
            Event Highlights
          </h2>
          <Ornament className="mt-6" />
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl glass-card p-8 shadow-card hover:shadow-divine transition-all"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-2xl text-ivory shadow-gold">
                {h.icon}
              </div>
              <h3 className="mt-6 font-display text-xl text-brass">{h.title}</h3>
              <p className="mt-3 font-serif text-base text-muted-foreground">{h.desc}</p>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gold/10 blur-3xl group-hover:bg-gold/30 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- NAVAGRAHAS ---------------- */
const PLANETS = [
  { name: "Surya", meaning: "The Sun · Soul & Vitality", symbol: "☉" },
  { name: "Chandra", meaning: "The Moon · Mind & Emotion", symbol: "☽" },
  { name: "Mangal", meaning: "Mars · Courage & Energy", symbol: "♂" },
  { name: "Budha", meaning: "Mercury · Intellect & Speech", symbol: "☿" },
  { name: "Guru", meaning: "Jupiter · Wisdom & Fortune", symbol: "♃" },
  { name: "Shukra", meaning: "Venus · Love & Harmony", symbol: "♀" },
  { name: "Shani", meaning: "Saturn · Discipline & Karma", symbol: "♄" },
  { name: "Rahu", meaning: "North Node · Ambition", symbol: "☊" },
  { name: "Ketu", meaning: "South Node · Liberation", symbol: "☋" },
];

function Navagrahas() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="planets" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 animate-slow-spin"
        style={{ backgroundImage: `url(${navagrahaMandala})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/70 to-ivory" />
      <Particles count={30} />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-brass/70">Cosmic Pantheon</p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl text-gold-foil">
            The Nine Divine Planets
          </h2>
          <Ornament className="mt-6" />
          <p className="mt-6 font-serif text-lg text-brass/80 max-w-2xl mx-auto italic">
            Hover or tap each celestial body to discover its sacred essence.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-4 md:gap-6">
          {PLANETS.map((p, i) => (
            <motion.button
              key={p.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === i ? null : i)}
              className="group relative aspect-square rounded-full glass-card flex flex-col items-center justify-center p-2 shadow-card hover:shadow-divine transition-all hover:scale-110"
            >
              <span className="font-display text-3xl md:text-4xl text-gold-foil">{p.symbol}</span>
              <span className="mt-1 font-display text-[10px] md:text-xs uppercase tracking-widest text-brass">{p.name}</span>
              <span className="absolute -inset-1 rounded-full bg-gold/10 opacity-0 group-hover:opacity-100 blur-xl transition" />
            </motion.button>
          ))}
        </div>

        {active !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <p className="font-display text-2xl text-gold-deep">{PLANETS[active].name}</p>
            <p className="mt-2 font-serif text-lg text-brass italic">{PLANETS[active].meaning}</p>
          </motion.div>
        )}
        {active !== null && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="mt-12 text-center"
  >
    <p className="font-display text-2xl text-gold-deep">
      {PLANETS[active].name}
    </p>
    <p className="mt-2 font-serif text-lg text-brass italic">
      {PLANETS[active].meaning}
    </p>
  </motion.div>
)}

{/* CTA BUTTON */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-16 flex justify-center"
>
  <a
    href="https://www.district.in/events/"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative overflow-hidden rounded-full bg-gradient-gold px-10 py-4 text-sm uppercase tracking-[0.3em] text-ivory shadow-divine hover:scale-105 transition"
  >
    <span className="relative z-10">Reserve Your Seat</span>
    <span className="absolute inset-0 animate-shimmer" />
  </a>
</motion.div>
      </div>
    </section>
  );
}




/* ---------------- PERFORMERS ---------------- */
const PERFORMERS = [
  { name: "Abhi Dutt", role: "Bhakti Rock · Lead Voice", img: artistAbhi },
  { name: "JJ Vyck", role: "Contemporary Devotional", img: artistJJ },
  { name: "Shri. Siddhivinayak Pandits", role: "Mantra Chanting", img: artistAnuj },
  { name: "Swami Vedraj", role: "Spiritual Discourse", img: artistSwami },
];

  function Performers() {
    return (
      <section id="performers" className="relative py-32 bg-gradient-parchment">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...fadeUp} className="text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-brass/70">A Night Of</p>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl text-gold-foil">
              Featured Performers
            </h2>
            <Ornament className="mt-6" />
          </motion.div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {PERFORMERS.map((p, i) => (
              <motion.div
                key={p.name}
                {...fadeUp}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-divine transition-all"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brass/90 via-brass/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-6">
  <h3 className="font-display text-sm sm:text-base md:text-2xl text-ivory leading-tight break-words">
    {p.name}
  </h3>

  <p className="mt-1 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.12em] md:tracking-[0.3em] text-gold-soft">
    {p.role}
  </p>
</div>
                  <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

/* ---------------- SPIRITUAL LEADER ---------------- */
function SpiritualLeader() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
        <motion.div {...fadeUp} className="group relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-gold opacity-20 blur-2xl transition-all duration-700 group-hover:opacity-40" />
<div className="relative overflow-hidden rounded-2xl shadow-divine border border-gold/30">

  <img
    src={spiritualLeader}
    alt="Dr. Kiran Anand Namboothiri"
    loading="lazy"
    width={640  }
    height={480}
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  />

  <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition" />

</div>
          <div className="absolute -top-4 -left-4 w-20 h-20 text-gold"><CornerOrnament className="w-full h-full" /></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 text-gold scale-[-1]"><CornerOrnament className="w-full h-full" /></div>
        </motion.div>

        <motion.div {...fadeUp}>
          <p className="text-xs uppercase tracking-[0.5em] text-brass/70">Spiritual Leadership</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-gold-foil leading-tight">
            Dr. Kiran Anand<br />Namboothiri
          </h2>
          <p className="mt-2 font-serif italic text-lg text-brass/70">Chief Spiritual Guide</p>
          <Ornament className="my-8 justify-start" />
          <p className="font-serif text-lg text-brass/90 leading-relaxed">
            Chief Priest of Guruvayur Temple and the officiating priest for the Maha Navagraha
Puja, Dr. Kiran Anand Namboothiri is a distinguished Vedic scholar, Ayurvedic physician,
and spiritual practitioner from Kerala's revered Namboothiri tradition. Renowned for his
expertise in Vedic rituals, temple traditions, and sacred ceremonies, he has dedicated his life
to preserving and propagating India's spiritual heritage. At the Maha Navagraha Puja, he will
personally lead and perform the sacred rituals, invoking divine grace, planetary harmony,
prosperity, and spiritual well-being for all devotees.
          </p>
          <p className="mt-4 font-serif text-lg text-brass/80 leading-relaxed">
            Under his guidance, every chant, every offering, every flame becomes a vessel for cosmic alignment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
/* ---------------- SWAMI VEDRAJ ---------------- */
function SwamiVedraj() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">

        <motion.div {...fadeUp} className="group relative max-w-md mx-auto">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-gold opacity-20 blur-2xl transition-all duration-700 group-hover:opacity-40" />

          <div className="relative overflow-hidden rounded-2xl shadow-divine border border-gold/30">
            <img
              src={artistSwami}
              alt="Swami Vedraj"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition" />
          </div>

          <div className="absolute -top-4 -left-4 w-20 h-20 text-gold">
            <CornerOrnament className="w-full h-full" />
          </div>

          <div className="absolute -bottom-4 -right-4 w-20 h-20 text-gold scale-[-1]">
            <CornerOrnament className="w-full h-full" />
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <p className="text-xs uppercase tracking-[0.5em] text-brass/70">
            Vedic Mantra Chanting
          </p>

          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-gold-foil leading-tight">
            Swami Vedraj
          </h2>

          <p className="mt-2 font-serif italic text-lg text-brass/70">
            Vedic Mantra Chanter & Spiritual Guide
          </p>

          <Ornament className="my-8 justify-start" />

          <p className="font-serif text-lg text-brass/90 leading-relaxed">
            Leading the sacred Navagraha Mantra Chanting at the Maha Navagraha Puja, Swami
Vedraj is a revered spiritual guide and Vedic practitioner dedicated to preserving and sharing
the timeless wisdom of the Vedas. Through his teachings, discourses, and devotional
practices, he has inspired countless seekers on their spiritual journey. His profound
understanding of Vedic traditions and sacred chants creates a deeply uplifting and
transformative spiritual experience for devotees.
          </p>

          <p className="mt-4 font-serif text-lg text-brass/80 leading-relaxed">
            During the Maha Navagraha Puja, Swami Vedraj will lead the sacred
            mantra chanting dedicated to all nine celestial planets, creating a
            powerful vibrational field that invokes divine blessings, cosmic
            harmony, and collective spiritual upliftment.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}
/* ---------------- TICKETS ---------------- */


/* ---------------- LEAD FORM ---------------- */
function Counter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 2000,
  });

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ---------------- SOCIAL PROOF ---------------- */
function SocialProof() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="text-center">
          <Ornament />
          <h2 className="mt-6 font-display text-4xl sm:text-5xl text-gold-foil">A Gathering of Devotees</h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
  { n: 2600, suffix: "+", l: "Expected Devotees" },
  { n: 9, suffix: "", l: "Sacred Planets" },
  { n: 50, suffix: "", l: "Nashik Dhol Members" },
  { n: 21, suffix: "", l: "Senior Pandits" },
].map((s) => (
            <motion.div {...fadeUp} key={s.l} className="text-center">
             <div className="font-display text-5xl sm:text-6xl text-gold-foil">
  <Counter value={s.n} suffix={s.suffix} />
</div>
              <div className="mt-2 text-xs uppercase tracking-[0.3em] text-brass/70">{s.l}</div>
            </motion.div>
          ))}
        </div>



        <motion.div {...fadeUp} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[pujaRitual, dholPathak, aartiPandits, concertCrowd].map((img) => (
            <div key={img} className="aspect-square overflow-hidden rounded-2xl shadow-card">
              <img src={img} alt="Past gathering" loading="lazy" className="w-full h-full object-cover hover:scale-110 transition duration-700" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "What is Navagraha Puja?", a: "Navagraha Puja is a sacred Vedic ritual honoring the nine celestial bodies , the Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu and Ketu believed to influence our karmic journey." },
  { q: "What should I bring?", a: "Just yourself, an open heart, and your ticket. Devotional attire is appreciated but not mandatory." },
  { q: "Is parking available?", a: "Yes, ample valet and self-parking is available at the Shanmukhananda Auditorium complex." },
  { q: "Are children allowed?", a: "Children above 5 years are welcome. Each attendee, including children, requires a ticket." },
  { q: "Will prasad be provided?", a: "Yes, sacred prasad will be distributed to every attendee at the close of the ceremony." },
  { q: "What are the ticket benefits?", a: "Each tier offers seating, priority entry, prasad, and exclusive perks like the energized Navagraha bracelet on premium tiers." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-32 bg-gradient-parchment">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div {...fadeUp} className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-brass/70">Sacred Inquiries</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-gold-foil">Frequently Asked</h2>
          <Ornament className="mt-6" />
        </motion.div>

        <div className="mt-16 space-y-4">
          {FAQS.map((f, i) => (
            <motion.div
              {...fadeUp}
              key={f.q}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="glass-card rounded-2xl overflow-hidden shadow-card"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-display text-lg text-brass">{f.q}</span>
                <span className={`text-gold-deep text-2xl transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 font-serif text-base text-brass/80 leading-relaxed">{f.a}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${templeBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/70 to-ivory" />
      <Particles count={40} />

      <motion.div {...fadeUp} className="relative mx-auto max-w-4xl px-6 text-center">
        <Ornament />
        <h2 className="mt-8 font-display text-4xl sm:text-6xl text-gold-foil leading-tight">
          Align Your Destiny<br />With The Nine Divine Planets
        </h2>
        <p className="mt-8 font-serif text-xl text-brass/90 italic">
          One evening to shift the orbit of your life.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.district.in/events/"
            className="rounded-full bg-gradient-gold px-10 py-4 text-sm uppercase tracking-[0.3em] text-ivory shadow-divine hover:scale-105 transition"
          >
            Book Now
          </a>
 
        </div>
        <Ornament className="mt-12" />
        

<div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-brass/80">
  <a
    href="https://www.instagram.com/samsarahsacredsouls"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-gold-deep transition"
  >
    <Instagram size={18} />
    <span>Instagram</span>
  </a>

  <a
    href="https://www.facebook.com/samsarahsacredsouls"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-gold-deep transition"
  >
    <Facebook size={18} />
    <span>Facebook</span>
  </a>

  <a
    href="tel:+91 90820 88736"
    className="flex items-center gap-2 hover:text-gold-deep transition"
  >
    <Phone size={18} />
    <span>+91 90820 88736</span>
  </a>
    <a
    href="https://maps.app.goo.gl/qmxN2RekZ2cKzfVBA"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-gold-deep transition"
  >
    <MapPin size={18} />
    <span>Location</span>
  </a>


</div>
<div className="mt-12">
  <Ornament />

  <p className="mt-6 text-xs uppercase tracking-[0.5em] text-brass/60">
    Venue
  </p>

  <p className="mt-4 font-display text-xl sm:text-2xl text-gold-foil">
    Sri Shanmukhananda
  </p>

  <p className="font-display text-lg sm:text-xl text-brass">
    Chandrasekarendra Saraswathi Auditorium
  </p>

  <p className="mt-2 text-brass/70">
    Mumbai
  </p>
</div>
      </motion.div>
    </section>
  );
  
}
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold shadow-divine transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6 text-ivory" />
    </button>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-gold/20 py-12 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <img
          src={logo}
          alt="NAVAM"
          className="h-20 md:h-24 w-auto mx-auto object-contain"
        />

        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-brass/60">
          Sacred Souls Presents · The Festival of Nine Divine
        </p>

        <p className="mt-6 text-xs text-brass/50">
          © 2026 Sacred Souls · 19 July 2026 · Mumbai
        </p>
      </div>
    </footer>
  );
}
