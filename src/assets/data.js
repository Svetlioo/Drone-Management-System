const json1 = {
  "map-top-right-coordinate": {
    x: 280,
    y: 280,
  },
  products: [
    "tomatoes",
    "cucumber",
    "cheese",
    "milk",
    "ham",
    "eggs",
    "bananas",
    "carrots",
    "bread",
    "onion",
  ],
  warehouses: [
    {
      x: 100,
      y: 100,
      name: "Left warehouse",
    },
    {
      x: 200,
      y: 200,
      name: "Right warehouse",
    },
  ],
  customers: [
    {
      id: 1,
      name: "John Stocks",
      coordinates: {
        x: 10,
        y: 10,
      },
    },
    {
      id: 2,
      name: "Alfred Derrick",
      coordinates: {
        x: 213,
        y: 187,
      },
    },
    {
      id: 3,
      name: "Richard Brune",
      coordinates: {
        x: 108,
        y: 15,
      },
    },
  ],
  orders: [
    {
      customerId: 1,
      productList: {
        tomatoes: 5,
        cucumber: 5,
        cheese: 1,
        milk: 2,
      },
    },
    {
      customerId: 1,
      productList: {
        eggs: 10,
        cucumber: 2,
        cheese: 1,
        ham: 2,
      },
    },
    {
      customerId: 2,
      productList: {
        eggs: 10,
        tomatoes: 2,
        bananas: 5,
        carrots: 15,
        bread: 2,
        onion: 6,
      },
    },
  ],
};

const json2 = {
  "map-top-right-coordinate": {
    x: 280,
    y: 280,
  },
  products: [
    "tomatoes",
    "cucumber",
    "cheese",
    "milk",
    "ham",
    "eggs",
    "bananas",
    "carrots",
    "bread",
    "onion",
  ],
  warehouses: [
    {
      x: 100,
      y: 100,
      name: "Left warehouse",
    },
    {
      x: 200,
      y: 200,
      Name: "Right warehouse",
    },
  ],
  customers: [
    {
      id: 1,
      name: "John Stocks",
      coordinates: {
        x: 10,
        y: 10,
      },
    },
    {
      id: 2,
      name: "Alfred Derrick",
      coordinates: {
        x: 213,
        y: 187,
      },
    },
    {
      id: 3,
      name: "Richard Brune",
      coordinates: {
        x: 108,
        y: 15,
      },
    },
  ],
  orders: [
    {
      customerId: 1,
      productList: {
        tomatoes: 5,
        cucumber: 5,
        cheese: 1,
        milk: 2,
      },
    },
    {
      customerId: 1,
      productList: {
        eggs: 10,
        cucumber: 2,
        cheese: 1,
        ham: 2,
      },
    },
    {
      customerId: 2,
      productList: {
        eggs: 10,
        tomatoes: 2,
        bananas: 5,
        carrots: 15,
        bread: 2,
        onion: 6,
      },
    },
    {
      customerId: 3,
      productList: {
        eggs: 5,
        cucumber: 5,
        cheese: 1,
        tomatoes: 2,
      },
    },
    {
      customerId: 3,
      productList: {
        eggs: 10,
        tomatoes: 2,
        ham: 1,
        bananas: 2,
      },
    },
    {
      customerId: 2,
      productList: {
        bananas: 10,
        carrots: 2,
        onion: 5,
        cucumber: 15,
        cheese: 2,
        bread: 6,
      },
    },
  ],
  typesOfDrones: [
    {
      capacity: "500W",
      consumption: "1W",
    },
    {
      capacity: "1kW",
      consumption: "3W",
    },
    {
      capacity: "2kW",
      consumption: "5W",
    },
  ],
};

const json3 = {
  output: {
    poweredOn: true,
    minutes: {
      program: 10,
      real: 400,
    },
  },
  "map-top-right-coordinate": {
    x: 280,
    y: 280,
  },
  products: [
    "tomatoes",
    "cucumber",
    "cheese",
    "milk",
    "ham",
    "eggs",
    "bananas",
    "carrots",
    "bread",
    "onion",
  ],
  warehouses: [
    {
      x: 100,
      y: 100,
      name: "Left warehouse",
    },
    {
      x: 200,
      y: 200,
      Name: "Right warehouse",
    },
  ],
  customers: [
    {
      id: 1,
      name: "John Stocks",
      coordinates: {
        x: 10,
        y: 10,
      },
    },
    {
      id: 2,
      name: "Alfred Derrick",
      coordinates: {
        x: 213,
        y: 187,
      },
    },
    {
      id: 3,
      name: "Richard Brune",
      coordinates: {
        x: 108,
        y: 15,
      },
    },
  ],
  orders: [
    {
      customerId: 1,
      productList: {
        tomatoes: 5,
        cucumber: 5,
        cheese: 1,
        milk: 2,
      },
    },
    {
      customerId: 1,
      productList: {
        eggs: 10,
        cucumber: 2,
        cheese: 1,
        ham: 2,
      },
    },
    {
      customerId: 2,
      productList: {
        eggs: 10,
        tomatoes: 2,
        bananas: 5,
        carrots: 15,
        bread: 2,
        onion: 6,
      },
    },
    {
      customerId: 3,
      productList: {
        eggs: 5,
        cucumber: 5,
        cheese: 1,
        tomatoes: 2,
      },
    },
    {
      customerId: 3,
      productList: {
        eggs: 10,
        tomatoes: 2,
        ham: 1,
        bananas: 2,
      },
    },
    {
      customerId: 2,
      productList: {
        bananas: 10,
        carrots: 2,
        onion: 5,
        cucumber: 15,
        cheese: 2,
        bread: 6,
      },
    },
  ],
  typesOfDrones: [
    {
      capacity: "500W",
      consumption: "1W",
    },
    {
      capacity: "1kW",
      consumption: "3W",
    },
    {
      capacity: "2kW",
      consumption: "5W",
    },
  ],
};

