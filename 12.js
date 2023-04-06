//0~9 사이의 서로 다른 숫자 3개를 뽑는다.
//유저에게 입력값을 받는다. 숫자3개를 적음
//유저가 순서 및 순서가 동일하면 S
//숫자의 값은 일치, 위치가 틀리면 B
//기회는 무제한, 몇번의 시도 후에 맞췄는지 기록됨

const BASE_BALL_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const baseNumbers = BASE_BALL_NUMBERS.sort(() => Math.random() - 0.5)
  .slice(0, 3);
// Math.random() - 0.5한 이유는 : .sort()는 1 0 -1로 정렬하기 때문에 Math.random()은 1 ~ 0로 나타나서 음수를 추가하기위해 사용했다~~~ 이말이야
let i = 0
while (true) {
  const randomNumber = [...prompt('입력값', '')].map((v) => +v)
  let number = [0, 0]

  for (let i = 0; i < 3; i++) {
    if (baseNumbers[i] === randomNumber[i]) {
      number[1]++
    } else if (baseNumbers.includes(randomNumber[i])) {
      number[0]++
    }
  }
  i++

  console.log(randomNumber)
  console.log(baseNumbers)
  console.log(`${i}번째 시도:${number[0]}B${number[1]}S`)

  if (number[1] === 3) {
    console.log(`${i}번째만에 맞히셨습니다.
게임을 종료합니다.`)
    break
  }
}
