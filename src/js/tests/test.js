import Daemon from '../daemon';
import Magician from '../magician';
import Character from '../character';

test('Создание персонажа Daemon', () => {
  const received = new Daemon('Lucifer');
  const expected = {
    name: 'Lucifer',
    type: 'Daemon',
    health: 100,
    level: 1,
    baseAttack: 10,
    defence: 40,
    distance: 1,
    besotted: false,
  };

  expect(received).toEqual(expected);
});

test('Создание персонажа Magician', () => {
  const received = new Magician('Merlin');
  const expected = {
    name: 'Merlin',
    type: 'Magician',
    health: 100,
    level: 1,
    baseAttack: 10,
    defence: 40,
    distance: 1,
    besotted: false,
  };
  expect(received).toEqual(expected);
});

test('проверка выдаваемой ошибки на некорректное имя персонажа', () => {
  expect(() => {
    new Character('а', 'Magician');
  }).toThrow();
});

test('проверка выдаваемой ошибки на некорректный тип персонажа', () => {
  expect(() => {
    new Character('Frank', 'Mag');
  }).toThrow();
});

test('проверка одурманивания персонажа', () => {
  expect(new Daemon('Luc').stoned = true).toBe(true);
});

test('проверка одурманивания персонажа', () => {
  const daemon = new Daemon('Luc');
  daemon.stoned = true;
  expect(daemon.stoned).toBe(true);
});

test('проверка изменения атаки', () => {
  const daemon = new Daemon('Luc');
  daemon.attack = 100;
  daemon.stoned = true;
  daemon.distance = 3;
  expect(daemon.attack).toBe(72);
});

test('атака не может быть отрицательной', () => {
  const testChar = new Daemon('dae');
  testChar.attack = 5;
  testChar.stoned = true;
  testChar.distance = 5;
  expect(testChar.attack).toBe(0);
});

test('проверка изменения атаки без одурманивания', () => {
  const daemon = new Daemon('Luc');
  daemon.attack = 100;
  daemon.stoned = false;
  daemon.distance = 3;
  expect(daemon.attack).toBe(80);
});
