const roundTotal = (num) => {
  if (num && num.length > 7) {
    return Math.round(num * 10000) / 10000;
  } else {
    return Math.round(num * 100) / 100;
  }
};


export { roundTotal };