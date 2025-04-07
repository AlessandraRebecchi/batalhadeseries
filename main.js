let personagensPossiveis = {
    "Tókio": "Images/tokio.jpg",
    "Rio": "Images/rio.jpg",
    "Nairóbi": "Images/nairobi.jpg",
    "Berlim": "Images/berlim.jpg",
    "Professor": "Images/professor.jpg",
    "Lisboa": "Images/lisboa.jpg"
};

let viloesPossiveis = {
    "Damon": "Images/damon.jpg",
    "Stefan": "Images/stefan.jpg",
    "Elena": "Images/elena.jpg",
    "Caroline": "Images/caroline.jpg",
    "Bonnie": "Images/bonnie.jpg",
    "Katerina": "Images/katerina.jpg",
    "Enzo": "Images/enzo.jpg",
    "Tyler": "Images/tyler.jpg",
    "Klaus": "Images/klaus.jpg",
    "Rebeka": "Images/rebeka.jpg"
};

let personagem = [];
let viloes = [];
let forcaPersonagem = 0;
let forcaViloes = 0;

function iniciarJogo() {
    personagem = [];
    viloes = [];
    forcaPersonagem = 0;
    forcaViloes = 0;

    document.getElementById("seuTime").innerHTML = "";
    document.getElementById("viloesTime").innerHTML = "";
    document.getElementById("resultado").innerText = "";

    // Escolha dos personagens pelo usuário
    for (let i = 0; i < 3; i++) {
        let escolhaPersonagem;
        do {
            escolhaPersonagem = prompt("Escolha seu personagem " + (i + 1) +
                " entre: " + Object.keys(personagensPossiveis).join(", "));

            if (!personagensPossiveis[escolhaPersonagem]) {
                alert("Escolha inválida! Tente novamente.");
            } else if (personagem.includes(escolhaPersonagem)) {
                alert("Este personagem já foi escolhido! Escolha outro.");
            }
        } while (!personagensPossiveis[escolhaPersonagem] || personagem.includes(escolhaPersonagem));

        personagem.push(escolhaPersonagem);
        forcaPersonagem += Math.floor(Math.random() * 10) + 1;
        adicionarImagem("seuTime", escolhaPersonagem, personagensPossiveis[escolhaPersonagem]);
    }

    alert("Você escolheu para o seu time: " + personagem.join(", "));

    // Sorteio dos vilões
    for (let i = 0; i < 3; i++) {
        let indiceAleatorio;
        let vilaoEscolhido;

        do {
            let chavesViloes = Object.keys(viloesPossiveis);
            indiceAleatorio = Math.floor(Math.random() * chavesViloes.length);
            vilaoEscolhido = chavesViloes[indiceAleatorio];
        } while (viloes.includes(vilaoEscolhido));

        viloes.push(vilaoEscolhido);
        forcaViloes += Math.floor(Math.random() * 10) + 1;
        adicionarImagem("viloesTime", vilaoEscolhido, viloesPossiveis[vilaoEscolhido]);
    }

    alert("Esses são os vampiros que o seu time vai encarar: " + viloes.join(", "));

    // Determinar o vencedor
    let resultadoTexto = "";
    if (forcaPersonagem > forcaViloes) {
        resultadoTexto = "Parabéns! Seu time é mais forte e ganhou a disputa. Sua força foi " + forcaPersonagem;
    } else if (forcaPersonagem < forcaViloes) {
        resultadoTexto = "Você perdeu. O outro time venceu com força " + forcaViloes;
    } else {
        resultadoTexto = "Empate! Os dois times têm a mesma força.";
    }

    document.getElementById("resultado").innerText = resultadoTexto;
}

function adicionarImagem(containerId, nome, caminhoImagem) {
    let container = document.getElementById(containerId);
    let div = document.createElement("div");
    div.classList.add("character");

    let img = document.createElement("img");
    img.src = caminhoImagem;
    img.alt = nome;

    let nomePersonagem = document.createElement("p");
    nomePersonagem.innerText = nome;

    div.appendChild(img);
    div.appendChild(nomePersonagem);
    container.appendChild(div);
}
