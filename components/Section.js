export default class Section {
  constructor({ renderer, selector }, items) {
    this._items = items;
    this._renderer = renderer;
    this._selector = document.querySelector(selector);
  }

  renderItems(items) {
    //    Iterate through items array and call the renderer() function on each item
    //    Needs called once on page load
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(item) {
    // Takes DOM element and adds it to the container
    // Should be called when adding a single card to the DOM
    this._selector.append(element);
  }
}
