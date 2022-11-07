const resizeField = (el) => {
  el.style.height = '5px';
  el.style.height = `${el.scrollHeight - 5}px`;
  console.log(el.scrollHeight)
};

export { resizeField };
