import React from 'react';
import ChatLogo from '../../../../images/icons/logo-icon.svg';

function SupportChatMessagesList({ messages }) {
	return (
		<div className="support-chat-form__messages">
			<ul className="support-chat-form__list">
				{messages.map((message, index) => (
					<li
						className={`support-chat-form__item ${
							message.isUser ? 'support-chat-form__item_user' : ''
						}`}
						key={index}
					>
						<div className="support-chat-form__message-content">
							{!message.isUser && (
								<img src={ChatLogo} alt="Benchmark Logo" className="support-chat-form__item-img" />
							)}
							<p
								className={`support-chat-form__item-message ${
									message.isUser ? 'support-chat-form__item-message_user' : ''
								}`}
							>
								{message.text}
							</p>
						</div>
						<p className="support-chat-form__item-date">{message.date}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SupportChatMessagesList;
