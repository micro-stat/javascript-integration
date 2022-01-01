import loadVitals from './vitals';

export default {
  dsn: null,

  connect(dsn) {
    this.dsn = dsn;

    loadVitals();
  }
}