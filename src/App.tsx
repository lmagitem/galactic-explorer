import { useDispatch, useSelector } from "react-redux";
import AstronomicalObjectsDetails from "./components/AstronomicalObjectDetails";
import AstronomicalObjectPreview from "./components/AstronomicalObjectPreview";
import FilteredSearchResult from "./components/FilteredSearchResult";
import GalaxyRecap from "./components/GalaxyRecap";
import HeaderButton from "./components/HeaderButton";
import Logo from "./components/Logo";
import { StarSystem } from "./models/star-system";
import "tippy.js/dist/tippy.css";
import { OrbitalPoint } from "./models/orbital-point";
import { selectAstronomicalObject } from "./store/astronomical-object.slice";
import PixiStage from "./components/PixiStage";

function App() {
  const dispatch = useDispatch();
  const system = useSelector(
    (state: any) => state.starSystem.current
  ) as StarSystem;
  const currentObject = useSelector(
    (state: any) => state.astronomicalObject.current
  ) as OrbitalPoint;
  if (currentObject === undefined)
    dispatch(selectAstronomicalObject(system.mainStar));

  return (
    <div id="body-container" className="flex-center">
      <div id="content-box" className="grow padded-dash flex-vertical">
        <div className="dashed-bottom">
          <nav className="padded-dash-bottom grow flex-horizontal">
            <Logo />
            <GalaxyRecap />
            <HeaderButton title="Display" active={true} />
            <HeaderButton title="Settings" active={false} />
          </nav>
        </div>
        <main className="grow flex-vertical padded-dash-top">
          <div className="dashed-bottom">
            <section className="grow flex-horizontal padded-dash-bottom">
              {!!currentObject && (
                <>
                  <AstronomicalObjectPreview object={currentObject} />
                  <AstronomicalObjectsDetails object={currentObject} />
                </>
              )}
            </section>
          </div>
          <div className="grow flex-horizontal padded-dash-top">
            <section className="half-width flex-vertical padded-dash-right dashed-right">
              <div className="dashed-bottom padded-dash-bottom flex-horizontal">
                <HeaderButton title="Galaxy" active={false} />
                <HeaderButton title="System" active={true} />
                <HeaderButton title="Planet" active={false} />
              </div>
              <div className="grow flex-vertical padded-dash-top">
                <PixiStage />
              </div>
            </section>
            <section
              id="search-result-box"
              className="half-width padded-dash-left padded-dash-down"
            >
              <div className="dashed-bottom padded-dash-bottom flex-horizontal">
                <div className="grow padded">Filters</div>
              </div>
              <div className="scrollable padded-dash-left margin-dash-top">
                {system.allObjects.map((op) => (
                  <FilteredSearchResult
                    key={op.id}
                    orbitalPoint={op}
                    onClick={() => dispatch(selectAstronomicalObject(op))}
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
