var profileApp = angular.module('profileApp', ['ngRoute']);

profileApp.config(function($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push('httpRequestInterceptor');

  $routeProvider.when('/', {
    templateUrl: 'js/home/homeTmpl.html',
    controller: 'homeCtrl'
  }).when('/projects', {
    templateUrl: 'js/projects/projectsTmpl.html',
    controller: 'projectsCtrl'
  }).when('/aboutme', {
    templateUrl: 'js/aboutMe/aboutMeTmple.html',
    controller: 'aboutMeCtrl'
  }).when('/contact', {
    templateUrl: 'js/contact/contactTmpl.html',
    controller: 'contactCtrl'
  }).otherwise({
    redirectTo: '/'
  });
});
