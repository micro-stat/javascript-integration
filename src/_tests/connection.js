import Connection from '../connection';

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