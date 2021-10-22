import { Counter, Timer } from '../index';

describe('Entry', () => {
  test('should expose expected objects', () => {
    // Assert
    expect(Counter).toBeDefined();
    expect(Timer).toBeDefined();
  });
})