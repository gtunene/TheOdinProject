const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function(){
        // do stuff!
    }
};

// dot notation
myObject.property; // 'Value'

// bracket notation
myObject["obnoxious property"]; // [Function]

// example one
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// example two
const playerOne = {
    name: "jenn",
    marker: "O",
};

function printName(player) {
    console.log(player.name);
}

console.log(playerOneName);
console.log(playerTwoName);

function gameOver(winningPlayer){
    console.log("Congratulations!");
    console.log(winningPlayer.name + " is the winner!");
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

const player = new Player('Steve', 'X');
console.log(player.name);

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name)
    };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player.sayName();
player2.sayName();


