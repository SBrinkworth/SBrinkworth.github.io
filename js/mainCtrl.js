angular.module('profileApp').controller('mainCtrl', function($scope) {
  $scope.showMenu = false;

  $scope.toggleMenu = function() {
    if (showMenu) {
      $scope.showMenu = false;
    } else {
      $scope.showMenu = true;
    }
  };
});
