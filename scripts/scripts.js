
let quantasCartas;

while (quantasCartas % 2 !== 0){
    quantasCartas = prompt("Com quantas cartas você quer jogar?");
    if (quantasCartas % 2 !== 0) {
        alert("Digite somente números pares");
    }
}

const inserirCartas = document.querySelector(".mesaJogo");

for (let i = 0; i < quantasCartas; i++) {
    inserirCartas.innerHTML += `<div class="cartas"></div>`
}