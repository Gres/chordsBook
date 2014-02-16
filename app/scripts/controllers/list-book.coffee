'use strict'

angular.module('chordsBookApp')
  .controller 'ListBookCtrl', ($scope, $http) ->
    $http.get('/api/awesomeThings').success (awesomeThings) ->
      $scope.awesomeThings = awesomeThings