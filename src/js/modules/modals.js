const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]');

		trigger.forEach(el => {
			el.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}

				windows.forEach (el => {
					el.style.display = 'none';
				});

				modal.style.display = 'block';
				document.body.classList.add('disable-scroll');
			});
		});

		close.addEventListener('click', () => {
			modal.style.display = 'none';
			document.body.classList.remove('disable-scroll');

			windows.forEach (el => {
				el.style.display = 'none';
			});
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {
				modal.style.display = 'none';
				document.body.classList.remove('disable-scroll');

				windows.forEach (el => {
					el.style.display = 'none';
				});
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
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	// showModalByTime('.popup', 60000);
};
export default modals;