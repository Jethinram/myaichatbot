function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    
    if (userInput.value.trim() === "") return;

    // Add user message
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = userInput.value;
    chatBox.appendChild(userMessage);

    // Scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.className = "message bot";
        botMessage.textContent = "I'm here to help!";
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    // Clear input field
    userInput.value = "";
}
