const renderSelect = () => {
  const selectWrap = document.getElementById('selectWrap');
  const select = document.getElementById('select');

  const selectedField = document.createElement('div');
  selectedField.setAttribute('class', 'select-selected');
  selectedField.setAttribute('id', 'selectSelected');
  selectedField.innerHTML = select.options[select.selectedIndex].innerHTML;

  const selectList = document.createElement('div');
  selectList.setAttribute('class', 'select-items select-hide');
  selectList.setAttribute('id', 'selectItems');

  const optionLen = select.length;

  const triggerChange = (el) => {
    const changeEvent = new Event('change');
    el.dispatchEvent(changeEvent);
  };

  const OPTION_VALUE = {
    'без упаковки': 'without',
    стандартная: 'standart',
    подарочная: 'gift',
  };

  const closeAllSelect = (el) => {
    const arrNo = [];
    const x = document.getElementsByClassName('select-items');
    const y = document.getElementsByClassName('select-selected');
    const xl = x.length;
    const yl = y.length;

    for (let i = 0; i < yl; i += 1) {
      if (el === y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove('select-arrow-active');
      }
    }

    for (let i = 0; i < xl; i += 1) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add('select-hide');
      }
    }
  };

  for (let i = 1; i < optionLen; i += 1) {
    const el = document.createElement('div');
    el.innerHTML = select.options[i].innerHTML;

    el.addEventListener('click', function () {
      for (let j = 0; j < optionLen; j += 1) {
        if (select.options[i].innerHTML === this.innerHTML) {
          select.selectedIndex = i;
          selectedField.innerHTML = this.innerHTML;
          const selectedSame = this.parentNode.getElementsByClassName('same-as-selected');
          const sameLen = selectedSame.length;

          for (let k = 0; k < sameLen; k += 1) {
            selectedSame[k].removeAttribute('class');
          }

          document.getElementById('selectSelected').classList.add('active');
          this.setAttribute('class', 'same-as-selected');
          select.value = OPTION_VALUE[this.innerHTML];
          triggerChange(select);
          break;
        }
      }

      selectedField.click();
    });

    selectList.appendChild(el);
  }

  selectedField.addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('selectSelected').classList.toggle('select-arrow-active');
    document.getElementById('selectItems').classList.toggle('select-hide');
  });
  selectWrap.append(selectList);
  selectWrap.prepend(selectedField);

  document.addEventListener('click', closeAllSelect);
};

export { renderSelect };
