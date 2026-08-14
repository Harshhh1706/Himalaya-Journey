function JourneyTimeline() {
  const journey = [
    "Mumbai",
    "Delhi",
    "Manali",
    "Hampta Pass",
    "Chandratal",
    "Manali",
    "Delhi",
    "Mumbai",
  ];

  return (
    <section className="journey-timeline">

      <div className="timeline-heading">
        <p>THE ROUTE</p>

        <h2>
          One journey, many stops.
        </h2>
      </div>

      <div className="timeline">
        {journey.map((place, index) => (
          <div className="timeline-stop" key={`${place}-${index}`}>

            <span className="timeline-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="timeline-dot"></div>

            <span className="timeline-place">
              {place}
            </span>

          </div>
        ))}
      </div>

    </section>
  );
}

export default JourneyTimeline;