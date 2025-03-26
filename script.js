document.getElementById("send-btn").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let userMessage = document.getElementById("user-input").value;
    if (userMessage.trim() === "") return;

    let chatOutput = document.getElementById("chat-output");

    // Display user message
    chatOutput.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    document.getElementById("user-input").value = "";

    // Simulate Monisha AI response (replace with Gemini API)
    setTimeout(() => {
        let botReply = "Hello! I am Monisha AI. How can I assist you?";
        chatOutput.innerHTML += `<p><strong>Monisha AI:</strong> ${botReply}</p>`;
    }, 100
