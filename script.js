// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let username = document.querySelector("#username");
console.log("username 입력이 가능함");

let success = document.querySelector(".success-message");
let fail = document.querySelector(".failure-message");

//이벤트 핸들러 만들기
username.onkeyup = function () {
  console.log("입력");
  if (isMoreThan4Length(username.value)) {
    // 사용할 수 있는 아이디입니다 출력
    success.classList.remove("hide");
    fail.classList.add("hide");
  } else {
    // 길이 4글자 이상 이어야 합니다 출력
    fail.classList.remove("hide");
    success.classList.add("hide");
  }
};

//아이디를 입력했을 때,
// 아이디 값이 4글자이면 => 사용할 수 있는 id입니다. 출력
// 그 미만이면 => 아이디는 4글자 이상이어야 합니다. 출력
function isMoreThan4Length(value) {
  return value.length >= 4;
}

//비밀번호 요소 두 개를 가져오기
//isMatch 함수로 일치여부를 확인해서 true, false로 리턴하기
//비밀번호를 입력하고 비밀번호 확인에 입력을 했을 때, 일치하지 않으면  '비밀번호가 일치하지 않습니다' 출력

let password = document.querySelector("#password");
let confirmation = document.querySelector("#password-retype");

let miss = document.querySelector(".mismatch-message");
let match = document.querySelector(".match-message");

function isMatch(password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2;
}

confirmation.onkeyup = function () {
  if (isMatch(password.value, confirmation.value)) {
    match.classList.remove("hide");
    miss.classList.add("hide");
  } else {
    miss.classList.remove("hide");
    match.classList.add("hide");
  }
};

// validator.js 에서 가져옴!!

// [유효성 검증 함수]: 영어 또는 숫자만 가능
function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

// [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 각각 하나 이상 포함
function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    str
  );
}

// console.log("아이디되나?", onlyNumberAndEnglish(username.value)); //추가한 부분
// console.log("암호되나", strongPassword(password.value)); //추가한 부분

//이벤트 핸들러 아이디 유효성 검사 만들기 (onclick, onmouseout, onfoucusout)
username.onclick = function () {
  if (onlyNumberAndEnglish(username.value)) {
    console.log("아이디 유효성 검사 통과!");
  } else {
    console.log("아이디 유효성 검사 다시!");
  }
};

//이벤트 핸들러 비밀번호 유효성 검사 만들기
let valid = document.querySelector(".valid-message");
let invalid = document.querySelector(".invalid-message");

password.addEventListener("focusout", function () {
  if (strongPassword(password.value)) {
    console.log("비밀번호 유효성 검사 통과!");
    valid.classList.remove("hide");
    invalid.classList.add("hide");
  } else {
    console.log("비밀번호 유효성 검사 다시!");
    valid.classList.add("hide");
    invalid.classList.remove("hide");
  }
});
