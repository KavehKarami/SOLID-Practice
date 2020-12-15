// NOTE Without Interface Segregation Principle:
// NOTE for those FIXME problems in the down of this code we use need to Interface Segregation Principle

class Entity {
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }

  move() {
    console.log(`${this.name} moved`);
  }

  attack(targetEntity) {
    console.log(
      `${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`
    );
    targetEntity.takeDamage(this.attackDamage);
  }

  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remining`);
  }
}

class Character extends Entity {}

class Turret extends Entity {
  constructor(name, attackDamage) {
    super(name, attackDamage, -1);
  }

  // FIXME we doesn't use this methods in this class, but when we inheritance they are availbe, so we must have overwrite them and return null
  move() {
    return null;
  }

  takeDamage() {
    return null;
  }
}

class Wall extends Entity {
  constructor(name, health) {
    super(name, 0, health);
  }

  // FIXME we doesn't use this methods in this class, but when we inheritance they are availbe, so we must have overwrite them and return null
  move() {
    return null;
  }

  attack() {
    return null;
  }
}

const turret = new Turret("Monster", 5);
const character = new Character("Human", 30, 100);
const wall = new Wall("wall", 200);

turret.attack(character);
character.move();
character.attack(wall);

// FIXME these methods that i called must happend error because turret cant move and also wall too, but here because we inheritance all of them the error didn't happen
turret.move();
wall.move();
wall.attack();
