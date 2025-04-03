function jogar() {
  rodada = 1;
  chuteFora = 4;
  while (rodada <= 4) {
    escolhaJogador = prompt("Tumba " + rodada + " , por onde vai passar? 1-Esquerda 2-Direita 3-Em frente")
    cantoGoleiro = Math.floor(Math.random() * 3) + 1;  
    
    if (escolhaJogador == cantoGoleiro) {
      alert("Caiu na armadilha! Game Over!");
      rodada = 6;
        }
    
    if (escolhaJogador >= chuteFora) {
      alert("Você não pode voltar! Tente novamente.");
      rodada = 6;
      break;
        }
    
    if (escolhaJogador != cantoGoleiro) {
      alert("Isso aí! Voce passou para a próxima tumba!");
    }
    
    rodada = rodada + 1
    } 
  if (rodada == 5) {
      alert("Parabéns! Você encontrou ao tesouro!!! 🎇🏆");
  }
}