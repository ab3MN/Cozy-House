const allowScroll = () => {
  if (typeof document === 'undefined') return;

  const html = document.documentElement;
  const { body } = document;

  html.style.position = '';
  html.style.overflow = '';
  body.style.position = '';
  body.style.overflow = '';
  body.style.paddingRight = '';
};
export default allowScroll;
