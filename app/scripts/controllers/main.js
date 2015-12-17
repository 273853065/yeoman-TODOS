'use strict';

angular.module('yeomanTodosApp')
  .controller('MainCtrl', function ($scope,localStorageService) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.todoa = '';
    $scope.addTodo = function () {
      if ($scope.todoa === '') {
        return;
      } else {
        $scope.todos.push($scope.todoa);
        $scope.todoa = '';
      }
    };
  $scope.removeTodo = function(index){
    $scope.todos.splice(index,1);
  };
  });