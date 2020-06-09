export default {
  convertPricesToGraphData(prices) {
    return prices.map((price) => [price.updated.toMillis(), price.value]);
  },
};
