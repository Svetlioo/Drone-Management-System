/* eslint-disable react/prop-types */
const GridComponent = ({ grid }) => (
  <div>
    {grid.map((row, i) => (
      <div key={i} style={{ display: "flex" }}>
        {row.map((cell, j) => (
          <div
            key={j}
            style={{
              border: "0.1px solid white",
              padding: "5px",
              backgroundColor: cell.drone
                ? "lightgreen"
                : cell.warehouse
                ? "lightblue"
                : cell.customer
                ? "lightyellow"
                : "transparent",
            }}
          ></div>
        ))}
      </div>
    ))}
  </div>
);

export default GridComponent;
