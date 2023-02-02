const dropButton = document.querySelector('.menuButton')
const droDownContainer = document.querySelector('.dropDownContainer')


dropButton.addEventListener('click',showScreen)
window.addEventListener('click',clickOut)


function showScreen(){
    droDownContainer.classList.toggle('screen')
}

function clickOut(x){
    if(x.target !== dropButton){
        droDownContainer.classList.remove('screen')
    }
}