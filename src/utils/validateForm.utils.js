import { checkEmail } from '@src/utils/checkEmail.utils';
import { checkPhone } from '@src/utils/checkPhone.utils';

const fields = document.querySelectorAll('[data-field]');

const removeClass = (el) => {
  el.closest('.item-form').classList.remove('error');
};

const setChekingResult = (func, cur, acc) => {
  if (func(cur.value)) {
    acc.data[cur.dataset.field] = cur.value;
  } else {
    cur.addEventListener('input', () => removeClass(cur), { once: true });
    cur.closest('.item-form').classList.add('error');
    acc.error[cur.dataset.field] = new Error('Ошибка ввода');
  }
};

const validateForm = () => {
  const initialState = { data: {}, error: {} };

  return [...fields].reduce((acc, cur) => {
    if ((cur.value === '' || cur.value === '0') && cur.dataset.field !== 'comment') {
      if (cur.dataset.field === 'select') {
        cur.addEventListener('change', () => removeClass(cur), { once: true });
      } else {
        cur.addEventListener('input', () => removeClass(cur), { once: true });
      }

      cur.closest('.item-form').classList.add('error');
      acc.error[cur.dataset.field] = new Error('Ошибка ввода');
    } else if (cur.dataset.field === 'email') {
      setChekingResult(checkEmail, cur, acc);
    } else if (cur.dataset.field === 'phone') {
      setChekingResult(checkPhone, cur, acc);
    } else {
      acc.data[cur.dataset.field] = cur.value;
    }

    return acc;
  }, initialState);
};

export { validateForm };
