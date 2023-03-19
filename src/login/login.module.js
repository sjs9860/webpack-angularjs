import loginTemplate from './login.html';

loginController.$inject = ['$scope', 'httpService'];
function loginController($scope, httpService) {
  "ngInject";
  $scope.name = 'tony';
  console.log($scope.name);
  httpService.login();
}

const loginModule = angular.module('loginModule', ['ui.router'])

loginModule.config(['$stateProvider', function($stateProvider) {
  let loginState = {
    name: 'login',
    url: '/login',
    component: 'login'
  }

  $stateProvider.state(loginState)
}])

// loginModule.config(['$stateRegistry', function($stateRegistry) {
//   let loginState = {
//     name: 'login',
//     url: '/login',
//     component: 'login'
//   }

//   $stateRegistry.state(loginState)
// }])

loginModule.component('login', {
  controller: loginController,
  template: loginTemplate
})

export default loginModule
