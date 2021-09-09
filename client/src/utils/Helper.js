const roundTotal = (num) => {
  if (num && num.length > 7) {
    return Math.round(num * 10000) / 10000;
  } else {
    let number = Math.round(num * 100) / 100;
    let str = number.toString();
    let arr = str.split(".");
    if (arr.length > 1 && arr[1].length === 1) {
      return str + "0";
    } else if (!arr[1] || arr[1].length === 0) {
      return str + ".00";
    } else {
      return str;
    }
  }
};

export { roundTotal };
