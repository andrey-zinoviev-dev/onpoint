class ListElement {
  constructor(elementTemplate, elementSelector, orderNumber, elementText) {
    this.elementTemplate = elementTemplate;
    this.elementSelector = elementSelector;
    this.orderNumber = orderNumber;
    this.elementText = elementText;
  }
  _getElementTemplate() {
    const liTemplate = this.elementTemplate;
    const finalTemplate = liTemplate.content.querySelector(this.elementSelector).cloneNode(true);
    return finalTemplate;
  }
  _createElement() {
    this._element = this._getElementTemplate();
    this._element.querySelector('.popup__list-element-span').textContent = this.orderNumber;
    this._element.querySelector('.popup__list-element-para').textContent = this.elementText;
    return this._element;
  }
}