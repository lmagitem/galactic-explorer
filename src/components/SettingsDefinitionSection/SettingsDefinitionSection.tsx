import { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GenerationSettings } from "../../models/settings";
import { setSettings } from "../../store/settings.slice";
import { fetchStarSystem } from "../../store/star-system.effects";
import store from "../../store/store";
import "./SettingsDefinitionSection.css";

export function SettingsDefinitionSection({}) {
  const dispatch = useDispatch();
  const settings = useSelector((state: any) => state.settings.current) as GenerationSettings;
  const seed = settings.seed;

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.dispatch(fetchStarSystem);
  };

  return (
    <section className="grow flex-horizontal padded-dash-bottom">
      <form className="grow" onSubmit={handleSubmit}>
        <div className="grow dashed-bottom padded-dash-bottom flex-center">
          <div className="grow padded align-center">
            <label className="grow">
              Seed:
              <input
                type="text"
                className="text-input"
                value={seed}
                onChange={(e) => dispatch(setSettings({ ...settings, seed: e.target.value }))}
              />
            </label>
          </div>
        </div>
        <div className="grow flex-center">
          <button className="grow padded button" type="submit">
            <h3>Generate</h3>
          </button>
        </div>
      </form>
    </section>
  );
}
