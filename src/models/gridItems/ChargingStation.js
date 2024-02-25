class ChargingStation {
  constructor(i, j, type) {
    this.position = { i, j };
    if (ChargingStationType.includes(type)) {
      this.type = type;
    } else {
      throw new Error(`Invalid charging station type: ${type}`);
    }
  }

  static getChargingStationType() {
    return ChargingStationType;
  }
}

// Using this as a enum for the charging station types
const ChargingStationType = ["cheapest", "normal", "fast"];
export default ChargingStation;
