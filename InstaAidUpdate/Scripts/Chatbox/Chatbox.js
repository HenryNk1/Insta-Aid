document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');
    const welcomeSection = document.querySelector('.welcome-section');
    let isFirstMessage = true;

    // Function to append message to the chat window
    function appendMessage(content, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = content;
        chatMessages.appendChild(messageElement);

        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to hide the welcome message
    function hideWelcomeMessage() {
        if (isFirstMessage) {
            welcomeSection.classList.add('hidden');
            isFirstMessage = false;
        }
    }

    // Function to add typing indicator
    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('typing-indicator');
        typingIndicator.innerHTML = '<span></span><span></span><span></span>'; // Three dots
        chatMessages.appendChild(typingIndicator);

        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return typingIndicator; // Return reference to remove it later
    }

    // Function to handle sending a message
    function sendMessage() {
        const message = inputField.value.trim();
        if (message !== "") {
            hideWelcomeMessage(); // Hide welcome message on first user interaction
            appendMessage(message, 'user'); // Add user message
            inputField.value = ""; // Clear input field

            // Show typing indicator
            const typingIndicator = showTypingIndicator();

            // Simulate bot response after a delay
            setTimeout(function() {
                chatMessages.removeChild(typingIndicator); // Remove typing indicator
                const botResponse = "" + message;
                appendMessage(botResponse, 'bot'); // Add bot message
            }, 1500); // Simulate delay before bot response
        }
    }

    // Send message when clicking the send button
    sendBtn.addEventListener('click', sendMessage);

    // Send message when pressing 'Enter' key
    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});
