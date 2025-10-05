'use client';

export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="heading">
        My <span>Journey</span>
      </h2>

      <div className="education-row">
        {/* Education Column */}
        <div className="education-column">
          <h3 className="title">Education</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"></i> 2024 - 2029
                </div>
                <h3>Bachelor's of Applied Sciences - University of Toronto</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus, undesuidus!.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Column */}
        <div className="education-column">
          <h3 className="title">Experience</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"></i> 2024 - 2029
                </div>
                <h3>Web Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus, unde!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
