const slidesContainer = document.getElementById("index-pics");
const slide = document.querySelector(".index-one-pic");
const prevButton = document.getElementById("slArrowPrev");
const nextButton = document.getElementById("slArrowNext");
 
nextButton.addEventListener("click", () => {
  const slideWidth = slidesContainer.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
 
prevButton.addEventListener("click", () => {
  const slideWidth = slidesContainer.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});