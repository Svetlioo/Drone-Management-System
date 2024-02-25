import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./models/Grid";
import { addEntitiesToGrid } from "../src/services/GridOperationsService";
import GridCanvas from "./components/GridCanvas";
import Legend from "./components/Legend";
import FileInput from "./components/FileInput";
import { onUpdate, sendOrder } from "./services/socketService";
import SimulationInfo from "./components/SimulationInfo";
import Order from "./models/Order";
import OrderForm from "./components/OrderForm";
import DeliveryTime from "./components/DeliveryTime";
import GridMovementTest from "./components/GridMovementTest";

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
      <DeliveryTime data={data} />
      <OrderForm
        sendOrder={sendOrder}
        Order={Order}
        customers={data.simulationState.customers}
      />
      <SimulationInfo data={data.simulationState} />
      <GridMovementTest grid={grid} />
    </>
  );
}

export default App;
