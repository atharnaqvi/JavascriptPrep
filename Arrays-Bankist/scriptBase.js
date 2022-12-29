let testData1 = [17, 21, 23];
let testData2 = [12, 5, -5, 0, 4];

const stringFunc = function (arr) {
  let str = '...';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days...`;
  }
  console.log(str);
};

stringFunc(testData2);
