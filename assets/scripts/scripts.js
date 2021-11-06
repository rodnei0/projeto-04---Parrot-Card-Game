let quantasCartas;

while (quantasCartas % 2 !== 0 || quantasCartas < 4 || quantasCartas > 14) {
  quantasCartas = prompt("Com quantas cartas você quer jogar?");
  if (quantasCartas % 2 !== 0 || quantasCartas < 4 || quantasCartas > 14) {
    alert("Digite somente números pares entre 4 e 14");
  }
}


let arrayDeCartas = [];
quantasCartas = quantasCartas/2;

for (let i = 0; i < quantasCartas; i++) {
  arrayDeCartas[i] = `
  <div class="card " data-identifier="card" onclick="virarCarta(this, ${i})">
    <div class="front-face face" data-identifier="front-face">
      <img src="assets/imagens/parot.png" alt="parrot">
    </div>
    <div class="back-face face" data-identifier="back-face">
      <img src="assets/imagens/parot${i}.gif" alt="parrot">
    </div>
  </div>`
  ;
}

for (let i = 0; i < quantasCartas; i++) { 
  arrayDeCartas.push(arrayDeCartas[i]);
}

arrayDeCartas.sort(comparador);

const inserirCartas = document.querySelector(".mesaJogo");

inserirCartas.innerHTML = arrayDeCartas.join(" ");

let teste = [];
let teste2 = [];

function virarCarta(elemento, par) {
    teste2.push(elemento);
    teste.push(par);

    elemento.classList.toggle("click")
    setTimeout(comparaCarta, 1000);
}

function desvirarCarta(elemento){
  elemento.classList.toggle("click")
}

function comparaCarta() {
  if (teste.length === 2) {
    if (teste[0] === teste [1]) {
      const elemento = document.querySelectorAll(".click");
      for (let i = 0; i < 2; i++) {
        elemento[i].classList.add("acertou");
        elemento[i].classList.remove("click");
      }
    } else {
        for (let i = 0; i < 2; i++) {
          desvirarCarta(teste2[i]);
        }
      } 
    teste = [];
    teste2 = [];
    }
} 

function comparador() {
  return Math.random() - 0.5;
}