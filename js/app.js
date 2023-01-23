// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


var texto = "bienvenidos estudiantes";
var nuevoTexto = "";
var clickEncriptado=false;
var clickDesencriptar=false;
function validarMayusculas(text) {
    var textoAuxiliar;

    for (var i = 0; i < text.length; i++) {
        // console.log(texto.charAt(i));
        // console.log(texto.toLowerCase());

        if (text.charAt(i) == text.charAt(i).toUpperCase()) {
            //console.log("si");

            textoAuxiliar = text.toLowerCase();
            break;
            //for(var j=0; j<=texto.length;j++)

            // break;
        }
        else
            textoAuxiliar = text;
    }

    textoAuxiliar = validarAcentos(textoAuxiliar);

    return textoAuxiliar;
}



function validarAcentos(text) {
    var textoAuxiliar;
    for (var i = 0; i < text.length; i++) {
        // console.log(texto.charAt(i));
        // console.log(texto.toLowerCase());

        if (text.charAt(i) == 'á' || text.charAt(i) == 'é' ||
            text.charAt(i) == 'í' || text.charAt(i) == 'ó' ||
            text.charAt(i) == 'ú') {
            //console.log("si");


            textoAuxiliar = removerAcentos(text);
            //for(var j=0; j<=texto.length;j++)

            break;
        }
        else
            textoAuxiliar = text;
    }

    return textoAuxiliar;
}


function removerAcentos(text) {

    return text.replaceAll('á', 'a').replaceAll('é', 'e').replaceAll('í', 'i').
        replaceAll('ó', 'o').replaceAll('ú', 'u');

}



function encriptar() {

    if (document.querySelector('#decifrar').value == '')
        alert("Escriba un texto para encriptar");
    else {

        clickEncriptado=true;
        
        document.getElementById("mensaje").style.display = "block";
        document.getElementById("img").style.display = "none";
        document.getElementById("mensaje-aviso").style.display = "none";
        document.getElementById("mensaje-instruccion").style.display = "none";
        document.getElementById("btnCopiar").style.display = "block";
        document.querySelector("#mensaje").innerHTML = validarMayusculas(document.querySelector('#decifrar').value).replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u", "ufat");
    }


}


function desencriptar() {


    if (document.querySelector('#decifrar').value == '')
        alert("Escriba un texto para encriptar");
    else {
        clickDesencriptar=true;
        document.getElementById("img").style.display = "none";
        document.getElementById("mensaje-aviso").style.display = "none";
        document.getElementById("mensaje-instruccion").style.display = "none";
        
        document.getElementById("mensaje").style.display = "block";
        document.getElementById("btnCopiar").style.display = "block";
        document.querySelector("#mensaje").innerHTML = validarMayusculas(document.querySelector('#decifrar').value).replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat", "u");
    }
}


function limpiar() {


    clickDesencriptar=false;
    clickEncriptado=false;

    // resizeWindow(windowRisize);

    // document.getElementById("img").style.display = "flex";
    resizeWindow();
    document.getElementById("mensaje-aviso").style.display = "block";
    document.getElementById("mensaje-instruccion").style.display = "block";

    document.getElementById("mensaje").style.display = "none";
    document.getElementById("btnCopiar").style.display = "none";
    document.querySelector("#mensaje").innerHTML =
    document.querySelector("#decifrar").value = "";
    document.querySelector('#mensaje').innerHTML = "";

}


function copiar() {
    navigator.clipboard.writeText(document.getElementById("mensaje").innerHTML);

    document.querySelector("#decifrar").value = document.querySelector('#mensaje').innerHTML;



}


window.addEventListener("resize", resizeWindow);


function resizeWindow() {
    if( window.matchMedia("(min-width: 1024px)").matches && (clickEncriptado==false &&     clickDesencriptar==false))
{
        console.log(clickEncriptado + " " + clickDesencriptar)
        document.getElementById("img").style.display = "flex";
        console.log("si");
}
    else
    {
        document.getElementById("img").style.display = "none";
        console.log("no");
    }
}


