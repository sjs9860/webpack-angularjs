import loginTemplate from './login.html';

loginController.$inject = ['$scope', 'httpService'];
function loginController($scope, httpService) {
  "ngInject";
  $scope.name = 'tony';
  console.log($scope.name);
  httpService.login();
}

export const loginComponent = {
  controller: loginController,
  template: loginTemplate
}
