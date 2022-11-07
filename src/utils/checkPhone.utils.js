const checkPhone = (phone) => {
  const reg = /^[0-9\s]*$/;
  return reg.test(String(phone));
};

export { checkPhone };
