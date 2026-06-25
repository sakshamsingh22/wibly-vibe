import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput, { parsePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ChevronDown, ChevronRight, ExternalLink, Target, Compass, ShoppingBag, ShieldCheck, ArrowRight, Plus, Minus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export const SERVICES = [
  { idx: "01", tag: "Conversion", title: "Landing Pages", body: "One powerful page engineered to convert. Perfect for product launches, ad campaigns and lead generation.", Icon: Target },
  { idx: "02", tag: "Identity", title: "Business Sites", body: "A 5-page online HQ — sharp, structured, on-brand.", Icon: Compass },
  { idx: "03", tag: "Revenue", title: "E-Commerce", body: "Sell 24/7. Stores built to convert.", Icon: ShoppingBag },
  { idx: "04", tag: "Reliability", title: "Care & Maintenance", body: "Monthly retainers that keep your site fast, secure and current. Sleep at night while we handle the rest.", Icon: ShieldCheck },
];

export const PROCESS = [
  { phase: "Phase 01", n: "01", title: "Discover", body: "We learn your goals, brand, audience — in a focused intake call." },
  { phase: "Phase 02", n: "02", title: "Design", body: "Custom direction crafted from scratch. No templates, ever." },
  { phase: "Phase 03", n: "03", title: "Refine", body: "Two rounds of revisions. Your input drives every detail." },
  { phase: "Phase 04", n: "04", title: "Launch", body: "Deploy. Train. Go live. We stand by post-launch." },
];

export const WORK = [
  { tag: "Food & Beverage", title: "Bella's Bakery", body: "A warm, inviting site with online menu and integrated ordering for a beloved neighborhood bakery.", img: "https://images.pexels.com/photos/9514677/pexels-photo-9514677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900", chips: ["Custom CMS", "Online Ordering", "Local SEO"] },
  { tag: "Home Services", title: "FixRight Plumbing", body: "Trust-first service site with integrated booking form, service area mapping, and emergency call routing.", img: "https://images.pexels.com/photos/35819418/pexels-photo-35819418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900", chips: ["Booking", "Service Areas", "Reviews"] },
  { tag: "Health & Fitness", title: "Spark Fitness Studio", body: "Dynamic gym website with class scheduling, trainer profiles and frictionless membership signup.", img: "https://images.pexels.com/photos/19548561/pexels-photo-19548561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900", chips: ["Schedule", "Memberships", "Stripe"] },
];

export const PRICING = [
  { tier: "Launch", price: "$69", note: "For startups & local businesses needing a sharp first presence.", cta: "Get Started", features: ["1 Page Website", "Mobile Responsive", "Contact Form", "Basic SEO Setup", "Social Media Links", "3 Revisions", "3-Day Delivery"] },
  { tier: "Growth", price: "$129", popular: true, note: "Most popular — for growing businesses ready to compete.", cta: "Choose Growth", features: ["Up to 5 Pages", "Mobile Responsive", "Lead Forms", "SEO Foundations", "Speed Optimization", "Social Integration", "5 Revisions", "5-Day Delivery"] },
  { tier: "Scale", price: "$199", note: "For businesses ready to expand and scale online.", cta: "Scale My Business", features: ["Up to 8 Pages", "Mobile Responsive", "Blog Setup", "Advanced Forms", "Speed Optimization", "Priority Support", "Unlimited Revisions", "7-Day Delivery"] },
];

export const FAQ = [
  { q: "How long does it take to build my website?", a: "Most websites are delivered within 5–7 days. Rush delivery is available for urgent projects — just ask." },
  { q: "Do I need to provide anything?", a: "Just your goals, brand assets if you have them, and any reference sites you love. We'll handle the rest — including stock imagery and copy direction." },
  { q: "Will my website work on mobile?", a: "Yes. Every Wibly site is mobile-first by default, tested across iOS and Android, and optimised for thumb-friendly interactions." },
  { q: "What if I don't like the design?", a: "Every plan includes structured revisions. We refine direction together until you genuinely love it before any final code is written." },
  { q: "How do I pay?", a: "50% to start, 50% on launch. We accept card, UPI, and international wire transfer. Invoices are issued for every payment." },
  { q: "Can you update my existing website?", a: "Absolutely. Our Care & Maintenance retainer covers updates, performance tuning, content edits, and security patches on a monthly basis." },
];

export const TICKER = ["100% Custom Built", "Lightning Fast", "Mobile First", "SEO Optimized", "Conversion Focused", "Transparent Pricing", "Direct With Founder", "You Own It All"];

export function Section({ id, eyebrow, num, title, intro, children }) {
  return (
    <section id={id} className="relative py-24 md:py-32" data-testid={`section-${id}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="eyebrow mb-6"><span className="text-[var(--text-dim)]">/ {num}</span> &nbsp; {eyebrow}</div>
        <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-end">
          <h2 className="md:col-span-8 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]">
            {title}
          </h2>
          {intro && <p className="md:col-span-4 text-[var(--text-muted)] text-base md:text-lg">{intro}</p>}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

export function HeroMockup() {
  return (
    <div className="relative w-full aspect-[5/4] hidden lg:block" data-testid="hero-mockup">
      {/* Browser 1 */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-0 right-0 w-[78%] rounded-xl border border-[var(--border)] bg-[#0e0c0b] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[10px] font-mono text-[var(--text-dim)]">app.wibly.studio/analytics</span>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-dim)]">Conversions</div>
              <div className="text-3xl font-semibold mt-1">12,847</div>
            </div>
            <div className="text-emerald-400 text-xs font-mono">↑ 24.3%</div>
          </div>
          <svg viewBox="0 0 200 60" className="w-full h-16 mt-3">
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ff6a2c" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ff6a2c" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 50 L20 42 L40 46 L60 30 L80 34 L100 22 L120 26 L140 14 L160 18 L180 8 L200 12 L200 60 L0 60 Z" fill="url(#g1)" />
            <path d="M0 50 L20 42 L40 46 L60 30 L80 34 L100 22 L120 26 L140 14 L160 18 L180 8 L200 12" stroke="#ff6a2c" strokeWidth="1.5" fill="none" />
          </svg>
          <div className="flex justify-between mt-3 text-[10px] font-mono text-[var(--text-dim)]">
            <div>Sessions <span className="text-[var(--text)]">48.2K</span></div>
            <div>Bounce <span className="text-[var(--text)]">1.4%</span></div>
            <div>Speed <span className="text-[var(--text)]">0.6s</span></div>
          </div>
        </div>
      </motion.div>

      {/* Browser 2 - palette */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 1 }}
        className="absolute top-[32%] left-0 w-[55%] rounded-xl border border-[var(--border)] bg-[#0e0c0b] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[10px] font-mono text-[var(--text-dim)]">figma.com/wibly/brand</span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-5 gap-1.5">
            <div className="aspect-square rounded bg-[#0a0807] border border-[var(--border)]" />
            <div className="aspect-square rounded bg-[#ff6a2c]" />
            <div className="aspect-square rounded bg-[#7a6cf3]" />
            <div className="aspect-square rounded bg-[#f3ece2]" />
            <div className="aspect-square rounded bg-[#28c840]" />
          </div>
          <div className="grid grid-cols-5 gap-1.5 mt-1.5 text-[9px] font-mono text-[var(--text-dim)] text-center">
            <div>Ink</div><div>Flame</div><div>Indigo</div><div>Bone</div><div>Live</div>
          </div>
          <div className="mt-4 pt-3 border-t border-[var(--border)]">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-dim)]">Typeface</div>
            <div className="text-xs mt-1">Inter · <span className="font-serif italic">Instrument Serif</span></div>
            <div className="text-3xl mt-1">Aa <span className="font-serif italic">Aa</span></div>
          </div>
        </div>
      </motion.div>

      {/* Browser 3 - bakery */}
      <motion.div 
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity, delay: 2.5 }}
        className="absolute bottom-0 right-[8%] w-[58%] rounded-xl border border-[var(--border)] bg-[#0e0c0b] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border)]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[10px] font-mono text-[var(--text-dim)]">bellas-bakery.com</span>
        </div>
        <div className="p-3 flex gap-3">
          <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-[#7a3818] to-[#4a1e0d] flex items-end p-2">
            <span className="text-[9px] text-[#f3ece2]/80">Sourdough Loaf</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] font-mono uppercase tracking-widest text-[var(--text-dim)]">Fresh today</div>
            <div className="text-base font-semibold leading-tight mt-0.5">Artisan<br/>Sourdough</div>
            <div className="text-[10px] text-[var(--text-muted)] mt-1">Naturally leavened, baked at dawn.</div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-base font-semibold">$8.50</span>
              <button className="px-3 py-1 text-[10px] rounded-full bg-white text-black font-medium">Add</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function FAQItem({ q, a, idx }) {
  const [open, setOpen] = useState(idx === 0);
  return (
    <div className="border-t border-[var(--border)]" data-testid={`faq-${idx}`}>
      <button
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${idx}`}
      >
        <span className="text-lg md:text-xl text-[var(--text)] group-hover:text-[var(--accent-soft)] transition">{q}</span>
        <span className="shrink-0 w-9 h-9 grid place-items-center rounded-full border border-[var(--border)] text-[var(--text-muted)]">
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>
      <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="pb-6 pr-12 text-[var(--text-muted)]">{a}</p>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", service: "", message: "" });
  const [phoneError, setPhoneError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyU2zJAGAB1XOQ3qLY8N66aHYAbzAL7ueXr42h8WwzAxq76iAfcHG7gfEE4x-B3MGYo/exec";

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;

    if (form.phone && !isValidPhoneNumber(form.phone)) {
      setPhoneError(true);
      return;
    }
    setPhoneError(false);

    // Parse the phone number to get country code and national number
    const parsedPhone = form.phone ? parsePhoneNumber(form.phone) : null;
    const finalData = {
      name: form.name,
      email: form.email,
      full_phone_number: form.phone || "",
      business: form.business,
      service: form.service,
      message: form.message
    };

    setLoading(true);
    setToast(null);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      setToast({ message: "Message sent successfully. We'll get back to you within 24 hours.", type: "success" });
      setForm({ name: "", email: "", phone: "", business: "", service: "", message: "" });
      setTimeout(() => setToast(null), 5000);
    } catch (error) {
      console.error("Error submitting form", error);
      setToast({ message: "Something went wrong. Please try again.", type: "error" });
      setTimeout(() => setToast(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="card p-6 md:p-10 grid gap-7" data-testid="contact-form">
      <div className="grid md:grid-cols-2 gap-7">
        <div>
          <div className="eyebrow mb-2">Name*</div>
          <input className="field" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} data-testid="contact-name" />
        </div>
        <div>
          <div className="eyebrow mb-2">Email*</div>
          <input type="email" className="field" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} data-testid="contact-email" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-7">
        <div>
          <div className="eyebrow mb-2">Phone</div>
          <PhoneInput
            international
            defaultCountry="US"
            value={form.phone}
            onChange={(value) => {
              setForm({ ...form, phone: value });
              setPhoneError(false);
            }}
            className={phoneError ? "error" : ""}
          />
          {phoneError && <span className="text-red-500 text-xs mt-1 absolute">Invalid phone number</span>}
        </div>
        <div>
          <div className="eyebrow mb-2">Business</div>
          <input className="field" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} data-testid="contact-business" />
        </div>
      </div>
      <div>
        <div className="eyebrow mb-2">What do you need?</div>
        <select className="field" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} data-testid="contact-service">
          <option value="" style={{ background: "#0e0c0b" }}>Select a service…</option>
          <option style={{ background: "#0e0c0b" }}>Landing Page</option>
          <option style={{ background: "#0e0c0b" }}>Business Website</option>
          <option style={{ background: "#0e0c0b" }}>E-Commerce</option>
          <option style={{ background: "#0e0c0b" }}>Maintenance</option>
          <option style={{ background: "#0e0c0b" }}>Other</option>
        </select>
      </div>
      <div>
        <div className="eyebrow mb-2">Message</div>
        <textarea rows={3} className="field resize-none" placeholder="Tell us about your project…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} data-testid="contact-message" />
      </div>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div className="text-xs text-[var(--text-muted)]">We reply within 24 hours.</div>
        <button 
          type="submit" 
          disabled={loading}
          className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed" 
          data-testid="contact-submit"
        >
          {loading ? "Sending..." : <>Send Message <ArrowRight size={15} /></>}
        </button>
      </div>
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 max-w-sm w-full bg-[#181614] border border-[var(--border)] rounded-lg p-4 shadow-2xl z-50 flex items-start gap-3 fade-up">
          <div className={`shrink-0 w-5 h-5 mt-0.5 rounded-full grid place-items-center ${toast.type === "success" ? "bg-emerald-500/20 text-emerald-500" : "bg-red-500/20 text-red-500"}`}>
            {toast.type === "success" ? "✓" : "✕"}
          </div>
          <div className="text-sm text-[var(--text)] leading-snug">{toast.message}</div>
        </div>
      )}
    </form>
  );
}


