import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img '),
		windowWidth = document.querySelectorAll('#width'),
		windowHeight = document.querySelectorAll('#height'),
		windowType = document.querySelectorAll('#view_type'),
		windowProfile = document.querySelectorAll('.checkbox');

	checkNumInputs('#width');
	checkNumInputs('#height');

	function bindActionToElements(event, element, prop) {
		element.forEach((el, i) => {
			el.addEventListener(event, () => {
				switch (el.nodeName) {
					case 'SPAN':
						state[prop] = i + 1;
						break;
					case 'INPUT':
						if (el.getAttribute('type') === 'checkbox') {
							i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
							element.forEach((box, j) => {
								box.checked = false;
								if (i === j) {
									box.checked = true;
								}
							});
						} else {
							state[prop] = el.value;
						}
						break;
					case 'SELECT':
						state[prop] = el.value;
						break;
				}
			});
		});
	}

	bindActionToElements('click', windowForm, 'form');
	bindActionToElements('input', windowWidth, 'width');
	bindActionToElements('input', windowHeight, 'height');
	bindActionToElements('change', windowType, 'type');
	bindActionToElements('change', windowProfile, 'profile');
};

export default changeModalState;