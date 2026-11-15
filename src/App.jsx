import { useState } from "react";
import "@fontsource/open-sans/latin-400.css";
import "@fontsource/open-sans/latin-600.css";
import "@fontsource/open-sans/latin-700.css";
import "@fontsource/open-sans/latin-800.css";
import "./App.css";
import awsLogo from "./assets/aws-logo.svg";
import sbgLogo from "./assets/aws-builder-group.svg";
import dbitLogo from "./assets/dbit-logo.webp";
import {
  AGENDA, CONTACT, EVENT, FAQ_HEAD, FAQS, FOOTER, HERO, NAV, OVERVIEW, SERVICES, SERVICES_HEAD,
} from "./data";

function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="head">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </div>
  );
}

function Logos({ className = "" }) {
  return (
    <div className={`logos ${className}`}>
      <img src={sbgLogo} alt="AWS Student Builder Group DBIT" />
      <span aria-hidden="true">×</span>
      <img src={awsLogo} alt="Amazon Web Services" />
      <span aria-hidden="true">×</span>
      <img src={dbitLogo} alt="Don Bosco Institute of Technology" className="logo-dbit" />
    </div>
  );
}

const DEFAULT_DEVELOPER = "Madhu T K";

export default function App() {
  const [developer, setDeveloper] = useState(DEFAULT_DEVELOPER);
  const developerName = developer.trim() || DEFAULT_DEVELOPER;

  return (
    <div className="page">
      <div className="shell">
        <div className="devbar">
          <span>
            🛠 This page is developed &amp; deployed by <strong>{developerName}</strong>
          </span>
        </div>
        <header className="nav">
          <a href="#top" aria-label="Home"><Logos /></a>
          <nav className="nav-links">
            {NAV.map(([label, id]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </nav>
          <a className="btn btn-primary btn-sm" href="#contact">Connect</a>
        </header>

        <section className="hero" id="top">
          <div className="hero-text">
            <div className="eyebrow">{HERO.banner}</div>
            <div className="live-badge"><span className="dot" />{HERO.badge}</div>
            <h1>
              From Localhost to <span className="grad">the Cloud</span>: Hands-On AWS Architecture &amp; Live React Deployment
            </h1>
            <p className="lead">{HERO.sub}</p>
            <div className="btn-row">
              {HERO.actions.map(([label, href], i) => (
                <a key={label} className={`btn ${i === 0 ? "btn-primary" : "btn-light"}`} href={href}>{label}</a>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="facts">
              <div className="facts-title">Workshop at a glance</div>
              <dl>
                <div><dt>Date</dt><dd>16 November 2026</dd></div>
                <div><dt>Venue</dt><dd>PESCE (PES College of Engineering), Mandya</dd></div>
                <div><dt>Time</dt><dd>10:30 AM – 01:30 PM (3 Hours)</dd></div>
                <div><dt>Lab Region</dt><dd>Asia Pacific (Mumbai) — ap-south-1</dd></div>
              </dl>
            </div>
            <div className="svc-chips">
              {SERVICES.slice(0, 4).map((s) => (
                <span key={s.code} className="svc-chip"><img src={s.icon} alt={s.code} /></span>
              ))}
            </div>
          </div>
        </section>

        <main className="content">
          <section id="aws">
            <SectionHead title={OVERVIEW.title} sub={OVERVIEW.copy} />
            <h3 className="sub-title">{OVERVIEW.compareTitle}</h3>
            <div className="grid two">
              <div className="card before">
                <div className="tag">{OVERVIEW.before.label}</div>
                <p>{OVERVIEW.before.text}</p>
              </div>
              <div className="card after">
                <div className="tag">{OVERVIEW.after.label}</div>
                <p>{OVERVIEW.after.text}</p>
              </div>
            </div>
            <h3 className="sub-title">{OVERVIEW.modelsTitle}</h3>
            <div className="models">
              <div>
                <div className="tag">Core Models</div>
                <ul className="chips">{OVERVIEW.core.map((m) => <li key={m}>{m}</li>)}</ul>
              </div>
              <div>
                <div className="tag">Emerging Models</div>
                <ul className="chips">{OVERVIEW.emerging.map((m) => <li key={m}>{m}</li>)}</ul>
              </div>
            </div>
          </section>

          <section id="services">
            <SectionHead title={SERVICES_HEAD.title} sub={SERVICES_HEAD.sub} />
            <div className="grid services">
              {SERVICES.map((s) => (
                <article key={s.code} className="card service">
                  <div className="service-top">
                    <span className="svc-icon" style={{ borderColor: s.color }}><img src={s.icon} alt={`${s.code} logo`} /></span>
                    <div>
                      <h3>{s.name}</h3>
                      <div className="tag">{s.category}</div>
                    </div>
                  </div>
                  <p>{s.text}</p>
                  <ul className="chips small">
                    {s.concepts.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="schedule">
            <SectionHead title={EVENT.title} />
            <div className="summary">
              {EVENT.summary.map(([k, v]) => (
                <div key={k}>
                  <span>{k}</span>
                  <strong>{v}</strong>
                </div>
              ))}
            </div>
            <h3 className="sub-title">{EVENT.agendaTitle}</h3>
            <ol className="timeline">
              {AGENDA.map(([start, end, mins, type, title, focus, label, who]) => (
                <li key={start}>
                  <div className="t-time">
                    {start}
                    <small>– {end}</small>
                  </div>
                  <div className="t-body">
                    <div className="t-meta">
                      <span className="code">{mins} mins{type ? ` • ${type}` : ""}</span>
                    </div>
                    <h3>{title}</h3>
                    <p><strong>Focus:</strong> {focus}</p>
                    <p><strong>{label}:</strong> {who}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="faq">
            <SectionHead title={FAQ_HEAD.title} sub={FAQ_HEAD.sub} />
            <div className="faq">
              {FAQS.map(([q, paras], i) => (
                <details key={q} open={i === 0}>
                  <summary>{q}</summary>
                  {paras.map((p) => <p key={p}>{p}</p>)}
                </details>
              ))}
            </div>
          </section>

          <section id="contact">
            <SectionHead title={CONTACT.title} sub={CONTACT.sub} />
            <div className="grid two">
              {CONTACT.cards.map((c) => (
                <div key={c.tag} className="card contact">
                  <div className="tag">{c.tag}</div>
                  <dl>
                    {c.rows.map(([k, v]) => (
                      <div key={k}>
                        <dt>{k}</dt>
                        <dd>
                          {/^\S+@\S+\.\S+$/.test(v) ? (
                            <a className="mail" href={`mailto:${v}?subject=${encodeURIComponent("AWS Cloud & React Deployment Workshop")}`}>{v}</a>
                          ) : (
                            v
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-grid">
            <div>
              <h4>{FOOTER.aboutTitle}</h4>
              <p>{FOOTER.about}</p>
              <Logos className="on-light" />
            </div>
            <div>
              <h5>Quick Navigation</h5>
              <p className="channels col">
                {FOOTER.nav.map(([label, id]) => (
                  <a key={id} href={`#${id}`}>{label}</a>
                ))}
              </p>
            </div>
            <div>
              <h5>Connect With Us</h5>
              <p className="channels col">
                {FOOTER.social.map(([label, url]) => (
                  <a key={label} href={url} target="_blank" rel="noreferrer">{label}</a>
                ))}
              </p>
            </div>
          </div>
          <div className="deployer">
            <label htmlFor="deployer-name">Deployed this page yourself? Enter your name:</label>
            <input
              id="deployer-name"
              type="text"
              value={developer}
              maxLength={40}
              onChange={(e) => setDeveloper(e.target.value)}
              placeholder="Type your name"
            />
          </div>
          <div className="footer-bottom">
            <span>{FOOTER.copyright} Developed by {developerName}.</span>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
