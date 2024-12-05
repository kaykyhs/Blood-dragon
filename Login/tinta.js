

var cliente = false;
var supply = false;
var arquivo =false;
var sininho = false;
var balao = false;
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
function criar_cadastro(){
    
}
function Gira_gira(el){
el.classList.toggle('active');
 if(arquivo == false){
     document.getElementById('itens_arquivos').style.display="block";
     arquivo= true;
 } else{
    arquivo = false;
    document.getElementById('itens_arquivos').style.display="none";
 }
}
function ativa_notifica(){
    if(sininho == true){
        document.getElementById('notifica').style.display="block";
        document.getElementById('notifica').style.animationName="slide_notifica";
        sininho =false;
    }else{
        document.getElementById('notifica').style.display="none";
        sininho =true;
        
    }
}
function fecha_notifica(){
    document.getElementById('notifica').style.animationName="out_slide_notifica";
    sininho =true;
}
function mensagens(){
    if(balao == false){
        document.getElementById('side_papo').style.animationName="slide_papo";
        document.getElementById('bate_papo').style.display="block";
        balao = true;
       
    }else{
        document.getElementById('side_papo').style.animationName="out_slide_papo";
        balao = false;
    }

}
function fecha_papo(){
    document.getElementById('bate_papo').style.display="none";
    balao = false;
}
function conversar(){
    document.getElementById('bate_papo').style.display="none";
    document.getElementById('conversa').style.display="block";
}
function fecha_conversa(){
    document.getElementById('bate_papo').style.display="block";
    document.getElementById('conversa').style.display="none";

}
function sou_supply() {
    supply = true;
    if (supply = true) {
        document.getElementById("identificador").style = "display: block;";
        document.getElementById("identificador").placeholder = "CNPJ";
        document.getElementById("supply").style = "background-color: black; color: white;";
        document.getElementById("cliente").style = "background-color: #7556568F; color: white;";
        document.getElementById("tatuador").style = "background-color: #7556568F; color: white;";
        document.body.style.backgroundImage = "url('/img/supplyBG.png')";
    }
}
function sou_cliente() {
    supply = false;
    cliente = true;
    if (cliente = true) {
        document.getElementById("identificador").style = "display: none;";
        document.getElementById("supply").style = "background-color: #7556568F; color: white;";
        document.getElementById("cliente").style = "background-color: black; color: white;";
        document.body.style.backgroundImage = "url('/img/clienteBG.png')";
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
        document.body.style.backgroundImage = "url('/img/imgTatto.PNG')";
    }
}
