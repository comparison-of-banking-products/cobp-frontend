export default function animateNumberChange(oldNumber, newNumber, callback) {
	oldNumber = Math.round(oldNumber);
	newNumber = Math.round(newNumber);

	const startTime = Date.now();
	const duration = 500;
	let currentNumber = oldNumber;

	function updateNumber() {
		const currentTime = Date.now() - startTime;
		const progress = currentTime / duration;

		if (progress < 1) {
			currentNumber = oldNumber + Math.round((newNumber - oldNumber) * progress);
			callback(currentNumber);
			requestAnimationFrame(updateNumber);
		} else {
			currentNumber = newNumber;
			callback(currentNumber);
		}
	}

	updateNumber();
}
