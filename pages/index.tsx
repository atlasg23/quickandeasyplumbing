import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "",
      subtitle: "Professional Plumbing Services in Mobile & Surrounding Areas",
      showLogo: true
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipNOTjnDnrYbrd9EaG3c-BHjMBmpy0C5cJPVH0U1=s680-w680-h510-rw",
      title: "Professional Plumbing Excellence",
      subtitle: "Quality workmanship and reliable service you can count on",
      buttonText: "5-Star Google Reviews",
      isReviewsButton: true
    },
    {
      image: "https://lh3.googleusercontent.com/p/AF1QipNhHIe8tLAxmU0z1QubUJSRUp3M_wviwLCGvUvy=s680-w680-h510-rw",
      title: "Residential Remodeling Experts",
      subtitle: "Bathroom renovations, kitchen plumbing, and home remodels - we handle it all",
      buttonText: "Schedule Service"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Quick & Easy Plumbing - Mobile, Alabama | Professional Plumbing Services</title>
        <meta name="description" content="Professional plumbing services in Mobile, Alabama. Quick & Easy Plumbing - 5★ Google reviews. Call (251) 895-9172" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logoSection}>
            <img 
              src="https://lh3.googleusercontent.com/p/AF1QipOZ8O4INdIUxeYhd6Q9YdGG_-Hxj1dcEZ1wg26w=w141-h176-n-k-no-nu" 
              alt="Quick & Easy Plumbing Logo" 
              className={styles.logo}
            />
            <div className={styles.logoText}>
              <div className={styles.mobileInfo}>
                <div className={styles.phoneNumber}>(251) 895-9172</div>
                <div className={styles.rating}>★★★★★ 5.0 Google Reviews</div>
              </div>
            </div>
          </div>
          
          <button 
            className={styles.hamburger}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ''}`}>
            <a href="#services" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="tel:(251)895-9172" className={styles.phoneButton} onClick={() => setMobileMenuOpen(false)}>Call (251) 895-9172</a>
          </div>
        </div>
      </nav>

      <main className={styles.hero}>
        <div className={styles.slideContainer}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`
              }}
            >
              <div className={styles.slideContent}>
                {slide.showLogo ? (
                  <h1 className={styles.heroTitle}>Quick & Easy Plumbing</h1>
                ) : (
                  <h1 className={styles.heroTitle}>{slide.title}</h1>
                )}
                <p className={`${styles.heroSubtitle} ${styles.heroSubtitleBold}`}>
                  {slide.subtitle}
                </p>
                <button className={`${styles.heroButton} ${slide.isReviewsButton ? styles.reviewsButton : ''}`}>
                  {slide.buttonText || "Call (251) 895-9172"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.slideIndicators}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.indicatorActive : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </main>

      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.aboutTitle}>About Quick & Easy Plumbing</h2>
              <p className={styles.aboutDescription}>
                Quick & Easy Plumbing specializes in comprehensive residential plumbing solutions, 
                from simple repairs like leaky faucets and clogged drains to complete home remodels 
                and new residential construction projects.
              </p>
              <p className={styles.aboutDescription}>
                Established in 2019, our team of skilled professionals delivers prompt, reliable 
                service with transparent communication. We're committed to keeping your home's 
                plumbing system running smoothly and efficiently, giving you complete peace of mind.
              </p>
              <div className={styles.aboutFeatures}>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>🔧</span>
                  <span>Expert Repairs & Installations</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>🏠</span>
                  <span>Complete Home Remodels</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>⚡</span>
                  <span>Fast & Reliable Service</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Professional plumber at work" 
                className={styles.aboutImg}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesHeader}>
            <h2 className={styles.servicesTitle}>Our Plumbing Services</h2>
            <p className={styles.servicesSubtitle}>
              Professional plumbing solutions for all your residential needs
            </p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔧</div>
              <h3 className={styles.serviceTitle}>Repairs & Maintenance</h3>
              <ul className={styles.serviceList}>
                <li>Leaky faucets & pipes</li>
                <li>Clogged drains & toilets</li>
                <li>Water heater repair</li>
                <li>Garbage disposal issues</li>
                <li>Emergency repairs</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🚿</div>
              <h3 className={styles.serviceTitle}>Bathroom Remodeling</h3>
              <ul className={styles.serviceList}>
                <li>Complete bathroom renovations</li>
                <li>Shower & tub installations</li>
                <li>Vanity & sink upgrades</li>
                <li>Toilet replacements</li>
                <li>Tile & fixture installation</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🍽️</div>
              <h3 className={styles.serviceTitle}>Kitchen Plumbing</h3>
              <ul className={styles.serviceList}>
                <li>Kitchen sink installation</li>
                <li>Dishwasher hookups</li>
                <li>Garbage disposal installation</li>
                <li>Water line connections</li>
                <li>Kitchen remodel plumbing</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🏗️</div>
              <h3 className={styles.serviceTitle}>New Construction</h3>
              <ul className={styles.serviceList}>
                <li>Rough-in plumbing</li>
                <li>Complete plumbing systems</li>
                <li>Fixture installations</li>
                <li>Water & sewer line installation</li>
                <li>Code compliance inspections</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>💧</div>
              <h3 className={styles.serviceTitle}>Water Heaters</h3>
              <ul className={styles.serviceList}>
                <li>Water heater installation</li>
                <li>Tankless water heaters</li>
                <li>Repair & maintenance</li>
                <li>Energy-efficient upgrades</li>
                <li>Emergency replacement</li>
              </ul>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔍</div>
              <h3 className={styles.serviceTitle}>Drain & Sewer</h3>
              <ul className={styles.serviceList}>
                <li>Drain cleaning & snaking</li>
                <li>Sewer line inspections</li>
                <li>Hydro jetting services</li>
                <li>Sewer line repair</li>
                <li>Preventive maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.serviceAreaSection}>
        <div className={styles.serviceAreaContainer}>
          <div className={styles.serviceAreaContent}>
            <div className={styles.serviceAreaText}>
              <h2 className={styles.serviceAreaTitle}>Service Areas</h2>
              <p className={styles.serviceAreaDescription}>
                Proudly serving Mobile and surrounding areas with reliable plumbing services
              </p>
              <div className={styles.serviceAreaGrid}>
                <div className={styles.areaColumn}>
                  <h4 className={styles.areaTitle}>Mobile County</h4>
                  <ul className={styles.areaList}>
                    <li>Mobile</li>
                    <li>Prichard</li>
                    <li>Saraland</li>
                    <li>Chickasaw</li>
                    <li>Satsuma</li>
                  </ul>
                </div>
                <div className={styles.areaColumn}>
                  <h4 className={styles.areaTitle}>Baldwin County</h4>
                  <ul className={styles.areaList}>
                    <li>Spanish Fort</li>
                    <li>Daphne</li>
                    <li>Fairhope</li>
                    <li>Bay Minette</li>
                    <li>Robertsdale</li>
                  </ul>
                </div>
                <div className={styles.areaColumn}>
                  <h4 className={styles.areaTitle}>Surrounding Areas</h4>
                  <ul className={styles.areaList}>
                    <li>Theodore</li>
                    <li>Tillmans Corner</li>
                    <li>Creola</li>
                    <li>Grand Bay</li>
                    <li>Irvington</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.serviceAreaMap}>
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapIcon}>📍</div>
                <p>Serving Mobile & Surrounding Areas</p>
                <p className={styles.serviceRadius}>30+ Mile Service Radius</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactHeader}>
            <h2 className={styles.contactTitle}>Get Your Free Estimate</h2>
            <p className={styles.contactSubtitle}>
              Ready to solve your plumbing issues? Contact us today for fast, reliable service
            </p>
          </div>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>📞</div>
                <h3>Call Us Now</h3>
                <p className={styles.contactPhone}>(251) 895-9172</p>
                <p>Available 24/7 for emergencies</p>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>⏰</div>
                <h3>Business Hours</h3>
                <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Sunday: Emergency calls only</p>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>📍</div>
                <h3>Service Area</h3>
                <p>Mobile, AL & Surrounding Areas</p>
                <p>30+ mile service radius</p>
              </div>
            </div>
            <form className={styles.contactForm}>
              <div className={styles.formGroup}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className={styles.formInput}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <select className={styles.formSelect} required>
                  <option value="">Select Service Type</option>
                  <option value="emergency">Emergency Repair</option>
                  <option value="repair">General Repair</option>
                  <option value="installation">Installation</option>
                  <option value="remodel">Bathroom Remodel</option>
                  <option value="kitchen">Kitchen Plumbing</option>
                  <option value="construction">New Construction</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <textarea 
                  placeholder="Describe your plumbing issue or project..."
                  className={styles.formTextarea}
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.formButton}>
                Get Free Estimate
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipOZ8O4INdIUxeYhd6Q9YdGG_-Hxj1dcEZ1wg26w=w141-h176-n-k-no-nu" 
                alt="Quick & Easy Plumbing Logo" 
                className={styles.footerLogo}
              />
              <h3 className={styles.footerTitle}>Quick & Easy Plumbing</h3>
              <p className={styles.footerDescription}>
                Professional plumbing services in Mobile, Alabama since 2019. 
                Your trusted local plumbers for all residential plumbing needs.
              </p>
              <div className={styles.footerRating}>
                <span className={styles.stars}>★★★★★</span>
                <span>5.0 Google Reviews</span>
              </div>
            </div>

            <div className={styles.footerSection}>
              <h4 className={styles.footerSectionTitle}>Services</h4>
              <ul className={styles.footerList}>
                <li><a href="#services">Emergency Repairs</a></li>
                <li><a href="#services">Bathroom Remodeling</a></li>
                <li><a href="#services">Kitchen Plumbing</a></li>
                <li><a href="#services">Water Heaters</a></li>
                <li><a href="#services">Drain Cleaning</a></li>
                <li><a href="#services">New Construction</a></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4 className={styles.footerSectionTitle}>Service Areas</h4>
              <ul className={styles.footerList}>
                <li>Mobile, AL</li>
                <li>Spanish Fort, AL</li>
                <li>Daphne, AL</li>
                <li>Fairhope, AL</li>
                <li>Saraland, AL</li>
                <li>Theodore, AL</li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4 className={styles.footerSectionTitle}>Contact Info</h4>
              <div className={styles.footerContactInfo}>
                <div className={styles.footerContactItem}>
                  <span className={styles.footerContactIcon}>📞</span>
                  <a href="tel:(251)895-9172" className={styles.footerPhone}>
                    (251) 895-9172
                  </a>
                </div>
                <div className={styles.footerContactItem}>
                  <span className={styles.footerContactIcon}>📍</span>
                  <span>Mobile, AL & Surrounding Areas</span>
                </div>
                <div className={styles.footerContactItem}>
                  <span className={styles.footerContactIcon}>⏰</span>
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.footerBottomContent}>
              <p>&copy; 2024 Quick & Easy Plumbing. All rights reserved.</p>
              <p>Licensed & Insured Plumbing Contractor</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;