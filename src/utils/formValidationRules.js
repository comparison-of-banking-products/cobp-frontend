export const formValidationRules = {
	name: {
		required: 'Поле обязательно для заполнения',
		minLength: {
			value: 2,
			message: 'Введите не менее 2 символов',
		},
		maxLength: {
			value: 30,
			message: 'Введите не более 30 символов',
		},
		pattern: {
			value: /^[a-zA-Z-\u0430-\u044f\u0410-\u042fёЁ\s]*$/,
			message: 'Разрешены только буквы, пробелы и дефисы.',
		},
	},
	email: {
		required: 'Поле обязательно для заполнения',
		pattern: {
			value: /^[a-zA-Z0-9.-]+@[a-zA-Z0-9_]+\.[a-z]{2,6}$/i,
			message: 'Введите корректный email: example@example.ru',
		},
		minLength: {
			value: 2,
			message: 'Введите не менее 2 символов',
		},
		maxLength: {
			value: 100,
			message: 'Введите не более 100 символов',
		},
	},
	question: {
		required: 'Поле обязательно для заполнения',
		maxLength: {
			value: 1000,
			message: 'Введите не более 1000 символов',
		},
	},
	agree: {
		required: 'Подтвердите согласие',
	},
	message: {
		required: 'Введите ваше сообщение',
		minLength: {
			value: 2,
			message: 'Введите не менее 2 символов',
		},
		maxLength: {
			value: 250,
			message: 'Введите не более 250 символов',
		},
	},
};
