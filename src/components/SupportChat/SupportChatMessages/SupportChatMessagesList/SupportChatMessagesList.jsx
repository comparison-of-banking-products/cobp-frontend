import React, { useEffect, useRef } from 'react';
import ChatLogo from '../../../../images/icons/logo-icon.svg';

function SupportChatMessagesList({ messages }) {
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	return (
		<div className="support-chat-form__messages">
			<ul className="support-chat-form__list">
				{messages.map((message, index) => (
					<li
						className={`support-chat-form__item ${
							message.isUser ? 'support-chat-form__item_user' : ''
						}`}
						key={index}
						ref={index === messages.length - 1 ? messagesEndRef : null}
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
