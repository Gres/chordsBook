'use strict'

angular.module('chordsBookApp')
  .controller 'BookCtrl', ($scope, $http, Book) ->
    Book.query().$promise.then (books)->
      $scope.books = books
      $scope.bookCreate = (form) ->
        newBook = new Book();
        newBook.name = $scope.book.name
        newBook.description = $scope.book.description
        newBook.owner = $scope.currentUser.id
        newBook.$save().then((res)->
          console.info res
        ).catch (req)->
          console.info req


