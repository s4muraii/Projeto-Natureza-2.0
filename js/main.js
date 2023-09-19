const imagens = document.querySelectorAll('.js-list li');
const textos = document.querySelectorAll('.js-content section');


function ativarConteudo (indice){
    textos[indice].classList.add('active')
}