var MyFirstApp;
(function (MyFirstApp) {
    var AppController = (function () {
        function AppController() {
            console.log("Hello world from controller");
        }
        return AppController;
    }());
    MyFirstApp.AppController = AppController;
    angular.module("MyFirstApp")
        .controller("AppController", AppController);
})(MyFirstApp || (MyFirstApp = {}));
