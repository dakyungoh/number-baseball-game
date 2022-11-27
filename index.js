// TODO: 나중에 정답을 생성하는 함수 만들자. 지금은 임시로 3, 6, 9로 해놓는다.
const correctAnswer = [3, 6, 9];

// 실행버튼을 누르면 UI 인풋에 입력된 숫자를 받아와서 숫자야구 로직으로 검사합니다.
function onClickPlay() {
  const inputStr = getInputStr();
  if (!isValid(inputStr)) {
    alert("값이 유효하지 않습니다. 숫자 3개를 입력해주세요.");
    return;
  }
  const numbers = inputStr.split("").map((c) => parseInt(c));
  getResult(numbers);
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

// 숫자 배열로부터 스트라이크, 볼, 아웃 결과를 반환한다.
function getResult(numbers) {
  // 스트라이크의 수를 센다.
  const strikes = getStrikes(numbers);
  console.log("strikes:", strikes);
}

function getStrikes(numbers) {
  let strikes = 0;
  for (let i = 0; i < 3; i++) {
    const userAnswerNum = numbers[i];
    const correctAnswerNum = correctAnswer[i];
    if (userAnswerNum === correctAnswerNum) {
      strikes = strikes + 1;
    }
  }
  return strikes;
}
