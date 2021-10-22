class Publisher {
  constructor(name = 'Unnamed Statistic') {
    this.name = name;
  }

  publish(value) {
    return `${this.name} = ${value}`;
  }
}

export default Publisher;
