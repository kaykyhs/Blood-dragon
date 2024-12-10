
var tatuador = true;
var cliente = false;
var supply = false;
var arquivo =false;
var sininho = false;
var balao = false;
function sou_supply() {
    supply = true;
    tatuador = false;
    cliente = false;
        document.getElementById("identificador").style = "display: block;";
        document.getElementById("identificador").placeholder = "CNPJ";
        document.getElementById("supply").style = "background-color: black; color: white;";
        document.getElementById("cliente").style = "background-color: #7556568F; color: white;";
        document.getElementById("tatuador").style = "background-color: #7556568F; color: white;";
        document.body.style.backgroundImage = "url('/img/capa_5.png')";
        console.log("sou supply");
}
function sou_cliente() {
    supply = false;
    cliente = true;
    tatuador = false;
        document.getElementById("identificador").style = "display: none;";
        document.getElementById("supply").style = "background-color: #7556568F; color: white;";
        document.getElementById("tatuador").style = "background-color: #7556568F; color: white;";
        document.getElementById("cliente").style = "background-color: black; color: white;";
        document.body.style.backgroundImage = "url('/img/capa_7.jpg')";
        console.log("sou cliente");
}
function Sou_tatuador(){
    supply = false;
    cliente = false;
    tatuador = true;
        document.getElementById("identificador").style = "display: block;";
        document.getElementById("identificador").placeholder = "MEI(se possuir)";
        document.getElementById("tatuador").style = "background-color: black; color: white;";
        document.getElementById("cliente").style = "background-color: #7556568F; color: white;";
        document.getElementById("supply").style = "background-color: #7556568F; color: white;";
        document.body.style.backgroundImage = "url('/img/imgTatto.PNG')";
        console.log("sou tatuador");
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

function BT() {
        document.getElementById('filter_buttons').style.display="none";
};

document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const images = document.querySelectorAll('.posts');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');

            // Get selected category
            const selectedCategory = button.dataset.category;

            // Show/hide images based on category
            images.forEach(image => {
                if (image.dataset.category === selectedCategory) {
                    image.classList.add('on');
                } else {
                    image.classList.remove('on');
                    image.classList.add('off');
                }
            });
        });
    });
});

