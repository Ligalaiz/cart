import { goods } from '@src/data/goods';
import { validateForm } from '@src/utils/validateForm.utils';
import { renderPurchase } from '@src/utils/renderPurchase.utils';
import { renderMap } from '@src/utils/renderMap.utils';
import { getTotalPrice } from '@src/utils/getTotalPrice.utils';
import { renderCount } from '@src/utils/renderCount.utils';
import { getGoods } from '@src/utils/getGoods.utils';
import { renderTotal } from '@src/utils/renderTotal.utils';
import { renderSelect } from '@src/utils/renderSelect.utils';
import { countState } from '@src/data/state';
import { setResizeHandler } from '@src/utils/setResizeHandler.utils';
import { resizeField } from '@src/utils/resizeField.utils';
import { renderBarCount } from '@src/utils/renderBarCount.utils';

import '@src/assets/styles/global/index.scss';

window.addEventListener('load', async () => {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const body = document.querySelector('body');
  const selectWrap = document.getElementById('selectWrap');
  const form = document.getElementById('form');
  const fields = ['address', 'name', 'phone', 'email', 'comment'];

  const handleClick = ({ target }) => {
    if (target.closest('#menuBtn')) {
      if (menuBtn.classList.contains('opened')) {
        menuBtn.classList.remove('opened');
        mobileMenu.classList.remove('active');
        body.classList.remove('active');
      } else {
        menuBtn.classList.add('opened');
        mobileMenu.classList.add('active');
        body.classList.add('active');
      }
    }

    if (target.dataset.field === 'select') {
      if (selectWrap.classList.contains('active')) {
        selectWrap.classList.remove('active');
      } else {
        selectWrap.classList.add('active');
      }
    }

    if (target.dataset.btndec) {
      const currentId = target.dataset.btndec;

      if (countState[currentId] && countState[currentId] > 0) {
        countState[currentId] -= 1;
        document.getElementById(`counter-${currentId}`).textContent = countState[currentId];
        renderTotal(countState, goods);
        renderBarCount(countState);
      }
    }

    if (target.dataset.btninc) {
      const currentId = target.dataset.btninc;

      countState[currentId] = countState[currentId] ? (countState[currentId] += 1) : (countState[currentId] = 1);
      document.getElementById(`counter-${currentId}`).textContent = countState[currentId];
      renderTotal(countState, goods);
      renderBarCount(countState);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectSelected = document.getElementById('selectSelected');
    const { error, data } = validateForm();

    if (Object.keys(error).length !== 0) {
      console.log(error);

      return;
    }

    const { select, ...formData } = data;

    console.log({
      ...formData,
      wrap: select,
      goods: getGoods(countState, goods),
      totalPrice: getTotalPrice(countState, goods),
    });

    form.reset();
    selectSelected.textContent = '';
    selectSelected.classList.remove('active');
  };

  renderSelect();
  renderPurchase(goods);
  renderMap();
  renderCount(countState);

  setResizeHandler(renderMap);

  fields.forEach((item) => {
    document.getElementById(item).addEventListener('input', (e) => {
      resizeField(e.target);
    });
  });

  document.addEventListener('click', handleClick);
  form.addEventListener('submit', handleSubmit);
});
