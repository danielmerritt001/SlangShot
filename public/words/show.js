let boing = new Audio('/assets/audio/losingsounds/boing.mp3')
let duck = new Audio('/assets/audio/losingsounds/duck.mp3')
let sike = new Audio('/assets/audio/losingsounds/sike.mp3')
let trumpet = new Audio('/assets/audio/losingsounds/trumpet.mp3')
let wahWah = new Audio('/assets/audio/losingsounds/wah-wah.mp3')
let lossArray=[boing, duck, sike, trumpet, wahWah]

let tableEl = document.getElementById('definitions')
let correctEl = document.getElementById('def-0')
tableEl.addEventListener('click', guess)

function guess() {
  if(!(event.target.id==="definitions")){
    event.target.className = "chosen"
    correctEl.className = "chosen"
    tableEl.removeEventListener('click', guess)
    if(event.target.id==="def-0") {

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