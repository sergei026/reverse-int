module.exports = function reverse (n) {
  let str = String(n);
  let result = '';
  let i = str.length - 1;
  while (i >=  0) {
    result = `${result}${str[i]}`;
    i = i - 1;
  }
  return result * 1;
}
