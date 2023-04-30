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
import SimpleCheckboxInput from "../../components/SimpleCheckboxInput";
import TripleNumberInput from "../../components/TripleNumberInput";

type CustomSectorSettings = {
  [key in `level_${number}_size`]: [number, number, number];
};

export function SettingsDefinitionSection({}) {
  const dispatch = useDispatch();
  const settings = useSelector((state: any) => state.settings.current) as GenerationSettings;

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.dispatch(fetchStarSystem);
    store.dispatch(fetchGalaxy);
  };

  return (
    <section className="grow flex-horizontal padded-dash-bottom">
      <form className="grow" onSubmit={handleSubmit}>
        <div className="grow dashed-bottom padded-dash-bottom center-element flex-vertical">
          <div className="grow">Global</div>
          <div className="center-element info-table">
            <Tippy content="The seed to use to generate everything.">
              <div>
                <SimpleTextInput
                  label={"Seed:"}
                  value={settings.seed}
                  onChanges={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(setSettings({ ...settings, seed: e.target?.value }))
                  }
                />
              </div>
            </Tippy>
          </div>
        </div>
        <div className="grow dashed-bottom padded-dash-bottom center-element flex-vertical">
          <div className="grow">Universe</div>
          <div className="center-element info-table">
            <Tippy content="The specific universe age to use if any, in billions of years. Must be higher or equal to 0.4 and lower than 100000. Will overwrite the era if set, and be overwritten if use_ours is set.">
              <div>
                <SimpleNumberInput
                  label={"Fixed age:"}
                  value={settings.universe.fixed_age}
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
                  value={settings.universe.age_before}
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
                  value={settings.universe.age_after}
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
            <Tippy content="Skip the universe generation and just uses a copy of ours. Will overwrite fixed_era and fixed_age if set.">
              <div>
                <SimpleCheckboxInput
                  label={"Use ours"}
                  checked={settings.universe.use_ours}
                  onChanges={(status: boolean) =>
                    dispatch(
                      setSettings({
                        ...settings,
                        universe: { ...settings.universe, use_ours: status },
                      }),
                    )
                  }
                />
              </div>
            </Tippy>
          </div>
        </div>
        <div className="grow dashed-bottom padded-dash-bottom center-element flex-vertical">
          <div className="grow">Galaxy</div>
          <div className="center-element info-table">
            <Tippy content="The specific age to use for galaxy generation, if any.">
              <div>
                <SimpleNumberInput
                  label={"Fixed age:"}
                  value={settings.galaxy.fixed_age}
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
            <Tippy content="Skip the galaxy generation and just uses a copy of ours.">
              <div>
                <SimpleCheckboxInput
                  label={"Use ours"}
                  checked={settings.galaxy.use_ours}
                  onChanges={(status: boolean) =>
                    dispatch(
                      setSettings({
                        ...settings,
                        galaxy: { ...settings.galaxy, use_ours: status },
                      }),
                    )
                  }
                />
              </div>
            </Tippy>
          </div>
        </div>
        <div className="grow dashed-bottom padded-dash-bottom center-element flex-vertical">
          <div className="grow">Sector</div>
          <div className="center-element info-table">
            <Tippy content="How many parsecs the building block of a galactic map spans, on the (x, y, z) axis. Must be between 1 and 255 inclusive.">
              <div>
                <TripleNumberInput
                  label={"Hex size:"}
                  values={settings.sector.hex_size}
                  onChanges={(values: [number, number, number]) =>
                    dispatch(
                      setSettings({
                        ...settings,
                        sector: { ...settings.sector, hex_size: values },
                      }),
                    )
                  }
                  min={1}
                  max={255}
                />
              </div>
            </Tippy>
            {Array.from({ length: 9 }, (_, i) => i + 1).map((level) => (
              <Tippy
                key={`level-${level}`}
                content="How many inferior level divisions this level spans, on the (x, y, z) axis. Must be between 4 and 62 inclusive. The z level might be overridden by the flat_map parameter."
              >
                <div>
                  <TripleNumberInput
                    label={`Level ${level} size:`}
                    values={
                      (settings.sector as unknown as CustomSectorSettings)[`level_${level}_size`]
                    }
                    onChanges={(values: [number, number, number]) =>
                      dispatch(
                        setSettings({
                          ...settings,
                          sector: {
                            ...settings.sector,
                            [`level_${level}_size`]: values,
                          },
                        }),
                      )
                    }
                    min={4}
                    max={62}
                  />
                </div>
              </Tippy>
            ))}
          </div>
          <div className="center-element info-table">
            <Tippy content='If set to true, a single z level will be generated. For your map to still have some kind of height, you can set the hex_size z axis to value different than 1, it will enable star systems to be generated "above" and "under" the map plane.'>
              <div>
                <SimpleCheckboxInput
                  label={"Flat map"}
                  checked={settings.sector.flat_map}
                  onChanges={(status: boolean) =>
                    alert("This setting is locked to true for the needs of this demo.")
                  }
                />
              </div>
            </Tippy>
            <Tippy content="If set to true, only one roll will occur to determine how much star systems there are per hex. If set to false, a roll will be made for each cubic parsec inside the hex.">
              <div>
                <SimpleCheckboxInput
                  label={"Density rolled by hex"}
                  checked={settings.sector.density_by_hex_instead_of_parsec}
                  onChanges={(status: boolean) =>
                    dispatch(
                      setSettings({
                        ...settings,
                        sector: {
                          ...settings.sector,
                          density_by_hex_instead_of_parsec: status,
                        },
                      }),
                    )
                  }
                />
              </div>
            </Tippy>
            <Tippy content="If set to true, the maximum number of systems per hex is one.">
              <div>
                <SimpleCheckboxInput
                  label={"Max one system per hex"}
                  checked={settings.sector.max_one_system_per_hex}
                  onChanges={(status: boolean) =>
                    alert("This setting is locked to true for the needs of this demo.")
                  }
                />
              </div>
            </Tippy>
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
