let contador = 0;

function executarCallback(callback) {
  callback();
}

function alterarContador(valor) {
  contador += valor;
  document.getElementById("valor").innerText = contador;
}
