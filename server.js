import http from "http";
import { Server } from "socket.io";
import { json5 } from "./src/assets/data.js";
import Simulation from "./Simulation.js";

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

let data = json5; // Initial data
const simulation = new Simulation(data);

const dataDTO = {
  data: data,
  simulationState: simulation.getCurrentState(),
};

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.emit("update", dataDTO);

  socket.on("order", (order) => {
    // Add the new order to the current data
    simulation.getCurrentState().orders.push(order);
    console.log("Order received:", order);
    // Broadcast the updated data to all connected clients
    io.emit("update", dataDTO);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(8080, () => {
  console.log("WebSocket server is running on http://localhost:8080");
  simulation.loadConfig(data);
  console.log("Data: ", data);
  console.log("Simulation state: ", simulation.getCurrentState());
});
