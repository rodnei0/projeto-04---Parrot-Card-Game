let quantasCartas;

while (quantasCartas % 2 !== 0 || quantasCartas < 4 || quantasCartas > 14) {
  quantasCartas = prompt("Com quantas cartas você quer jogar?");
  if (quantasCartas % 2 !== 0 || quantasCartas < 4 || quantasCartas > 14) {
    alert("Digite somente números pares entre 4 e 14");
  }
}

let arrayDeCartas = [];

const inserirCartas = document.querySelector(".mesaJogo");

for (let i = 0; i < quantasCartas; i++) {
  arrayDeCartas[i] = `
    <div class="card" onclick="virarCarta(this)">
        <div class="front-face face">
            <img src="assets/imagens/parot.png" alt="parrot">
        </div>
        <div class="back-face face">
            Verso${i}
        </div>
    </div>`;
}

arrayDeCartas.sort(comparador);

inserirCartas.innerHTML = arrayDeCartas.join(" ");

// function virarCarta(elemento) {
//     elemento.classList.add(".click")

// }

function comparador() {
  return Math.random() - 0.5;
}