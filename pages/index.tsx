
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

      {/* About Us Option 1 - Refined Parallax */}
      <section className={styles.aboutOption1}>
        <div className={styles.parallaxContainer}>
          <div className={styles.parallaxContent}>
            <div className={styles.contentOverlay}>
              <div className={styles.aboutWrapper}>
                <h2 className={styles.aboutTitle}>Excellence Rooted in Experience</h2>
                <div className={styles.aboutDescription}>
                  <p>
                    Quick & Easy Plumbing tackles residential plumbing challenges from leaky faucets to clogged drains, 
                    complete remodels, and residential construction. Founded in 2019, their experienced plumbers combine 
                    speedy service with clear communication, keeping your home's plumbing system functional and worry-free.
                  </p>
                </div>
                
                <div className={styles.serviceHighlights}>
                  <div className={styles.highlight}>
                    <div className={styles.highlightIcon}>◉</div>
                    <span>Emergency Repairs</span>
                  </div>
                  <div className={styles.highlight}>
                    <div className={styles.highlightIcon}>◉</div>
                    <span>Complete Remodels</span>
                  </div>
                  <div className={styles.highlight}>
                    <div className={styles.highlightIcon}>◉</div>
                    <span>New Construction</span>
                  </div>
                  <div className={styles.highlight}>
                    <div className={styles.highlightIcon}>◉</div>
                    <span>Clear Communication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Option 2 - Clean Modern */}
      <section className={styles.aboutOption2}>
        <div className={styles.aboutContainer}>
          <div className={styles.modernLayout}>
            <div className={styles.modernContent}>
              <div className={styles.sectionHeader}>
                <span className={styles.subtitle}>Since 2019</span>
                <h2 className={styles.modernTitle}>Professional Plumbing Excellence</h2>
              </div>
              
              <div className={styles.contentGrid}>
                <div className={styles.mainContent}>
                  <p className={styles.leadText}>
                    Quick & Easy Plumbing tackles residential plumbing challenges from leaky faucets 
                    to clogged drains, complete remodels, and residential construction.
                  </p>
                  <p className={styles.bodyText}>
                    Founded in 2019, our experienced plumbers combine speedy service with clear 
                    communication, keeping your home's plumbing system functional and worry-free. 
                    Every project reflects our commitment to quality craftsmanship and customer satisfaction.
                  </p>
                </div>
                
                <div className={styles.imageFrame}>
                  <img 
                    src="https://lh3.googleusercontent.com/p/AF1QipNpiE_fnWWM1IvjPkqzPAz_YkoFivDpJjTZsAAE=s680-w680-h510-rw" 
                    alt="Quick & Easy Plumbing professional work" 
                    className={styles.aboutImage}
                  />
                </div>
              </div>
              
              <div className={styles.featuresRow}>
                <div className={styles.feature}>
                  <h4>Residential Experts</h4>
                  <p>Specialized in home plumbing systems</p>
                </div>
                <div className={styles.feature}>
                  <h4>Fast Response</h4>
                  <p>Quick solutions when you need them</p>
                </div>
                <div className={styles.feature}>
                  <h4>Clear Communication</h4>
                  <p>Transparent service from start to finish</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
