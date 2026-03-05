import React from 'react';

const Messages = () => {
  const mockMessages = [
    { id: 1, sender: "Sarah Jenkins", text: "Is the report ready for the team meeting?", time: "10:30 AM", initial: "SJ", online: true },
    { id: 2, sender: "Michael Ross", text: "Meeting rescheduled to 4PM. Does that work?", time: "09:15 AM", initial: "MR", online: false }
  ];

  return (
    <div className="messages-container">
      <div className="section-header">
        <div>
          <h2 className="welcome-text">Messages</h2>
          <p className="subtitle">You have {mockMessages.length} unread messages</p>
        </div>
        <button className="export-btn">New Message</button>
      </div>

      <div className="message-list-wrapper">
        {mockMessages.map(msg => (
          <div key={msg.id} className="message-card">
            <div className="message-left">
              <div className="user-avatar-large">
                {msg.initial}
                {msg.online && <span className="online-status"></span>}
              </div>
              <div className="message-content">
                <div className="message-info">
                  <span className="sender-name">{msg.sender}</span>
                  <span className="message-time">{msg.time}</span>
                </div>
                <p className="message-preview">{msg.text}</p>
              </div>
            </div>
            <button className="view-all-btn">Reply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;