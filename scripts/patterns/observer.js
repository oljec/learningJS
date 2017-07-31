console.log("observer.js is loaded");

function Observable(){
    var observers = [];

    this.addObserver = function(observer){
        observers.push(observer);
    };

    this.pushMessage = function(msg){
        for (var i=0, len=observers.length; i<len; i++) {
            observers[i].notify(msg);
        }
    };
}

function Observer(behavior){
    this.notify = function(msg){
        behavior(msg);
    }
}

var somebody = new Observable();
var spectr1 = new Observer(function(msg){console.log(msg);});
var spectr2 = new Observer(function(msg){console.error(msg);});
var spectr3 = new Observer(function(msg){console.log("New message: " + msg);});

somebody.addObserver(spectr1);
somebody.addObserver(spectr2);

somebody.pushMessage("I am ok");

setTimeout(function(){
    somebody.addObserver(spectr3);
},200);
setTimeout(function(){
    somebody.pushMessage("We have trouble");
},1000);