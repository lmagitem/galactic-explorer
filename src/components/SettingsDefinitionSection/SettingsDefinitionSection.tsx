import { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GenerationSettings } from "../../models/settings";
import { fetchGalaxy } from "../../store/galaxy.effects";
import { setSettings } from "../../store/settings.slice";
import { fetchStarSystem } from "../../store/star-system.effects";
import store from "../../store/store";
import "./SettingsDefinitionSection.css";

import { SimpleTextInput } from "../SimpleTextInput/SimpleTextInput";
import SimpleNumberInput from "../SimpleNumberInput";

export function SettingsDefinitionSection({}) {
  const dispatch = useDispatch();
  const settings = useSelector((state: any) => state.settings.current) as GenerationSettings;
  const seed = settings.seed;
  const fixed_age = settings.universe.fixed_age;

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.dispatch(fetchStarSystem);
    store.dispatch(fetchGalaxy);
  };

  return (
    <section className="grow flex-horizontal padded-dash-bottom">
      <form className="grow" onSubmit={handleSubmit}>
        <div className="grow dashed-bottom padded-dash-bottom flex-center">
          <SimpleTextInput
            label={"Seed:"}
            value={seed}
            onChanges={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(setSettings({ ...settings, seed: e.target?.value }))
            }
          />
        </div>
        <div className="grow dashed-bottom padded-dash-bottom flex-center">
          <SimpleNumberInput
            label={"Fixed age:"}
            value={fixed_age}
            onChanges={(value: number | null) => {
              console.log(value);
              dispatch(
                setSettings({ ...settings, universe: { ...settings.universe, fixed_age: value } }),
              );
            }}
          />
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
