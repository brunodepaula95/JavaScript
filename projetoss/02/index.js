const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const corpo = document.getElementById('corpo');
const text = document.getElementById('text');
const resetar = document.getElementById('lampReset');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn () {
    if ( !isLampBroken() ){
    lamp.src = './img/ligada.jpg';
    corpo.style.backgroundColor = 'black';
    text.style.color = 'yellow';
  }
}

function lampOff () {
    if (!isLampBroken ()) {
    lamp.src = './img/desligada.jpg';
    corpo.style.backgroundColor = 'white';
    text.style.color = 'black';
  }
}

function lampBroken (){
    lamp.src = './img/quebrada.jpg';
    corpo.style.backgroundColor = 'white';
    text.style.color = 'black';
}

function lampReset () {
    if (isLampBroken ()) {
      lamp.src = './img/desligada.jpg';
      corpo.style.backgroundColor = 'white'
      text.style.color = 'black';
    }
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener('dblclick', lampBroken);
resetar.addEventListener ('click', lampReset);