const json4 = {
  deliveryStatus: {
    output: true,
    frequency: 30,
  },
  products: {
    tomatoes: 40,
    cucumber: 150,
    Cheese: 300,
    milk: 1000,
    ham: 200,
    eggs: 20,
    bananas: 130,
    carrots: 80,
    bread: 650,
    onion: 45,
  },
  output: {
    poweredOn: true,
    minutes: {
      program: 10,
      real: 400,
    },
  },
  "map-top-right-coordinate": {
    x: 280,
    y: 280,
  },
  warehouses: [
    {
      x: 100,
      y: 100,
      name: "Left warehouse",
    },
    {
      x: 200,
      y: 200,
      Name: "Right warehouse",
    },
  ],
  customers: [
    {
      id: 1,
      name: "John Stocks",
      coordinates: {
        x: 10,
        y: 10,
      },
    },
    {
      id: 2,
      name: "Alfred Derrick",
      coordinates: {
        x: 213,
        y: 187,
      },
    },
    {
      id: 3,
      name: "Richard Brune",
      coordinates: {
        x: 108,
        y: 15,
      },
    },
  ],
  orders: [
    {
      customerId: 1,
      productList: {
        tomatoes: 5,
        cucumber: 5,
        cheese: 1,
        milk: 2,
      },
    },
    {
      customerId: 1,
      productList: {
        eggs: 10,
        cucumber: 2,
        cheese: 1,
        ham: 2,
      },
    },
    {
      customerId: 2,
      productList: {
        eggs: 10,
        tomatoes: 2,
        bananas: 5,
        carrots: 15,
        bread: 2,
        onion: 6,
      },
    },
    {
      customerId: 3,
      productList: {
        eggs: 5,
        cucumber: 5,
        cheese: 1,
        tomatoes: 2,
      },
    },
    {
      customerId: 3,
      productList: {
        eggs: 10,
        tomatoes: 2,
        ham: 1,
        bananas: 2,
      },
    },
    {
      customerId: 2,
      productList: {
        bananas: 10,
        carrots: 2,
        onion: 5,
        cucumber: 15,
        cheese: 2,
        bread: 6,
      },
    },
  ],
  typesOfDrones: [
    {
      capacity: "500W",
      consumption: "1W",
    },
    {
      capacity: "1kW",
      consumption: "3W",
    },
    {
      capacity: "2kW",
      consumption: "5W",
    },
  ],
};
const json5 = {
  deliveryStatus: {
    output: true,
    frequency: 30,
  },
  products: {
    tomatoes: 40,
    cucumber: 150,
    Cheese: 300,
    milk: 1000,
    ham: 200,
    eggs: 20,
    bananas: 130,
    carrots: 80,
    bread: 650,
    onion: 45,
  },
  output: {
    poweredOn: true,
    minutes: {
      program: 10,
      real: 400,
    },
  },
  "map-top-right-coordinate": {
    x: 280,
    y: 280,
  },
  warehouses: [
    {
      x: 100,
      y: 100,
      name: "Left warehouse",
    },
    {
      x: 200,
      y: 200,
      Name: "Right warehouse",
    },
  ],
  customers: [
    {
      id: 1,
      name: "John Stocks",
      coordinates: {
        x: 10,
        y: 10,
      },
    },
    {
      id: 2,
      name: "Alfred Derrick",
      coordinates: {
        x: 213,
        y: 187,
      },
    },
    {
      id: 3,
      name: "Richard Brune",
      coordinates: {
        x: 108,
        y: 15,
      },
    },
  ],
  orders: [
    {
      customerId: 1,
      productList: {
        tomatoes: 5,
        cucumber: 5,
        cheese: 1,
        milk: 2,
      },
    },
    {
      customerId: 1,
      productList: {
        eggs: 10,
        cucumber: 2,
        cheese: 1,
        ham: 2,
      },
    },
    {
      customerId: 2,
      productList: {
        eggs: 10,
        tomatoes: 2,
        bananas: 5,
        carrots: 15,
        bread: 2,
        onion: 6,
      },
    },
    {
      customerId: 3,
      productList: {
        eggs: 5,
        cucumber: 5,
        cheese: 1,
        tomatoes: 2,
      },
    },
    {
      customerId: 3,
      productList: {
        eggs: 10,
        tomatoes: 2,
        ham: 1,
        bananas: 2,
      },
    },
    {
      customerId: 2,
      productList: {
        bananas: 10,
        carrots: 2,
        onion: 5,
        cucumber: 15,
        cheese: 2,
        bread: 6,
      },
    },
  ],
  typesOfDrones: [
    {
      capacity: "500W",
      consumption: "1W",
      type: "normal",
    },
    {
      capacity: "1kW",
      consumption: "3W",
      type: "fast-charged",
    },
    {
      capacity: "2kW",
      consumption: "5W",
      type: "normal",
    },
  ],
  chargingStations: [
    {
      x: 110,
      y: 180,
      type: "cheapest",
    },
    {
      x: 10,
      y: 190,
      type: "normal",
    },
    {
      x: 200,
      y: 120,
      type: "fast",
    },
  ],
};

export { json1, json2, json3, json4, json5 };
