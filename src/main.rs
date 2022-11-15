#![warn(clippy::all, clippy::pedantic)]
mod app;
use app::App;
use planet_generator::prelude::*;

fn main() {
    yew::start_app::<App>();
}
