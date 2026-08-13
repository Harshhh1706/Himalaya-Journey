import manali from "../assets/manali.png";

function ManaliSection() {
  return (
    <section id="manali" className="manali-section">x
      <div className="manali-image">
        <img src={manali} alt="Manali" />
      </div>

      <div className="manali-content">
        <p>02 DAYS • MANALI</p>

        <h2>Two days between trails and town.</h2>

        <p>
          After the trek, Manali became a slower part of the journey —
          exploring the streets, places and little moments along the way.
        </p>
      </div>
    </section>
  );
}

export default ManaliSection;