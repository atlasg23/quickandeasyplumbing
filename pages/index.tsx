
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

      {/* About Us Option 1 - Minimalist Elegance */}
      <section className={styles.aboutOption1}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutIntro}>
              <span className={styles.aboutLabel}>Excellence in Every Drop</span>
              <h2 className={styles.aboutTitle}>Crafting Solutions with Precision</h2>
              <div className={styles.aboutLine}></div>
            </div>
            
            <div className={styles.aboutGrid}>
              <div className={styles.aboutImageSection}>
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Elegant plumbing work" />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayText}>15+ Years of Mastery</div>
                </div>
              </div>
              
              <div className={styles.aboutContent}>
                <p className={styles.aboutElegantText}>
                  At Quick & Easy Plumbing, we believe that exceptional service flows from a 
                  commitment to excellence. Every project is approached with meticulous attention 
                  to detail and an unwavering dedication to quality that has defined our reputation 
                  throughout Mobile, Alabama.
                </p>
                
                <div className={styles.elegantFeatures}>
                  <div className={styles.elegantFeature}>
                    <div className={styles.elegantIcon}>◆</div>
                    <div>
                      <h4>Masterful Craftsmanship</h4>
                      <p>Precision-driven solutions tailored to your unique needs</p>
                    </div>
                  </div>
                  <div className={styles.elegantFeature}>
                    <div className={styles.elegantIcon}>◆</div>
                    <div>
                      <h4>Immediate Response</h4>
                      <p>Round-the-clock availability for urgent matters</p>
                    </div>
                  </div>
                  <div className={styles.elegantFeature}>
                    <div className={styles.elegantIcon}>◆</div>
                    <div>
                      <h4>Guaranteed Excellence</h4>
                      <p>Your complete satisfaction is our highest priority</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Option 2 - Sophisticated Storytelling */}
      <section className={styles.aboutOption2}>
        <div className={styles.aboutContainer}>
          <div className={styles.storyHero}>
            <div className={styles.storyContent}>
              <h2 className={styles.storyTitle}>Where Tradition Meets Innovation</h2>
              <p className={styles.storySubtitle}>A legacy of trust, built one connection at a time</p>
            </div>
            <div className={styles.storyVisual}>
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" alt="Professional expertise" />
            </div>
          </div>
          
          <div className={styles.storySection}>
            <div className={styles.storyText}>
              <div className={styles.storyParagraph}>
                <h3>Our Journey</h3>
                <p>
                  From humble beginnings in 2008, Quick & Easy Plumbing emerged from a simple yet 
                  profound belief: that every home deserves the highest standard of plumbing excellence. 
                  What started as a vision has evolved into Mobile's premier plumbing service.
                </p>
              </div>
              
              <div className={styles.storyParagraph}>
                <h3>Our Philosophy</h3>
                <p>
                  We don't just fix pipes—we forge relationships. Each service call is an opportunity 
                  to demonstrate our commitment to quality, integrity, and the community we proudly 
                  call home.
                </p>
              </div>
            </div>
            
            <div className={styles.credentialsGrid}>
              <div className={styles.credential}>
                <div className={styles.credNumber}>500+</div>
                <div className={styles.credLabel}>Satisfied Clients</div>
              </div>
              <div className={styles.credential}>
                <div className={styles.credNumber}>15</div>
                <div className={styles.credLabel}>Years of Excellence</div>
              </div>
              <div className={styles.credential}>
                <div className={styles.credNumber}>24/7</div>
                <div className={styles.credLabel}>Emergency Support</div>
              </div>
              <div className={styles.credential}>
                <div className={styles.credNumber}>★★★★★</div>
                <div className={styles.credLabel}>Perfect Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
