import { ServiceA } from './service-a';
import { ServiceB } from './service-b';

describe('ServiceA', () => {
  it('adding 1 and 2 should result to 3', () => {
    // Arrange
    const svcB = new ServiceB({});
    const config = {};
    const svcA = new ServiceA(svcB, config);

    // Act
    const result = svcA.add(1, 2);

    // Assert
    expect(result).toEqual(3);
  });
});
