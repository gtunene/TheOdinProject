// Note that, as constructors are just regular functions, they could be called without 
// using new by mistake, which would cause hard-to-track errors. To prevent that, 
// you can use the new.target meta-property like this:

function Player(name, marker) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name)
    };
}

player1 = Player('Henry', 'X'); // Error("You must use the 'new' operator to call the constructor")
player1 = new Player('Henry', 'X');
player1.sayName();