const getGoods = (countState, goods) => {
  return goods.map((item) => {
    item.count = countState[item.id];
    item.price *= countState[item.id];
    return item;
  });
};

export { getGoods };
