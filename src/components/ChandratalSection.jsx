import chandratal from "../assets/chandratal.jpeg";

function ChandratalSection() {
  return (
    <section id="chandratal" className="chandratal-section">
      <div className="chandratal-content">
        <p>DAY 05 • THE MOON LAKE</p>

        <h2>A blue silence above the clouds.</h2>

        <p>
          After four days on the trail, Chandratal was a completely
          different kind of beautiful.
        </p>
      </div>

      <div className="chandratal-image">
        <img src={chandratal} alt="Chandratal Lake" />
      </div>
    </section>
  );
}

export default ChandratalSection;