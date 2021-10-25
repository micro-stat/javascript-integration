import axios from 'axios';
import Connection from './connection';

class Publisher {
  constructor(name = 'Unnamed', type = 'Counter', value = 0) {
    this.name = name;
    this.type = type
    this.value = value
  }

  publish() {
    if (!Connection.dsn) {
      throw new Error('Please configure a dsn before attempting to publish');
    }

    const postUrl = `${Connection.dsn}/statistic`;

    const postData = {
      name: this.name,
      type: this.type,
      value: this.value
    };

    axios.post(postUrl, postData);

    return `${this.name} = ${this.value} / ${Connection.dsn}`;
  }
}

export default Publisher;
