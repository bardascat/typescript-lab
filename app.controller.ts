module MyFirstApp{
  export class AppController {
    constructor(){
      console.log("Hello world from controller");
    }
  }
  angular.module("MyFirstApp")
  .controller("AppController",AppController);
}
