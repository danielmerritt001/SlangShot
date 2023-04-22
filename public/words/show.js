let tableEl = document.getElementById('definitions')
let correctEl = document.getElementById('def-0')
tableEl.addEventListener('click', guess)

function guess() {
  if(!(event.target.id==="definitions")){
    event.target.className = "chosen"
    correctEl.className = "chosen"
    tableEl.removeEventListener('click', guess)
    console.log(event.target)
  }
}