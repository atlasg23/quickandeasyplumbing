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
    </div>
  );
};

export default Home;