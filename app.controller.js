angular
  .module('exercisePlanner')
  .controller('HomeController', function($scope){
  })
  .controller('CreateController', function($scope, NewExer){
    $scope.exers = "new exercises";

    $scope.addNew = function(exer){
      NewExer.postExer(exer)
        .then(function(data){
          console.log(data);

        });
    }
  })
  .controller('PostController', function($scope, NewExer){
});

    $scope.deleteExer = function(exer){

};
