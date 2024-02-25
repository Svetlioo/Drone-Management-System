export const addWarehouse = (grid, setGridData, i, j) => {
  grid.setWarehouse(i, j);
  setGridData([...grid._grid]);
};

export const addCustomer = (grid, setGridData, i, j) => {
  grid.setCustomer(i, j);
  setGridData([...grid._grid]);
};

export const addChargingStation = (grid, setGridData, i, j, type) => {
  grid.setChargingStation(i, j, type);
  setGridData([...grid._grid]);
};

export const addDrone = (
  grid,
  setGridData,
  i,
  j,
  capacity,
  consumption,
  type
) => {
  grid.setDrone(i, j, capacity, consumption, type);
  setGridData([...grid._grid]);
};

// Initial grid data from json file
export const addEntitiesToGrid = (grid, setGridData, json) => {
  json.warehouses.forEach((warehouse) => {
    grid.setWarehouse(warehouse.x, warehouse.y);
    // console.log("warehouse x", warehouse.x, "warehouse y", warehouse.y);
  });
  json.customers.forEach((customer) => {
    grid.setCustomer(customer.coordinates.x, customer.coordinates.y);
    // console.log(
    //   "customer x",
    //   customer.coordinates.x,
    //   "customer y",
    //   customer.coordinates.y
    // );
  });
  json.chargingStations.forEach((station) => {
    grid.setChargingStation(station.x, station.y, station.type);
    // console.log(
    //   "charging station x",
    //   station.x,
    //   "charging station y",
    //   station.y,
    //   "charging station type",
    //   station.type
    // );
  });
  setGridData([...grid._grid]);
};
