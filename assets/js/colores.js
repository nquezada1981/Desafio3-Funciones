const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const divKey = document.getElementById('key');
const texto = document.getElementById('texto');
const key = document.getElementById('crearDiv');
const divKey2 = document.getElementById('key2');
const texto2 = document.getElementById('texto2');


const cambioFondo = (event)=> {
    return (event.target.style.backgroundColor = 'black');
}

div1.addEventListener('click',cambioFondo)
div2.addEventListener('click',cambioFondo)
div3.addEventListener('click',cambioFondo)
div4.addEventListener('click',cambioFondo)

function cambioColor(event){
    let color ="";
    let color2="";
    if(event.key==="a" || event.key==="A"){
        color="pink";
        key.style.display="none";
        texto.style.display="block";
    }else if(event.key==="s" || event.key==="S"){
        color = "orange";
        key.style.display="none";
        texto.style.display="block";
    }else if(event.key==="d" || event.key==="D"){
        color = "skyblue";
        key.style.display="none";
        texto.style.display="block";
    }else if(event.key==="q" || event.key==="Q"){
        color2 = "skyblue";
        key.style.display="block";
        texto.style.display="none";
    }else if(event.key==="w" || event.key==="W"){
        color2 = "orange";
        key.style.display="block";
        texto.style.display="none";
    }else if(event.key==="e" || event.key==="E"){
        color2 = "brown";
        key.style.display="block";
        texto.style.display="none";
    }

    if(color !="" && (event.key =="a" || event.key==="A" || event.key==="s" || event.key==="S" || event.key==="d" || event.key==="D")){        
        divKey.style.backgroundColor = color;
        texto.textContent = `Se asigno el color ${color} con la letra ${event.key}`
    }else {
        texto.textContent = `La letra ${event.key} no tiene un color asignado`
    }
    if(color2 !="" && (event.key =="q" || event.key==="Q" || event.key==="w" || event.key==="W" || event.key==="e" || event.key==="E")){            
        divKey2.style.backgroundColor = color2;
        texto2.textContent = `Se asigno el color ${color2} con la letra ${event.key}`    
    }else {
        texto.style.display="block";
        key.style.display="none";
    }
}

// function crearDiv(){
//     key.appendChild = ` <div id="key1" style="width: 200px; height: 200px; background-color: white"></div>
//                         <p id="texto2"></p>`
// }

//document.addEventListener('keydown',(e)=>cambioColor(e))
document.addEventListener('keydown',(e)=>cambioColor(e))