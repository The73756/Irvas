	function calcScrollWidth() {
		let div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		document.body.removeChild(div);

		document.documentElement.style.setProperty('--scrollWidth', `${scrollWidth}px`);
	}

export default calcScrollWidth;