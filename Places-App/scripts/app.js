(function() {
    var app = app || {};
    app.servicesBaseUrl = "http://localhost:62354/api/";
    
    document.addEventListener("deviceready", function() {
        var kendoApp = new kendo.mobile.Application(document.body);
    });    
}());