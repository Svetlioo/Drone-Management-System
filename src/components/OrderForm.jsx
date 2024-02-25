/* eslint-disable react/prop-types */
import { useState } from "react";

const OrderForm = ({ sendOrder, Order, customers }) => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [items, setItems] = useState([{ item: "", quantity: "" }]);

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "40rem",
    margin: "auto",
    marginTop: "1rem",
  };

  const inputStyle = {
    padding: "0.5rem",
    borderRadius: "5px",
    border: "2px solid #007BFF",
    fontSize: "1rem",
  };

  const buttonStyle = {
    padding: "0.5rem",
    borderRadius: "5px",
    border: "none",
    background: "linear-gradient(45deg, #007BFF, #6610f2)",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    width: "fit-content",
    alignSelf: "center",
  };

  const itemContainerStyle = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = field === "quantity" ? parseInt(value) : value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { item: "", quantity: "" }]);
  };

  const removeItem = (index) => {
    if (items.length === 1) {
      return;
    }
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedCustomer || items.some((i) => !i.item || !i.quantity)) {
      alert("Please fill all fields");
      return;
    }

    sendOrder(
      new Order(
        selectedCustomer.id,
        selectedCustomer.name,
        items.reduce((acc, i) => ({ ...acc, [i.item]: i.quantity }), {}),
        selectedCustomer.position
      )
    );

    setSelectedCustomer(null);
    setItems([{ item: "", quantity: "" }]);
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h1>Add New Order</h1>
      <select
        style={inputStyle}
        value={selectedCustomer ? selectedCustomer.id : ""}
        onChange={(e) => {
          const customer = customers.find(
            (customer) => customer.id === parseInt(e.target.value)
          );
          setSelectedCustomer(customer);
        }}
        required
      >
        <option value="">Select Customer</option>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.id} - {customer.name}
          </option>
        ))}
      </select>
      {items.map((item, index) => (
        <div key={index} style={itemContainerStyle}>
          <input
            style={inputStyle}
            type="text"
            placeholder="Item"
            value={item.item}
            onChange={(e) => handleItemChange(index, "item", e.target.value)}
            required
          />
          <input
            style={inputStyle}
            type="number"
            placeholder="Quantity"
            value={item.quantity}
            onChange={(e) =>
              handleItemChange(index, "quantity", e.target.value)
            }
            required
          />

          <button
            type="button"
            style={buttonStyle}
            onClick={() => removeItem(index)}
          >
            Remove item
          </button>
        </div>
      ))}
      <button type="button" style={buttonStyle} onClick={addItem}>
        Add another item
      </button>
      <button style={buttonStyle} type="submit">
        Add Order
      </button>
    </form>
  );
};

export default OrderForm;
