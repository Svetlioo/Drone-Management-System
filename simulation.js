import Order from "./src/models/Order.js";
import Customer from "./src/models/gridItems/Customer.js";
import Drone from "./src/models/gridItems/Drone.js";
import Warehouse from "./src/models/gridItems/Warehouse.js";
import PathService from "./src/services/PathService.js";

class Simulation {
  constructor(config) {
    this.config = config;

    this.orders = [];
    this.drones = [];
    this.warehouses = [];
    this.customers = [];

    // Calculate the ratio of program minutes to real minutes
    this.ratio =
      this.config.output.minutes.real / this.config.output.minutes.program;

    this.pathService = new PathService();
  }

  loadConfig() {
    for (let warehouse of this.config.warehouses) {
      this.warehouses.push(
        new Warehouse(warehouse.x, warehouse.y, warehouse.name)
      );
    }
    for (let customer of this.config.customers) {
      this.customers.push(
        new Customer(
          customer.id,
          customer.name,
          customer.coordinates.x,
          customer.coordinates.y
        )
      );
    }
    for (let order of this.config.orders) {
      const customer = this.customers.find(
        (customer) => customer.id === order.customerId
      );
      this.orders.push(
        new Order(
          order.customerId,
          customer.getName(),
          order.productList,
          customer.getPosition()
        )
      );
    }
    for (let warehouse of this.warehouses) {
      for (let i = 0; i < 5; i++) {
        for (let droneType of this.config.typesOfDrones) {
          const drone = new Drone(
            warehouse.position.i,
            warehouse.position.j,
            droneType.capacity,
            droneType.consumption,
            droneType.type
          );
          this.drones.push(drone);
        }
      }
    }
  }

  async start() {
    if (this.config?.output?.poweredOn) {
      await this.runWithOutput();
    } else {
      await this.runWithoutOutput();
    }
  }

  async runWithOutput() {
    let programTime = 0;
    while (programTime < this.config.minutes.program) {
      await this.runOneMinute();
      programTime++;
      await this.sleep(this.ratio * 60 * 1000);
    }
  }

  async runWithoutOutput() {
    for (let i = 0; i < this.config.minutes.program; i++) {
      await this.runOneMinute();
    }
  }

  async runOneMinute() {
    for (let drone of this.drones) {
      if (!drone.isBusy()) {
        let order = this.ordersQueue.dequeue(); // Assuming you have a queue of orders
        if (order) {
          drone.assignOrder(order, this.pathService);
        }
      }

      drone.move();

      if (drone.hasReachedDestination()) {
        drone.deliverOrder();
      }
    }

    // Add the current state to the output
    this.output.push(this.getCurrentState());
  }

  sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  getCurrentState() {
    return {
      orders: this.orders,
      drones: this.drones,
      warehouses: this.warehouses,
      customers: this.customers,
    };
  }
}

export default Simulation;
