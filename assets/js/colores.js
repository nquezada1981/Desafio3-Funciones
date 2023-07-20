const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const divKey = document.getElementById('key');

const cambioFondo = (event)=> {
    return (event.target.style.backgroundColor = 'black');
}

div1.addEventListener('click',cambioFondo)
div2.addEventListener('click',cambioFondo)
div3.addEventListener('click',cambioFondo)
div4.addEventListener('click',cambioFondo)

function cambioColor(event){
    if(event.key==="a" || event.key==="A"){
        divKey.style.backgroundColor = "pink"
    }else if(event.key==="s" || event.key==="S"){
        divKey.style.backgroundColor = "orange"
    }else if(event.key==="d" || event.key==="D"){
        divKey.style.backgroundColor = "#00aae4"
    }
}

document.addEventListener('keydown',(e)=>cambioColor(e))