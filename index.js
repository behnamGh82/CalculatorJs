"use strict";
//#region set variables
const historyArray = [];
let firstNumber;
let secondNumber;
let result;
// تابع برای مقدار دهی متغیر ها به هر اینپوت
function setNum() {
  firstNumber = +document.getElementById("firstNum").value;
  secondNumber = +document.getElementById("secondNum").value;
  result = +document.getElementById("result").value;
}
//#endregion set variables
//#region keydown event for operation
document.addEventListener("keydown", (btn) => {
  switch (event.key) {
    case "+":
      blurInputs();
      result = firstNumber + secondNumber;
      document.getElementById("oper").value = "+";
      break;
    case "-":
      blurInputs();
      result = firstNumber - secondNumber;
      document.getElementById("oper").value = "-";
      break;
    case "*":
      blurInputs();
      result = firstNumber * secondNumber;
      document.getElementById("oper").value = "x";
      break;
    case "/":
      blurInputs();
      result = firstNumber / secondNumber;
      document.getElementById("oper").value = "/";
      break;
    case "^":
      blurInputs();
      result = firstNumber ** secondNumber;
      document.getElementById("oper").value = "^";
      break;
    case "Enter":
      setHistory();
      reset();
      document.getElementById("result").value = result;
      break;
    //اگر کاربر روی ارو کی های بالا و پایین کلیک کرد بتواند بین اینپوت ها جابجا شود
    case "ArrowDown":
      if (
        document.getElementById("firstNum") !== document.activeElement &&
        document.getElementById("secondNum") !== document.activeElement
      ) {
        document.getElementById("firstNum").focus();
      } else if (
        document.getElementById("firstNum") === document.activeElement &&
        document.getElementById("secondNum") !== document.activeElement
      ) {
        document.getElementById("secondNum").focus();
      } else if (
        document.getElementById("firstNum") !== document.activeElement &&
        document.getElementById("secondNum") === document.activeElement
      ) {
        document.getElementById("secondNum").blur();
      }
      break;
    case "ArrowUp":
      if (
        document.getElementById("firstNum") !== document.activeElement &&
        document.getElementById("secondNum") !== document.activeElement
      ) {
        document.getElementById("secondNum").focus();
      } else if (
        document.getElementById("firstNum") !== document.activeElement &&
        document.getElementById("secondNum") === document.activeElement
      ) {
        document.getElementById("firstNum").focus();
      } else if (
        document.getElementById("firstNum") === document.activeElement &&
        document.getElementById("secondNum") !== document.activeElement
      ) {
        document.getElementById("firstNum").blur();
      }
      break;
  }
});
//#endregion keydown event for operation
//#region more function
//تابعی برای پاک کردن فیلد های ورودی
function reset() {
  document.getElementById("firstNum").value = " ";
  document.getElementById("secondNum").value = " ";
}
//تابعی برای خارج کردن فیلد ها از حالت فکوس
function blurInputs() {
  document.getElementById("firstNum").blur();
  document.getElementById("secondNum").blur();
}
// تابعی برای مقدار دهی آرایه هیزتوری
function setHistory() {
  historyArray.push(
    firstNumber,
    document.getElementById("oper").value,
    secondNumber,
    "=",
    result,
    "=>"
  );
  document.getElementById("history").value = historyArray;
}
//#endregion more function
