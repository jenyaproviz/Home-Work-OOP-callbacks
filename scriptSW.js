let seconds = 00
let tens = 00
let interval

let appendSeconds = document.getElementById('seconds')
let appendTens = document.getElementById('tens')

let buttonStart = document.getElementById('buttonStart')
let buttonStop = document.getElementById('buttonStop')
let buttonReset = document.getElementById('buttonReset')

buttonStart.onclick = function () {
  clearInterval(interval)
  interval = setInterval(timer, 10)
}

buttonStop.onclick = function () {
  clearInterval(interval)
}
buttonReset.onclick = function () {
  clearInterval(interval)
  tens = '00'
  seconds = '00'
  appendTens.innerHTML = tens
  appendSeconds.innerHTML = seconds
}

function timer() {
  tens++
  if (tens <= 9) {
    appendTens.innerHTML = '0' + tens
  }
  if (tens > 9) {
    appendTens.innerHTML = tens
  }
  if (tens > 99) {
    seconds++
    appendSeconds.innerHTML = '0' + seconds
    tens = 0
    appendTens.innerHTML = '0' + 0
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds
  }
}
