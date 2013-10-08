(function() {
    var app = new kendo.mobile.Application(document.body);
    var car = {
        model:"golf",
        vendor:"voltswagen",
        rentPrice:1000
    };
    sqlite.addCar(car);
    var cars = sqlite.getData();
    for (var i = 0; i < cars.rows.length; i++) {
            console.log(cars.rows.item(i));
        }
}())
