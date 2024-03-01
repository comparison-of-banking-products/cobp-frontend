import { useEffect, useRef, useState } from 'react';

const useSwipeToClose = (handleClose) => {
	const formRef = useRef(null);
	const [touchStartY, setTouchStartY] = useState(null);

	useEffect(() => {
		const handleTouchStart = (e) => {
			setTouchStartY(e.touches[0].clientY);
		};

		const handleTouchMove = (e) => {
			const touchEndY = e.touches[0].clientY;
			if (touchStartY && touchEndY - touchStartY > 50) {
				handleClose();
			}
		};

		const handleTouchEnd = () => {
			setTouchStartY(null);
		};

		const formElement = formRef.current;
		if (formElement) {
			formElement.addEventListener('touchstart', handleTouchStart);
			formElement.addEventListener('touchmove', handleTouchMove);
			formElement.addEventListener('touchend', handleTouchEnd);
		}

		return () => {
			if (formElement) {
				formElement.removeEventListener('touchstart', handleTouchStart);
				formElement.removeEventListener('touchmove', handleTouchMove);
				formElement.removeEventListener('touchend', handleTouchEnd);
			}
		};
	}, [touchStartY, handleClose]);

	return formRef;
};

export default useSwipeToClose;
