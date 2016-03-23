
angular
  .module('exercisePlanner',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "templates/home.html",
        controller: 'HomeController'
      })
      .when('/addNew', {
        templateUrl: "templates/addNew.html",
        controller: "AddNewController"
      })
      .when('/post', {
        templateUrl: "templates/postNew.html",
        controller: 'PostController'
      })
  })
