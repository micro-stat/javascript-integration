import Connection from '../connection';

describe('Connection', () => {
  test('should configure dsn when connection is set', () => {
    // Arrange
    const expected_dsn = 'TEST_DSN';

    // Act
    Connection.connect(expected_dsn);

    // Assert
    expect(Connection.dsn).toEqual(expected_dsn);
  });

  test('should use default options when no options provided', () => {
    // Arrange
    const expected_options = {
      captureWebVitals: true
    };

    // Act
    Connection.connect('TEST_DSN');

    // Assert
    expect(Connection.options).toEqual(expected_options);
  });
  
  test('should override default options when options are provided', () => {
    // Arrange
    const expected_options = {
      captureWebVitals: false
    };

    // Act
    Connection.connect('TEST_DSN', {
      captureWebVitals: false
    });

    // Assert
    expect(Connection.options).toEqual(expected_options);
  }); 
})