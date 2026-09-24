async function sendMessage() {

    const input = document.getElementById("message");
    const chat = document.getElementById("chat");

    const message = input.value.trim();

    if (!message) return;

    // Show user message
    const userMessage = document.createElement("div");

    userMessage.className = "message user";
    userMessage.textContent = message;

    chat.appendChild(userMessage);

    input.value = "";

    // Loading message
    const loading = document.createElement("div");

    loading.className = "message ai";
    loading.textContent = "Thinking...";

    chat.appendChild(loading);

    try {

        const response = await fetch(
            "http://localhost:5000/api/chat",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    message: message
                })
            }
        );

        const data = await response.json();

        loading.textContent = data.reply;

    } catch (error) {

        loading.textContent =
            "Sorry, something went wrong.";

        console.error(error);
    }

    chat.scrollTop = chat.scrollHeight;
}