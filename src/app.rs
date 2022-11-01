use yew::prelude::*;
use yew_icons::{Icon, IconId};

#[function_component(App)]
pub fn app() -> Html {
    html! {
        <main class="container">
            <h1>{ "Galactic Explorer" }</h1>
            <div class="item">
                <h2>{ "Settings" }</h2>
                <div>
                    <h3>{ "Seed" }</h3>
                    <label>{ "Generation seed:" }
                        <input type="text" name="seed" class="seed-input" placeholder="far-far-away" />
                    </label>
                </div>
            </div>
            <div class="item">
                <h2>{ "Results" }</h2>
                <div class="results">
                    <div class="results-title-block">
                        <div class="results-title"><Icon icon_id={IconId::OcticonsChevronDown16}/><span>{ "My lovely galaxy" }</span></div>
                    </div>
                    <div class="results-content">
                        <div class="results-content-attributes">
                            <div><span>{ "Attribute 1: " }</span><em class="results-content-attributes-em">{ "A somewhat longer content that might or might not cause a line break." }</em></div>
                            <div><span>{ "Attribute 2: " }</span><em class="results-content-attributes-em">{ "content" }</em></div>
                            <div><span>{ "Attribute 3: " }</span><em class="results-content-attributes-em">{ "content" }</em></div>
                            <div><span>{ "Attribute 4: " }</span><em class="results-content-attributes-em">{ "content" }</em></div>
                        </div>
                    </div>
                    <div class="results-title-block depth-1">
                        <div class="results-title"><Icon icon_id={IconId::OcticonsChevronRight16}/><span>{ "Title 1" }</span></div>
                    </div>
                </div>
            </div>
        </main>
    }
}
