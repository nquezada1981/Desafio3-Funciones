// EJERCICIO 3

function pintar(color = "green") {
    const ele = document.getElementById("ele1");
    ele.style.backgroundColor = color;
}

pintar(); 

document.addEventListener("click", function () {
    pintar("yellow");
});
