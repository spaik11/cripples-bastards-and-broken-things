function changeLast(arr, value) {
  arr.push(value);
}

function addMeToEnd(arr) {
  arr.pop('Colin')
}

function addMeToStart(arr) {
  arr.shift('Colin')
}

function changeAllValuesTo(arr, value) {
  const i = 0;

  while (i < arr.length) {
    arr[i] = value;

    i++;
  }
}

function oddOrEven(arr) {
  let i = 0;

  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return 'even'
    } else {
      return 'odd'
    }

    i++;
  }
}

function changeNextThreeToValue(start, arr, value) {
  let i = start;

  while (i <= start + 3) {
    arr[i] = value;

    i++;
  }
}

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}