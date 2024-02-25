class DistanceService {
  calculateDistance(i1, j1, i2, j2) {
    const dx = i2 - i1;
    const dy = j2 - j1;
    return Math.sqrt(dx * dx + dy * dy);
  }

  calculateNumberOfSteps(i1, j1, i2, j2) {
    const dx = Math.abs(i2 - i1);
    const dy = Math.abs(j2 - j1);
    return Math.max(dx, dy);
  }

  calculateNumberOfStepsWithoutDiagonal(i1, j1, i2, j2) {
    const dx = Math.abs(i2 - i1);
    const dy = Math.abs(j2 - j1);
    return dx + dy;
  }

  findNearestWarehouse(warehouses, customer) {
    let nearestWarehouse;
    let minDistance = Number.MAX_SAFE_INTEGER;

    warehouses.forEach((warehouse) => {
      const distance = this.calculateDistance(
        warehouse.x,
        warehouse.y,
        customer.coordinates.x,
        customer.coordinates.y
      );

      if (distance < minDistance) {
        minDistance = distance;
        nearestWarehouse = warehouse;
      }
    });

    return nearestWarehouse;
  }
}

export default DistanceService;
