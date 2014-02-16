'use strict'

angular.module('chordsBookApp')
  .controller 'BookCtrl', ($scope, $http) ->
    $http.get('/api/book').success (books) ->
      console.info books
      $scope.books = books