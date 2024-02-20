document.addEventListener("DOMContentLoaded", function () {
  const sliderImages = document.querySelectorAll(".slider-img");

  sliderImages.forEach(function (sliderImage) {
    sliderImage.addEventListener("click", function () {
      sliderImages.forEach(function (img) {
        img.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});
