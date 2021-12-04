var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

import Connection from '../connection';
import Publisher from '../publisher';

test('should initialize new publisher', () => {
  // Act
  const publisher = new Publisher();

  // Assert
  expect(publisher).toBeDefined();
});

test.skip('should expose publish method', () => {
  // Arrange
  const expectedValue = "Test Statistic = 10 / test";
  Connection.connect('test')

  var mock = new MockAdapter(axios);

  mock.onPost("test/statistic").reply(201, null);

  // Act
  const publisher = new Publisher("Test Statistic", "Test", 10);

  // Assert
  expect(publisher.publish()).toEqual(expectedValue);
});
