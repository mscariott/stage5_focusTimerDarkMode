const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')

const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffe')
const buttonFire = document.querySelector('.fire')

const buttonDarkmodeOn = document.querySelector('.buttonDarkmodeOn')
const buttonDarkmodeOff = document.querySelector('.buttonDarkmodeOff')

const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const body = document.querySelector('body')
const plotTimer = document.querySelector('.timer')

const volumeForest = document.querySelector('#volumeForest')
const volumeRain = document.querySelector('#volumeRain')
const volumeCoffe = document.querySelector('#volumeCoffe')
const volumeFire = document.querySelector('#volumeFire')


const soundForest = new Audio("./sounds/Floresta.wav")
const soundRain = new Audio("./sounds/Chuva.wav")
const soundCoffe = new Audio("./sounds/Cafeteria.wav")
const soundFire = new Audio("./sounds/Lareira.wav")


soundForest.volume = volumeForest.value/100 
soundRain.volume = volumeRain.value/100 
soundCoffe.volume = volumeCoffe.value/100 
soundFire.volume = volumeFire.value/100 

soundForest.loop = true
soundRain.loop = true
soundCoffe.loop = true
soundFire.loop = true

export {
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFire,
  minutes,
  seconds,
  soundForest,
  soundCoffe,
  soundFire,
  soundRain,
  buttonDarkmodeOn,
  buttonDarkmodeOff,
  body,
  plotTimer,
  volumeCoffe,
  volumeFire,
  volumeRain,
  volumeForest
}