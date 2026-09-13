import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "./site-shell";

const ministryCards = [
  {
    title: "Prayer & Worship",
    text: "Gather in Spirit-filled worship and prayer events for the whole church family.",
    icon: "✦",
  },
  {
    title: "Children & Families",
    text: "Create gospel-centered moments for every generation.",
    icon: "✎",
  },
  {
    title: "Discipleship",
    text: "Grow through study, teaching, pastoral care, and community.",
    icon: "✤",
  },
  {
    title: "Outreach",
    text: "Serve our neighborhoods and share the love of Christ.",
    icon: "✝",
  },
];

const eventRows = [
  { date: "12", month: "Sep", title: "Prayer & Worship Night", note: "Family fellowship · 7:00 PM" },
  { date: "21", month: "Sep", title: "Serve the City", note: "Outreach & care · 9:00 AM" },
  { date: "28", month: "Sep", title: "Leadership Teaching", note: "Sermon series · 8:00 AM" },
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="section-kicker"><span></span>Welcome to Eternity Gospel Church</div>
            <h1 className="hero-title">
              Family on <span className="hero-italic">Mission</span>
            </h1>
            <p className="hero-lede">
              Join us in Karen, Nairobi for worship, biblical teaching,
              prayer, community, and life-changing discipleship.
            </p>
            <div className="hero-actions">
              <Link href="/visit" className="button primary-button">Plan Your Visit</Link>
              <a href="https://www.youtube.com/@eternitygospelchurchministries" target="_blank" rel="noreferrer" className="button ghost-button">Watch Live</a>
            </div>
            <div className="hero-meta">
              <span><b>Sundays</b><small>8:00 AM - 1:00 PM</small></span>
              <span><b>Karen</b><small>Nairobi, Kenya</small></span>
              <span><b>Prayer</b><small>Everyday care</small></span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-image-frame">
              <Image src="/bishop%20charles%20and%20rev.%20miriam.JPG" alt="Bishop Charles and Rev Miriam" width={640} height={620} className="hero-image" />
            </div>
            <div className="hero-host-card">
              <div>
                <span className="host-label">Hosts</span>
                <span className="host-name">Bishop Charles &amp; Rev Miriam</span>
              </div>
              <span className="host-icon">✦</span>
            </div>
          </div>
        </div>
      </section>

      <section className="service-strip">
        <div className="service-strip-content">
          <div>
            <span className="section-kicker dark"><span></span>Sunday Gathering</span>
            <div className="service-title">Worship · Prayer · Teaching</div>
          </div>
          <div className="service-tags">
            <span>8:00 AM</span>
            <span>10:00 AM</span>
            <span>Kids Church</span>
            <span>Prayer</span>
          </div>
          <Link href="/livestream" className="button watch-button">Livestream</Link>
        </div>
      </section>

      <section className="section-block intro-block">
        <div className="section-heading">
          <div>
            <span className="section-kicker"><span></span>Our Church</span>
            <h2 className="section-title">A living church for every generation.</h2>
          </div>
          <Link href="/about" className="text-link">Read our story →</Link>
        </div>
        <div className="intro-grid">
          <article className="intro-card highlight">
            <span className="mini-label">Welcome</span>
            <p>
              Eternity Gospel Church and Ministries is a Christ-centered, prayerful,
              community-focused church sharing the gospel of Jesus Christ across Karen,
              Nairobi, and the world.
            </p>
          </article>
          <article className="intro-card">
            <span className="mini-label">Mission</span>
            <p>
              We gather to worship, equip believers, bring the Word of God, pray,
              serve, and reach every family with the love of Christ.
            </p>
          </article>
          <article className="intro-card">
            <span className="mini-label">Our Values</span>
            <p>
              Word, Worship, Prayer, Fellowship, Service, and Gospel Outreach define
              how we live together as one family in Christ.
            </p>
          </article>
        </div>
      </section>

      <section className="section-block ministry-block">
        <div className="section-heading centered">
          <div>
            <span className="section-kicker"><span></span>Ministries</span>
            <h2 className="section-title">Find your place to grow.</h2>
          </div>
        </div>
        <div className="ministry-grid">
          {ministryCards.map((ministry, idx) => (
            <article key={ministry.title} className="ministry-card">
              <div className="ministry-top">
                <span className="ministry-icon">{ministry.icon}</span>
                <span className="ministry-index">0{idx + 1}</span>
              </div>
              <h3>{ministry.title}</h3>
              <p>{ministry.text}</p>
              <Link href="/ministries" className="card-link">Explore →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block sermon-block">
        <div className="section-heading">
          <div>
            <span className="section-kicker"><span></span>Latest message</span>
            <h2 className="section-title">Sermons &amp; teaching.</h2>
          </div>
          <Link href="/sermons" className="text-link">All sermons →</Link>
        </div>
        <div className="sermon-grid">
          <article className="sermon-feature">
            <div className="play-box">
              <span className="play-button">▶</span>
            </div>
            <div className="sermon-copy">
              <span className="mini-label light">This week</span>
              <h3>Grace for Every Season</h3>
              <p>Finding hope, prayer, and courage through Christ.</p>
              <div className="sermon-meta">
                <span>Sunday Teaching</span>
                <span>24 min</span>
              </div>
              <Link href="/sermons" className="button dark-button">Watch Message</Link>
            </div>
          </article>
          <aside className="sermon-list">
            <div className="sermon-row">
              <span className="sermon-date">Sep 21</span>
              <div>
                <span className="mini-label light">Prayer</span>
                <h4>Prayer in the House</h4>
              </div>
              <span className="sermon-arrow">↗</span>
            </div>
            <div className="sermon-row">
              <span className="sermon-date">Sep 28</span>
              <div>
                <span className="mini-label light">Discipleship</span>
                <h4>Rooted in Christ</h4>
              </div>
              <span className="sermon-arrow">↗</span>
            </div>
            <div className="sermon-row">
              <span className="sermon-date">Oct 05</span>
              <div>
                <span className="mini-label light">Community</span>
                <h4>Finding Family</h4>
              </div>
              <span className="sermon-arrow">↗</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-block events-block">
        <div className="section-heading">
          <div>
            <span className="section-kicker"><span></span>Events</span>
            <h2 className="section-title">Gather with us.</h2>
          </div>
          <Link href="/events" className="text-link">All events →</Link>
        </div>
        <div className="events-list">
          {eventRows.map((event) => (
            <article key={event.title} className="event-row">
              <div className="event-date">
                <span className="event-day">{event.date}</span>
                <span className="event-month">{event.month}</span>
              </div>
              <div className="event-details">
                <span className="mini-label">{event.note}</span>
                <h3>{event.title}</h3>
              </div>
              <Link href="/events" className="event-arrow">↗</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block split-panel">
        <div className="split-content">
          <span className="section-kicker"><span></span>Prayer &amp; Care</span>
          <h2 className="section-title">Request prayer.</h2>
          <p>
            Our church family prays with you for spiritual encouragement, healing,
            peace, blessing, and guidance.
          </p>
          <div className="split-actions">
            <Link href="/prayer" className="button primary-button small-button">Submit Prayer Request</Link>
            <Link href="/giving" className="button ghost-button small-button">Give</Link>
          </div>
        </div>
        <div className="split-card">
          <div className="split-card-head">
            <span>Weekly Prayer</span>
            <span className="live-dot"></span>
          </div>
          <ul className="split-list">
            <li><span></span>Sunday Prayer</li>
            <li><span></span>Midweek Prayer</li>
            <li><span></span>Women &amp; Families</li>
          </ul>
        </div>
      </section>

      <section className="section-block cta-band">
        <div className="cta-copy">
          <span className="section-kicker"><span></span>Location</span>
          <h2 className="section-title">Find us in Karen.</h2>
          <p>
            Visit Eternity Gospel Church and Ministries in Nairobi and experience
            prayer, worship, family, and gospel-centered community.
          </p>
          <div className="cta-details">
            <span>Karen, Nairobi</span>
            <span>•</span>
            <span>Sunday Service 8:00 AM – 1:00 PM</span>
          </div>
          <div className="cta-buttons">
            <Link href="/locations" className="button dark-button">Visit Church</Link>
            <Link href="/contact" className="button ghost-button light-button">Contact Us</Link>
          </div>
        </div>
        <div className="map-card">
          <iframe title="Map" src="https://www.google.com/maps?q=Eternity+Gospel+Church+and+Ministries+Karen+Nairobi&z=16&output=embed" className="map-frame" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>

      <section className="section-block newsletter">
        <div className="newsletter-copy">
          <span className="section-kicker"><span></span>Announcements</span>
          <h2 className="section-title">Stay encouraged.</h2>
        </div>
        <form className="newsletter-form">
          <input aria-label="Email address" type="email" placeholder="Email address" />
          <button type="button">Subscribe</button>
        </form>
      </section>
    </SiteShell>
  );
}
