
module MyFirstApp{

  "use strict";

  function routes($stateProvider: ng.ui.IStateProvider,$routeProvider: ng.ui.IUrlRouterProvider){
    console.log('configuring routes');
    $stateProvider.state({
            name: 'app',
            url: '/app',
            controller: 'AppController',
            controllerAs:'vm',
            templateUrl:'app.html'
        })
        .state(
            {
                name: 'app.home',
                url: '/home',
                controller: function(){
                  console.log('home ctrl');
                },
                controllerAs:'vm',
                template:'home tempalte'
            });

        $routeProvider.otherwise('/app');

  }

  routes.$inject = ['$stateProvider','$urlRouterProvider'];
  angular.module('MyFirstApp',['ui.router'])
  .config(routes);


}
