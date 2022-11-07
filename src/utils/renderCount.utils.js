const renderCount = (countState) => {
  Object.keys(countState).forEach((currentId) => {
    document.getElementById(`counter-${currentId}`).textContent = countState[currentId];
  });
};

export { renderCount };
