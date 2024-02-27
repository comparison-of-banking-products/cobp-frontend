import React from 'react';
import { SupportChatOnline } from '../index';
import useTogglePopup from '../../hooks/useTogglePopup';

function SupportChat() {
	const { showModal, handleCloseModal, handleOpenModal } = useTogglePopup();

	return (
		<>
			<button
				className={`support-chat__btn ${showModal ? 'support-chat__btn_open' : ''}`}
				onClick={handleOpenModal}
			/>
			<SupportChatOnline onClose={handleCloseModal} showModal={showModal} />
		</>
	);
}

export default SupportChat;
