const handlerMedia = (val = '767.99') => ({
  min: window.matchMedia(`(min-width: ${val}px)`).matches,
  max: window.matchMedia(`(max-width: ${val}px)`).matches,
});

export { handlerMedia };
