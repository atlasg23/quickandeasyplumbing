
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

      {/* About Us Option 1 - Professional & Clean */}
      <section className={styles.aboutOption1}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.aboutTitle}>About Quick & Easy Plumbing</h2>
              <p className={styles.aboutDescription}>
                With over 15 years of experience serving Mobile, Alabama and surrounding areas, 
                Quick & Easy Plumbing has built a reputation for reliable, professional service. 
                We understand that plumbing emergencies don't wait for business hours, which is 
                why we're available 24/7 to handle your urgent needs.
              </p>
              <div className={styles.aboutFeatures}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>🔧</div>
                  <h3>Expert Technicians</h3>
                  <p>Licensed and insured professionals with years of experience</p>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>⚡</div>
                  <h3>Fast Response</h3>
                  <p>Emergency service available 24/7 for urgent plumbing needs</p>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>💯</div>
                  <h3>Quality Guaranteed</h3>
                  <p>100% satisfaction guarantee on all our work</p>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional plumber at work" />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Option 2 - Personal & Story-driven */}
      <section className={styles.aboutOption2}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutHeader}>
            <h2 className={styles.aboutTitle2}>Meet Your Local Plumbing Experts</h2>
            <p className={styles.aboutSubtitle}>Family-owned business serving Mobile with pride since 2008</p>
          </div>
          
          <div className={styles.aboutStory}>
            <div className={styles.storyImage}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Friendly plumber" />
            </div>
            <div className={styles.storyText}>
              <h3>Our Story</h3>
              <p>
                Quick & Easy Plumbing started as a small family business with a simple mission: 
                provide honest, reliable plumbing services to our neighbors in Mobile. What began 
                in a garage with just a truck and a toolbox has grown into the area's most trusted 
                plumbing service.
              </p>
              <p>
                We treat every customer like family because in Mobile, that's who you are. Whether 
                it's a leaky faucet or a major pipe repair, we bring the same level of care and 
                expertise to every job.
              </p>
            </div>
          </div>

          <div className={styles.aboutStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Happy Customers</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Emergency Service</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5★</div>
              <div className={styles.statLabel}>Google Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
