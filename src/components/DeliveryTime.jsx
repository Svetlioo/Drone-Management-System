/* eslint-disable react/prop-types */
import { useMemo } from "react";
import DeliveryTimeService from "../services/DeliveryTimeService";

const deliveryTimeService = new DeliveryTimeService();

const DeliveryTime = ({ data }) => {
  const totalDeliveryTime = useMemo(() => {
    return deliveryTimeService.calculateTotalDeliveryTime(
      data.simulationState.warehouses,
      data.simulationState.customers,
      data.simulationState.orders
    );
  }, [data]);

  const style = {
    color: "#ffffff",
    fontSize: "1.4rem",
    margin: "1rem",
    padding: "1rem",
    border: "2px solid #ffffff",
    borderRadius: "10px",
    backgroundColor: "#333333",
    width: "fit-content",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const gradientTextStyle = {
    background: "linear-gradient(45deg, #FF7F00, #FF5500)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontSize: "2rem",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={style}>
        <h2>Total Delivery Time</h2>
        <span style={gradientTextStyle}>{totalDeliveryTime} minutes</span>
      </div>
    </div>
  );
};

export default DeliveryTime;
