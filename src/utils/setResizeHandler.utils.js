import { handlerMedia } from '@src/utils/handlerMedia.utils';

const setResizeHandler = (func) => {
  window.addEventListener('resize', () => {
    if (handlerMedia().min || handlerMedia().max) {
      if (func instanceof Function) func();
    }
  });
};

export { setResizeHandler };
