
"use client";

import { useEffect, useState } from "react";
import {
  ShieldCheck, Ticket, Music2, Users, Settings2,
  Sparkles, ArrowUpRight, LockKeyhole, Menu, X,
  Disc3, Headphones, Zap, Database, Eye, Heart,
  Mail, MessageCircle, Github
} from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Moderation", desc: "Tools to help keep your community safe." },
  { icon: Ticket, title: "Ticket System", desc: "Organize member support and requests." },
  { icon: Users, title: "Invite Tracker", desc: "Keep track of community invite activity." },
  { icon: Music2, title: "Music System", desc: "Bring entertainment into your server." },
  { icon: Settings2, title: "Management", desc: "Make everyday server management easier." },
  { icon: Sparkles, title: "Much More", desc: "Discover more tools in one versatile bot." },
];

const policies = [
  {
    icon: Database,
    title: "Information processed",
    text: "Depending on enabled features, Zenvyx may process Discord user and server IDs, server settings, moderation records, ticket content, and invite information."
  },
  {
    icon: Settings2,
    title: "How information is used",
    text: "Information may be used to provide moderation, ticket support, invite tracking, music, and server management features."
  },
  {
    icon: LockKeyhole,
    title: "Storage and security",
    text: "The bot operator should document actual storage locations, access controls, security measures, and retention periods before this policy is published."
  },
  {
    icon: Eye,
    title: "Your privacy choices",
    text: "For questions about information associated with your use of Zenvyx, contact the owner using the details in the contact section below."
  },
  {
    icon: Heart,
    title: "Third-party services",
    text: "Zenvyx interacts with Discord and may rely on other service providers. The operator should disclose applicable providers and their data practices."
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    ["Home", "#home"],
    ["Features", "#features"],
    ["Privacy", "#privacy"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <main className="site-shell" id="home">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <a href="#home" className="brand">
          <span className="brand-mark">Z</span>
          <span>ZEN<span className="brand-purple">VYX</span></span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navigation.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-cta">
          <MessageCircle size={15} /> Contact Owner
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="pill">
            <span className="pulse-dot" /> THE ALL-IN-ONE DISCORD BOT
          </div>

          <h1 className="hero-title">
            One bot.
            <br />
            <span className="gradient-text">Infinite vibes.</span>
          </h1>

          <p className="hero-description">
            Moderation, tickets, invites, music, management,
            and more. Meet Zenvyx, your versatile companion
            for building a better Discord community.
          </p>

          <div className="hero-actions">
            <a href="#features" className="btn btn-primary">
              Explore Features <ArrowUpRight size={17} />
            </a>
            <a href="#privacy" className="btn btn-ghost">
              <ShieldCheck size={17} /> Privacy Center
            </a>
          </div>

          <div className="hero-trust">
            <LockKeyhole size={15} />
            Transparency starts with trust.
          </div>
        </div>

        <div className="hero-art">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="orb-halo" />

          <div className="hero-orb">
            <div className="orb-inner">
              <span className="orb-z">Z</span>
              <span className="orb-label">ZEN<span>VYX</span></span>
              <span className="orb-status">COMMUNITY • CREATIVITY</span>
            </div>
          </div>

          <div className="float-card float-card-top">
            <ShieldCheck size={22} />
            <span><b>One versatile bot</b><small>Many useful tools</small></span>
          </div>

          <div className="float-card float-card-bottom">
            <Disc3 size={22} />
            <span><b>All-in-one vibes</b><small>Made for communities</small></span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>BUILT FOR DISCORD COMMUNITIES</span>
          <div className="hero-bottom-line" />
          <a href="#features">DISCOVER MORE ↓</a>
        </div>
      </section>

      <section className="feature-section section-wrap" id="features">
        <div className="eyebrow"><Zap size={14} /> THE ECOSYSTEM / 001</div>
        <h2>Everything your server <span className="gradient-text">needs.</span></h2>
        <p className="section-description">
          Your community tools, brought together in one place.
        </p>

        <div className="feature-grid">
          {features.map(({ icon: Icon, title, desc }, index) => (
            <article
              className="feature-card"
              key={title}
              style={{ "--delay": `${index * 80}ms` }}
            >
              <div className="feature-icon"><Icon size={24} /></div>
              <span className="feature-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="card-glow" />
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-section" id="privacy">
        <div className="privacy-layout section-wrap">
          <div className="privacy-intro">
            <div className="eyebrow">
              <LockKeyhole size={14} /> THE PRIVACY CENTER / 002
            </div>

            <h2>Your data.<br /><span className="gradient-text">Your understanding.</span></h2>

            <p>
              Privacy should not be a mystery. Learn what information
              Zenvyx may process and contact the owner with questions.
            </p>

            <div className="privacy-points">
              <div><ShieldCheck size={17} /> Transparency</div>
              <div><Eye size={17} /> Clear information</div>
              <div><Heart size={17} /> Community focused</div>
            </div>
          </div>

          <div className="policy-panel">
            {policies.map(({ icon: Icon, title, text }, index) => (
              <article className="policy-row" key={title}>
                <div className="policy-index">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="policy-content">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <Icon className="policy-icon" size={19} />
              </article>
            ))}

            <div className="policy-warning">
              <LockKeyhole size={18} />
              <p>
                <strong>Privacy policy draft</strong><br />
                This page is a starting point, not a complete legal policy.
                Confirm actual data practices and add retention, deletion,
                and applicable legal details before publishing it as final.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="about-copy">
          <div className="eyebrow"><Sparkles size={14} /> WHY ZENVYX?</div>
          <h2>More tools.<br /><span className="gradient-text">Less hassle.</span></h2>
          <p>
            From everyday moderation to community entertainment,
            Zenvyx brings useful server tools together in one place.
          </p>
        </div>

        <div className="about-cards">
          <div className="mini-card"><ShieldCheck /><b>Community</b><span>Tools for your server</span></div>
          <div className="mini-card"><Headphones /><b>Entertainment</b><span>Bring the vibes</span></div>
          <div className="mini-card"><Settings2 /><b>Management</b><span>Stay organized</span></div>
          <div className="mini-card"><Heart /><b>Transparency</b><span>Privacy matters</span></div>
        </div>
      </section>

      <section className="owner-section section-wrap" id="contact">
        <div className="eyebrow"><Heart size={14} /> THE PERSON BEHIND ZENVYX</div>
        <h2>Meet the <span className="gradient-text">owner.</span></h2>
        <p className="owner-intro">
          Questions, suggestions, or privacy concerns? Get in touch.
        </p>

        <div className="owner-card">
          <div className="owner-profile">
            <div className="owner-avatar-fallback" aria-label="Umbryx avatar">
              U
            </div>

            <div className="owner-details">
              <span className="owner-role">BOT OWNER &amp; DEVELOPER</span>
              <h3>Umbryx</h3>
              <p className="owner-title">Creator of Zenvyx</p>
              <span className="owner-username">umbryx.gg</span>
            </div>
          </div>

          <div className="owner-links" aria-label="Contact the owner">
            <a
              href="https://discord.com/users/1245649269705150464"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} aria-hidden="true" />
              <span>Contact on Discord — umbryx.gg</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>

            <a href="mailto:umbryxxd@gmail.com">
              <Mail size={20} aria-hidden="true" />
              <span>Email — umbryxxd@gmail.com</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="owner-description">
            <h3>Need help or have a privacy question?</h3>
            <p>
              For privacy questions, support, and suggestions, reach out
              using either contact method. We’ll do our best to help.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section section-wrap">
        <div className="cta-panel">
          <div className="cta-orb"><Sparkles size={28} /></div>
          <div>
            <div className="eyebrow">YOUR COMMUNITY, YOUR WAY</div>
            <h2>Ready for some <span className="gradient-text">Zenvyx magic?</span></h2>
            <p>Explore the features or get in touch with the owner.</p>
          </div>
          <a href="#home" className="btn btn-primary">Back to Top ↑</a>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-mark">Z</span>
          <span>ZEN<span className="brand-purple">VYX</span></span>
        </a>

        <span className="footer-note">One bot. Endless possibilities.</span>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <a href="#contact">Contact</a>
        </div>

        <span className="copyright">© {new Date().getFullYear()} Zenvyx</span>
      </footer>
    </main>
  );
}