export function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 bg-noise" data-testid="hero">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <div className="eyebrow flex items-center gap-2 mb-6 fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Web Design Studio · Est. 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.02] tracking-tight fade-up delay-1">
              Websites<br/>
              that grow<br/>
              <span className="font-serif italic text-[var(--accent-soft)]">businesses.</span>
            </h1>
            <p className="mt-6 max-w-md text-[var(--text-muted)] text-lg fade-up delay-2">
              We design and engineer premium websites that look world-class, load lightning fast, and convert visitors into customers. No templates. No fluff. Built in days, not months.
            </p>
            <div className="mt-8 flex items-center gap-3 flex-wrap fade-up delay-3">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" data-testid="hero-book-call">
                Book a Free Call <ExternalLink size={14} />
              </a>
              <a href="#work" className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium" data-testid="hero-portfolio">
                View Portfolio
              </a>
            </div>
          </div>
          <HeroMockup />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 mt-20">
          <div className="divider" />
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              ["5–7", "Days to launch"],
              ["100%", "Custom built"],
              ["$69", "Starting at"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl md:text-5xl font-semibold tracking-tight">{n}</div>
                <div className="eyebrow mt-2">{l}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-right eyebrow">Scroll to explore ↓</div>
        </div>
      </section>
  );
}

