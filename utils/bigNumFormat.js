const newString = '1009.524'
function parseBigNum(numString) {
  const newString = String(numString);
  const length = newString.length;
  const index = newString.indexOf('.');
  if (index === -1)return newString.slice(0, length - 2) + '.' + newString.slice(length - 2);
  else if (index < 2) return '0' + '.' + '0'.repeat(index) + newString.replace('.', '');
  else return newString.slice(0, index - 2) + '.' + newString.replace('.', '').slice(index - 2);
}
console.log(parseBigNum(newString));
