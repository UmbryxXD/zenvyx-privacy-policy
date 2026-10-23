
"use client";

import { useEffect, useState } from "react";
import {
  ShieldCheck, Ticket, Music2, Users, Settings2,
  Sparkles, ArrowUpRight, LockKeyhole, Menu, X,
  Disc3, Headphones, Zap, Database, Eye, Heart,
  ChevronRight
} from "lucide-react";

const features = [
  { icon: ShieldCheck, number: "01", title: "Moderation", desc: "Keep your community safe with powerful moderation tools.", tag: "COMMUNITY SAFETY" },
  { icon: Ticket, number: "02", title: "Ticket System", desc: "Give your members a clean, organized support experience.", tag: "SMART SUPPORT" },
  { icon: Users, number: "03", title: "Invite Tracker", desc: "Understand invite activity and community growth.", tag: "GROW TOGETHER" },
  { icon: Music2, number: "04", title: "Music System", desc: "Bring music and entertainment into your server.", tag: "YOUR SOUNDTRACK" },
  { icon: Settings2, number: "05", title: "Management", desc: "Useful tools to make server management easier.", tag: "TOTAL CONTROL" },
  { icon: Sparkles, number: "06", title: "And More", desc: "Discover more tools in one versatile Discord bot.", tag: "ALL-IN-ONE" },
];

