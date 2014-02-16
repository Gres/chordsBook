'use strict'

angular.module('chordsBookApp')
  .factory 'Session', ($resource) ->
    $resource '/api/session/'
