const socket = io();

const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

// Listen for messages from server
socket.on('chat message', (msg) => {
  const msgElem = document.createElement('div');
  msgElem.textContent = msg;
  messagesDiv.appendChild(msgElem);
  messagesDiv.scrollTop = messagesDiv.scrollHeight; // auto scroll down
});

// Send message to server when button clicked or Enter pressed
function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    socket.emit('chat message', message);
    messageInput.value = '';
  }
}

sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendMessage();
});
