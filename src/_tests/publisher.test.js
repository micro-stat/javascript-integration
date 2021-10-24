import Connection from '../connection';
import Publisher from '../publisher';

test('should initialize new publisher', () => {
  // Act
  const publisher = new Publisher();

  // Assert
  expect(publisher).toBeDefined();
});

test('should expose publish method', () => {
  // Arrange
  const expectedValue = "Test Statistic = 10 / test";
  Connection.connect('test')

  // Act
  const publisher = new Publisher("Test Statistic");

  // Assert
  expect(publisher.publish(10)).toEqual(expectedValue);
});