const policies = [
  { icon: Database, title: "Information we may process", text: "Depending on enabled features, this may include Discord user and server IDs, configuration settings, moderation records, ticket content, and invite information." },
  { icon: Settings2, title: "How features use information", text: "Moderation, support tickets, invite tracking, and music may each process different information to provide their respective features." },
  { icon: LockKeyhole, title: "Storage and retention", text: "The operator must document what is stored, where it is stored, who can access it, and how long it is retained." },
  { icon: Heart, title: "Questions and data requests", text: "Contact the bot operator through the official contact details published here to ask privacy questions or request data handling assistance." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Home", "Features", "Privacy Policy", "About"];

  return (
    <main className="site-shell" id="home">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="Zenvyx home">
          <span className="brand-mark">Z</span>
          <span>ZEN<span className="brand-purple">VYX</span></span>
        </a>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {navItems.map((item) => (
            <a
              key={item}
              className={active === item ? "nav-active" : ""}
              href={item === "Home" ? "#home" : item === "Features" ? "#features" : item === "About" ? "#about" : "#privacy"}
              onClick={() => { setActive(item); setMenuOpen(false); }}
            >
              {item}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#features">
          <Sparkles size={15} /> Explore Zenvyx
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="pill reveal">
            <span className="pulse-dot" /> THE ZENVYX EXPERIENCE
          </div>

          <h1 className="hero-title reveal reveal-delay-1">
            One bot.
            <br />
            <span className="gradient-text">Infinite vibes.</span>
          </h1>

          <p className="hero-description reveal reveal-delay-2">
            Meet your server&apos;s new favorite companion.
            Moderation, tickets, invites, music, and more —
            all brought together by Zenvyx.
          </p>

          <div className="hero-actions reveal reveal-delay-3">
            <a className="btn btn-primary" href="#features">
              Explore features <ArrowUpRight size={17} />
            </a>
            <a className="btn btn-ghost" href="#privacy">
              <ShieldCheck size={17} /> Privacy center
            </a>
          </div>

          <div className="hero-trust reveal reveal-delay-3">
            <span className="trust-icon"><LockKeyhole size={14} /></span>
            Built with transparency in mind
          </div>
        </div>

        <div className="hero-art" aria-label="Decorative Zenvyx purple orb">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="orbit orbit-c" />
          <div className="orb-halo" />
          <div className="hero-orb">
            <div className="orb-inner">
              <span className="orb-z">Z</span>
              <span className="orb-label">ZEN<span>VYX</span></span>
              <span className="orb-status"><i /> ALL SYSTEMS • YOUR COMMUNITY</span>
            </div>
          </div>
          <div className="float-card float-card-top">
            <span className="float-icon"><ShieldCheck size={19} /></span>
            <span><b>Community first</b><small>Tools for your server</small></span>
          </div>
          <div className="float-card float-card-bottom">
            <span className="float-icon"><Disc3 size={19} /></span>
            <span><b>All-in-one vibes</b><small>One bot, more possibilities</small></span>
          </div>
          <div className="spark spark-a">✦</div>
          <div className="spark spark-b">✧</div>
          <div className="spark spark-c">✦</div>
        </div>

        <div className="hero-bottom">
          <span>BUILT FOR DISCORD COMMUNITIES</span>
          <div className="hero-bottom-line" />
          <a href="#features">SCROLL TO EXPLORE <span>↓</span></a>
        </div>
      </section>

      <section className="feature-section section-wrap" id="features">
        <div className="section-top">
          <div>
            <div className="eyebrow"><Zap size={14} /> THE ECOSYSTEM / 001</div>
            <h2>Everything your server <span className="gradient-text">needs.</span></h2>
            <p className="section-description">Six categories. One versatile companion. A better way to run your community.</p>
          </div>
          <a href="#privacy" className="text-link">Built around trust <ArrowUpRight size={16} /></a>
        </div>

        <div className="feature-grid">
          {features.map(({ icon: Icon, number, title, desc, tag }, index) => (
            <article
              className="feature-card"
              key={number}
              style={{ "--delay": `${index * 90}ms` }}
            >
              <div className="feature-card-head">
                <div className="feature-icon"><Icon size={23} /></div>
                <span className="feature-number">{number}</span>
              </div>
              <div className="feature-tag">{tag}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a className="feature-arrow" href="#privacy" aria-label={`Learn about ${title}`}><ArrowUpRight size={19} /></a>
              <div className="card-glow" />
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-section" id="privacy">
        <div className="privacy-layout section-wrap">
          <div className="privacy-intro">
            <div className="eyebrow"><LockKeyhole size={14} /> THE PRIVACY CENTER / 002</div>
            <h2>Your data.<br /><span className="gradient-text">Your understanding.</span></h2>
            <p>Privacy shouldn&apos;t feel like a mystery. Here&apos;s an overview of the information Zenvyx may process and the details its operator needs to disclose.</p>

            <div className="privacy-points">
              <div><ShieldCheck size={17} /><span>Transparency first</span></div>
              <div><Eye size={17} /><span>Clear data practices</span></div>
              <div><Heart size={17} /><span>Community focused</span></div>
            </div>

            <div className="privacy-signature">Your trust means everything. <span>— Zenvyx</span></div>
          </div>

          <div className="policy-panel">
            {policies.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <article className="policy-row" key={policy.title}>
                  <div className="policy-index">{String(index + 1).padStart(2, "0")}</div>
                  <div className="policy-content">
                    <h3>{policy.title}</h3>
                    <p>{policy.text}</p>
                  </div>
                  <Icon className="policy-icon" size={19} />
                </article>
              );
            })}

            <div className="policy-warning">
              <LockKeyhole size={18} />
              <p><strong>Policy draft notice</strong><br />This overview must be checked against Zenvyx&apos;s actual storage, retention, access, and deletion practices before publication.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="about-copy">
          <div className="eyebrow"><Sparkles size={14} /> WHY ZENVYX?</div>
          <h2>More tools.<br /><span className="gradient-text">Less hassle.</span></h2>
          <p>From everyday moderation to community entertainment, Zenvyx brings useful server tools together in one place.</p>
        </div>
        <div className="about-cards">
          <div className="mini-card"><ShieldCheck /><b>Community</b><span>Tools for safer spaces</span></div>
          <div className="mini-card"><Headphones /><b>Entertainment</b><span>Bring the vibes</span></div>
          <div className="mini-card"><Settings2 /><b>Management</b><span>Keep things organized</span></div>
          <div className="mini-card"><Heart /><b>Transparency</b><span>Know what to expect</span></div>
        </div>
      </section>

      <section className="cta-section section-wrap">
        <div className="cta-panel">
          <div className="cta-orb"><Sparkles size={30} /></div>
          <div>
            <div className="eyebrow">YOUR COMMUNITY, YOUR WAY</div>
            <h2>Ready for a little <span className="gradient-text">Zenvyx magic?</span></h2>
            <p>Explore the features and learn about our privacy practices.</p>
          </div>
          <a className="btn btn-primary" href="#home">Back to top ↑</a>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">Z</span><span>ZEN<span className="brand-purple">VYX</span></span></a>
        <span className="footer-note">One bot. Endless possibilities.</span>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <a href="#about">About</a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Zenvyx</span>
      </footer>
    </main>
  );
}
