const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);

		trigger.forEach(el => {
			el.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}

				modal.style.display = 'block';
				document.body.classList.add('disable-scroll');
			});
		});

		close.addEventListener('click', () => {
			modal.style.display = 'none';
			document.body.classList.remove('disable-scroll');
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.style.display = 'none';
				document.body.classList.remove('disable-scroll');
			}
		});
	}

	function showModalByTime(selector, time) {  
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.classList.add('disable-scroll');
		}, time);
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	// showModalByTime('.popup', 60000);
};
export default modals;