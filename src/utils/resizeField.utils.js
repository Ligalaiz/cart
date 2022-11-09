const resizeField = (el) => {
  el.style.height = '5px';
  el.style.height = `${el.scrollHeight - 17}px`;
};

export { resizeField };
