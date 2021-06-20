popupOpenButton.addEventListener('click', () => {
  popupDiv.classList.add('popup_opened');
})
popupCloseButton.addEventListener('click', () => {
  popupDiv.classList.remove('popup_opened');
});

const appendingSection = new Section(advantages, () => {}, ulElement, 1, 3, () => {}, dotsDiv);

appendingSection.renderFunction = (advantage) => {
  createLiElement(advantage, appendingSection);
};

appendingSection.renderer(appendingSection.pageStart);

appendingSection.renderDotsFunction = (dot) => {
  createDotElement(appendingSection);
};

appendingSection.generateDots();

const dots = Array.from(dotsDiv.querySelectorAll('.popup__navigation-dots-dot'));
dots[0].classList.add('popup__navigation-dots-dot_active');

leftPaginationButton.addEventListener('click', () => {
  appendingSection.renderer(appendingSection.pageStart);  
  removeActiveClass(dots);
  dots[appendingSection.pageStart - 1].classList.add('popup__navigation-dots-dot_active');
});

rightPaginationButton.addEventListener('click', () => {
  appendingSection.renderer(appendingSection.pageStart + 1);
  removeActiveClass(dots);
  dots[appendingSection.pageStart].classList.add('popup__navigation-dots-dot_active');
});

const obsever = new IntersectionObserver(callback, {
  threshold: 0.5,
});

function callback(entries) {
  entries.forEach((entry) => {
    if(entry.isIntersecting && Array.from(entry.target.classList).includes('second-section')) {
      secondSectionImages.forEach((image) => {
        image.classList.add('main__image_visible');
      });
    }
  })
};

slides.forEach((slide) => {
  obsever.observe(slide);
});

firstSectionButton.addEventListener('click', () => {
  currentIndex = 1;
  setPositionByIndex();
});

headerButton.addEventListener('click', () => {
  currentIndex = 0;
  setPositionByIndex();
});