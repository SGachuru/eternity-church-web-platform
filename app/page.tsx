import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "./site-shell";

const ministries = [
  { title: "Kids & Youth", detail: "Growing faith through safe, joyful spaces." },
  { title: "Discipleship", detail: "Learning Christ and living full of grace." },
  { title: "Small Groups", detail: "Find community, prayer, and encouragement." },
  { title: "Outreach", detail: "Serve our city with practical compassion." },
];

const events = [
  { date: "12", month: "Sep", title: "Prayer & Worship Night", detail: "Gather together in worship and prayer." },
  { date: "21", month: "Sep", title: "Serve the City", detail: "A day of outreach and community care." },
  { date: "28", month: "Sep", title: "Leadership Teaching", detail: "A biblical teaching from the church family." },
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="cccog-landing">
        <section className="cccog-hero">
          <div className="cccog-hero-copy">
            <div className="section-kicker"><span></span>Eternity Gospel Church</div>
            <h1 className="cccog-hero-title">Family on <span>Mission</span></h1>
            <div className="cccog-service-line">
              <span>Sundays at 8:00 AM</span>
              <span className="dot-line">•</span>
              <span>Karen, Nairobi</span>
            </div>
            <div className="hero-actions">
              <a href="https://www.youtube.com/@eternitygospelchurchministries" target="_blank" rel="noreferrer" className="button primary-button">Watch Live</a>
              <Link href="/visit" className="button ghost-button light-button">Visit Us</Link>
            </div>
          </div>

          <div className="cccog-hero-image-wrap">
            <div className="hero-image-frame cccog-image-frame">
              <Image src="/bishop%20charles%20and%20rev.%20miriam.JPG" alt="Bishop Charles and Rev Miriam" width={640} height={620} className="hero-image" />
            </div>
            <div className="hero-host-card cccog-host-card">
              <div>
                <span className="host-label">Hosts</span>
                <span className="host-name">Bishop Charles &amp; Rev Miriam</span>
              </div>
              <span className="host-icon">✦</span>
            </div>
          </div>
        </section>

        <section className="cccog-quick-links">
          <Link href="/visit">I&apos;m New</Link>
          <Link href="/ministries">Kids &amp; Youth</Link>
          <Link href="/events">Upcoming Events</Link>
        </section>

        <section className="cccog-welcome">
          <div className="section-title-row">
            <span className="section-kicker"><span></span>Welcome</span>
            <h2 className="section-title">Welcome!</h2>
          </div>
          <div className="welcome-grid">
            <div className="welcome-copy">
              <p>
                Eternity Gospel Church and Ministries is a Christ-centered church where worship,
                prayer, Bible teaching, discipleship, and service shape how we live together.
              </p>
              <p>
                We believe church is a family on mission, committed to Christ and to loving our city.
              </p>
            </div>
            <div className="welcome-links">
              <Link href="/sermons">Message Archive</Link>
              <Link href="/news">Weekly Updates</Link>
              <Link href="/ministries">Ministry Opportunities</Link>
              <Link href="/groups">Small Groups</Link>
            </div>
          </div>
        </section>

        <section className="cccog-message">
          <div className="section-title-row">
            <span className="section-kicker"><span></span>Sunday&apos;s Message</span>
            <h2 className="section-title">Sermons &amp; teaching.</h2>
          </div>
          <div className="message-grid">
            <article className="message-feature">
              <div className="play-box"><span className="play-button">▶</span></div>
              <div className="sermon-copy">
                <span className="mini-label light">This week</span>
                <h3>Grace for Every Season</h3>
                <p>Finding hope, prayer, and courage through Christ.</p>
                <div className="sermon-meta"><span>Sunday Teaching</span><span>24 min</span></div>
                <Link href="/sermons" className="button dark-button">Watch Message</Link>
              </div>
            </article>
            <aside className="message-list">
              {events.slice(0, 3).map((event, index) => (
                <div key={event.title} className="message-list-row">
                  <span className="event-date-mini">{event.month} {event.date}</span>
                  <div>
                    <span className="mini-label light">{index === 0 ? "Prayer" : index === 1 ? "Outreach" : "Teaching"}</span>
                    <h4>{event.title}</h4>
                  </div>
                  <span className="event-arrow">↗</span>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="cccog-ministries">
          <div className="section-title-row centered">
            <span className="section-kicker"><span></span>Ministries</span>
            <h2 className="section-title">Find your place to grow.</h2>
          </div>
          <div className="ministry-grid">
            {ministries.map((item, index) => (
              <article key={item.title} className="ministry-card">
                <div className="ministry-top">
                  <span className="ministry-icon">✦</span>
                  <span className="ministry-index">0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <Link href="/ministries" className="card-link">Explore →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="cccog-events">
          <div className="section-title-row">
            <span className="section-kicker"><span></span>Events</span>
            <h2 className="section-title">Gather with us.</h2>
          </div>
          <div className="events-list">
            {events.map((event) => (
              <article key={event.title} className="event-row">
                <div className="event-date"><span className="event-day">{event.date}</span><span className="event-month">{event.month}</span></div>
                <div className="event-details">
                  <span className="mini-label">{event.detail}</span>
                  <h3>{event.title}</h3>
                </div>
                <Link href="/events" className="event-arrow">↗</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="cccog-calls">
          <div className="call-card prayer-card">
            <span className="section-kicker"><span></span>Prayer &amp; Care</span>
            <h2>Request prayer.</h2>
            <p>Our church family is ready to walk with you in prayer and care.</p>
            <div className="split-actions">
              <Link href="/prayer" className="button primary-button small-button">Submit Prayer Request</Link>
              <Link href="/giving" className="button ghost-button small-button">Give</Link>
            </div>
          </div>
          <div className="call-card location-card">
            <span className="section-kicker"><span></span>Find us</span>
            <h2>Visit us in Karen.</h2>
            <p>Karen, Nairobi</p>
            <div className="cta-details"><span>Sunday Service 8:00 AM – 1:00 PM</span></div>
            <div className="cta-buttons">
              <Link href="/locations" className="button dark-button">Visit Church</Link>
              <Link href="/contact" className="button ghost-button light-button">Contact Us</Link>
            </div>
          </div>
        </section>

        <section className="newsletter">
          <div className="newsletter-copy">
            <span className="section-kicker"><span></span>Announcements</span>
            <h2 className="section-title">Stay encouraged.</h2>
          </div>
          <form className="newsletter-form">
            <input aria-label="Email address" type="email" placeholder="Email address" />
            <button type="button">Subscribe</button>
          </form>
        </section>
      </section>
    </SiteShell>
  );
}
