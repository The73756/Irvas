const forms = () => {
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		phoneInputs = document.querySelectorAll('input[name="user_phone"]');

	phoneInputs.forEach(input => {
		input.addEventListener('input', () => {
			input.value = input.value.replace(/\D/g, '');
		});
	});

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		let result =  await fetch(url, {
			method: 'POST',
			body: data,
		});

		return await result.text();
	};

	const clearInputs = () => {
		inputs.forEach(input => {
			input.value = '';
		});
	};

	form.forEach(el => {
		el.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			el.appendChild(statusMessage);

			const formData = new FormData(el);

			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(res => {
					statusMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();
					setTimeout (() => {
						statusMessage.remove();
					}, 5000);
				});
		});
	});
};

export default forms;