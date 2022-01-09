export default {
  dsn: null,
  queue: [],

  async connect(dsn) {
    this.dsn = dsn;

    if (typeof window !== 'undefined') {
      const loadVitals = await import('./vitals');
      loadVitals.default();
    }
  },

  publish (metric) {
    this.queue.push(metric)

    if (this.queue.length === 1) {
      const transmissionDelay = setTimeout(() => {
        if (this.queue.length > 0) {
          const axios = require('axios');
          axios.post(`${this.dsn}`, this.queue);
          this.queue = []
        }   
      }, 1000);
    }
  }
}