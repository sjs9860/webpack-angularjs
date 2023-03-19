import { module_app } from "./module";

// import "./login/login.component";
import httpService from './services/http.services';

module_app.config([
  '$locationProvider',
  '$httpProvider',
  // '$routeProvider',
  '$urlServiceProvider',
  '$stateProvider',
  '$ocLazyLoadProvider',
  function(
    $locationProvider,
    $httpProvider,
    // $routeProvider,
    $urlServiceProvider,
    $stateProvider,
    $ocLazyLoadProvider
  ) {
  $locationProvider.html5Mode(true);
  // $routeProvider
  //   .when('/', {
  //     controller: 'homeCtrl',
  //     template: '<h1>Home Page</h1>'
  //   })
  //   .when('/login', {
  //     controller: 'loginCtrl',
  //     template: login.loginTemplate
  //   })

  $ocLazyLoadProvider.config({
    debug: true,
    events: true,
    // modules: [
    //   {
    //     name: 'LoginModule',
    //     files: [
    //       './login/login.component.js'
    //     ]
    //   }
    // ]
  })

  var homeState = {
    name: 'home',
    url: '/',
    template: '<h1>Home Page</h1>'
  }

  var loginState = {
    name: 'login.**',
    url: '/login',
    lazyLoad: ($transition$) => {
      const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad')
      return import('./login/login.module').then(mod => $ocLazyLoad.load(mod.default))
      // return $ocLazyLoad.load('./login/login.component.js');
    },
    // component: 'login',
    // resolve: {
    //   loadDependencies: ['$ocLazyLoad', function($ocLazyLoad) {
    //     return $ocLazyLoad.load('LoginModule');
    //   }]
    // }
  }

  $stateProvider.state('home', homeState).state(loginState);
  $urlServiceProvider.rules.initial('/');
  $urlServiceProvider.rules.otherwise('/');
}])

module_app.service('httpService', httpService);

// app.controller('loginCtrl', login.loginController)
module_app.controller('homeCtrl', function($scope) {
  $scope.title = 'home';
})
