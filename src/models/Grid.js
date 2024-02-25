import DistanceService from "../services/DistanceService";
import PathService from "../services/PathService";
import Warehouse from "./gridItems/Warehouse";
import Customer from "./gridItems/Customer";
import Drone from "./gridItems/Drone";
import ChargingStation from "./gridItems/ChargingStation";

class Grid {
  constructor(rows, cols) {
    this._grid = [];
    this.distanceService = new DistanceService();
    this.pathService = new PathService();
    for (let i = 0; i < rows; i++) {
      this._grid[i] = [];
      for (let j = 0; j < cols; j++) {
        this._grid[i][j] = {
          warehouse: null,
          customer: null,
          drone: null,
          chargingStation: null,
        };
      }
    }
    console.log("Grid created", this._grid);
  }

  getGrid() {
    return this._grid;
  }

  getCell(i, j) {
    return this._grid[i][j];
  }

  setCell(i, j, data) {
    this._grid[i][j] = data;
  }

  setWarehouse(i, j) {
    this._grid[i][j].warehouse = new Warehouse(i, j);
  }

  setCustomer(i, j) {
    this._grid[i][j].customer = new Customer(i, j);
  }

  setDrone(i, j, capacity, consumption, type) {
    this._grid[i][j].drone = new Drone(i, j, capacity, consumption, type);
  }

  setChargingStation(i, j, type) {
    this._grid[i][j].chargingStation = new ChargingStation(i, j, type);
  }

  isWarehouse(i, j) {
    const cell = this.getCell(i, j);
    return cell.warehouse instanceof Warehouse;
  }

  isCustomer(i, j) {
    const cell = this.getCell(i, j);
    return cell.customer instanceof Customer;
  }

  isDrone(i, j) {
    const cell = this.getCell(i, j);
    return cell.drone instanceof Drone;
  }

  isChargingStation(i, j) {
    const cell = this.getCell(i, j);
    return cell.chargingStation instanceof ChargingStation;
  }

  calculateDistance(i1, j1, i2, j2) {
    return this.distanceService.calculateDistance(i1, j1, i2, j2);
  }

  calculatePath(i1, j1, i2, j2) {
    return this.pathService.calculatePath(i1, j1, i2, j2);
  }

  calculateNumberOfSteps(i1, j1, i2, j2) {
    return this.distanceService.calculateNumberOfSteps(i1, j1, i2, j2);
  }

  calculatePathWithoutDiagonal(i1, j1, i2, j2) {
    return this.pathService.calculatePathWithoutDiagonal(i1, j1, i2, j2);
  }

  calculateNumberOfStepsWithoutDiagonal(i1, j1, i2, j2) {
    return this.distanceService.calculateNumberOfStepsWithoutDiagonal(
      i1,
      j1,
      i2,
      j2
    );
  }
}

export default Grid;
