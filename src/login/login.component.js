import loginTemplate from './login.html';
import { module_app } from '../module';

loginController.$inject = ['$scope', 'httpService'];
function loginController($scope, httpService) {
  "ngInject";
  $scope.name = 'tony';
  console.log($scope.name);
  httpService.login();
}

module_app.component('login', {
  controller: loginController,
  template: loginTemplate
})
