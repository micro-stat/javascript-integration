import Connection from './connection';

class Publisher {
  constructor(name = 'Unnamed', type = 'Counter', value = 0) {
    this.name = name;
    this.type = type
  }

  publish() {
    if (!Connection.dsn) {
      throw new Error('Please configure a dsn before attempting to publish');
    }

    const metricPayload = {
      name: this.name,
      type: this.type,
      value: this.value
    };

    Connection.publish(metricPayload)
  }
}

export default Publisher;
