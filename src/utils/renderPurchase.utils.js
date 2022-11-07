const goodsList = document.getElementById('goodsList');

const renderPurchase = (goods) => {
  const goodsTemplate = goods.reduce((acc, inc) => {
    const { id, name, price, desc, img } = inc;
    acc += `
    <li class="purchase">
      <div class="purchase__image">
        <img src="../../assets/img/${img}.jpg" alt="purchase" />
      </div>
      <div class="purchase__desc desc-purchase">
        <div class="desc-purchase__head">
          <p class="desc-purchase__title">${name}</p>
          <p class="desc-purchase__price">${price} руб.</p>
        </div>
        <div class="purchase__text">${desc}</div>
        <div class="purchase__wrap">
          <div class="purchase__counter counter-purchase">
            <button class="counter-purchase__dec" type="button" data-btndec="${id}">–</button>
            <p class="counter-purchase__count" id="counter-${id}"></p>
            <button class="counter-purchase__inc" type="button" data-btninc="${id}">+</button>
          </div>
          <button class="purchase__delBtn purchase__delBtn--${id}" type="button">Удалить</button>
        </div>
      </div>
    </li>`;
    return acc;
  }, '');

  goodsList.innerHTML = goodsTemplate;
};

export { renderPurchase };
