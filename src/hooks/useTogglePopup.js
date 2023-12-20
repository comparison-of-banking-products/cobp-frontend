import { useState, useEffect } from 'react';

function useTogglePopup() {
	const [showModal, setShowModal] = useState(false);

	function handleOpenModal() {
		setShowModal(true);
	}

	function handleCloseModal() {
		setShowModal(false);
	}

	useEffect(() => {
		function handleEscClose(evt) {
			if (evt.key === 'Escape') {
				handleCloseModal();
			}
		}

		document.addEventListener('keydown', handleEscClose);

		return () => {
			document.removeEventListener('keydown', handleEscClose);
		};
	}, []);

	return { showModal, setShowModal, handleOpenModal, handleCloseModal };
}

export default useTogglePopup;
