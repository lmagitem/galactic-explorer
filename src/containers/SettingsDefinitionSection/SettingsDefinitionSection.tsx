import { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GenerationSettings } from "../../models/settings";
import { fetchGalaxy } from "../../store/galaxy.effects";
import { setSettings } from "../../store/settings.slice";
import { fetchStarSystem } from "../../store/star-system.effects";
import store from "../../store/store";
import "./SettingsDefinitionSection.css";
import Tippy from "@tippyjs/react";
import SimpleNumberInput from "../../components/SimpleNumberInput";
import SimpleTextInput from "../../components/SimpleTextInput";

export function SettingsDefinitionSection({}) {
  const dispatch = useDispatch();
  const settings = useSelector((state: any) => state.settings.current) as GenerationSettings;
  const seed = settings.seed;
  const uniFixedAge = settings.universe.fixed_age;
  const uniAgeBefore = settings.universe.age_before;
  const uniAgeAfter = settings.universe.age_after;
  const galFixedAge = settings.galaxy.fixed_age;

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.dispatch(fetchStarSystem);
    store.dispatch(fetchGalaxy);
  };

  return (
    <section className="grow flex-horizontal padded-dash-bottom">
      <form className="grow" onSubmit={handleSubmit}>
        <div className="grow dashed-bottom padded-dash-bottom flex-center">
          <div className="grow">Global</div>
          <Tippy content="The seed to use to generate everything.">
            <div>
              <SimpleTextInput
                label={"Seed:"}
                value={seed}
                onChanges={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setSettings({ ...settings, seed: e.target?.value }))
                }
              />
            </div>
          </Tippy>
        </div>
        <div className="grow dashed-bottom padded-dash-bottom flex-center">
          <div className="grow">Universe</div>
          <Tippy content="The specific universe age to use if any, in billions of years. Must be higher or equal to 0.4 and lower than 100000. Will overwrite the era if set, and be overwritten if use_ours is set.">
            <div>
              <SimpleNumberInput
                label={"Fixed age:"}
                value={uniFixedAge}
                onChanges={(value: number | null) =>
                  dispatch(
                    setSettings({
                      ...settings,
                      universe: { ...settings.universe, fixed_age: value },
                    }),
                  )
                }
                min={0.4}
                max={99999.99999}
              />
            </div>
          </Tippy>
          <Tippy content="Asks to generate a universe's age randomly, but with an age at least older than the given one. Must be higher or equal to 0.4 and lower than 100000. Will overwrite the era if set, and be overwritten if **use_ours** is set.">
            <div>
              <SimpleNumberInput
                label={"Age before:"}
                value={uniAgeBefore}
                onChanges={(value: number | null) =>
                  dispatch(
                    setSettings({
                      ...settings,
                      universe: { ...settings.universe, age_before: value },
                    }),
                  )
                }
                min={0.4}
                max={99999.99999}
              />
            </div>
          </Tippy>
          <Tippy content="Asks to generate a universe's age randomly, but with an age at least younger than the given one. Must be higher or equal to 0.4 and lower than 100000. Will overwrite the era if set, and be overwritten if use_ours is set.">
            <div>
              <SimpleNumberInput
                label={"Age after:"}
                value={uniAgeAfter}
                onChanges={(value: number | null) =>
                  dispatch(
                    setSettings({
                      ...settings,
                      universe: { ...settings.universe, age_after: value },
                    }),
                  )
                }
                min={0.4}
                max={99999.99999}
              />
            </div>
          </Tippy>
        </div>
        <div className="grow dashed-bottom padded-dash-bottom flex-center">
          <div className="grow">Galaxy</div>
          <Tippy content="The specific age to use for galaxy generation, if any.">
            <div>
              <SimpleNumberInput
                label={"Fixed age:"}
                value={galFixedAge}
                onChanges={(value: number | null) =>
                  dispatch(
                    setSettings({
                      ...settings,
                      galaxy: { ...settings.galaxy, fixed_age: value },
                    }),
                  )
                }
                min={0.4}
                max={99999.99999}
              />
            </div>
          </Tippy>
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
