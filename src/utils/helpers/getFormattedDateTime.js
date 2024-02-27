export const getFormattedDateTime = () => {
	const currentDate = new Date();
	const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString(
		'ru-RU',
		{ hour: '2-digit', minute: '2-digit' }
	)}`;
	return formattedDate;
};
