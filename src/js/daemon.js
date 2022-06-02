import MathCharacter from './math';

export default class Daemon extends MathCharacter {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
