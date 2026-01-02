function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

function Enemy(name) {
  this.name = name;
  this.marker = '^';
}

Enemy.prototype.enemySayName = function() {
  console.log('HAHAHAHAHAHA');
};

Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`)
};

console.log(Object.getPrototypeOf(Player.prototype));

// Now make `Player` objects inherit from `Person`
console.log(Object.setPrototypeOf(Player.prototype, Person.prototype));
console.log(Object.getPrototypeOf(Player.prototype));

const player1 = new Player('Steve', 'X');
const player2 = new Player('Also steve', 'O');

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();

const enemy1 = new Enemy('Goblin');
enemy1.enemySayName();