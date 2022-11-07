import ymaps from 'ymaps';
import { cleanNode } from '@src/utils/cleanNode.utils';
import { goods } from '@src/data/goods';
import { renderTotal } from '@src/utils/renderTotal.utils';
import { handlerMedia } from '@src/utils/handlerMedia.utils';
import { countState } from '@src/data/state';

const INITIAL_ADDRESS = 'Граждaнский пр-т., 9, Санкт-Петербур';

const renderMap = (address = INITIAL_ADDRESS) => {
  ymaps.load(`https://api-maps.yandex.ru/2.1/?apikey=${process.env.YA_API_KEY}&lang=ru_RU`).then((maps) => {
    const mapNode = document.getElementById('map');
    const mobileMapNode = document.getElementById('mobileMap');
    let currentMap = 'map';

    const currentMedia = handlerMedia();
    if (currentMedia.min) currentMap = 'map';
    if (currentMedia.max) currentMap = 'mobileMap';

    cleanNode(mapNode);
    cleanNode(mobileMapNode);

    const render = (val) => {
      const myMap = new maps.Map(currentMap, {
        center: [59.9974916, 30.3805285],
        zoom: 5,
      });

      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('rulerControl');

      maps
        .geocode(val, {
          results: 1,
        })
        .then((res) => {
          const firstGeoObject = res.geoObjects.get(0);
          const bounds = firstGeoObject.properties.get('boundedBy');

          firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
          firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

          myMap.geoObjects.add(firstGeoObject);
          myMap.setBounds(bounds, {
            checkZoomRange: true,
          });
        });
    };

    render(address);

    const suggestView = new maps.SuggestView('address');
    const input = document.getElementById('address');

    const priceNode = document.createElement('div');
    priceNode.setAttribute('class', 'map__total-price');

    const pText = document.createElement('p');
    pText.textContent = 'Итог: ';

    const pPrice = document.createElement('p');
    pPrice.setAttribute('id', 'total');
    priceNode.appendChild(pText);
    priceNode.appendChild(pPrice);

    mapNode.appendChild(priceNode);

    renderTotal(countState, goods);

    suggestView.state.events.add('change', () => {
      const activeIndex = suggestView.state.get('activeIndex');

      if (typeof activeIndex === 'number') {
        const activeItem = suggestView.state.get('items')[activeIndex];

        if (activeItem && activeItem.value !== input.value) input.value = activeItem.value;

        renderMap(activeItem.value);
      }
    });
  });
};

export { renderMap };
