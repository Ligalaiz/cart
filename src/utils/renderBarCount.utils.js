const renderBarCount = (countState) => {
  const count = Object.keys(countState).reduce((acc, cur) => countState[cur] + acc, 0);
  document.getElementById('barCount').textContent = count;
};

export { renderBarCount };
