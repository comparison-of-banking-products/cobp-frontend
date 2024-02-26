import React from 'react';
import { SupportChatForm, SupportChatOnline } from '../index';
import useTogglePopup from '../../hooks/useTogglePopup';

function SupportChat() {
	const { showModal, handleCloseModal, handleOpenModal } = useTogglePopup();

	return (
		<>
			<button
				className={`support-chat__btn ${showModal ? 'support-chat__btn_open' : ''}`}
				onClick={handleOpenModal}
			/>
			{/* <SupportChatForm onClose={handleCloseModal} showModal={showModal} /> */}
			<SupportChatOnline onClose={handleCloseModal} showModal={showModal} />
		</>
	);
}

export default SupportChat;
