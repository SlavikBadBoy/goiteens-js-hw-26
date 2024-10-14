const sliderInput = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image");

const resizeImage = (size) => {
  const minSize = 150;
  const maxSize = 300;
  const newSize = (size / 100) * (maxSize - minSize) + minSize;
  sliderImage.style.width = `${newSize}px`;
};

const handleSliderChange = _.debounce((event) => {
  const newSize = event.target.value;
  resizeImage(newSize);
}, 100);

sliderInput.addEventListener("input", handleSliderChange);
