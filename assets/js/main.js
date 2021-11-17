
const body=document.querySelector('body')

const colores=['blue','yellow','green','black','white']



function fondo(){
    var indice=parseInt(Math.random()*colores.length);
    body.style.backgroundColor=colores[indice]
    
}


