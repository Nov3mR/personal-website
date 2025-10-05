'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function HomePage() {
  useEffect(() => {
    // If your script.js has DOM animations or event listeners,
    // you can either import it directly or replicate the logic here.
    // Example: document.querySelector('#menu-icon')?.addEventListener(...)
  }, []);

  return (
    <main>
      <header className="header">
        <a href="#" className="logo">Aadit.<span className="animate" style={{ ['--i' as any]: 1 }}></span></a>

        <div className="bx bx-menu" id="menu-icon"><span className="animate" style={{ ['--i' as any]: 2 }}></span></div>

        <nav className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

          <span className="active-nav"></span>
          <span className="animate" style={{ ['--i' as any]: 2 }}></span>
        </nav>
      </header>

      <section className="home show-animate" id="home">
        <div className="home-content">
          <h1>Hi, I'm <span>Aadit Gupta</span><span className="animate" style={{ ['--i' as any]: 2 }}></span></h1>
          <div className="text-animate">
            <h3>Frontend Developer</h3>
            <span className="animate" style={{ ['--i' as any]: 3 }}></span>
          </div> 
          <p>Welcome to my personal website.
            <span className="animate" style={{ ['--i' as any]: 4 }}></span>
          </p>

          <div className="btn-box">
            <a href="#" className="btn">Hire Me</a>
            <a href="#" className="btn">Let's Talk</a>
            <span className="animate" style={{ ['--i' as any]: 5 }}></span>
          </div>
        </div>

        <div className="home-sci">
          <a href="#"><i className='bx bxl-twitter'></i></a>
          <a href="#"><i className='bx bxl-linkedin'></i></a>
          <a href="#"><i className='bx bxl-instagram'></i></a>
          <span className="animate" style={{ ['--i' as any]: 6 }}></span>
        </div>

        <div className="home-imgHover"></div>
        <span className="animate home-img" style={{ ['--i' as any]: 7 }}></span>
      </section>

      <section className="about" id="about">
        <h2 className="heading">About <span>Me</span><span className="animate scroll" style={{ ['--i' as any]: 1 }}></span></h2>
        <div className="about-img">
          <img src="/aaditImage copy.png" alt="Aadit" />
          <span className="circle-spin"></span>
          <span className="animate scroll" style={{ ['--i' as any]: 2 }}></span>
        </div>

        <div className="about-content">
          <h3>Frontend Developer!<span className="animate scroll" style={{ ['--i' as any]: 3 }}></span></h3>
          <p>I'm a developer/designer/creator passionate about building awesome stuff.
            <span className="animate scroll" style={{ ['--i' as any]: 4 }}></span>
          </p>
          <div className="btn-box btns">
            <a href="#" className="btn">Read More</a>
            <span className="animate scroll" style={{ ['--i' as any]: 5 }}></span>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <h2 className="heading">My <span>Journey</span><span className="animate scroll" style={{ ['--i' as any]: 1 }}></span></h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education<span className="animate scroll" style={{ ['--i' as any]: 2 }}></span></h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i> 2024 - 2029</div>
                  <h3>Bachelor's of Applied Sciences - University of Toronto</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, unde!.</p>
                </div>
              </div>
              <span className="animate scroll" style={{ ['--i' as any]: 3 }}></span>
            </div>
          </div>

          <div className="education-column">
            <h3 className="title">Experience<span className="animate scroll" style={{ ['--i' as any]: 5 }}></span></h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i> 2024 - 2029</div>
                  <h3>Web Developer</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, unde!</p>
                </div>
              </div>
              <span className="animate scroll" style={{ ['--i' as any]: 6 }}></span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <h2 className="heading">My <span>Skills</span><span className="animate scroll" style={{ ['--i' as any]: 1 }}></span></h2>
        <div className="skills-row">
          <div className="skills-column">
            <h3 className="title">Coding Skills<span className="animate scroll" style={{ ['--i' as any]: 2 }}></span></h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress"><h3>HTML <span>90%</span></h3><div className="bar"><span></span></div></div>
                <div className="progress"><h3>CSS <span>80%</span></h3><div className="bar"><span></span></div></div>
                <div className="progress"><h3>JavaScript <span>65%</span></h3><div className="bar"><span></span></div></div>
                <div className="progress"><h3>Python <span>85%</span></h3><div className="bar"><span></span></div></div>
              </div>
              <span className="animate scroll" style={{ ['--i' as any]: 3 }}></span>
            </div>
          </div>

          <div className="skills-column">
            <h3 className="title">Professional Skills<span className="animate scroll" style={{ ['--i' as any]: 4 }}></span></h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress"><h3>Web Design <span>90%</span></h3><div className="bar"><span></span></div></div>
                <div className="progress"><h3>CSS <span>80%</span></h3><div className="bar"><span></span></div></div>
                <div className="progress"><h3>JavaScript <span>65%</span></h3><div className="bar"><span></span></div></div>
                <div className="progress"><h3>Python <span>85%</span></h3><div className="bar"><span></span></div></div>
              </div>
              <span className="animate scroll" style={{ ['--i' as any]: 5 }}></span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span><span className="animate scroll" style={{ ['--i' as any]: 1 }}></span></h2>
        <form action="#">
          <div className="input-box">
            <div className="input-field"><input type="text" placeholder="Full Name" required /><span className="focus"></span></div>
            <div className="input-field"><input type="text" placeholder="Email Address" required /><span className="focus"></span></div>
            <span className="animate scroll" style={{ ['--i' as any]: 3 }}></span>
          </div>

          <div className="input-box">
            <div className="input-field"><input type="number" placeholder="Mobile Number" required /><span className="focus"></span></div>
            <div className="input-field"><input type="text" placeholder="Email Subject" required /><span className="focus"></span></div>
            <span className="animate scroll" style={{ ['--i' as any]: 5 }}></span>
          </div>

          <div className="textarea-field">
            <textarea cols={30} rows={10} placeholder="Message" required></textarea>
            <span className="focus"></span>
            <span className="animate scroll" style={{ ['--i' as any]: 7 }}></span>
          </div>

          <div className="btn-box btns">
            <button type="submit" className="btn">Submit</button>
            <span className="animate scroll" style={{ ['--i' as any]: 9 }}></span>
          </div>
        </form>

        <div className="contact-links">
          <h3 className="heading">Or<span className="animate scroll" style={{ ['--i' as any]: 11 }}></span></h3>
          <div className="contact-icons">
            <div className="email-icon">
              <a href="mailto:aadit.gupta@mail.utoronto.ca" className="email-link"><i className='bx bx-envelope'></i></a>
              <span className="animate scroll" style={{ ['--i' as any]: 11 }}></span>
            </div>
            <div className="linkedIn-icon">
              <a href="https://www.linkedin.com/in/aadit-gupta-1411ag" target="_blank"><i className='bx bxl-linkedin'></i></a>
            </div>
            <span className="animate scroll" style={{ ['--i' as any]: 13 }}></span>
          </div>
          <span className="animate scroll" style={{ ['--i' as any]: 11 }}></span>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright: &copy; 2025 Aadit Gupta | All Rights Reserved</p>
          <span className="animate scroll" style={{ ['--i' as any]: 1 }}></span>
        </div>
        <div className="footer-iconTop">
          <a href="#"><i className='bx bx-up-arrow-alt'></i></a>
          <span className="animate scroll" style={{ ['--i' as any]: 3 }}></span>
        </div>
      </footer>

      <Script src="/script.js" strategy="afterInteractive" />
    </main>
  );
}
