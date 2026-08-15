  import { useEffect, useRef, useState } from "react";
  import manali from "../assets/manali.png";

  function ManaliSection() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

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

    return (
      <section
        ref={sectionRef}
        id="manali"
        className={`manali-section ${visible ? "manali-visible" : ""}`}
      >
        <div className="manali-image">
          <img src={manali} alt="Manali" />

          <div className="manali-caption">
            <span>MANALI · HIMACHAL</span>
            <span>03 / 06</span>
          </div>
        </div>

        <div className="manali-content">
          <p className="manali-chapter">
            05 — BACK TO THE VALLEY
          </p>

          <h2>Manali</h2>

          <p className="manali-location">
            HIMACHAL PRADESH · 2 DAYS
          </p>

          <div className="manali-divider"></div>

          <p className="manali-lead">
            After the mountains, we slowed down.
          </p>

          <p className="manali-story">
            After the Hampta Pass trek and the silence of Chandratal,
            Manali felt completely different. Two slower days were spent
            exploring the streets, cafés and familiar mountain landscapes
            before the journey began home.
          </p>

          <div className="manali-memory">
            <span>MEMORY</span>
            <p>“Two days of doing nothing, and somehow everything.”</p>
          </div>
        </div>
      </section>
    );
  }

  export default ManaliSection;