export function ProblemSection() {
  return (
    <Section id="problem" num="01" eyebrow="The problem"
        title={<>Is your website <span className="font-serif italic text-[var(--accent-soft)]">costing</span> you customers?</>}
        intro="Most small business websites quietly leak revenue every single day. Three reasons why.">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            ["01", "It loads too slow", "Visitors leave in 3 seconds if your page lags. We engineer for sub-second loads."],
            ["02", "It breaks on mobile", "60% of your traffic is on phones. A broken mobile site quietly kills revenue."],
            ["03", "It looks outdated", "First impressions decide. An old website destroys trust in the first glance."],
          ].map(([n, t, b]) => (
            <div key={n} className="card p-7">
              <div className="eyebrow text-[var(--accent-soft)]">/{n}</div>
              <h3 className="mt-5 text-xl font-semibold">{t}</h3>
              <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{b}</p>
              <a href="#services" className="mt-6 inline-flex items-center gap-1 text-sm text-[var(--accent-soft)] hover:text-[var(--accent)] transition">
                We solve this <ChevronRight size={14} />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-[var(--text-muted)] font-serif italic text-2xl">
          Every day without a great website is a day you're losing money.
        </p>
      </Section>
  );
}

export function ServicesSection() {
  return (
    <Section id="services" num="02" eyebrow="Services"
        title={<>What we build <span className="font-serif italic text-[var(--accent-soft)]">for you.</span></>}
        intro="Four core offerings. Each one shaped around outcomes, not deliverables.">
        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map(({ idx, tag, title, body, Icon }) => (
            <a key={idx} href="#contact" className="card p-8 group" data-testid={`service-${idx}`}>
              <div className="flex items-start justify-between">
                <div className="eyebrow">{idx} / {tag}</div>
                <span className="w-9 h-9 rounded-full border border-[var(--border)] grid place-items-center text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)] transition">
                  <ArrowRight size={14} />
                </span>
              </div>
              <Icon size={26} className="mt-10 text-[var(--accent-soft)]" />
              <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-[var(--text-muted)] leading-relaxed">{body}</p>
            </a>
          ))}
        </div>
      </Section>
  );
}

