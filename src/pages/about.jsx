function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-eyebrow">
            THE STORY BEHIND THE JOURNEY
          </p>

          <h1>
            WANDER
            <span>NORTH.</span>
          </h1>

          <p className="about-hero-description">
            This isn't just a trip through Himachal Pradesh.
            It's a collection of places, moments, roads and
            memories that made the journey worth remembering.
          </p>

          <div className="about-meta">

            <div className="about-meta-item">
              <span>Destination</span>
              <strong>Himachal</strong>
            </div>

            <div className="about-meta-item">
              <span>Year</span>
              <strong>2026</strong>
            </div>

            <div className="about-meta-item">
              <span>Places</span>
              <strong>04</strong>
            </div>

          </div>

        </div>

      </section>


      {/* STORY */}
      <section className="about-story">

        <div className="about-story-inner">

          <div>
            <span className="about-story-label">
              THE JOURNEY
            </span>
          </div>

          <div className="about-story-content">

            <h2>
              More than a
              <span> destination.</span>
            </h2>

            <p>
              Wander North was created to capture the feeling
              of travelling through the mountains — the quiet
              roads, cold mornings, unexpected views and
              little moments that stay with you.
            </p>

            <p>
              From Hampta Pass and Chandratal to Manali and
              Delhi, every stop became a small chapter in
              one larger journey.
            </p>

          </div>

        </div>

      </section>


      {/* VALUES */}
      <section className="about-values">

        <div className="about-values-header">

          <p>WHAT THIS JOURNEY IS ABOUT</p>

          <h2>
            Four things worth
            remembering.
          </h2>

        </div>


        <div className="about-value-grid">

          <div className="about-value">
            <span className="about-value-number">01</span>

            <h3>Mountains</h3>

            <p>
              High passes, quiet valleys and landscapes
              that make you stop and look.
            </p>
          </div>


          <div className="about-value">
            <span className="about-value-number">02</span>

            <h3>Moments</h3>

            <p>
              The small moments between destinations are
              often the ones worth remembering.
            </p>
          </div>


          <div className="about-value">
            <span className="about-value-number">03</span>

            <h3>Stories</h3>

            <p>
              Every place has something to say when you
              slow down enough to notice it.
            </p>
          </div>

        </div>

      </section>


      {/* CLOSING */}
      <section className="about-closing">

        <div className="about-closing-content">

          <p className="about-closing-small">
            UNTIL THE NEXT JOURNEY
          </p>

          <h2>
            Keep
            <span> wandering.</span>
          </h2>

          <div className="about-closing-line"></div>

        </div>

      </section>

    </main>
  );
}

export default About;