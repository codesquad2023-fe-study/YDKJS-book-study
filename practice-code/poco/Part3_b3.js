// B.3 프로토타입 연습하기
// Math.trunc는 주어진 숫자의 소수 부분을 제거하고 숫자의 정수 부분만을 반환하는 내장 함수

function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}

const reel = {
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

const slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach((reel) => reel.spin());
  },
  display() {
    const lines = [];

    for (let i = 0; i < 3; i++) {
      const slotLine = this.reels.map((reel) => {
        const slot = Object.create(reel);
        slot.position =
          (reel.symbols.length + reel.position + i) % reel.symbols.length;
        return slot.display();
      });

      lines.push(slotLine.join('|'));
    }
    return lines.join('\n');
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
