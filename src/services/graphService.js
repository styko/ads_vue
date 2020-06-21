export default {
  convertPricesToGraphData(prices) {
    return prices.map((price) => [price.updated.toMillis(), price.value]);
  },
  convertPositionsToGraphData(notices) {
    return notices.map((notice) => ({ lat: notice.latitude, lng: notice.longitude }));
  },
};
