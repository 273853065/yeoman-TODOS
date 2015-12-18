'use strict';

angular.module('yeomanTodosApp')
        .controller('MainCtrl', function ($scope, localStorageService) {
                //        localStorageService.clearAll();
                var todosInStore = localStorageService.get('todos');
                console.log(todosInStore);
                $scope.todos = todosInStore && todosInStore.split('\n') || [];
                console.log($scope.todos);
                $scope.$watch('todos', function () {
                        localStorageService.add('todos', $scope.todos.join('\n'));
                }, true);
                $scope.todoa = '';
                $scope.addTodo = function () {
                        if ($scope.todoa === '') {
                                return;
                        } else {
                                $scope.todos.push($scope.todoa);
                                $scope.todoa = '';
                        }
                };
                $scope.removeTodo = function (index) {
                        $scope.todos.splice(index, 1);
                };
        });