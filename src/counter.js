import Publisher from './publisher'

class Counter extends Publisher {
  constructor(name = 'Unnamed Timer', initialValue = 0) {
    super(name)
    this.currentValue = initialValue;
  }

  get value() {
    return this.currentValue;
  }

  set value(newValue) {
    if (isNaN(newValue)) {
      throw new Error('Provided value is not a number');
    }

    this.currentValue = newValue;
  }

  /** Increment the counter value by 1 */
  increment () {
    this.currentValue++;
  }
}

export default Counter;
