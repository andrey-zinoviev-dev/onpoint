slides.forEach((slide, index) => {
  slide.addEventListener('touchstart', touchStart(index));
  slide.addEventListener('touchend', touchEnd);
  slide.addEventListener('touchmove', touchMove);
  const slideButtons = Array.from(slide.querySelectorAll('button'));
  slideButtons.forEach((button) => {
    button.addEventListener('touchstart', () => {
      slide.removeEventListener('touchstart', touchStart(index));
      slide.removeEventListener('touchend', touchEnd);
      slide.removeEventListener('touchmove', touchMove);
    });
    button.addEventListener('touchend', () => {
      slide.addEventListener('touchstart', touchStart(index));
      slide.addEventListener('touchend', touchEnd);
      slide.addEventListener('touchmove', touchMove);
    });
  })
});

function touchStart(index) {
  return (evt) => {
    currentIndex = index;
    startPos = getPositionX(evt);
    isDragging = true;
    animationId = requestAnimationFrame(animation);
  }
}

function touchMove(evt) {
  if(isDragging) {
    const currentPosition = getPositionX(evt);
    currentTranslate = prevTranslate + currentPosition - startPos;
    if(currentIndex >= slides.length - 1) {
      if(currentTranslate < prevTranslate) {
        return isDragging = false;
      }
    }
    if(currentIndex <= 0) {
      if(currentTranslate > prevTranslate) {
        return isDragging = false;
      }
    }
  } 
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationId);
  const movedBy = currentTranslate - prevTranslate;
  if(movedBy < -350 && currentIndex < slides.length -1) {
    currentIndex += 1;
  } 
  if(movedBy > 350 && currentIndex > 0) {
    currentIndex -= 1;
  }
  setPositionByIndex();
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