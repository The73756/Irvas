const lightbox = (parentSelector, childrenClass) => {
	const lightboxPopup = document.createElement('div'),
		parentSection = document.querySelector(parentSelector),
		lightboxImage = document.createElement('img');
	
	lightboxPopup.classList.add('lightbox-popup');

	parentSection.appendChild(lightboxPopup); //добавляем модалку
	lightboxPopup.appendChild(lightboxImage); // добавляем изображение в модалку

	parentSection.addEventListener('click', (event) => {
		event.preventDefault();

		let target = event.target;
		const path = target.parentNode.getAttribute('href');

		if (target && target.classList.contains('preview')) {
				lightboxPopup.classList.add('lightbox-show');
				lightboxImage.setAttribute('src', path);
				document.body.classList.add('disable-scroll');
		}

		if (target && target.matches('div.lightbox-popup')) {
			lightboxPopup.classList.remove('lightbox-show');
			document.body.classList.remove('disable-scroll');
			lightboxImage.removeAttribute('src');
		}
	});
};

export default lightbox;