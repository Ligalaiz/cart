import { getTotalPrice } from '@src/utils/getTotalPrice.utils';
import { handlerMedia } from '@src/utils/handlerMedia.utils';

const renderTotal = (countState, goods) => {
  const totalPrice = getTotalPrice(countState, goods);

  let currentNode = 'total';
  if (handlerMedia().min) currentNode = 'total';
  if (handlerMedia().max) currentNode = 'totalMobile';

  document.getElementById(currentNode).textContent = `${totalPrice} руб.`;
};

export { renderTotal };
