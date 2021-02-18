let currentImageIndex = 0,
  images = document.querySelectorAll(".phone-gallery img"),
  max = images.length


function nextImage() {
  images[currentImageIndex].classList.remove("active")

  currentImageIndex++

  if (currentImageIndex >= max)
    currentImageIndex = 0

  images[currentImageIndex].classList.add("active")

}

function run() {
  setInterval(() => {
    nextImage()
  }, 5000)
}

window.addEventListener("load", run)//o load serva para quando a pagina for carregada
