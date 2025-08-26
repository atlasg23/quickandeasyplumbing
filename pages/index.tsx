import type { NextPage } from "next"; 
import Head from "next/head"; 
import Image from "next/image"; 
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

        {/* Open Graph meta tags for social sharing */}         
        <meta property="og:title" content="Quick & Easy Plumbing - Mobile, Alabama" />         
        <meta property="og:description" content="Professional plumbing services in Mobile, Alabama. Quick & Easy Plumbing - 5★ Google reviews. Call (251) 895-9172" />         
        <meta property="og:image" content="https://lh3.googleusercontent.com/p/AF1QipOZ8O4INdIUxeYhd6Q9YdGG_-Hxj1dcEZ1wg26w=w141-h176-n-k-no-nu" />         
        <meta property="og:type" content="website" />         
        <meta property="og:url" content="https://your-domain.com" />          

        {/* Twitter Card meta tags */}         
        <meta name="twitter:card" content="summary_large_image" />         
        <meta name="twitter:title" content="Quick & Easy Plumbing - Mobile, Alabama" />         
        <meta name="twitter:description" content="Professional plumbing services in Mobile, Alabama. Quick & Easy Plumbing - 5★ Google reviews. Call (251) 895-9172" />         
        <meta name="twitter:image" content="https://lh3.googleusercontent.com/p/AF1QipOZ8O4INdIUxeYhd6Q9YdGG_-Hxj1dcEZ1wg26w=w141-h176-n-k-no-nu" />       
      </Head>        

      <nav className={styles.navbar}>         
        <div className={styles.navContainer}>           
          <div className={styles.logoSection} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>             
            <Image               
              src="https://lh3.googleusercontent.com/p/AF1QipOZ8O4INdIUxeYhd6Q9YdGG_-Hxj1dcEZ1wg26w=w141-h176-n-k-no-nu"               
              alt="Quick & Easy Plumbing Logo"               
              className={styles.logo}               
              width={141}               
              height={176}             
            />             
            <div className={styles.logoText}>               
              <div className={styles.companyName}>Quick & Easy Plumbing</div>               
              <div className={styles.rating}>★★★★★</div>               
              <div className={styles.mobileInfo}>                 
                <div className={styles.phoneNumber}>(251) 895-9172</div>               
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
          </div>            

          <div className={styles.bottomNavLinks}>             
            <div className={styles.servicesDropdown}>               
              <a href="#services" className={styles.navLink}>Repair</a>               
              <div className={styles.dropdownMenu}>                 
                <a href="#services" className={styles.dropdownItem}>Emergency Repairs</a>                 
                <a href="#services" className={styles.dropdownItem}>Water Heater Service</a>                 
                <a href="#services" className={styles.dropdownItem}>Sewer & Drain</a>               
              </div>             
            </div>             
            <div className={styles.servicesDropdown}>               
              <a href="#services" className={styles.navLink}>Remodel</a>               
              <div className={styles.dropdownMenu}>                 
                <a href="#services" className={styles.dropdownItem}>Bathroom Remodeling</a>                 
                <a href="#services" className={styles.dropdownItem}>Kitchen Plumbing</a>               
              </div>             
            </div>             
            <div className={styles.servicesDropdown}>               
              <a href="#services" className={styles.navLink}>Construction</a>               
              <div className={styles.dropdownMenu}>                 
                <a href="#services" className={styles.dropdownItem}>New Construction</a>                 
                <a href="#services" className={styles.dropdownItem}>Rough-in Plumbing</a>               
              </div>             
            </div>             
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
                Since 2019, Quick & Easy Plumbing has specialized in comprehensive residential plumbing solutions - from emergency repairs to complete home remodels and new construction. Our skilled professionals deliver prompt, reliable service with transparent communication and complete peace of mind.               
              </p>             
            </div>             
            <div className={styles.aboutImage}>               
              <Image                 
                src="https://lh3.googleusercontent.com/p/AF1QipNpiE_fnWWM1IvjPkqzPAz_YkoFivDpJjTZsAAE=s680-w680-h510-rw"                 
                alt="Professional plumber at work"                 
                className={styles.aboutImg}                 
                width={680}                 
                height={510}               
              />             
            </div>           
          </div>         
        </div>       
      </section>        

      <section id="services" className={styles.servicesSection}>         
        <div className={styles.servicesContainer}>           
          <h2 className={styles.servicesTitle}>Our Services</h2>           
          <p className={styles.servicesSubtitle}>Complete plumbing solutions for your home</p>           

          {/* Search bar for services */}           
          <div className={styles.searchBarContainer}>             
            <input               
              type="text"               
              placeholder="Search for your service..."               
              className={styles.searchInput}             
            />           
          </div>           

          <div className={styles.servicesGrid}>             
            <div className={styles.serviceItem}>               
              <h3>Emergency Repairs</h3>               
              <p>24/7 emergency plumbing repairs for leaks, clogs, and burst pipes</p>               
              <button                 
                className={styles.serviceReadMoreBtn}                 
                onClick={() => alert('Coming Soon!')}               
              >                 
                Read More               
              </button>             
            </div>              

            <div className={styles.serviceItem}>               
              <h3>Bathroom Remodeling</h3>               
              <p>Complete bathroom renovations from design to installation</p>               
              <button                 
                className={styles.serviceReadMoreBtn}                 
                onClick={() => alert('Coming Soon!')}               
              >                 
                Read More               
              </button>             
            </div>              

            <div className={styles.serviceItem}>               
              <h3>New Construction</h3>               
              <p>Full plumbing systems for new residential construction</p>               
              <button                 
                className={styles.serviceReadMoreBtn}                 
                onClick={() => alert('Coming Soon!')}               
              >                 
                Read More               
              </button>             
            </div>              

            <div className={styles.serviceItem}>               
              <h3>Water Heater Services</h3>               
              <p>Installation, repair, and maintenance of water heating systems</p>               
              <button                 
                className={styles.serviceReadMoreBtn}                 
                onClick={() => alert('Coming Soon!')}               
              >                 
                Read More               
              </button>             
            </div>              

            <div className={styles.serviceItem}>               
              <h3>Kitchen Plumbing</h3>               
              <p>Professional kitchen plumbing for remodels and new installations</p>               
              <button                 
                className={styles.serviceReadMoreBtn}                 
                onClick={() => alert('Coming Soon!')}               
              >                 
                Read More               
              </button>             
            </div>              

            <div className={styles.serviceItem}>               
              <h3>Sewer & Drain</h3>               
              <p>Complete sewer line and drainage system solutions</p>               
              <button                 
                className={styles.serviceReadMoreBtn}                 
                onClick={() => alert('Coming Soon!')}               
              >                 
                Read More               
              </button>             
            </div>           
          </div>         
        </div>       
      </section>        

      <section className={styles.reviewsSection}>         
        <div className={styles.reviewsContainer}>           
          <h2 className={styles.reviewsTitle}>What Our Customers Say</h2>           
          <div className={styles.reviewsSlider}>             
            <div className={styles.reviewsTrack}>               
              <div className={styles.reviewCard}>                 
                <div className={styles.reviewStars}>★★★★★</div>                 
                <p className={styles.reviewText}>                   
                  &quot;Quick &amp; Easy Plumbing saved the day! They responded to my emergency call within an hour and fixed my burst pipe professionally. Excellent service and fair pricing. Highly recommend!&quot;                 
                </p>                 
                <div className={styles.reviewAuthor}>                   
                  <strong>Sarah Johnson</strong>                   
                  <span>Mobile, AL</span>                 
                </div>               
              </div>                

              <div className={styles.reviewCard}>                 
                <div className={styles.reviewStars}>★★★★★</div>                 
                <p className={styles.reviewText}>                   
                  &quot;Outstanding bathroom remodel! The team was professional, clean, and finished on time. Our new bathroom looks amazing and the plumbing works perfectly. Will definitely use them again!&quot;                 
                </p>                 
                <div className={styles.reviewAuthor}>                   
                  <strong>Mike Rodriguez</strong>                   
                  <span>Daphne, AL</span>                 
                </div>               
              </div>                

              <div className={styles.reviewCard}>                 
                <div className={styles.reviewStars}>★★★★★</div>                 
                <p className={styles.reviewText}>                   
                  &quot;Reliable, honest, and skilled plumbers. They diagnosed my water heater issue quickly and provided a fair quote. The installation was flawless. These guys know what they&apos;re doing!&quot;                 
                </p>                 
                <div className={styles.reviewAuthor}>                   
                  <strong>Jennifer Williams</strong>                   
                  <span>Spanish Fort, AL</span>                 
                </div>               
              </div>             
            </div>           
          </div>           
          <div className={styles.reviewsButtonContainer}>             
            <a               
              href="https://www.google.com/search?q=quick+and+easy+plumbing+mobile+al&rlz=1CAGXWE_enUS1166&oq=quick+and+&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIKCAEQLhixAxiABDIGCAIQRRhAMgYIAxBFGDkyBwgEEAAYgAQyEAgFEC4YrwEYxwEYgAQYjgUyBwgGEAAYgAQyBggHEEUYPNIBCDQ2NzdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x22710e6d2bda2d21:0x4ed56e8bbf32a5a5,1,,,,"
              target="_blank"               
              rel="noopener noreferrer"               
              className={styles.readMoreReviewsBtn}             
            >               
              📍 Read More Reviews on Google             
            </a>           
          </div>         
        </div>       
      </section>        

      <section className={styles.mapSection}>         
        <div className={styles.mapContainer}>           
          <h2 className={styles.mapTitle}>Our Service Area</h2>           
          <iframe             
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDJe6jp7mNRZm-dAGFAMrSSADU5KwD0vtc&q=Quick+and+Easy+Plumbing,Mobile,AL&zoom=11"             
            width="100%"             
            height="400"             
            style={{ border: 0, borderRadius: '15px' }}             
            allowFullScreen             
            loading="lazy"             
            referrerPolicy="no-referrer-when-downgrade"             
            title="Quick & Easy Plumbing Service Area Map"           
          ></iframe>           
          <div className={styles.galleryContainer}>             
            <h2 className={styles.galleryTitle}>Gallery</h2>             
            <div className={styles.gallerySlider}>               
              <div className={styles.galleryTrack}>                 
                <div className={styles.gallerySlide}>                   
                  <Image src="https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/485003741_639156525535114_9086182860878260040_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_ohc=F9Xi_lfrPUQQ7kNvwE_dIkP&_nc_oc=AdlL7JQiCBitsj8lPe-Ic6Qm8iGfD4zMZQBib-n9j1j9eZJOQdp9oga2abGEot6VrVQ&_nc_zt=23&_nc_ht=scontent-dfw5-1.xx&_nc_gid=OGGEQlAmBNnjeDLUjAaQ2w&oh=00_AfUDPi7Gxpzu9ZVUj0ZxTswDfETECcb_iBa90-mAe0P3AA&oe=68B2EE32" alt="Plumbing Work 1" className={styles.galleryImg} width={500} height={500} />                 
                </div>                 
                <div className={styles.gallerySlide}>                   
                  <Image src="https://scontent-dfw5-3.xx.fbcdn.net/v/t39.30808-6/484791381_639156528868447_3610978590682047495_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=L7Zvmitj3HkQ7kNvwGXjqH-&_nc_oc=Adm27Soro8YYisjvNvou7i6Dp4efFxOn_NvowZcl3E333JQSCX84G19GZIvCKKoPE8A&_nc_zt=23&_nc_ht=scontent-dfw5-3.xx&_nc_gid=99R1J0VNwztor47PHBXnUA&oh=00_AfVcm26FnYJ2r0Epi4HlSGMEmjy6px2jWoUIv50YLENQfQ&oe=68B2C88A" alt="Plumbing Work 2" className={styles.galleryImg} width={500} height={500} />                 
                </div>                 
                <div className={styles.gallerySlide}>                   
                  <Image src="https://lh3.googleusercontent.com/p/AF1QipNOTjnDnrYbrd9EaG3c-BHjMBmpy0C5cJPVH0U1=s680-w680-h510-rw" alt="Professional Plumbing Service" className={styles.galleryImg} width={680} height={510} />                 
                </div>                 
                <div className={styles.gallerySlide}>                   
                  <Image src="https://lh3.googleusercontent.com/p/AF1QipNhHIe8tLAxmU0z1QubUJSRUp3M_wviwLCGvUvy=s680-w680-h510-rw" alt="Bathroom Remodeling" className={styles.galleryImg} width={680} height={510} />                 
                </div>               
              </div>             
            </div>           
          </div>         
        </div>       
      </section>        

      <section id="contact" className={styles.contactSection}>         
        <div className={styles.contactContainer}>           
          <div className={styles.contactContent}>             
            <div className={styles.contactInfo}>               
              <h2 className={styles.contactTitle}>Request Your Free Estimate</h2>               
              <p className={styles.contactDescription}>                 
                Contact Quick & Easy Plumbing today for professional service and reliable solutions. Complete the form below and we&apos;ll provide you with a detailed, no-obligation estimate within 24 hours.               
              </p>                

              <div className={styles.contactDetails}>                 
                <div className={styles.contactItem}>                   
                  <div className={styles.contactIcon}>📞</div>                   
                  <div>                     
                    <h4>Call Us Now</h4>                     
                    <p>(251) 895-9172</p>                   
                  </div>                 
                </div>                 
                <div className={styles.contactItem}>                   
                  <div className={styles.contactIcon}>📧</div>                   
                  <div>                     
                    <h4>Email Us</h4>                     
                    <p>info@quickeasyplumbing.com</p>                   
                  </div>                 
                </div>                 
                <div className={styles.contactItem}>                   
                  <div className={styles.contactIcon}>🕒</div>                   
                  <div>                     
                    <h4>Business Hours</h4>                     
                    <p>Mon-Fri: 7AM-7PM<br />Sat: 8AM-5PM<br />Emergency: 24/7</p>                   
                  </div>                 
                </div>               
              </div>             
            </div>              

            <div className={styles.contactForm}>               
              <form className={styles.form}>                 
                <div className={styles.formRow}>                   
                  <div className={styles.formGroup}>                     
                    <input                       
                      type="text"                       
                      placeholder="First Name*"                       
                      className={styles.formInput}                       
                      required                     
                    />                   
                  </div>                   
                  <div className={styles.formGroup}>                     
                    <input                       
                      type="text"                       
                      placeholder="Last Name*"                       
                      className={styles.formInput}                       
                      required                     
                    />                   
                  </div>                 
                </div>                  

                <div className={styles.formRow}>                   
                  <div className={styles.formGroup}>                     
                    <input                       
                      type="tel"                       
                      placeholder="Phone Number*"                       
                      className={styles.formInput}                       
                      required                     
                    />                   
                  </div>                   
                  <div className={styles.formGroup}>                     
                    <input                       
                      type="email"                       
                      placeholder="Email Address*"                       
                      className={styles.formInput}                       
                      required                     
                    />                   
                  </div>                 
                </div>                  

                <div className={styles.formGroup}>                   
                  <input                     
                    type="text"                     
                    placeholder="Property Address*"                     
                    className={styles.formInput}                     
                    required                   
                  />                 
                </div>                  

                <div className={styles.formGroup}>                   
                  <select className={styles.formSelect} required>                     
                    <option value="">Select Service Type*</option>                     
                    <option value="emergency">Emergency Repair</option>                     
                    <option value="bathroom">Bathroom Remodeling</option>                     
                    <option value="kitchen">Kitchen Plumbing</option>                     
                    <option value="water-heater">Water Heater Service</option>                     
                    <option value="new-construction">New Construction</option>                     
                    <option value="sewer-drain">Sewer & Drain</option>                     
                    <option value="other">Other</option>                   
                  </select>                 
                </div>                  

                <div className={styles.formGroup}>                   
                  <textarea                     
                    placeholder="Describe your plumbing needs in detail*"                     
                    className={styles.formTextarea}                     
                    rows={5}                     
                    required                   
                  ></textarea>                 
                </div>                  

                <div className={styles.formGroup}>                   
                  <select className={styles.formSelect}>                     
                    <option value="">Preferred Contact Time</option>                     
                    <option value="morning">Morning (8AM-12PM)</option>                     
                    <option value="afternoon">Afternoon (12PM-5PM)</option>                     
                    <option value="evening">Evening (5PM-7PM)</option>                     
                    <option value="anytime">Anytime</option>                   
                  </select>                 
                </div>                  

                <button type="submit" className={styles.submitButton}>                   
                  Get My Free Estimate                 
                </button>                  

                <p className={styles.formDisclaimer}>                   
                  * Required fields. By submitting this form, you agree to be contacted by Quick &amp; Easy Plumbing regarding your service request.                 
                </p>               
              </form>             
            </div>           
          </div>         
        </div>       
      </section>        

      <footer className={styles.footer}>         
        <div className={styles.footerContainer}>           
          <div className={styles.footerContent}>             
            <div className={styles.footerSection}>               
              <Image                 
                src="https://lh3.googleusercontent.com/p/AF1QipOZ8O4INdIUxeYhd6Q9YdGG_-Hxj1dcEZ1wg26w=w141-h176-n-k-no-nu"                 
                alt="Quick & Easy Plumbing Logo"                 
                className={styles.footerLogo}                 
                width={141}                 
                height={176}               
              />               
              <h3>Quick & Easy Plumbing</h3>               
              <p>Professional plumbing services in Mobile, Alabama and surrounding areas since 2019.</p>               
              <div className={styles.footerRating}>                 
                ⭐⭐⭐⭐⭐ 5.0 Google Reviews               
              </div>             
            </div>              

            <div className={styles.footerSection}>               
              <h4>Services</h4>               
              <ul>                 
                <li>Emergency Repairs</li>                 
                <li>Bathroom Remodeling</li>                 
                <li>Kitchen Plumbing</li>                 
                <li>Water Heater Service</li>                 
                <li>New Construction</li>                 
                <li>Sewer & Drain</li>               
              </ul>             
            </div>              

            <div className={styles.footerSection}>               
              <h4>Service Areas</h4>               
              <ul>                 
                <li>Mobile, AL</li>                 
                <li>Daphne, AL</li>                 
                <li>Spanish Fort, AL</li>                 
                <li>Fairhope, AL</li>                 
                <li>Tillmans Corner, AL</li>                 
                <li>Saraland, AL</li>               
              </ul>             
            </div>              

            <div className={styles.footerSection}>               
              <h4>Contact Info</h4>               
              <div className={styles.footerContact}>                 
                <p>📞 (251) 895-9172</p>                 
                <p>📧 info@quickeasyplumbing.com</p>                 
                <p>🕒 Mon-Fri: 7AM-7PM</p>                 
                <p>🚨 Emergency: 24/7</p>               
              </div>             
            </div>           
          </div>            

          <div className={styles.footerBottom}>             
            <div className={styles.footerBottomContent}>               
              <p>&copy; 2024 Quick & Easy Plumbing. All rights reserved. | Licensed & Insured</p>               
              <div className={styles.footerLinks}>                 
                <a href="#privacy">Privacy Policy</a>                 
                <a href="#terms">Terms of Service</a>               
              </div>             
            </div>           
          </div>         
        </div>       
      </footer>     
    </div>   
  ); 
};  

export default Home;  
