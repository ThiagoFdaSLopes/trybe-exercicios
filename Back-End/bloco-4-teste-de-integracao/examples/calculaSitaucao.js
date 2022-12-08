const calculaSituacao = (media) => {
  if(media >= 7) {
    return "Aprovado";
  }

  return 'reprovado';
}

module.exports = calculaSituacao;