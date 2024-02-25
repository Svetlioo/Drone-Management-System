import { useState } from "react";

/* eslint-disable react/prop-types */
const SimulationInfo = ({ data }) => {
  const [expandedSection, setExpandedSection] = useState({});

  const handleToggle = (section) => {
    setExpandedSection((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "1rem 2rem",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "1.1rem",
    cursor: "pointer",
    width: "15rem",
    alignSelf: "center",
    borderRadius: "5px",
    fontWeight: "bold",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "2rem",
    fontSize: "1.4rem",
    marginTop: "1rem",
  };

  const gridContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontWeight: "bolder", fontSize: "2.8rem" }}>
        Simulation State:
      </h2>
      <h3>Orders:</h3>
      <button style={buttonStyle} onClick={() => handleToggle("orders")}>
        Toggle Orders
      </button>
      {expandedSection.orders &&
        orderStatus.map((status) => {
          const orders = data.orders.filter((order) => order.status === status);
          return (
            <div key={status} style={{ marginBottom: "2rem" }}>
              <h4
                style={{
                  fontSize: "2rem",
                  color: "#4CAF50",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  paddingBottom: "0.5rem",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
              >
                {status}
              </h4>
              <div style={gridContainerStyle}>
                {orders.map((order, index) => (
                  <div
                    key={index}
                    style={{
                      flex: "0 0 calc(33.33% - 2rem)",
                      border: "1px solid #ddd",
                      padding: "10px",
                      borderRadius: "1rem",
                    }}
                  >
                    <p>Customer ID: {order.customerId}</p>
                    <p>Customer Name: {order.customerName}</p>
                    <p>Status: {order.status}</p>
                    <p>
                      Destination: {order.destination.i}, {order.destination.j}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      <h3>Drones:</h3>
      <button style={buttonStyle} onClick={() => handleToggle("drones")}>
        Toggle Drones
      </button>
      {expandedSection.drones && (
        <div style={gridContainerStyle}>
          {data.drones.map((drone, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 calc(33.33% - 2rem)",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "1rem",
              }}
            >
              <p>Type: {drone.type}</p>
              <p>Consumption: {drone.consumption}</p>
              <p>Capacity: {drone.capacity}</p>
              <p>
                Position: {drone.position.i}, {drone.position.j}
              </p>
            </div>
          ))}
        </div>
      )}
      <h3>Warehouses:</h3>
      <button style={buttonStyle} onClick={() => handleToggle("warehouses")}>
        Toggle Warehouses
      </button>
      {expandedSection.warehouses && (
        <div style={gridContainerStyle}>
          {data.warehouses.map((warehouse, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 calc(33.33% - 2rem)",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "1rem",
              }}
            >
              <p>{warehouse.name}</p>
              <p>
                Position: {warehouse.position.i}, {warehouse.position.j}
              </p>
            </div>
          ))}
        </div>
      )}
      <h3>Customers:</h3>
      <button style={buttonStyle} onClick={() => handleToggle("customers")}>
        Toggle Customers
      </button>
      {expandedSection.customers && (
        <div style={gridContainerStyle}>
          {data.customers.map((customer, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 calc(33.33% - 2rem)",
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "1rem",
              }}
            >
              <p>ID: {customer.id}</p>
              <p>Name: {customer.name}</p>
              <p>
                Position: {customer.position.i}, {customer.position.j}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const orderStatus = [
  "to be delivered",
  "already delivered",
  "currently in delivery",
];

export default SimulationInfo;
