const on = document.getElementById ( 'on' );
const off = document.getElementById ( 'off' );
const lamp = document.getElementById ( 'lamp' );

function lampOn () {
    lamp.src = 'acesa.jpg';
}

function lampOff () {
    lamp.src = 'apagada.jpg';
}

function lampQuebr () {
    lamp.src = 'quebrada.jpg';
}

on.addEventListener ( 'click', lampOn );
off.addEventListener ( 'click', lampOff );
lamp.addEventListener ('dblclick', lampQuebr); 
