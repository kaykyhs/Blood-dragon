function sou_supply(){
    document.getElementById("identificador").placeholder= "CNPJ";
    document.getElementById("supply").style = "background-color: black; color: white;";
    document.body.style.backgroundImage = "url('./img/supplyBG.png')";    
}
function sou_cliente(){
    document.getElementById("identificador").style = "display: none;";
    document.getElementById("cliente").style = "background-color: black; color: white;";
    document.body.style.backgroundImage = "url('./img/clienteBG.png')";    
}