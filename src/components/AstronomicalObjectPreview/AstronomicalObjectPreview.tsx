import { AstronomicalObject } from "../../models/astronomical-object";
import { OrbitalPoint } from "../../models/orbital-point";
import { Star } from "../../models/star";
import { getStarColor } from "../../utils/color";
import { calculateStarDisplaySize } from "../../utils/star-display";
import "./AstronomicalObjectPreview.css";

export interface AstronomicalObjectPreviewProps {
  object: OrbitalPoint;
}

export function AstronomicalObjectPreview({
  object,
}: AstronomicalObjectPreviewProps) {
  if (object.type === AstronomicalObject.Star) {
    const star = object as Star;
    const color = getStarColor(star.temperature);
    const fontSize = `${calculateStarDisplaySize(star.radius)}em`;

    return (
      <div className="square">
        <div className="square-content">
          <div className="center-stars">
            <div className="preview-object" style={{ color, fontSize }}>
              ⬤
            </div>
          </div>
          <div className="center-stars">
            <div className="star-small-halo" style={{ color, fontSize }}>
              ⬤
            </div>
          </div>
          <div className="center-stars">
            <div className="star-heavy-halo" style={{ color, fontSize }}>
              ⬤
            </div>
          </div>
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="square">
        <div className="square-content">
          <div className="stars"></div>
          <div className="twinkling"></div>
        </div>
      </div>
    );
  }
}
