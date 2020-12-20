const liveway = document.querySelectorAll('.liveway')[0],
  livewayCards = document.querySelectorAll('.livewayCard');

window.addEventListener('scroll', () => {
  animateLiveWay()
})

function animateLiveWay() {
  if((liveway.getBoundingClientRect().top - window.innerHeight) < 0) {
    livewayCards.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('active')
      }, index * 2000)
    })
  }
}