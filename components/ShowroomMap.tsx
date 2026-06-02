// Google Maps embed of the showroom — De Veken 22, 1716 KE Opmeer.
const MAP_SRC =
  "https://www.google.com/maps?q=De+Veken+22,+1716+KE+Opmeer&hl=nl&z=15&output=embed";
const MAP_PLACE =
  "https://www.google.com/maps/place/De+Veken+22,+1716+KE+Opmeer";

export default function ShowroomMap() {
  return (
    <div className="showroom-map">
      <iframe
        title="TOP Sierhekwerken — De Veken 22, Opmeer"
        src={MAP_SRC}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        style={{ width: "100%", height: "100%", border: 0, display: "block" }}
      />
      <a className="map-open" href={MAP_PLACE} target="_blank" rel="noopener noreferrer">
        Open in Google Maps
        <span className="ar" aria-hidden="true" />
      </a>
    </div>
  );
}
