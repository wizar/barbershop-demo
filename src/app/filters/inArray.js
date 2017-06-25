export default function () {
  return function (input, arr, fieldName) {
    return input.filter(item => arr.indexOf(item[fieldName]) > -1);
  };
}
