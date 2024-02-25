class Order {
  constructor(customerId, customerName, productList, destination) {
    this.customerId = customerId;
    this.customerName = customerName;
    this.productList = productList;
    this.status = orderStatus[0];
    this.destination = destination;
  }

  printOrderDetails() {
    console.log(`Customer ID: ${this.id}`);
    console.log(`Customer Name: ${this.customerName}`);
    console.log(`Items:`);
    for (const item in this.productList) {
      console.log(`${item}: ${this.productList[item]}`);
    }
    console.log(`Status: ${this.status}`);
    console.log(`Destination: ${this.destination}`);
  }

  updateStatus(newStatus) {
    if (orderStatus.includes(newStatus)) {
      this.status = newStatus;
    } else {
      console.log("Invalid status");
    }
  }

  startDelivery() {
    this.status = orderStatus[2];
  }

  completeDelivery() {
    this.status = orderStatus[1];
  }
}

const orderStatus = [
  "to be delivered",
  "already delivered",
  "currently in delivery",
];

export default Order;
