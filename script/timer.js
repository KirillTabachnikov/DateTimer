const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const milisecondElement = document.querySelector('.milisecond')

const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    clearTimer()
})


let hour = 00, minute = 00, second = 00, milisecond = 00, interval;

function startTimer() {
    milisecond++
    if (milisecond < 9) {
        milisecondElement.innerText = "0" + milisecond
    }
    if (milisecond > 9) {
        milisecondElement.innerText = milisecond
    }
    if (milisecond > 99) {
        second++
        secondElement.innerText = "0" + second
        milisecond = 0
        milisecondElement.innerText = milisecond
    }


    if (second < 9) {
        secondElement.innerText = "0" + second
    }
    if (second > 9) {
        secondElement.innerText = second
    }
    if (second > 59) {
        minute++
        minuteElement.innerText = "0" + minute
        second = 0
        secondElement.innerText = second
    }


    if (minute < 9) {
        minuteElement.innerText = "0" + minute
    }
    if (minute > 9) {
        minuteElement.innerText = minute
    }
    if (minute > 59) {
        hour++
        hourElement.innerText = "0" + hour
        minute = 0
        secondElement.innerText = minute
    }

    if (hour < 9) {
        hourElement.innerText = "0" + hour
    }
    if (hour > 9) {
        hourElement.innerText = hour
    }
    if (hour > 24) {
        hour++
        hourElement.innerText = "0" + hour
    }
}

function clearTimer() {
    hour = 00
    minute = 00
    second = 00
    milisecond = 00
    hourElement.textContent = "00"
    minuteElement.textContent = "00"
    secondElement.textContent = "00"
    milisecondElement.textContent = "00"
}

