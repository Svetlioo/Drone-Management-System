/* eslint-disable react/prop-types */
const GridMovementTest = ({ grid }) => {
  return (
    <div style={{ marginTop: "1rem", fontSize: "1rem" }}>
      <h1 style={{ margin: "2rem 0 0.5rem" }}>
        Displaying the two movement methods
      </h1>
      <h2>Diagonal movement enabled (from 200, 200 to 216, 187)</h2>
      <div>Distance: {grid.calculateDistance(200, 200, 216, 187)}</div>
      <div>Path: {JSON.stringify(grid.calculatePath(200, 200, 216, 187))}</div>
      <div>
        Number of steps: {grid.calculateNumberOfSteps(200, 200, 216, 187)}
      </div>

      <h2>No diagonal movement (from 200, 200 to 216, 187)</h2>
      <div>Distance: {grid.calculateDistance(200, 200, 216, 187)}</div>
      <div>
        Path:{" "}
        {JSON.stringify(grid.calculatePathWithoutDiagonal(200, 200, 216, 187))}
      </div>
      <div>
        Number of steps:{" "}
        {grid.calculateNumberOfStepsWithoutDiagonal(200, 200, 216, 187)}
      </div>

      <h2>Diagonal movement enabled (from 1, 1 to 1, 30)</h2>
      <div>Distance: {grid.calculateDistance(1, 1, 1, 30)}</div>
      <div>Path: {JSON.stringify(grid.calculatePath(1, 1, 1, 30))}</div>
      <div>Number of steps: {grid.calculateNumberOfSteps(1, 1, 1, 30)}</div>

      <h2>No diagonal movement (from 1, 1 to 1, 30)</h2>
      <div>Distance: {grid.calculateDistance(1, 1, 1, 30)}</div>
      <div>
        Path: {JSON.stringify(grid.calculatePathWithoutDiagonal(1, 1, 1, 30))}
      </div>
      <div>
        Number of steps:{" "}
        {grid.calculateNumberOfStepsWithoutDiagonal(1, 1, 1, 30)}
      </div>
    </div>
  );
};

export default GridMovementTest;
