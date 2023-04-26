let boing = new Audio('/assets/audio/wrong-sounds/boing.mp3')
let duck = new Audio('/assets/audio/wrong-sounds/duck.mp3')
let sike = new Audio('/assets/audio/wrong-sounds/sike.mp3')
let trumpet = new Audio('/assets/audio/wrong-sounds/trumpet.mp3')
let wahWah = new Audio('/assets/audio/wrong-sounds/wah-wah.mp3')
let lossArray=[boing, duck, sike, trumpet, wahWah]
let success = new Audio('/assets/audio/correct-sounds/success.mp3')

let tableEl = document.getElementById('definitions')
let correctEl = document.getElementById('def-0')
tableEl.addEventListener('click', guess)

function guess() {
  if(!(event.target.id==="definitions")){
    event.target.className = "chosen"
    correctEl.className = "chosen"
    tableEl.removeEventListener('click', guess)
    if(event.target.id==="def-0") {
      playWinSound()
    } else{
      playLossSound()
    }
  }
}
function playLossSound() {
  randNum= Math.floor(Math.random()*lossArray.length)
  lossArray[randNum].volume = .8
  lossArray[randNum].play()
}

function playWinSound() {
  success.volume = .8
  success.play()
}