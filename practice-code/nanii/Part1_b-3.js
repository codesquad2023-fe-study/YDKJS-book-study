// display를 실행하면 그리드가 나오도록 함수를 완성
function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
  symbols: ['♠', '♥', '♦', '♣', '☺', '★', '☾', '☀'],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

// 슬롯머신은 릴3개 합친거
var slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  // 나머지 연산자를 사용하면 원형으로 만들 수 있음?
  // 위임을 해서 position을 관리하기
  display() {
    // 배열화 해서 join('|')해야겠음
    // 슬롯 머신의 릴은 결과 해당하는 기호 하나 position과 position -1 , position +1을 함께 표시
    // const result = [reel.position - 1, reel.position, reel.position + 1];
    // return result.join('|'); 죄송한데 모르겠다요'ㅅ'리얼
  },
};

slotMachine.spin();
console.log(slotMachine.display());
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

slotMachine.spin();
console.log(slotMachine.display());
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
