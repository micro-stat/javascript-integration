var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

import HitCounter from '../hitCounter';

describe('hitCounter', () => {
  test('should initialize new hitCounter', () => {
    // Act
    const hitCounter = new HitCounter();

    // Assert
    expect(hitCounter).toBeDefined();
  });

  test('should initialize value to one', () => {
    // Arrange
    const expectedValue = 1;

    // Act
    const realValue = new HitCounter().value;

    // Assert
    expect(realValue).toEqual(expectedValue);
  });
})