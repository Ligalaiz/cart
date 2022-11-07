const getPrice = (id, goods) => {
  return goods.find((item) => item.id === parseInt(id, 10)).price;
};

export { getPrice };
