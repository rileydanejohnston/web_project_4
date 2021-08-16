export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(`${selector}`);
  }
  renderElements() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }
  addItem(element) {
    console.log(this._container);
    this._container.prepend(element);
  }
}