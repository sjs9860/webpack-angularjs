import angular from "angular";
// import ngRoute from "angular-route";
import uiRouter from '@uirouter/angularjs';
import oclazyload from 'oclazyload';

export const module_app = angular.module('myApp', ['ui.router', 'oc.lazyLoad'])
