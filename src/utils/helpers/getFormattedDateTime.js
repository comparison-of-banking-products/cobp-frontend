export const getFormattedDateTime = () => {
	const currentDate = new Date();
	const formattedDate = `${currentDate.toLocaleDateString('ru-RU', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
	})} ${currentDate.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`;
	return formattedDate;
};
