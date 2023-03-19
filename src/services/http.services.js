export default class HttpService {
  constructor($http) {
    "ngInject"
    this.$http = $http;
  }

  login(params) {
    return this.$http.get('https://baidu.com');
  }
}
