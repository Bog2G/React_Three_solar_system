import { memo } from "react";
import { PlanetData } from "../data/planets";
import "./Popup.css";

interface PopupProps {
  planet: PlanetData | null;
  isOpen: boolean;
  onClose: () => void;
}

function Popup({ planet, isOpen, onClose }: PopupProps) {
  if (!isOpen || !planet) return null;

  const capitalizedName = planet.name.charAt(0).toUpperCase() + planet.name.slice(1);

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup-title">{capitalizedName}</h2>
        <p className="popup-description">{planet.description}</p>
        <div className="popup-facts">
          <h3>Quick Facts</h3>
          <ul>
            <li>
              <strong>Diameter:</strong> {planet.facts.diameter}
            </li>
            <li>
              <strong>Day Length:</strong> {planet.facts.dayLength}
            </li>
            <li>
              <strong>Year Length:</strong> {planet.facts.yearLength}
            </li>
            <li>
              <strong>Known Moons:</strong> {planet.facts.moons}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(Popup);
