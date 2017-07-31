console.log("decorator.js is loaded");

function A(){
    this.get = function(){
        console.log("Some action from class A");
    };
}

function Decorator(obj){
    this._obj = obj;
}
Decorator.prototype = Object.create(A.prototype);
Decorator.prototype.constructor = Decorator;

function DecoratorA(obj){
    Decorator.apply(this, arguments);

    this.get = function(){
        this._obj.get();
        console.log("Powered by Vinnitsa");
    }
}
DecoratorA.prototype = Object.create(Decorator.prototype);
DecoratorA.prototype.constructor = DecoratorA;

function DecoratorB(obj){
    Decorator.apply(this, arguments);

    this.get = function(){
        this._obj.get();
        console.log("Powered by Oljec");
    }
}
DecoratorB.prototype = Object.create(Decorator.prototype);
DecoratorB.prototype.constructor = DecoratorB;

var exmA = new A();
exmA.get();

var exmDecA = new DecoratorA( new A());
exmDecA.get();

var exmDecB = new DecoratorB( new A());
exmDecB.get();

var exmDecBA = new DecoratorB( new DecoratorA( new A()));
exmDecBA.get();
