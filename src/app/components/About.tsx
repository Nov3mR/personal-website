'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
      </h2>

      <div className="about-img" style={{ position: 'relative' }}>
        <Image
          src="/aaditImage-copy.png"
          alt="Aadit"
          width={300}
          height={300}
          priority
        />
        <span className="circle-spin"></span>
      </div>

      <div className="about-content">
        <h3>Frontend Developer!</h3>
        <p>
          I'm a developer/designer/creator passionate about building awesome stuff.
        </p>
        <div className="btn-box btns">
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
