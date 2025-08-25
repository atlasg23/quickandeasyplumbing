
import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Quick & Easy Plumbing",
      subtitle: "Professional plumbing services in Mobile, Alabama"
    },
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Expert Solutions",
      subtitle: "Reliable service you can trust - ★★★★★ 5.0 Google reviews"
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
              <h2 className={styles.companyName}>Quick & Easy Plumbing</h2>
              <div className={styles.rating}>★★★★★ 5.0 Google Reviews</div>
            </div>
          </div>
          <div className={styles.navLinks}>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
            <a href="tel:(251)895-9172" className={styles.phoneButton}>Call (251) 895-9172</a>
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
                <h1 className={styles.heroTitle}>{slide.title}</h1>
                <p className={styles.heroSubtitle}>{slide.subtitle}</p>
                <button className={styles.heroButton}>
                  Call (251) 895-9172
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

      {/* About Us - New Modern Design */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutHeader}>
            <div className={styles.headerBadge}>
              <span>★★★★★ 5.0 Rating</span>
              <span>Since 2019</span>
            </div>
            <h2 className={styles.aboutMainTitle}>Mobile's Most Trusted Plumbers</h2>
            <p className={styles.aboutIntro}>
              From emergency repairs to complete home renovations, we deliver professional plumbing 
              solutions that Mobile residents rely on.
            </p>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <div className={styles.cardIcon}>🚨</div>
              <h3>Emergency Response</h3>
              <p>24/7 emergency plumbing services when you need us most. Fast response times guaranteed.</p>
              <div className={styles.cardFooter}>Available Now</div>
            </div>

            <div className={styles.aboutCard}>
              <div className={styles.cardIcon}>🏠</div>
              <h3>Home Remodeling</h3>
              <p>Complete bathroom and kitchen plumbing renovations with modern fixtures and design.</p>
              <div className={styles.cardFooter}>Full Service</div>
            </div>

            <div className={styles.aboutCard}>
              <div className={styles.cardIcon}>🔧</div>
              <h3>Repair & Maintenance</h3>
              <p>Expert diagnosis and repair of leaks, clogs, and all residential plumbing issues.</p>
              <div className={styles.cardFooter}>Professional</div>
            </div>

            <div className={styles.aboutCard}>
              <div className={styles.cardIcon}>🏗️</div>
              <h3>New Construction</h3>
              <p>Complete plumbing installation for new homes and commercial construction projects.</p>
              <div className={styles.cardFooter}>Licensed & Insured</div>
            </div>
          </div>

          <div className={styles.statsSection}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Happy Customers</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5.0</div>
              <div className={styles.statLabel}>Google Rating</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Emergency Service</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
