const closedEmoji = document.querySelector('.close')
const openEmoji = document.querySelector('.open')

closedEmoji.addEventListener('click', () => {
    if(openEmoji.classList.contains('open')){
        
        openEmoji.classList.add('active')
        closedEmoji.classList.remove('active');
    }
})

openEmoji.addEventListener('click', () => {
    if(closedEmoji.classList.contains('close')){
       
        closedEmoji.classList.add('active')
        openEmoji.classList.remove('active');
    }
})