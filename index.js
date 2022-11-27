// 실행버튼을 누르면 UI 인풋에 입력된 숫자를 받아와서 숫자야구 로직으로 검사합니다.
function onClickPlay() {
  const inputStr = getInputStr();
  if (!isValid(inputStr)) {
    alert("값이 유효하지 않습니다. 숫자 3개를 입력해주세요.");
    return;
  }
  const numbers = inputStr.split("").map((c) => parseInt(c));
  console.log(numbers);
}

// UI 인풋에 입력된 숫자를 받아온다.
function getInputStr() {
  const inputElem = document.querySelector("#answer-input");
  return inputElem.value;
}

// 숫자 야구 게임의 입력 값이 적절한지 판단한다.
function isValid(str) {
  // check length
  if (str.length !== 3) {
    return false;
  }
  // check is number
  for (let i = 0; i < str.length; i++) {
    if (!Number.isInteger(parseInt(str[i]))) {
      return false;
    }
  }
  return true;
}
