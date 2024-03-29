import DistanceService from "./DistanceService";
import { groupOrdersByCustomer } from "./GroupByUtilsService";

class DeliveryTimeService {
  constructor() {
    this.distanceService = new DistanceService();
  }

  calculateTotalDeliveryTime(warehouses, customers, orders) {
    let totalTime = 0;
    console.log("Orders:", orders);
    // Grouping orders so that if a customer has more than 1 order the drone will take both of them in 1 trip
    const groupedOrders = groupOrdersByCustomer(orders);

    console.log("Grouped orders:", groupedOrders);

    groupedOrders.forEach((order) => {
      const customer = customers.find((c) => c.id === order.customerId);

      // The warehouse that is closest to the customer
      const warehouse = this.distanceService.findNearestWarehouse(
        warehouses,
        customer
      );
      console.log("Warehouse:", warehouse);
      console.log("Customer:", customer);
      // Calculate the time it takes to go from the warehouse to the customer in steps (not length of the path) for every step - 1 minute
      const distance =
        this.distanceService.calculateNumberOfStepsWithoutDiagonal(
          warehouse.position.i,
          warehouse.position.j,
          customer.position.i,
          customer.position.j
        );

      console.log("Warehouse X:", warehouse.position.i);
      console.log("Warehouse Y:", warehouse.position.j);
      console.log("Customer X:", customer.position.i);
      console.log("Customer Y:", customer.position.j);
      console.log("Distance from warehouse to customer:", distance);

      totalTime += 5; // 5 minutes to load the drone
      totalTime += distance;
    });

    return totalTime;
  }
}

export default DeliveryTimeService;
