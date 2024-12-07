// script.js
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addMessage(userInput, 'user-message');
        document.getElementById('user-input').value = '';
        botResponse(userInput);
    }
}

function addMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = text;
    document.getElementById('messages').appendChild(messageDiv);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function botResponse(userInput) {
    const responses = {
        'oi': 'Olá! Como posso ajudar você hoje?',
        'tchau': 'Até logo! Tenha um ótimo dia!',
        'como você está?': 'Estou bem, obrigado por perguntar!',
        'quero marcar uma sessão': 'horário de atendimento 14h a 20h!',
    };

    const botMessage = responses[userInput.toLowerCase()] || 'Desculpe, não entendi isso.';
    setTimeout(() => {
        addMessage(botMessage, 'bot-message');
    }, 1000);
}