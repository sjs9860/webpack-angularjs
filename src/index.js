import angular from "angular";
import ngRoute from "angular-route";
import uiRouter from '@uirouter/angularjs';

// import login from './login/login.controler';
import { loginComponent } from "./login/login.component";'./login/login.component';
import httpService from './services/http.services';

const app = angular.module('myApp', ['ngRoute', 'ui.router']);

app.config([
  '$locationProvider',
  '$httpProvider',
  '$routeProvider',
  '$controllerProvider',
  '$stateProvider',
  function(
    $locationProvider,
    $httpProvider,
    $routeProvider,
    $controllerProvider,
    $stateProvider
  ) {
  // $locationProvider.html5Mode(true);
  // $routeProvider
  //   .when('/', {
  //     controller: 'homeCtrl',
  //     template: '<h1>Home Page</h1>'
  //   })
  //   .when('/login', {
  //     controller: 'loginCtrl',
  //     template: login.loginTemplate
  //   })
  var homeState = {
    name: 'home',
    url: '/',
    template: '<h1>Home Page</h1>'
  }

  var loginState = {
    name: 'login',
    url: '/login',
    component: 'login'
  }

  $stateProvider.state('home', homeState).state('login', loginState);
}])

app.service('httpService', httpService);

// app.controller('loginCtrl', login.loginController)
app.controller('homeCtrl', function($scope) {
  $scope.title = 'home';
})
app.component('login', loginComponent)
