const timerBlock = document.querySelector('.timer__time')
const deadline = '31 march 2026'

let interval

const updateClock=()=>{

    const date = new Date().getTime()
    const dateDeadline = new Date(deadline).getTime()
    const timeRemaining = (dateDeadline - date) / 1000
    
    const days = Math.floor(timeRemaining / 60/ 60 / 24)
    const hours = Math.floor(timeRemaining / 60 / 60 % 24)
    const minutes = Math.floor((timeRemaining / 60) % 60)
    const seconds = Math.floor(timeRemaining % 60)

    fHours = hours < 10? '0' + hours : hours
    fMinutes = minutes < 10 ? '0' + minutes : minutes
    fSeconds = seconds < 10 ? '0' + seconds : seconds
    fDays = days < 10? '0' + days : days
    timerBlock.textContent= `${fDays} дней:${fHours}:${fMinutes}:${fSeconds}`

    if(timeRemaining <=0){
        clearInterval(interval)
        timerBlock.textContent = `00:00:00`
    }
}
interval = setInterval(updateClock, 500);