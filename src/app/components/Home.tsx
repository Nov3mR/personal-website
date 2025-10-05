'use client';

export default function HomeSection() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Aadit Gupta</span>
        </h1>
        <div className="text-animate">
          <h3>Frontend Developer</h3>
        </div>
        <p>Welcome to my personal website.</p>
        <div className="btn-box">
          <a href="#" className="btn">
            Hire Me
          </a>
          <a href="#" className="btn">
            Let's Talk
          </a>
        </div>
      </div>

      <div className="home-sci">
        <a href="#"><i className="bx bxl-twitter"></i></a>
        <a href="#"><i className="bx bxl-linkedin"></i></a>
        <a href="#"><i className="bx bxl-instagram"></i></a>
      </div>

      <div className="home-imgHover"></div>
    </section>
  );
}
