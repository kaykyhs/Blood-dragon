const imagemInput = document.getElementById('imagem');
const enviarButton = document.getElementById('enviar');
const mensagemDiv = document.getElementById('mensagem');
const galeriaDiv = document.getElementById('galeria');

enviarButton.addEventListener('click', async () => {
    const imagem = imagemInput.files[0];
    const formData = new FormData();
    formData.append('imagem', imagem);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        const mensagem = await response.text();
        mensagemDiv.innerText = mensagem;
        loadImages(); // Carrega as imagens após o upload
    } catch (error) {
        mensagemDiv.innerText = 'Erro ao enviar a imagem.';
    }
});

// Função para carregar e exibir as imagens
async function loadImages() {
    try {
        const response = await fetch('/imagens');
        const imagens = await response.json();
        galeriaDiv.innerHTML = ''; // Limpa a galeria antes de adicionar novas imagens

        imagens.forEach(imagem => {
            const imgElement = document.createElement('img');
            imgElement.src = `/imagem/${imagem.id}`; // URL para buscar a imagem
            imgElement.alt = imagem.nome;
            imgElement.style.width = '100px'; // Ajuste o tamanho conforme necessário
            imgElement.style.margin = '10px';
            galeriaDiv.appendChild(imgElement);
        });
    } catch (error) {
        console.error('Erro ao carregar imagens:', error);
    }
}

// Carrega as imagens ao iniciar a página
loadImages();