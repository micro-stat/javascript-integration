import connection from './connection';

class Publisher {
  constructor(name = 'Unnamed Statistic') {
    this.name = name;
  }

  publish(value) {
    return `${this.name} = ${value} / ${connection.dsn}`;
  }
}

export default Publisher;
