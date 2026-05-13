import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import darkmodeIcon from './assets/images/darkmode-icon.png';
import riskImg from './assets/images/risk.png';
import costImg from './assets/images/cost.jpg';
import trustImg from './assets/images/trust.jpg';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('en');

  const t = translations[language];

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar">
          <div className="nav-logo">
            <h2>OmniTrack</h2>
          </div>
          <ul className="nav-menu">
            <li><a href="#features">{t.nav.features}</a></li>
            <li><a href="#benefits">{t.nav.benefits}</a></li>
            <li><a href="#testimonials">{t.nav.testimonials}</a></li>
            <li><a href="#pricing">{t.nav.plans}</a></li>
            <li><a href="#contactUs">{t.nav.contact}</a></li>
          </ul>
          <div className="nav-actions">
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                background: 'transparent',
                color: scrolled ? 'var(--text-dark)' : '#ffffff',
                border: scrolled ? '1px solid var(--text-dark)' : '1px solid #ffffff',
                padding: '0.3rem',
                borderRadius: '4px',
                marginRight: '0.5rem',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
            >
              <option value="en" style={{color: '#000'}}>EN</option>
              <option value="es" style={{color: '#000'}}>ES</option>
            </select>
            <button onClick={toggleTheme} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0', borderRadius: '50%', cursor: 'pointer', background: 'transparent', border: 'none', marginRight: '1rem' }} aria-label="Toggle Dark Mode">
              <img src={darkmodeIcon} alt="Dark Mode Toggle" style={{ width: '32px', height: '32px', filter: isDarkMode ? 'invert(1)' : 'none', transition: 'filter 0.3s' }} />
            </button>
            <a href="#" className="btn-outline">{t.nav.webAccess}</a>
            <a href="#platforms" className="btn-solid">{t.nav.downloadApp}</a>
          </div>
        </div>
      </header>

      <section className="hero" id="hero">
        <div className="container hero-content">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
          <a href="#contactUs" className="btn-solid" style={{ fontSize: '1.2rem', padding: '1rem 2rem', display: 'inline-block' }}>
            {t.hero.quoteBtn}
          </a>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <h4 className="section-subtitle">{t.features.subtitle}</h4>
          <h2 className="section-title">{t.features.title}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <iconify-icon icon="mdi:map-marker-path" class="feature-icon"></iconify-icon>
              <h3>{t.features.liveTracking.title}</h3>
              <p>{t.features.liveTracking.desc}</p>
            </div>
            <div className="feature-card">
              <iconify-icon icon="mdi:bell-alert" class="feature-icon"></iconify-icon>
              <h3>{t.features.alerts.title}</h3>
              <p>{t.features.alerts.desc}</p>
            </div>
            <div className="feature-card">
              <iconify-icon icon="mdi:view-dashboard" class="feature-icon"></iconify-icon>
              <h3>{t.features.dashboard.title}</h3>
              <p>{t.features.dashboard.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="benefits" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <h4 className="section-subtitle">{t.benefits.subtitle}</h4>
          <h2 className="section-title">{t.benefits.title}</h2>
          
          <div className="benefit-row">
            <img src={riskImg} alt="Risk Mitigation" className="benefit-img" />
            <div className="benefit-content">
              <h3>{t.benefits.risk.title}</h3>
              <p>{t.benefits.risk.desc}</p>
            </div>
          </div>

          <div className="benefit-row">
            <img src={costImg} alt="Cost Optimization" className="benefit-img" />
            <div className="benefit-content">
              <h3>{t.benefits.cost.title}</h3>
              <p>{t.benefits.cost.desc}</p>
            </div>
          </div>

          <div className="benefit-row">
            <img src={trustImg} alt="Business Trust" className="benefit-img" />
            <div className="benefit-content">
              <h3>{t.benefits.trust.title}</h3>
              <p>{t.benefits.trust.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <h4 className="section-subtitle">{t.testimonials.subtitle}</h4>
          <h2 className="section-title">{t.testimonials.title}</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">{t.testimonials.t1.quote}</p>
              <div className="testimonial-author">
                <img src="https://placehold.co/100x100?text=EN" alt="Elena Navarro" className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{t.testimonials.t1.name}</div>
                  <div className="testimonial-role">{t.testimonials.t1.role}</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">{t.testimonials.t2.quote}</p>
              <div className="testimonial-author">
                <img src="https://placehold.co/100x100?text=MT" alt="Miguel Torres" className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{t.testimonials.t2.name}</div>
                  <div className="testimonial-role">{t.testimonials.t2.role}</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">{t.testimonials.t3.quote}</p>
              <div className="testimonial-author">
                <img src="https://placehold.co/100x100?text=SV" alt="Sofía Vargas" className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{t.testimonials.t3.name}</div>
                  <div className="testimonial-role">{t.testimonials.t3.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="pricing" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <h4 className="section-subtitle">{t.pricing.subtitle}</h4>
          <h2 className="section-title">{t.pricing.title}</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>{t.pricing.starter.name}</h3>
              <p>{t.pricing.starter.subtitle}</p>
              <div className="pricing-price">{t.pricing.starter.price}<span>{t.pricing.starter.period}</span></div>
              <ul className="pricing-features">
                <li><iconify-icon icon="mdi:check-circle" style={{ color: 'var(--primary-color)' }}></iconify-icon> {t.pricing.starter.f1}</li>
                <li><iconify-icon icon="mdi:check-circle" style={{ color: 'var(--primary-color)' }}></iconify-icon> {t.pricing.starter.f2}</li>
                <li><iconify-icon icon="mdi:check-circle" style={{ color: 'var(--primary-color)' }}></iconify-icon> {t.pricing.starter.f3}</li>
              </ul>
              <button className="btn-outline" style={{ width: '100%' }}>{t.pricing.btn}</button>
            </div>
            
            <div className="pricing-card featured">
              <h3>{t.pricing.pro.name}</h3>
              <p>{t.pricing.pro.subtitle}</p>
              <div className="pricing-price">{t.pricing.pro.price}<span>{t.pricing.pro.period}</span></div>
              <ul className="pricing-features">
                <li><iconify-icon icon="mdi:check-circle" style={{ color: 'var(--primary-color)' }}></iconify-icon> {t.pricing.pro.f1}</li>
                <li><iconify-icon icon="mdi:check-circle" style={{ color: 'var(--primary-color)' }}></iconify-icon> {t.pricing.pro.f2}</li>
                <li><iconify-icon icon="mdi:check-circle" style={{ color: 'var(--primary-color)' }}></iconify-icon> {t.pricing.pro.f3}</li>
              </ul>
              <button className="btn-solid" style={{ width: '100%' }}>{t.pricing.btn}</button>
            </div>

            <div className="pricing-card">
              <h3>{t.pricing.enterprise.name}</h3>
              <p>{t.pricing.enterprise.subtitle}</p>
              <div className="pricing-price">{t.pricing.enterprise.price}<span>{t.pricing.enterprise.period}</span></div>
              <ul className="pricing-features">
                <li><iconify-icon icon="mdi:check-circle" style={{ color: 'var(--primary-color)' }}></iconify-icon> {t.pricing.enterprise.f1}</li>
                <li><iconify-icon icon="mdi:check-circle" style={{ color: 'var(--primary-color)' }}></iconify-icon> {t.pricing.enterprise.f2}</li>
                <li><iconify-icon icon="mdi:check-circle" style={{ color: 'var(--primary-color)' }}></iconify-icon> {t.pricing.enterprise.f3}</li>
              </ul>
              <button className="btn-outline" style={{ width: '100%' }}>{t.pricing.btn}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="container">
          <h4 className="section-subtitle">{t.team.subtitle}</h4>
          <h2 className="section-title">{t.team.title}</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="https://placehold.co/150x150?text=RA" alt="Rodrigo Alcántara" className="team-photo" />
              <div className="team-name">Rodrigo Alcántara</div>
              <div className="team-role">{t.team.rodrigo.role}</div>
              <p className="team-bio">{t.team.rodrigo.bio}</p>
            </div>
            <div className="team-card">
              <img src="https://placehold.co/150x150?text=PQ" alt="Paulo Quincho" className="team-photo" />
              <div className="team-name">Paulo Quincho</div>
              <div className="team-role">{t.team.paulo.role}</div>
              <p className="team-bio">{t.team.paulo.bio}</p>
            </div>
            <div className="team-card">
              <img src="https://placehold.co/150x150?text=AV" alt="Adrian Valerio" className="team-photo" />
              <div className="team-name">Adrian Valerio</div>
              <div className="team-role">{t.team.adrian.role}</div>
              <p className="team-bio">{t.team.adrian.bio}</p>
            </div>
            <div className="team-card">
              <img src="https://placehold.co/150x150?text=LA" alt="Luiggi Antonio" className="team-photo" />
              <div className="team-name">Luiggi Antonio</div>
              <div className="team-role">{t.team.luiggi.role}</div>
              <p className="team-bio">{t.team.luiggi.bio}</p>
            </div>
            <div className="team-card">
              <img src="https://placehold.co/150x150?text=AO" alt="Alejandro Oroncoy" className="team-photo" />
              <div className="team-name">Alejandro Oroncoy</div>
              <div className="team-role">{t.team.alejandro.role}</div>
              <p className="team-bio">{t.team.alejandro.bio}</p>
            </div>
          </div>

          {/* Video del equipo — embebido de YouTube (el video en YouTube está como no listado) */}
          <div style={{
            maxWidth: '800px',
            margin: '3rem auto 0',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/OhiA1S4ceUM"
                title="OmniTrack Team Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
              />
            </div>
          </div>
        </div>
      </section>



      <section className="section" id="contactUs" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <h4 className="section-subtitle">{t.contact.subtitle}</h4>
          <h2 className="section-title">{t.contact.title}</h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-light)' }}>
            {t.contact.desc}
          </p>
          <form className="quote-form">
            <div className="form-group">
              <input type="email" placeholder={t.contact.email} required />
            </div>
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder={t.contact.firstName} required />
              </div>
              <div className="form-group">
                <input type="text" placeholder={t.contact.lastName} required />
              </div>
            </div>
            <div className="form-group">
              <textarea placeholder={t.contact.details}></textarea>
            </div>
            <button type="submit" className="btn-solid" style={{ width: '100%', padding: '1rem' }}>{t.contact.btn}</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>OmniTrack</h2>
            <p>{t.footer.desc}</p>
            <div className="footer-social">
              <a href="#"><iconify-icon icon="mdi:linkedin"></iconify-icon></a>
              <a href="#"><iconify-icon icon="mdi:twitter"></iconify-icon></a>
              <a href="#"><iconify-icon icon="mdi:facebook"></iconify-icon></a>
            </div>
          </div>
          <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>
            {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
