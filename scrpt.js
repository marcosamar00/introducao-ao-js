const imagem = document.getElementById('imagem');

const botao1 = document.getElementById('botao1')
const botao2 = document.getElementById('botao2')
const botao3 = document.getElementById('botao3')

function trocarimagem(img){
    imagem.src = img;
}


botao1.addEventListener('click',function(){
    trocarimagem(' imagem1.jpg')
})
botao2.addEventListener('click',function(){
    trocarimagem(' imagem2.jpg')
})
botao3.addEventListener('click',function(){
    trocarimagem(' imagem3.jpg')
})
botao4.addEventListener('click',function(){
    trocarimagem(' paris a noite.jpg')
})
botao5.addEventListener('click',function(){
    trocarimagem(' praia.webp')
})
botao6.addEventListener('click',function(){
    trocarimagem(' roma.jpg')
})