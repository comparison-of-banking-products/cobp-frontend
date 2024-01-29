import React from 'react';
import { SupportChatForm } from '../index';
import useTogglePopup from '../../hooks/useTogglePopup';

function SupportChat() {
	const { showModal, handleCloseModal, handleOpenModal } = useTogglePopup();

	return (
		<div>
			<button
				className={`support-chat__btn ${showModal ? 'support-chat__btn_open' : ''}`}
				onClick={handleOpenModal}
			/>
			<SupportChatForm onClose={handleCloseModal} showModal={showModal} />
		</div>
	);
}

export default SupportChat;
