import { useEffect, useRef, useState } from "react";
import chandratal from "../assets/chandratal.jpeg";

function ChandratalSection() {
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
      id="chandratal"
      className={`chandratal-section ${
        visible ? "chandratal-visible" : ""
      }`}
    >
      <div className="chandratal-content">

        <p className="chandratal-chapter">
          04 — THE MOON LAKE
        </p>

        <h2>Chandratal</h2>

        <p className="chandratal-location">
          HIMACHAL PRADESH · SPITI VALLEY
        </p>

        <div className="chandratal-divider"></div>

        <p className="chandratal-lead">
          A lake that looked almost unreal.
        </p>

        <p className="chandratal-story">
          After four days on the trail, the landscape changed completely.
          The blue waters of Chandratal appeared between barren mountains,
          cold air and endless silence. It felt less like arriving at a
          destination and more like discovering another world.
        </p>

        <div className="chandratal-stats">
          <div>
            <strong>14,100</strong>
            <span>FT ALTITUDE</span>
          </div>

          <div>
            <strong>01</strong>
            <span>NIGHT</span>
          </div>

          <div>
            <strong>05</strong>
            <span>DAY OF JOURNEY</span>
          </div>
        </div>

      </div>

      <div className="chandratal-image">
        <img src={chandratal} alt="Chandratal Lake" />

        <div className="chandratal-caption">
          <span>CHANDRATAL LAKE · HIMACHAL</span>
          <span>02 / 06</span>
        </div>
      </div>

    </section>
  );
}

export default ChandratalSection;