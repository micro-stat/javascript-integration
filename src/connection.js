export default {
  dsn: null,

  async connect(dsn) {
    this.dsn = dsn;

    if (typeof window !== 'undefined') {
      const loadVitals = await import('./vitals');
      loadVitals.default();
    }
  }
}