export function ProcessSection() {
  return (
    <Section id="process" num="03" eyebrow="The process"
        title={<>From idea to <span className="font-serif italic text-[var(--accent-soft)]">live website.</span></>}
        intro="A transparent four-step process designed to get you online fast — without sacrificing craft.">
        <div className="grid md:grid-cols-4 gap-4">
          {PROCESS.map(({ phase, n, title, body }, i) => (
            <div key={n} className="relative card p-7" data-testid={`process-${n}`}>
              <div className="eyebrow text-[var(--text-dim)]">{phase}</div>
              <div className="mt-8 text-5xl font-serif italic text-[var(--accent-soft)]">{n}</div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">{body}</p>
              {i < PROCESS.length - 1 && (
                <ChevronRight size={16} className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-[var(--text-dim)]" />
              )}
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-[var(--text-muted)] font-mono">Average Launch Time · 5–7 Days</p>
      </Section>
  );
}

export function WorkSection() {
  return (
    <Section id="work" num="04" eyebrow="Selected work"
        title={<>Recent <span className="font-serif italic text-[var(--accent-soft)]">concept projects.</span></>}
        intro="A curated look at design directions we've explored for small businesses across industries.">
        <div className="grid md:grid-cols-3 gap-5">
          {WORK.map((w, i) => (
            <div key={w.title} className="card overflow-hidden group" data-testid={`work-${i}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={w.img} alt={w.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="eyebrow">Concept · {String(i + 1).padStart(2, "0")}</div>
                  <span className="text-xs text-[var(--accent-soft)]">View case →</span>
                </div>
                <div className="mt-4 text-xs text-[var(--text-muted)]">{w.tag}</div>
                <h3 className="mt-1 text-xl font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{w.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {w.chips.map((c) => (
                    <span key={c} className="text-[11px] px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)]">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
  );
}

export function MarqueeSection() {
  return (
    <div className="relative py-8 border-y border-[var(--border)] overflow-hidden" data-testid="marquee">
        <div className="marquee-track">
          {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="font-serif italic text-3xl md:text-4xl text-[var(--text)]/80">
              {t} <span className="text-[var(--accent)]">✦</span>
            </span>
          ))}
        </div>
      </div>
  );
}

export function PricingSection() {
  return (
    <Section id="pricing" num="05" eyebrow="Investment"
        title={<>Simple, transparent <span className="font-serif italic text-[var(--accent-soft)]">pricing.</span></>}
        intro="No hidden fees. No surprises. Honest prices for serious craft.">
        <div className="grid md:grid-cols-3 gap-5">
          {PRICING.map((p) => (
            <div key={p.tier} className={`card p-8 relative ${p.popular ? "border-[var(--accent)]/40" : ""}`} data-testid={`pricing-${p.tier.toLowerCase()}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--accent)] text-white text-[11px] font-medium">Most Popular</div>
              )}
              <h3 className="text-2xl font-semibold">{p.tier}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-semibold">{p.price}</span>
                <span className="text-sm text-[var(--text-muted)]">one-time</span>
              </div>
              <p className="mt-3 text-sm text-[var(--text-muted)] min-h-[3em]">{p.note}</p>
              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-[var(--accent)] mt-1">✦</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex w-full justify-center items-center gap-2 px-5 py-3 rounded-full text-sm font-medium ${p.popular ? "btn-primary" : "btn-ghost"}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </Section>
  );
}

export function AboutSection() {
  return (
    <Section id="about" num="06" eyebrow="The studio"
        title={<>Built by <span className="font-serif italic text-[var(--accent-soft)]">Sam.</span></>}>
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="card overflow-hidden">
              <div className="relative">
                <img src="/sam.jpg" alt="Sam — founder of WIBLY" className="w-full h-auto aspect-[4/5] object-cover object-top" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur text-[11px] font-mono text-white">Founder · SAM</div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available
                </div>
              </div>
              <div className="p-5">
                <div className="text-xl font-semibold">Saksham</div>
                <div className="text-sm text-[var(--text-muted)] mt-1">Founder · Web Engineer · Designer</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 text-[var(--text-muted)] leading-relaxed">
            <p>Hi, I'm Saksham — but most clients call me Sam. I'm a web developer and the founder of WIBLY, a professional web design studio built to help small businesses get the online presence they deserve.</p>
            <p className="mt-4">I believe every business — no matter how small — deserves a website that actually works. That brings in customers. That they're proud of. I use modern engineering and conversion-focused design to deliver agency-quality websites at prices small businesses can actually afford.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["React", "HTML/CSS", "JavaScript", "Responsive Design", "SEO", "Framer Motion", "UI/UX", "Web Performance"].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text)]">{t}</span>
              ))}
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-full text-sm font-medium">
              Let's work together <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </Section>
  );
}

