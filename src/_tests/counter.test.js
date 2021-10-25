var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

import Connection from '../connection';
import Counter from '../counter';

describe('counter', () => {
  test('should initialize new counter', () => {
    // Act
    const counter = new Counter();

    // Assert
    expect(counter).toBeDefined();
  });

  test('should initialize value to zero', () => {
    // Arrange
    const expectedValue = 0;

    // Act
    const realValue = new Counter().value;

    // Assert
    expect(realValue).toEqual(expectedValue);
  });

  test('can increment counter value', () => {
    // Arrange
    const expectedValue = 1;
    const counter = new Counter();

    // Act
    counter.increment();
    const realValue = counter.value;

    // Assert
    expect(realValue).toEqual(expectedValue);
  });

  test('can set counter value', () => {
    // Arrange
    const expectedValue = 10;
    const counter = new Counter();

    // Act
    counter.value = 10;
    const realValue = counter.value;

    // Assert
    expect(realValue).toEqual(expectedValue);
  });

  test('can not set non numerical values', () => {
    // Arrange
    const counter = new Counter();

    // Act & Assert
    expect(() => {
      counter.value = "Hello World"
    }).toThrow('Provided value is not a number');
  });

  test('can not set non numerical values', () => {
    // Arrange
    const counter = new Counter('Test', 10);
    Connection.connect('test');

    var mock = new MockAdapter(axios);

    mock.onPost("test/statistic").reply(201, null);

    const result = counter.publish();

    // Act & Assert
    expect(result).toBe('Test = 10 / test');
  });
})