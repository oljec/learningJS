console.log("module.js is loaded");

var basketModule = (function(){
    var goods = [];
    var cost = 0;

    return {
        addProduct: function(product){
            cost += product.price;
            goods.push(product);

            console.log("--- one item was added to basket ---");
        },
        printProducts: function(){
            for (var i=0; i<goods.length; i++) {
                console.log(goods[i].name, goods[i].price);
            }

            console.log("--- all basket's item were printed");
        }
    };

}());


var ball = {
    name: "ball",
    price: 10
};
var salt = {
    name: "salt",
    price: 100
};

basketModule.addProduct(ball);
basketModule.addProduct(salt);
basketModule.printProducts();