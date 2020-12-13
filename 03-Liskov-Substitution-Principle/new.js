// REVIEW With Liskov Substitution Principles:
class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}

class SwimmingBrid {
  swim() {
    console.log("I can swim");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends SwimmingBrid {}

function makeFlyingBirdFly(bird) {
  bird.fly();
}
function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);
