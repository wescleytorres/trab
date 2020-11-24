var cont = 0;

const gerarQuadrado = () => {
  cont += 1;
  let boxElement = document.createElement('div');
  boxElement.style.width = '180px';
  boxElement.style.height = '180px';
  boxElement.style.margin = '10px';
  boxElement.style.backgroundColor = '#f00';

  //adiciona a classe .box na div criada
  boxElement.classList.add(`box${cont}`);

  document.body.appendChild(boxElement);
};

const excluirQuadrado = () => {
  let boxElement = document.querySelector(`.box${cont}`);

  document.body.removeChild(boxElement);

  cont -= 1;
};
