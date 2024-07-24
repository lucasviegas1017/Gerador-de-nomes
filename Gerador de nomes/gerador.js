const nomeInput = document.getElementById('campo-nome');
const gerarBotao = document.getElementById('botao-gerar');


const nomes = [
    
    "Lucas",
    "hallson",
    "Leticia",
    "Elcio",
    "Ana sabrina",
    "Catarina",

    
  ];
  
  function gerarNomeAleatorio() {
    const Aleatorios = Math.floor(Math.random() * nomes.length);
    return nomes[Aleatorios];
  }
  
  gerarBotao.addEventListener('click', () => {
    const nomeGerado = gerarNomeAleatorio();
    nomeInput.value = nomeGerado;
  });
  