export function FAQSection() {
  return (
    <Section id="faq" num="07" eyebrow="Questions"
        title={<>Got questions? <span className="font-serif italic text-[var(--accent-soft)]">Good.</span></>}
        intro="The answers to everything you're wondering before we start.">
        <div className="max-w-3xl">
          {FAQ.map((f, i) => <FAQItem key={f.q} idx={i} {...f} />)}
          <div className="border-t border-[var(--border)]" />
        </div>
      </Section>
  );
}

export function ContactSection() {
  return (
    <Section id="contact" num="08" eyebrow="Get in touch"
        title={<>Let's build something <span className="font-serif italic text-[var(--accent-soft)]">great.</span></>}>
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-8">
            <div>
              <div className="eyebrow mb-2">Email</div>
              <a href="mailto:wibly.in@gmail.com" className="text-lg hover:text-[var(--accent-soft)] transition" data-testid="contact-email-link">wibly.in@gmail.com</a>
              <div className="divider mt-6" />
            </div>
            <div>
              <div className="eyebrow mb-2">Response time</div>
              <div className="text-lg">Within 24 hours</div>
              <div className="divider mt-6" />
            </div>
            <div>
              <div className="eyebrow mb-2">Working with clients</div>
              <div className="text-lg">Worldwide · Remote</div>
            </div>
          </div>
          <div className="md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </Section>
  );
}


export default function Home() {
  return (
    <div className="relative grain" data-testid="home-page">
      <SEO title="WIBLY — Websites that grow businesses" description="We design and engineer premium websites that look world-class, load lightning fast, and convert visitors into customers." canonical="/" />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <MarqueeSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

