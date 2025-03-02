// 랜덤 숫자 생성
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// DOM 요소 가져오기
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const hint = document.getElementById('hint');
const attemptsDisplay = document.getElementById('attempts');
const restartButton = document.getElementById('restartButton');

// 확인 버튼 클릭 이벤트
guessButton.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) {
    hint.textContent = "숫자를 입력해주세요!";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  if (userGuess === randomNumber) {
    hint.textContent = `정답입니다! ${attempts}번 만에 맞췄어요! 🎉`;
    guessInput.disabled = true;
    guessButton.disabled = true;
  } else if (userGuess < randomNumber) {
    hint.textContent = "더 큰 숫자를 입력하세요!";
  } else {
    hint.textContent = "더 작은 숫자를 입력하세요!";
  }

  guessInput.value = "";
  guessInput.focus();
});

// 다시 시작 버튼 클릭 이벤트
restartButton.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsDisplay.textContent = attempts;
  hint.textContent = "";
  guessInput.disabled = false;
  guessButton.disabled = false;
  guessInput.focus();
});