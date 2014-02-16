'use strict'

angular.module('chordsBookApp')
  .service 'Book', ($resource) ->
    $resource "/api/book"
    update:
      method: "PUT"
      params: {}
    get:
      method: "GET"
      params: {}