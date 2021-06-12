class Section {
  constructor(items, renderFunction, appendSection, pageStart, elementsPerPage, renderDotsFunction, dotsAppendSelector) {
    this.items = items;
    this.renderFunction = renderFunction;
    this.appendSection = appendSection;
    this.pageStart = pageStart;
    this.elementsPerPage = elementsPerPage;
    this.renderDotsFunction = renderDotsFunction;
    this.dotsAppendSelector = dotsAppendSelector;
  }
  renderer(page) {
    const items = this.paginateElements(page);
    this.appendSection.innerHTML = '';
    items.forEach((item) => {
      this.renderFunction(item);
    })
  }
  appendElement(element) {
    this.appendSection.append(element);
  }
  paginateElements(page) {
    let paginationStep = (page -1) * this.elementsPerPage;
    const paginatedItems = this.items.slice(paginationStep).slice(0, this.elementsPerPage);
    return paginatedItems;
  }
  generateDots() {
    const pagesToRender = Math.ceil(this.items.length/this.elementsPerPage);
    let pagesArray = [];
    pagesArray.length = pagesToRender;
    for (let i =0; i< pagesToRender; i++) {
      this.renderDotsFunction();
    }
    // pagesArray.forEach((page) => {
      
    //   this.renderDotsFunction();
    // });
  }
  appendDot(dot) {
    this.dotsAppendSelector.append(dot);
  }
}