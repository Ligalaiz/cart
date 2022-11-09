const classManage = ({ node, target, dataAtr }) => {
  if (target.dataset.target === dataAtr) {
    if (node.classList.contains('active')) {
      node.classList.remove('active');
    } else {
      node.classList.add('active');
    }
  }
};

export { classManage };
