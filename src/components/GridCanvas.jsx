/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";

const GridCanvas = ({ grid, gridData, cellSize }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    for (let i = 0; i < gridData.length; i++) {
      for (let j = 0; j < gridData[i].length; j++) {
        context.fillStyle = grid.isDrone(i, j)
          ? "#FF69B4"
          : grid.isWarehouse(i, j)
          ? "white"
          : grid.isCustomer(i, j)
          ? "red"
          : grid.isChargingStation(i, j)
          ? "#00FF00"
          : "transparent";
        context.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
      }
    }
  }, [gridData, grid, cellSize]);

  return (
    <canvas
      ref={canvasRef}
      width={gridData[0].length * cellSize}
      height={gridData.length * cellSize}
    />
  );
};

export default GridCanvas;

// Clear the canvas
// context.clearRect(0, 0, canvas.width, canvas.height);
// Draw the grid lines
// context.beginPath();
// for (let x = 0; x <= canvas.width; x += cellSize) {
//   context.moveTo(x, 0);
//   context.lineTo(x, canvas.height);
// }
// for (let y = 0; y <= canvas.height; y += cellSize) {
//   context.moveTo(0, y);
//   context.lineTo(canvas.width, y);
// }
// // ligher gray color for the grid lines
// context.strokeStyle = "#ddd";
// context.stroke();

// Draw the grid
// can you make some distinct coolor for the drone ?
// right now it is white and it is hard to see
// if i need it later
