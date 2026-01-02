function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        console.log(this.name);
    }
}

player1 = new Player('Jhon', 'X');
player2 = new Player('Also Jhon', 'X');

Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true

console.log(Object.getPrototypeOf(player1));

Player.prototype.sayHello = function() {
    console.log("Hlelo, I'm a player!");
};

player1.sayHello();

// Player.prototype.__proto__
console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype); // true
// Output may slightly differ based on the browser
console.log (player1.valueOf()); // Player {name: 'Jhon', marker: 'X', sayName: ƒ}

console.log(player1.hasOwnProperty('valueOF'));
console.log(Player.prototype.hasOwnProperty('valueOf'));
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));