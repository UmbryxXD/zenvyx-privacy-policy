
const features = [
  {
    number: "01",
    title: "Moderation",
    description: "Powerful tools to help keep your community safe."
  },
  {
    number: "02",
    title: "Ticket System",
    description: "Organize support requests and staff conversations."
  },
  {
    number: "03",
    title: "Invite Tracker",
    description: "Understand invite activity and community growth."
  },
  {
    number: "04",
    title: "Music System",
    description: "Bring music features into your Discord community."
  },
  {
    number: "05",
    title: "Management",
    description: "Useful controls for managing your server."
  },
  {
    number: "06",
    title: "All-in-One",
    description: "More tools designed to work together."
  }
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#">
          <span className="logo">Z</span>
          ZENVYX
        </a>
        <a className="nav-link" href="#privacy">
          PRIVACY CENTER ↗
        </a>
      </nav>

      <section className="hero">
        <div className="eyebrow">
          <span className="dot" /> THE NEXT LEVEL OF DISCORD
        </div>

        <h1>
          One bot.
          <br />
          <span>Endless possibilities.</span>
        </h1>

        <p>
          Meet Zenvyx — your all-in-one Discord companion
          for moderation, tickets, invites, music, and
          smarter server management.
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#privacy">
            Explore Privacy Policy ↗
          </a>
          <a className="button-secondary" href="#features">
            Discover features
          </a>
        </div>

        <div className="trust">
          <span className="dot" />
          Built for communities. Transparency comes first.
        </div>
      </section>

      <section className="features" id="features">
        <div className="eyebrow">THE ECOSYSTEM / 001</div>
        <h2>Everything your server needs.</h2>
        <p className="section-intro">
          One place for the tools that keep your community running.
        </p>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="card-top">
                <span>{feature.number}</span>
                <span className="card-icon">✳</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy" id="privacy">
        <div className="eyebrow">THE IMPORTANT DETAILS / 002</div>
        <h2>Privacy, without the mystery.</h2>
        <p>
          Understanding how your information is used should
          never be complicated. This policy explains the
          information Zenvyx may process to provide its features.
        </p>

        <div className="policy-item">
          <h3>01 — Information we process</h3>
          <p>
            Depending on enabled features, this may include
            Discord user IDs, server IDs, configuration settings,
            moderation records, ticket messages, and invite data.
          </p>
        </div>

        <div className="policy-item">
          <h3>02 — How features use data</h3>
          <p>
            Moderation tools may use moderation records.
            Tickets may involve support messages. Invite tracking
            may use invite information and membership events.
            Music may process playback requests.
          </p>
        </div>

        <div className="policy-item">
          <h3>03 — Storage and retention</h3>
          <p>
            The operator must document what is actually stored,
            where it is stored, who can access it, and when it
            is deleted. These details must be verified before
            this policy is published as final.
          </p>
        </div>

        <div className="policy-item">
          <h3>04 — Your questions and requests</h3>
          <p>
            For privacy questions or data requests, contact
            the Zenvyx operator using the official contact
            details that will be added to this page.
          </p>
        </div>

        <div className="policy-notice">
          <strong>Policy setup in progress</strong>
          <p>
            This is starter text. Before publishing, confirm
            that every statement matches Zenvyx's real code
            and data practices. Add a working contact address
            and a clear deletion-request process.
          </p>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#">
          <span className="logo">Z</span>
          ZENVYX
        </a>
        <span>Made for communities.</span>
        <a href="#privacy">Privacy Policy ↑</a>
      </footer>
    </main>
  );
}
