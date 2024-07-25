export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }
  [Symbol.toPRimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
  }
  return this;
}
