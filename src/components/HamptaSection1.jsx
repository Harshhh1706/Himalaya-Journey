import { useEffect, useRef, useState } from "react";
import hampta from "../assets/hampta.png";

function HamptaSection() {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Parallax scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hampta"
      className={`hampta-section ${
        visible ? "hampta-visible" : ""
      }`}
    >
      <div className="hampta-image">
        <img
          src={hampta}
          alt="Hampta Pass"
          style={{
            transform: `translateY(${scrollY * 0.03}px)`,
          }}
        />

        <div className="image-caption">
          <span>HAMPTA PASS · HIMACHAL</span>
          <span>01 / 06</span>
        </div>
      </div>

      <div className="hampta-content">
        <p className="hampta-chapter">
          03 — THE MAIN TRAIL
        </p>

        <h2>Hampta Pass</h2>

        <p className="hampta-location">
          HIMACHAL PRADESH · HAMPTA VALLEY
        </p>

        <div className="hampta-divider"></div>

        <p className="hampta-lead">
          Four days above the clouds.
        </p>

        <p className="hampta-story">
          The trail began in the green valleys of Manali and slowly
          climbed into the raw, dramatic landscape of the Himalayas.
          Four days of walking, changing weather and unforgettable
          views made Hampta Pass the heart of this journey.
        </p>

        <div className="hampta-stats">
          <div>
            <strong>04</strong>
            <span>DAYS</span>
          </div>

          <div>
            <strong>14,100</strong>
            <span>FT ABOVE SEA</span>
          </div>

          <div>
            <strong>32</strong>
            <span>KM TREKKED</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HamptaSection; 