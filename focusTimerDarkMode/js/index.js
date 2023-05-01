import Timer from "./timer.js"
import Sounds from "./sounds.js"

import {
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFire,
  buttonIncrease,
  buttonDecrease,
  buttonPlay,
  buttonStop,
  minutes,
  seconds,
  buttonDarkmodeOn,
  buttonDarkmodeOff,
  body,
  plotTimer,
  volumeForest,
  volumeCoffe,
  volumeFire,
  volumeRain,
  soundCoffe,
  soundForest,
  soundFire,
  soundRain
} from "./elements.js"

minutes.textContent = prompt("Quantos minutos?").padStart(2, "0")

const sounds = Sounds({
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFire
})
const timer = Timer({
  seconds,
  minutes
})


volumeForest.addEventListener('click', function (event) {
  event.stopPropagation()
  sounds.volume(volumeForest, soundForest)
})

volumeCoffe.addEventListener('click', function (event) {
  event.stopPropagation()
  sounds.volume(volumeCoffe, soundCoffe)
})

volumeFire.addEventListener('click', function (event) {
  event.stopPropagation()
  sounds.volume(volumeFire, soundFire)
})

volumeRain.addEventListener('click', function (event) {
  event.stopPropagation()
  sounds.volume(volumeRain, soundRain)
})


buttonDarkmodeOn.addEventListener('click', function () {
  body.classList.add('darkmode')
  plotTimer.classList.add('darkmode')
  buttonDarkmodeOn.classList.add('hide')
  buttonDarkmodeOff.classList.remove('hide')
}
)

buttonDarkmodeOff.addEventListener('click', function () {
  body.classList.remove('darkmode')
  plotTimer.classList.remove('darkmode')
  buttonDarkmodeOff.classList.add('hide')
  buttonDarkmodeOn.classList.remove('hide')
}
)

buttonIncrease.addEventListener('click', function () {
  timer.increase()
})

buttonDecrease.addEventListener('click', function () {
  timer.decrease()
})

buttonPlay.addEventListener('click', function () {
  timer.countdown()
})

buttonStop.addEventListener('click', function () {
  timer.hold()
})

buttonForest.addEventListener('click', function () {
  sounds.forest()
})

buttonRain.addEventListener('click', function () {
  sounds.rain()
})

buttonCoffe.addEventListener('click', function () {
  sounds.coffe()

})

buttonFire.addEventListener('click', function () {
  sounds.fire()
})
