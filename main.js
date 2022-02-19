const numbers1 = [];
const numbers2 = [];
const numbers3 = [];
document.getElementById("numberEl2").addEventListener("click", arrayNumb2);
function arrayNumb2() {
  const number2 = +document.getElementById("number2").value;
  numbers2.push(number2);
  document.getElementById("arrayEl2").innerHTML = numbers2;
}

document.getElementById("numberEl").addEventListener("click", arrayNumb);
function arrayNumb() {
  const number = +document.getElementById("number").value;
  numbers1.push(number);

  document.getElementById("arrayEl").innerHTML = numbers1;
  let result1 = 0;
  let result2 = 0;
  let result3 = 0;
  let result4 = 0;
  let result5 = 0;
  let result6 = 0;
  for (let i = 0; i < numbers1.length; i++) {
    const value = numbers1[i];
    const numb = numbers1.sort(numSort);
    if (value > 0) {
      result1++;
      result2 += value;
      result3 = numb[0];
      result5 = numb;
      if (numb >= 1) {
        result4 = numb;
      }
      document.getElementById("result1").innerHTML = result1;
      document.getElementById("result2").innerHTML = result2;
      document.getElementById("result3").innerHTML = result3;
      document.getElementById("result4").innerHTML = result4;
      document.getElementById("result5").innerHTML = result5;
      document.getElementById("result6").innerHTML = result6;
    }
  }

  function numSort(a, b) {
    return a - b;
  }
}
document.getElementById("numberEl3").addEventListener("click", arrCon);
function arrCon(){
    const arrConc = numbers1.concat(numbers2);
    document.getElementById("arrayEl3").innerHTML = arrConc;
}
document.getElementById("numberElbt").addEventListener("click", arrNumber);
function arrNumber(){
    const number3 = +document.getElementById("ipNum").value
}