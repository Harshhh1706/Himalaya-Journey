import hampta from "../assets/hampta.png";

function HamptaSection() {
  return (
    <section id="hampta" className="hampta-section">
      <div className="hampta-image">
        <img src={hampta} alt="Hampta Pass" />
      </div>

      <div className="hampta-content">
  <p className="hampta-tag">THE MAIN TRAIL</p>

  <h2>Hampta Pass</h2>

  <p className="hampta-meta">
    HIMACHAL PRADESH · 4 DAYS · 14,100 FT
  </p>
  <hr className="hampta-divider" />

<p>
  Four days of trekking through the Himalayas.
</p>

  <p className="hampta-story">
  The trail began in the green valleys of Manali and slowly
  climbed into the raw, dramatic landscape of the Himalayas.
  Four days of walking, changing weather and unforgettable
  views made Hampta Pass the heart of this journey.
</p>
</div>
    </section>
  );
}

export default HamptaSection;