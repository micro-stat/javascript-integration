import Publisher from './publisher'

class HitCounter extends Publisher {
  constructor(name = 'Unnamed Hit Counter') {
    super(name, 'Hit Counter', 1)
    this.currentValue = 1;
  }

  get value() {
    return this.currentValue;
  }
}

export default HitCounter;
