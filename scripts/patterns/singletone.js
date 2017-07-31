console.log("singletone.js is loaded");

var Singletone = (function(){
    var instance;
    var count =0;

    function SinglConstr(data){
        if (instance) {
            console.log("--- instance is exist ---");
            count++;

            return instance;
        }

        if (this && this.constructor === SinglConstr) {
            console.log("--- new instance ---");
            count++;
            this.innerdata = data;

            instance = this;
        } else {
            console.log("--- first using of Singletone without new ---");
            return new SinglConstr(data);
        }
    }

    SinglConstr.prototype.getData = function(){
        return this.innerdata + " getting it";
    };
    SinglConstr.prototype.getCount = function(){
        return count;
    };

    return SinglConstr;
}());

var s1 = Singletone("Some inner data");
var s2 = new Singletone(23);
var s3 = new Singletone(11111);

console.log(s1 === s2);
console.log(s1 === s3);

console.log(s1.getData());
console.log(s2.getData());
console.log(s3.getData());

console.log(s1.getCount());