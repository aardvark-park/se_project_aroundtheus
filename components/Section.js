export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._selector = document.querySelector(selector);
  }

  renderItems() {
    //    Iterate through items array and call the renderer() function on each item
    //    Needs called once on page load

    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem() {
    // Takes DOM element and adds it to the container
    // Should be called when adding a single card to the DOM
    this._selector.append(element);
  }
}
