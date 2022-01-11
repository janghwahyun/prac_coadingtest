class Wizard {
  //객체에서 instance생성 될 때, 실행하는 함수. 객체를 초기화 해주죠
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log('파이어볼');
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
