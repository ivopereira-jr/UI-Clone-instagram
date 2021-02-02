let images = document.querySelectorAll(".phone-gallery .img-size")
let fistImage = document.querySelector(".img-size.first")
let lastImage = document.querySelector(".img-size.last")

for (let index = 0; index < images.length; index++) {
  let imageNext, imagePrev, clearImagePrev

  if (index == 0) {
    setTimeout(function nextImage() {
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
        }, 5000)
      } else {
        imageNext.classList.add("active")
      }

      imagePrev.classList.remove("active")

      if (clearImagePrev != null) {
        clearImagePrev.classList.remove("prev")
      }

      setTimeout(nextImage, 5000)
    }, 5000)
  }
}
