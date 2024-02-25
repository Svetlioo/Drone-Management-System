import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./models/Grid";
import { json5 as json } from "../src/assets/data";
import {
  addChargingStation,
  addCustomer,
  addDrone,
  addEntitiesToGrid,
  addWarehouse,
} from "../src/services/GridOperationsService";
import DeliveryTimeService from "../src/services/DeliveryTimeService";
import GridCanvas from "./components/GridCanvas";
import Legend from "./components/Legend";
import FileInput from "./components/FileInput";
import { onUpdate, sendOrder } from "./services/socketService";

function App() {
  const [data, setData] = useState(null);
  const [grid, setGrid] = useState(null);
  const [gridData, setGridData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await onUpdate();
      console.log("Data received from server:", fetchedData);
      setData(fetchedData);

      const newGrid = new Grid(
        fetchedData.data["map-top-right-coordinate"].x,
        fetchedData.data["map-top-right-coordinate"].y
      );
      setGrid(newGrid);
      setGridData(newGrid.getGrid());

      addEntitiesToGrid(newGrid, setGridData, fetchedData.data);
    };

    fetchData();
  }, [data]);

  const deliveryTimeService = new DeliveryTimeService();
  console.log(
    deliveryTimeService.calculateTotalDeliveryTime(
      json.warehouses,
      json.customers,
      json.orders
    )
  );

  if (!gridData) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="container">
        <GridCanvas grid={grid} gridData={gridData} cellSize={10} />
      </div>
      <Legend />

      <FileInput />

      <h2>{JSON.stringify(data.simulationState.orders)}</h2>

      <button
        style={{ padding: "5px 10px", borderRadius: "5px", border: "none" }}
        onClick={() => {
          console.log("Adding warehouses and customers");
          addWarehouse(grid, setGridData, 1, 1);
          addCustomer(grid, setGridData, 2, 2);
          addChargingStation(grid, setGridData, 3, 3, "normal");
          addDrone(grid, setGridData, 5, 5, "500W", "1000W", "normal");
          sendOrder({ id: 14, product: "Product Name", quantity: 23 });
        }}
      >
        Add warehouses and customers
      </button>
      {/* 
      <h2>Diagonal movement enabled.</h2>
      <div>Distance: {grid.calculateDistance(200, 200, 216, 187)}</div>
      <div>Path: {JSON.stringify(grid.calculatePath(200, 200, 216, 187))}</div>
      <div>
        Number of steps: {grid.calculateNumberOfSteps(200, 200, 216, 187)}
      </div>

      <h2>No diagonal movement.</h2>
      <div>Distance: {grid.calculateDistance(10, 10, 100, 100)}</div>
      <div>
        Path:{" "}
        {JSON.stringify(grid.calculatePathWithoutDiagonal(10, 10, 100, 100))}
      </div>
      <div>
        Number of steps:{" "}
        {grid.calculateNumberOfStepsWithoutDiagonal(10, 10, 100, 100)}
      </div> */}
      {/* <h2>Diagonal movement enabled.</h2>
      <div>Distance: {grid.calculateDistance(1, 1, 1, 30)}</div>
      <div>Path: {JSON.stringify(grid.calculatePath(1, 1, 1, 30))}</div>
      <div>Number of steps: {grid.calculateNumberOfSteps(1, 1, 1, 30)}</div>

      <h2>No diagonal movement.</h2>
      <div>Distance: {grid.calculateDistance(1, 1, 1, 30)}</div>
      <div>
        Path: {JSON.stringify(grid.calculatePathWithoutDiagonal(1, 1, 1, 30))}
      </div>
      <div>
        Number of steps:{" "}
        {grid.calculateNumberOfStepsWithoutDiagonal(1, 1, 1, 30)}
      </div> */}
    </>
  );
}

export default App;
