const inputMudaCor = document.querySelector('input')
const bodyDoHtml = document.querySelector('body')

bodyDoHtml.style.background = '#00b3ff' //Cor inicial da tela

function mudaCorBodyHtml() {
    bodyDoHtml.style.background = inputMudaCor.value
}

inputMudaCor.oninput = mudaCorBodyHtml