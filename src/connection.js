import defaultOptions from './defaultOptions';

export default {
  dsn: null,
  options: defaultOptions,
  queue: [],

  async connect(dsn, providedOptions) {
    this.dsn = dsn;

    // Merge default options with user provided set
    if (providedOptions) {
      this.options = {
        ...defaultOptions,
        ...providedOptions
      };
    }

    // Determine whether to capture web vitals automatically
    if (this.options.captureWebVitals && typeof window !== 'undefined') {
      const loadVitals = await import('./vitals');
      loadVitals.default();
    }
  },

  publish (metric) {
    this.queue.push(metric)

    if (this.queue.length === 1) {
      setTimeout(() => {
        if (this.queue.length > 0) {
          const axios = require('axios');
          axios.post(`https://api.micro-stat.com/api/ingest?dsn=${this.dsn}`, this.queue);
          this.queue = []
        }   
      }, 1000);
    }
  }
}