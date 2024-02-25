const Legend = () => {
  const legends = [
    { color: "#FF69B4", label: "Drone" },
    { color: "white", label: "Warehouse" },
    { color: "red", label: "Customer" },
    { color: "#00FF00", label: "Charging Station" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
      }}
    >
      {legends.map((legend, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <div
            style={{
              width: 15,
              height: 15,
              backgroundColor: legend.color,
              marginRight: 10,
            }}
          />
          <div style={{ fontSize: "1rem", fontWeight: 600 }}>
            {legend.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Legend;
