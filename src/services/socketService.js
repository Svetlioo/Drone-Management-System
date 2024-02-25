import io from "socket.io-client";

const socket = io("http://localhost:8080");

export function sendOrder(order) {
  socket.emit("order", order);
}

export function onUpdate() {
  return new Promise((resolve) => {
    socket.on("update", (data) => {
      resolve(data);
    });
  });
}
