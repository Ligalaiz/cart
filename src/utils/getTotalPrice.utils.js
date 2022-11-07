import { getPrice } from '@src/utils/getPrice.utils';

const getTotalPrice = (countState, goods) => {
  return Object.keys(countState).reduce((acc, cur) => {
    acc += countState[cur] * getPrice(cur, goods);
    return acc;
  }, 0);
};

export { getTotalPrice };
