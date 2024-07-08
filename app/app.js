document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    spaceBetween: 0,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      depth: 500,
      modifier: 1,
      slideShadows: true,
      rotate: 0,
      stretch: 0,
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function loadImages(jsonFile, containerSelector, altText) {
    fetch(jsonFile)
      .then((response) => response.json())
      .then((data) => {
        const images = data.images;
        const swiperWrapper = document.querySelector(containerSelector);

        images.forEach((src) => {
          const slide = document.createElement("div");
          slide.className = "swiper-slide";

          const img = document.createElement("img");
          img.src = src;
          img.alt = altText;
          img.className = "products__img";

          slide.appendChild(img);
          swiperWrapper.appendChild(slide);
        });

        if (window.swiper) {
          swiper.update();
        }
      })
      .catch((error) => console.error("Error fetching images:", error));
  }

  loadImages(
    "./app/soapsImg.json",
    ".swiper-wrapper.products__images.soaps",
    "Image Soap"
  );
  loadImages(
    "./app/candlesImg.json",
    ".swiper-wrapper.products__images.candles",
    "Image Candle"
  );
});
