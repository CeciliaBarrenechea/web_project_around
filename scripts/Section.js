export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }
  renderer() {
    this.items.forEach((item) => this._renderer(item));
  }
  addItem() {}
}
