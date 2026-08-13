import hampta from "../assets/hampta.png";

function HamptaSection() {
  return (
    <section id="hampta" className="hampta-section">
      <div className="hampta-image">
        <img src={hampta} alt="Hampta Pass" />
      </div>

      <div className="hampta-content">
      <p className="hampta-tag">THE MAIN TRAIL</p>
        <p>04 DAYS • HIMALAYAS</p>

        <h2>Where the trail changed everything.</h2>

        <p>
          Four days of walking deeper into the mountains,
          away from roads, noise and everything familiar.
        </p>
      </div>
    </section>
  );
}

export default HamptaSection;