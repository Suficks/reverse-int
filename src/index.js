module.exports = function reverse(n) {
  let arr = Array.from(String(n), Number)
  if (isNaN(arr[0])) {
    arr.splice(0, 1)
  }
  return +arr.reverse().join('')
}
