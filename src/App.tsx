import { useDispatch, useSelector } from "react-redux";
import FilteredSearchResult from "./components/FilteredSearchResult";
import GalaxyRecap from "./components/GalaxyRecap";
import HeaderButton from "./components/HeaderButton";
import Logo from "./components/Logo";
import { StarSystem } from "./models/star-system";
import "tippy.js/dist/tippy.css";
import { OrbitalPoint } from "./models/orbital-point";
import { selectAstronomicalObject } from "./store/astronomical-object.slice";
import PixiStage from "./components/PixiStage";
import ObjectDetailsSection from "./components/ObjectDetailsSection";
import { FocusScale, FocusScaleEnum, NavState, NavStateEnum } from "./store/app.actions";
import { setFocusScale, setNavState } from "./store/app.slice";
import SettingsDefinitionSection from "./components/SettingsDefinitionSection";
import { useEffect } from "react";
import { Galaxy } from "./models/galaxy";

function App() {
  const dispatch = useDispatch();
  const system = useSelector((s: any) => s.starSystem.current) as StarSystem;
  const currentObject = useSelector((s: any) => s.astronomicalObject.current) as OrbitalPoint;
  const galaxy = useSelector((s: any) => s.galaxy.current) as Galaxy;

  useEffect(() => {
    if (!!system && currentObject === undefined)
      dispatch(selectAstronomicalObject(system.mainStar));

    // console.log("galaxy", galaxy);
  }, [system]);

  const navState = useSelector((s: any) => s.app.navState) as NavState;
  const focusScale = useSelector((s: any) => s.app.focusScale) as FocusScale;

  return (
    <div id="body-container" className="flex-center">
      <div id="content-box" className="grow padded-dash flex-vertical">
        <div id="header" className="dashed-bottom">
          <nav className="padded-dash-bottom grow flex-horizontal">
            <Logo />
            <GalaxyRecap />
            <HeaderButton
              title="Display"
              active={navState === NavStateEnum.Display}
              onClick={() => dispatch(setNavState(NavStateEnum.Display))}
            />
            <HeaderButton
              title="Settings"
              active={navState === NavStateEnum.Settings}
              onClick={() => dispatch(setNavState(NavStateEnum.Settings))}
            />
          </nav>
        </div>
        <main className="grow flex-vertical padded-dash-top">
          <div id="details" className="dashed-bottom">
            {navState === NavStateEnum.Display && <ObjectDetailsSection />}
            {navState === NavStateEnum.Settings && <SettingsDefinitionSection />}
          </div>
          <div className="grow flex-horizontal padded-dash-top">
            <section className="half-width flex-vertical padded-dash-right dashed-right">
              <div id="map-buttons" className="dashed-bottom padded-dash-bottom flex-horizontal">
                <HeaderButton
                  title="Galaxy"
                  active={focusScale === FocusScaleEnum.Galaxy}
                  onClick={() => dispatch(setFocusScale(FocusScaleEnum.Galaxy))}
                />
                <HeaderButton
                  title="System"
                  active={focusScale === FocusScaleEnum.System}
                  onClick={() => dispatch(setFocusScale(FocusScaleEnum.System))}
                />
                <HeaderButton
                  title="Planet"
                  active={focusScale === FocusScaleEnum.Planet}
                  onClick={() => dispatch(setFocusScale(FocusScaleEnum.Planet))}
                />
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
