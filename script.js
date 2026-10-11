
let materiais = [];


function adicionarMaterial() {
  const campo = document.getElementById("material");
  const nome = campo.value.trim();

  if (nome === "") {
    mostrarMensagem("Digite o nome de um material.");
    return;
  }

  materiais.push(nome);
  campo.value = "";
  mostrarMensagem("Material adicionado!");
  exibirMateriais();
}


function removerUltimo() {
  if (materiais.length === 0) {
    mostrarMensagem("A lista já está vazia.");
    return;
  }

  materiais.pop();
  mostrarMensagem("Último material removido!");
  exibirMateriais();
}


function exibirMateriais() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (let i = 0; i < materiais.length; i++) {
    const item = document.createElement("li");
    item.textContent = materiais[i];
    lista.appendChild(item);
  }
}


function contarMateriais() {
  const total = materiais.length;
  mostrarMensagem("Total de materiais: " + total);
  return total;
}


function mostrarMensagem(texto) {
  document.getElementById("mensagem").textContent = texto;
}
