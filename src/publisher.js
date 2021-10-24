import axios from 'axios';
import Connection from './connection';

class Publisher {
  constructor(name = 'Unnamed Statistic') {
    this.name = name;
  }

  publish(value) {
    if (!Connection.dsn) {
      throw new Error('Please configure a dsn before attempting to publish');
    }

    // const postUrl = `${Connection.dsn}/statistic`;

    // const postData = {
    //   name: this.name,
    //   value: this.value
    // };

    // axios.post(postUrl, postData);

    return `${this.name} = ${value} / ${Connection.dsn}`;
  }
}

export default Publisher;
