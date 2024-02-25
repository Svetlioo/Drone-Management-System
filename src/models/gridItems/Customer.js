class Customer {
  constructor(id, name, i, j) {
    this.id = id;
    this.name = name;
    this.position = { i, j };
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }
}
export default Customer;
