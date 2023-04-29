import { useSelector } from "react-redux";
import { OrbitalPoint } from "../../models/orbital-point";
import { StarSystem } from "../../models/star-system";
import AstronomicalObjectsDetails from "../../components/AstronomicalObjectDetails";
import AstronomicalObjectPreview from "../../components/AstronomicalObjectPreview";

export function ObjectDetailsSection({}) {
  const currentObject = useSelector(
    (state: any) => state.astronomicalObject.current,
  ) as OrbitalPoint;
  const system = useSelector((state: any) => state.starSystem.current) as StarSystem;

  return (
    <section className="grow flex-horizontal padded-dash-bottom">
      {!!currentObject && (
        <>
          <AstronomicalObjectPreview object={currentObject} />
          <AstronomicalObjectsDetails object={currentObject} system={system} />
        </>
      )}
    </section>
  );
}
