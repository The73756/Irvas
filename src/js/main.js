import "./slider";
import modals from "./modules/modals";
import calcScrollWidth from "./modules/calcScrollWidth";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import lightbox from "./modules/lightbox";

window.addEventListener("DOMContentLoaded", () => {

	let modalState = {};
	let deadline = '2022-12-31T12:59:59.0900Z';

	modals();
	calcScrollWidth();
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
	forms(modalState);
	changeModalState(modalState);
	timer('#timer', deadline);
	lightbox('.works', 'preview');
});
