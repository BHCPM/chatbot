// Mensagem inicial (aparece ao abrir a página)
window.onload = function () {
    displayMessage("Chatbot: Olá! 👋 Sou um chatbot de Engenharia de Software.");
    displayMessage("Chatbot: Você pode perguntar sobre algoritmos, programação, banco de dados, requisitos, UML, testes, arquitetura, qualidade e segurança.");
};

document.getElementById("send-button").addEventListener("click", function () {
    const input = document.getElementById("user-input");
    const message = input.value.toLowerCase();

    if (message === "") return;

    displayMessage("Você: " + message);

    // Verifica despedida
    if (
        message.includes("tchau") ||
        message.includes("sair") ||
        message.includes("encerrar")
    ) {
        displayMessage("Chatbot: Obrigado por usar o chatbot 😊 Bons estudos em Engenharia de Software!");
        input.value = "";
        return;
    }

    getSoftwareEngineeringResponse(message);
    input.value = "";
});

function getSoftwareEngineeringResponse(message) {
    let response = "";

    // Engenharia de Software
    if (message.includes("engenharia de software")) {
        response = "Área que estuda métodos, processos e ferramentas para desenvolver software de qualidade.";
    }

    // Programação
    else if (message.includes("programação")) {
        response = "Programação é a escrita de códigos para criar sistemas e aplicações.";
    }
    else if (message.includes("linguagem de programação")) {
        response = "Linguagens de programação são usadas para escrever algoritmos, como Java, Python e C.";
    }

    // Algoritmos
    else if (message.includes("algoritmo")) {
        response = "Algoritmos são sequências de passos lógicos para resolver um problema.";
    }
    else if (message.includes("complexidade")) {
        response = "Complexidade de algoritmos mede o tempo e memória gastos na execução.";
    }

    // Banco de Dados
    else if (message.includes("banco de dados")) {
        response = "Banco de dados armazena e organiza informações de forma estruturada.";
    }
    else if (message.includes("sql")) {
        response = "SQL é uma linguagem usada para consultar e manipular bancos de dados.";
    }

    // Requisitos
    else if (message.includes("requisitos")) {
        response = "Requisitos descrevem o que o sistema deve fazer e suas restrições.";
    }
    else if (message.includes("requisitos funcionais")) {
        response = "Requisitos funcionais definem funcionalidades do sistema.";
    }
    else if (message.includes("requisitos não funcionais")) {
        response = "Requisitos não funcionais definem qualidade, desempenho e segurança.";
    }

    // Modelagem
    else if (message.includes("uml")) {
        response = "UML é usada para modelar sistemas por meio de diagramas.";
    }
    else if (message.includes("caso de uso")) {
        response = "Caso de uso representa interações entre o usuário e o sistema.";
    }

    // Arquitetura
    else if (message.includes("arquitetura")) {
        response = "Arquitetura de software define a estrutura geral do sistema.";
    }
    else if (message.includes("mvc")) {
        response = "MVC separa o sistema em Model, View e Controller.";
    }

    // Testes
    else if (message.includes("testes")) {
        response = "Testes de software verificam se o sistema funciona corretamente.";
    }
    else if (message.includes("teste unitário")) {
        response = "Teste unitário valida pequenas partes do código.";
    }

    // Processos e Qualidade
    else if (message.includes("qualidade")) {
        response = "Qualidade de software garante que o sistema atenda aos requisitos.";
    }
    else if (message.includes("processos")) {
        response = "Processos de software organizam as etapas de desenvolvimento.";
    }
    else if (message.includes("ágil") || message.includes("scrum")) {
        response = "Metodologias ágeis focam em entregas rápidas e contínuas.";
    }

    // Segurança
    else if (message.includes("segurança")) {
        response = "Segurança de software protege sistemas contra falhas e ataques.";
    }

    // Resposta padrão
    else {
        response = "Não entendi. Tente digitar assuntos como algoritmos, programação, banco de dados, requisitos, UML, testes, arquitetura ou segurança.";
    }

    displayMessage("Chatbot: " + response);
}

function displayMessage(text) {
    const chatBox = document.getElementById("chat-box");
    const msg = document.createElement("div");
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}