import { useEffect, useRef, useState } from "react";

function JourneyTimeline() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const journey = [
    {
      number: "01",
      place: "Chandratal",
      label: "LEAVING THE MOUNTAINS",
      text: "The final morning around the Moon Lake before the journey slowly turned back home.",
    },
    {
      number: "02",
      place: "Manali",
      label: "Two days of exploring",
      text: "Slower streets, familiar cafés and one last look at the mountains.",
    },
    {
      number: "03",
      place: "Delhi",
      label: "BACK TO THE CITY",
      text: "One final day exploring Delhi before the long journey home.",
    },
    {
      number: "04",
      place: "Mumbai",
      label: "HOME",
      text: "The journey ended where it began, but everything felt a little different.",
    },
  ];

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
      className={`journey-timeline ${
        visible ? "timeline-visible" : ""
      }`}
    >
      <div className="timeline-heading">
        <p>THE WAY HOME</p>

        <h2>
          Some journeys
          <br />
          stay with you.
        </h2>

        <span>
          The road back was part of the story too.
        </span>
      </div>

      <div className="timeline">
        {journey.map((item, index) => (
          <div
            className="timeline-stop"
            key={item.place}
            style={{
              transitionDelay: `${index * 0.15}s`,
            }}
          >
            <div className="timeline-marker">
              <span>{item.number}</span>
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-content">
              <p>{item.label}</p>

              <h3>{item.place}</h3>

              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default JourneyTimeline;