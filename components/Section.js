export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._selector = selector;
  }

  renderItems() {
    //    Iterate through items array and call the renderer() function on each item
    //    Needs called once on page load
  }

  addItem() {
    // Takes DOM element and adds it to the container
    // Should be called when adding a single card to the DOM
  }
}
