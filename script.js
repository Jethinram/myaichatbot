function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return;

    let userMessage = `<div><strong>You:</strong> ${userInput}</div>`;
    chatBox.innerHTML += userMessage;

    setTimeout(() => {
        let botResponse = `<div><strong>Bot:</strong> Hello! I am your AI chatbot.</div>`;
        chatBox.innerHTML += botResponse;
    }, 1000);

    document.getElementById("user-input").value = "";
}
