const frases = [
    {
      texto: "Sempre imaginei que o paraíso fosse uma espécie de biblioteca.",
      autor: "Jorge Luis Borges"
    },
    {
      texto: "Vida antes da morte, força antes da fraqueza, viagem antes do destino.",
      autor: "Brandon Sanderson"
    },
    {
      texto: "Ler é viajar sem sair do lugar.",
      autor: "Emily Dickinson"
    },
    {
      texto: "Livros são espelhos: neles só se vê o que possuímos dentro.",
      autor: "Carlos Ruiz Zafón"
    },
    {
      texto: "A leitura é para a mente o que o exercício é para o corpo.",
      autor: "Joseph Addison"
    }
  ];

const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

document.querySelector(".phrase").textContent = `“${fraseAleatoria.texto}”`;
document.querySelector(".author").textContent = `— ${fraseAleatoria.autor}`;