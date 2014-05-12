'use strict'

angular.module('chordsBookApp')
  .factory 'Book', ($resource) ->
    $resource "/api/book/:id",
      id: "@id"
    ,
      update:
        method: "PUT"
        params: {}

