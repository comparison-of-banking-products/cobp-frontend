import { useState, useEffect, useCallback } from 'react';

function useTogglePopup() {
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = useCallback(() => {
		setShowModal(true);
	}, []);

	const handleCloseModal = useCallback(() => {
		setShowModal(false);
	}, []);

	const handleEscClose = useCallback(
		(evt) => {
			if (evt.key === 'Escape') {
				handleCloseModal();
			}
		},
		[handleCloseModal]
	);

	useEffect(() => {
		document.addEventListener('keydown', handleEscClose);

		return () => {
			document.removeEventListener('keydown', handleEscClose);
		};
	}, [handleEscClose]);

	return { showModal, setShowModal, handleOpenModal, handleCloseModal };
}

export default useTogglePopup;
