import { Counter, HitCounter, Connection } from '../index';

describe('Entry', () => {
  test('should expose expected objects', () => {
    // Assert
    expect(Counter).toBeDefined();
    expect(HitCounter).toBeDefined();
    expect(Connection).toBeDefined();
  });
})

describe('Connection', () => {
  test('should configure dsn when connection is set', () => {
    // Arrange
    const expected_dsn = 'testDsn';

    // Act
    Connection.connect(expected_dsn);

    // Assert
    expect(Connection.dsn).toEqual(expected_dsn);
  });
})