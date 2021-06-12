class DotElement {
  constructor(templateSelector, elementSelector) {
    this.templateSelector = templateSelector;
    this.elementSelector = elementSelector;
  }
  _generateTemplate() {
    const dotTemplate = this.templateSelector;
    const dotElement = dotTemplate.content.querySelector(this.elementSelector).cloneNode(true);
    return dotElement;
  }
  _createElement() {
    this._element = this._generateTemplate();
    this._element.textContent = '+';
    return this._element;
  }
}