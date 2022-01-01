import Publisher from './publisher'

class Timer extends Publisher {
  constructor(name = 'Unnamed Timer', initialValue = 0) {
    super(name, 'Timer')
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
}

export default Timer;
