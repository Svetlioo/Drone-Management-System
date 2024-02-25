export const groupOrdersByCustomer = (orders) => {
  const orderMap = new Map();
  orders.forEach((order) => {
    const { customerId, productList } = order;
    const existingProductList = orderMap.get(customerId) || {};
    for (const product in productList) {
      existingProductList[product] =
        (existingProductList[product] || 0) + productList[product];
    }
    orderMap.set(customerId, existingProductList);
  });
  return Array.from(orderMap, ([customerId, productList]) => ({
    customerId,
    productList,
  }));
};

// const orders = [
//   {
//     customerId: 1,
//     productList: {
//       tomatoes: 5,
//       cucumber: 5,
//       cheese: 1,
//       milk: 2,
//     },
//   },
//   {
//     customerId: 1,
//     productList: {
//       eggs: 10,
//       cucumber: 2,
//       cheese: 1,
//       ham: 2,
//     },
//   },
//   {
//     customerId: 2,
//     productList: {
//       eggs: 10,
//       tomatoes: 2,
//       bananas: 5,
//       carrots: 15,
//       bread: 2,
//       onion: 6,
//     },
//   },
// ];

// console.log(groupOrdersByCustomer(orders));
