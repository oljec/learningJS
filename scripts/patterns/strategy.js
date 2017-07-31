console.log("strategy.js is loaded");

var module = (function(){
    var strategy = {};

    return {
        setStrategy: function(s){
            strategy = s;
        },
        exec: function(){
            strategy.exec();
        }
    };
}());

function Strategy(){}
Strategy.prototype.exec = function(){};

function Str1(){}
Str1.prototype = Object.create(Strategy.prototype);
Str1.prototype.exec = function(){
    console.log("first exec");
};
function Str2(){}
Str2.prototype = Object.create(Strategy.prototype);
Str2.prototype.exec = function(){
    console.log("second exec");
};


module.setStrategy(new Str1());
module.exec();
module.setStrategy(new Str2());
module.exec();