import { useEffect, useRef, useState } from "react";

function DestinationCard({
  title,
  description,
  image,
  tag,
  onClick,
}) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`destination-card ${
        visible ? "destination-card-visible" : ""
      }`}
      onClick={onClick}
    >
      <div className="destination-image">

        <img src={image} alt={title} />

        <div className="destination-overlay"></div>

        <span className="destination-view">
          VIEW STORY →
        </span>

      </div>

      <div className="destination-info">

        <span className="destination-tag">
          {tag}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

      </div>
    </div>
  );
}

export default DestinationCard;