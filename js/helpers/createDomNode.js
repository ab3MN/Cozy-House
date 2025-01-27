const createDomNode = (node, element, ...classes) => (
  (node = document.createElement(element)), node.classList.add(...classes), node
);

export default createDomNode;
