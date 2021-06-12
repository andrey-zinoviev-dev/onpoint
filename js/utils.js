const popupOpenButton = document.querySelector('.third-section__button-span');
const popupDiv = document.querySelector('.popup');
const popupCloseButton = popupDiv.querySelector('.popup__close');
const ulElement = document.querySelector('.popup__list');
const liTemplate = document.querySelector('#list-element-template');
const dotTemplate = document.querySelector('#navigation-dots-dot');
const advantages = [{order: '01', text: 'Самое важное и ключевое преимущество нашего препарата'}, {order: '02', text: 'Второе по важности преимущество'}, {order: '03', text: 'Еще одно важное преимущество'}, {order: '04', text: "Еще одно не менее важное преимущество препарата"}, {order: '05', text: "Еще одно важное преимущество препарата"}, {order: '06', text: "Еще одно важное преимущество препарата"}];
const leftPaginationButton = popupDiv.querySelector('.popup__navigation-button_left');
const rightPaginationButton = popupDiv.querySelector('.popup__navigation-button_right');
const dotsDiv = popupDiv.querySelector('.popup__navigation-dots');

const sliderContainer = document.querySelector('.main__sections-wrapper');
const slides = Array.from(sliderContainer.querySelectorAll('section'));

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationId = 0;
let currentIndex = 0;

const secondSectionImages = Array.from(document.querySelectorAll('.main__image'));

const firstSection = document.querySelector('.first-section');
const firstSectionButton = firstSection.querySelector('.first-section-button');
const secondSection = document.querySelector('.second-section');
const headerButton = document.querySelector('.header__button');

function createLiElement(element, section) {
  const liTemplateElement = new ListElement(liTemplate, '.popup__list-element', element.order, element.text);
  const generatedLiElement = liTemplateElement._createElement();
  section.appendElement(generatedLiElement);
};

function createDotElement(section) {
  const dotTemplateElement = new DotElement(dotTemplate, '.popup__navigation-dots-dot');
  const generatedDotElement = dotTemplateElement._generateTemplate();
  section.appendDot(generatedDotElement);
}

function removeActiveClass(dots) {
  dots.forEach((dot) => {
    dot.classList.remove('popup__navigation-dots-dot_active');
  })
}

function scrollOnClick(section) {
  section.scrollIntoView({block: 'start', behavior: 'smooth'});
}

function scrollHome(section) {
  sliderContainer.style.transform = `translateX(0)`;
  section.scrollIntoView({block: 'start', behavior: 'smooth'});
}