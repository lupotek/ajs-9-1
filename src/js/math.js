import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
    this.besotted = false;
  }

  set stoned(value) {
    this.besotted = Boolean(value);
  }

  get stoned() {
    return this.besotted;
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get attack() {
    let finalAttack = this.baseAttack * ((1 - (this.distance - 1) * 0.1));
    if (this.stoned) {
      finalAttack -= Math.log2(this.distance) * 5;
    }
    if (finalAttack < 0) {
      finalAttack = 0;
    }
    return Math.round(finalAttack);
  }
}
