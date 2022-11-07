const cleanNode = (node) => {
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
};

export { cleanNode };
