var cliente = false;
var supply = false;
function sou_supply() {
    supply = true;
    if (supply = true) {
        document.getElementById("identificador").style = "display: block;";
        document.getElementById("identificador").placeholder = "CNPJ";
        document.getElementById("supply").style = "background-color: black; color: white;";
        document.getElementById("cliente").style = "background-color: #7556568F; color: white;";
        document.getElementById("tatuador").style = "background-color: #7556568F; color: white;";
        document.body.style.backgroundImage = "url('./img/supplyBG.png')";
    }
}
function sou_cliente() {
    supply = false;
    cliente = true;
    if (cliente = true) {
        document.getElementById("identificador").style = "display: none;";
        document.getElementById("supply").style = "background-color: #7556568F; color: white;";
        document.getElementById("cliente").style = "background-color: black; color: white;";
        document.body.style.backgroundImage = "url('./img/clienteBG.png')";
    }
}
function Sou_tatuador(){
    supply = false;
    cliente = false;
    if (cliente == false && supply == false) {
        supply = false;
        cliente = false;
        document.getElementById("identificador").style = "display: block;";
        document.getElementById("identificador").placeholder = "MEI(se possuir)";
        document.getElementById("tatuador").style = "background-color: black; color: white;";
        document.getElementById("cliente").style = "background-color: #7556568F; color: white;";
        document.getElementById("supply").style = "background-color: #7556568F; color: white;";
        document.body.style.backgroundImage = "url('./img/imgTatto.PNG')";
    }
}