class Drone {
  constructor(i, j, capacity, consumption, type) {
    this.position = { i, j };
    this.consumption = convertConsumptionWattsToInteger(consumption);
    this.capacity = convertCapacityToWattsAndInteger(capacity);
    this.currentOrder = null;
    this.destination = null;
    if (DroneTypes.includes(type)) {
      this.type = type;
    } else {
      throw new Error(`Invalid drone type: ${type}`);
    }
  }

  move(i, j) {
    this.position.i = i;
    this.position.j = j;
  }

  assignOrder(order, pathService) {
    // Assign the order to the drone and set the destination
    this.currentOrder = order;
    this.destination = order.destination;

    // Calculate the path to the destination
    this.path = pathService.calculatePath(this.location, this.destination);
  }
}

// const drones = [
//   {
//     capacity: "500W",
//     consumption: "1W",
//     type: "normal",
//   },
//   {
//     capacity: "1kW",
//     consumption: "3W",
//     type: "fast-charged",
//   },
//   {
//     capacity: "2kW",
//     consumption: "5W",
//     type: "normal",
//   },
// ];

// Using this as a enum for the drone types
const DroneTypes = ["normal", "fast-charged"];

// This function is used to convert the capacity from kW to W if needed

const convertCapacityToWattsAndInteger = (capacity) => {
  if (capacity.endsWith("kW")) {
    // Remove the kW and convert it to W by multiplying it by 1000 (1kW = 1000W) and return it as a integer
    const value = parseFloat(capacity.slice(0, -2));
    if (!isNaN(value)) {
      return value * 1000;
    }
  } else if (capacity.endsWith("W")) {
    // Remove the W and return it as a integer
    const value = parseFloat(capacity.slice(0, -1));
    if (!isNaN(value)) {
      return value;
    }
  }
  return parseInt(capacity);
};

const convertConsumptionWattsToInteger = (consumption) => {
  if (consumption.endsWith("W")) {
    // Remove the W and return it as a integer
    const value = parseFloat(consumption.slice(0, -1));
    if (!isNaN(value)) {
      return value;
    }
  }
  return parseInt(consumption);
};

// test it with a console log if it works
// console.log(convertCapacityToWattsAndInteger("1kW"));
// console.log(convertCapacityToWattsAndInteger("500W"));
// console.log(convertCapacityToWattsAndInteger("2kW"));
// console.log(convertConsumptionWatsToInteger("1W"));
// console.log(convertConsumptionWatsToInteger("3W"));
// console.log(convertConsumptionWatsToInteger("500W"));

export default Drone;
