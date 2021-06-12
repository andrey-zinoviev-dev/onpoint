slides.forEach((slide, index) => {
  // slide.addEventListener('touchstart', (evt) => {
  //   console.log(evt);
  // })
  slide.addEventListener('touchstart', touchStart(index));
  slide.addEventListener('touchend', touchEnd);
  slide.addEventListener('touchmove', touchMove);
});

function touchStart(index) {
  return (evt) => {
    currentIndex = index;
    startPos = getPositionX(evt);
    isDragging = true;
    animationId = requestAnimationFrame(animation);
  }
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationId);
  const movedBy = currentTranslate - prevTranslate;
  if(movedBy < -300 && currentIndex < slides.length -1) {
    currentIndex += 1;
  } 
  if(movedBy > 300 && currentIndex > 0) {
    currentIndex -= 1;
  }

  setPositionByIndex();
}

function touchMove(evt) {
  if(isDragging) {
    const currentPosition = getPositionX(evt);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
  
}

function getPositionX(evt) {
  return evt.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if(isDragging) {
    requestAnimationFrame(animation);
  }
}
function setSliderPosition() {
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}
// function setTranslateByIndex() {
//   currentTranslatePosition = currentSlideIndex * -window.innerWidth;
//   prevTranslate = currentTranslatePosition;
//   setSliderPosition();
// }