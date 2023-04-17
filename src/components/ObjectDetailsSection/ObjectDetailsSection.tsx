import { useSelector } from "react-redux";
import { OrbitalPoint } from "../../models/orbital-point";
import AstronomicalObjectsDetails from "../AstronomicalObjectDetails";
import AstronomicalObjectPreview from "../AstronomicalObjectPreview";

export function ObjectDetailsSection({}) {
  const currentObject = useSelector(
    (state: any) => state.astronomicalObject.current,
  ) as OrbitalPoint;

  return (
    <section className="grow flex-horizontal padded-dash-bottom">
      {!!currentObject && (
        <>
          <AstronomicalObjectPreview object={currentObject} />
          <AstronomicalObjectsDetails object={currentObject} />
        </>
      )}
    </section>
  );
}
