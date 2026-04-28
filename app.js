import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAUgRZX0S1mRfJE9xbArKgwnwVUf54hkQk"; // Substitua pela sua chave
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

window.enviar = async function() {
    const input = document.getElementById('user-input');
    const log = document.getElementById('chat-log');
    const texto = input.value;
    
    if(!texto) return;

    log.innerHTML += `<p><b>Você:</b> ${texto}</p>`;
    input.value = '';

    try {
        const result = await model.generateContent(texto);
        const response = await result.response;
        log.innerHTML += `<p><b>Gemini:</b> ${response.text()}</p>`;
    } catch (error) {
        log.innerHTML += `<p style="color:red">Erro: ${error.message}</p>`;
    }
}