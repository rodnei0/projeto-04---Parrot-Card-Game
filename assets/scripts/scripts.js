let quantasCartas = 0;

function iniciarJogo(){
  segundos = 0;
  contar();
  while (quantasCartas % 2 !== 0 || quantasCartas < 4 || quantasCartas > 14) {
    quantasCartas = parseInt(prompt("Com quantas cartas você quer jogar?"));
    if (quantasCartas % 2 !== 0 || quantasCartas < 4 || quantasCartas > 14) {
      alert("Digite somente números pares entre 4 e 14");
    }
  }
  
  let arrayDeCartas = [];
  quantosPares = quantasCartas/2;
  
  for (let i = 0; i < quantosPares; i++) {
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
  
  for (let i = 0; i < quantosPares; i++) { 
    arrayDeCartas.push(arrayDeCartas[i]);
  }
  
  arrayDeCartas.sort(comparador);
  
  const inserirCartas = document.querySelector(".mesaJogo");
  
  inserirCartas.innerHTML = arrayDeCartas.join(" ");
}
  
let cartasViradas = [];
let paresVirados = [];
let contadorJogadas = 0;

function virarCarta(elemento, par) {
  contadorJogadas++;
  cartasViradas.push(elemento);
  paresVirados.push(par);

  elemento.classList.toggle("click")
  setTimeout(comparaCarta, 300);
}

function desvirarCarta(elemento){0
  elemento.classList.toggle("click");
}

function comparaCarta() {
  if (paresVirados.length === 2) {
    if (paresVirados[0] === paresVirados [1]) {
      const elemento = document.querySelectorAll(".click");
      for (let i = 0; i < 2; i++) {
        elemento[i].classList.add("acertou");
        elemento[i].classList.remove("click");
      }
    } else {
        for (let i = 0; i < 2; i++) {
          setTimeout(desvirarCarta, 1000, cartasViradas[i]);
        }
      } 
    paresVirados = [];
    cartasViradas = [];
    } else if(paresVirados.length > 2) {
      for (let i = 0; i < paresVirados.length; i++) {
        desvirarCarta(cartasViradas[i]);
      }
      paresVirados = [];
      cartasViradas = [];
    }
    verificaVitoria()
} 

function verificaVitoria() {
  let verificar = document.querySelectorAll(".acertou");

  if (verificar.length === quantasCartas) {
    clearInterval(idInterval);
    alert(`Você ganhou em ${contadorJogadas} jogadas e ${segundos} segundos!`)
    
    let jogarNovamente = "";
      jogarNovamente = prompt("Deseja jogar novamente? (S/N)");
      
      if (jogarNovamente === "s" || jogarNovamente === "S") {
        quantasCartas = 0;
        iniciarJogo();
      } else if (jogarNovamente === "n" || jogarNovamente === "N"){
        verificar = "";
        alert("Obrigado por jogar!");
      } else{
        alert("Digite S ou N");
      }
    }
}

let idInterval;
let segundos = 0;

function contar() {
  idInterval = setInterval(incrementaSegundos, 1000);
}

function incrementaSegundos() {
  segundos++;
  document.querySelector(".contador").innerHTML = segundos;
}

function comparador() {
  return Math.random() - 0.5;
}