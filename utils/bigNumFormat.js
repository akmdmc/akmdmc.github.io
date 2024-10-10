const newString = '23.1009524'
function parseBigNum(numString, moveStep) {
  const newString = String(numString);
  const length = newString.length;
  const index = newString.indexOf('.');
  if (index === -1) return newString.slice(0, length + moveStep) + '.' + newString.slice(length + moveStep);
  else if (index < -moveStep) return '0' + '.' + '0'.repeat(index) + newString.replace('.', '');
  else return (newString.slice(0, index + moveStep) || '0') + '.' + newString.replace('.', '').slice(index + moveStep);
}
console.log(parseBigNum(newString, -2));
