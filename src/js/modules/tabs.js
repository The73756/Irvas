function tabs(headerSelector, tabSelector, tabContent, activeClass, display = 'block') {
	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(tabContent);

	function hideTabContent() {
		content.forEach(el => {
			el.style.display = 'none';
		});

		tab.forEach(el => {
			el.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		content[i].style.display = display;
		tab[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	header.addEventListener('click', (e) => {
		const target = e.target;

		if ( target && 
			(target.classList.contains(tabSelector.replace(/\./, '')) ||
			target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
				tab.forEach((el, i) => {
				if (target === el || target.parentNode === el) {
					hideTabContent();
					showTabContent(i);					
				}
				});
		}
	});
}
export default tabs;