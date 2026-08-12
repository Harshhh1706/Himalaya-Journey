import heroImage from "../assets/himachal-hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <p>HIMACHAL PRADESH • 2026</p>

        <h1>
          TALES OF
          <br />
          HIMALAYA
        </h1>

        <p>
          A journey through mountains, trails and unforgettable moments.
        </p>

        <button onClick={() => {
         document.getElementById("journey").scrollIntoView({
         behavior: "smooth"
          });
        }}>
         EXPLORE JOURNEY
        </button>
      </div>
    </section>
  );
}

export default Hero;