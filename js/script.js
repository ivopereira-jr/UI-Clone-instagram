let images = document.querySelectorAll(".phone-gallery .img-size")
let fistImage = document.querySelector(".img-size.first")
let lastImage = document.querySelector(".img-size.last")

images.forEach(nextImage)

function nextImage(image, index, arr) {
  let imageNext, imagePrev, clearImagePrev

  if (index == 0) {
    setTimeout(function run() {
      images.forEach(image => {
        if (image.classList.contains("active")) {
          clearImagePrev = image.previousElementSibling
          imagePrev = image
          imageNext = image.nextElementSibling
        }
      })

      imagePrev.classList.add("prev")

      if (imageNext == null) {
        fistImage.classList.add("active")
        setTimeout(() => {
          lastImage.classList.remove("prev")
        }, 4000)
      } else {
        imageNext.classList.add("active")
      }

      imagePrev.classList.remove("active")

      if (clearImagePrev != null) {
        clearImagePrev.classList.remove("prev")
      }

      setTimeout(run, 4000)
    }, 4000)
  }
}
