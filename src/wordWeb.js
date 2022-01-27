import Publisher from './publisher'

class WordWeb extends Publisher {
  constructor(name = 'Unnamed Word Web', initialValue = 'No Value Provided') {
    super(name, 'Word Web')
    this.currentValue = initialValue;
  }

  get value() {
    return this.currentValue;
  }

  set value(newValue) {
    this.currentValue = newValue;
  }
}

export default WordWeb;
