const body = document.querySelector("body")
//   popupClose(closeBtn.closest('.popup'));
//   e.preventDefault();
// })
const popup = document.getElementById('popup')

let unlock = true;

function popupOpen(currentPopup, grid) {
  // console.log(currentPopup)
  currentPopup.classList.add('open')
  currentPopup.style.visibility = 'visible'
  const saveBtn = document.getElementById('saveBtn')
  const closeBtn = document.querySelector('.close-popup')
  saveBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let gameName = document.getElementById('nameGame').value;
    let moves = document.getElementById('move').textContent
    let time = document.getElementById('time').textContent
    if (gameName) {
      localStorage.setItem(`${gameName}`, `{grid: [${grid}], moves: ${moves.slice(6)}, time: ${time}` )
      popupClose(e, currentPopup)
    }
  });
  closeBtn.addEventListener("click", (e) => {
    popupClose(e, currentPopup)
  })
}

function popupClose(e, currentPopup) {
  e.preventDefault(e);
  currentPopup.classList.remove('open')
  currentPopup.style.visibility = 'hidden'
}

export {popupOpen}