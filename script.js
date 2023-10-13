// Add JavaScript functionality here

// Function to create a new chat
function createNewChat() {
    const chatList = document.querySelector('.chat-list');
    const chatItem = document.createElement('div');
    chatItem.classList.add('chat-item');
    chatItem.textContent = 'New Chat'; // You can customize this with actual chat data
    chatList.appendChild(chatItem);
}

// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value;

    if (messageText.trim() !== '') {
        const messageDisplay = document.querySelector('.message-display');
        const message = document.createElement('div');
        message.classList.add('message');
        message.textContent = messageText;
        messageDisplay.appendChild(message);
        messageInput.value = ''; // Clear the input field
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const newChatButton = document.querySelector('.new-chat-button');
    const sendButton = document.querySelector('.send-button');

    newChatButton.addEventListener('click', createNewChat);
    sendButton.addEventListener('click', sendMessage);
});
