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
    
    // Prevent publishing metrics when configured to do so
    if (Connection.options.disablePublication) {
      console.info(`micro-stat :: ${this.name} :: ${this.type}`, this.value)
      return
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
