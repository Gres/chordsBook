'use strict'

describe 'Service: Book', () ->

  # load the service's module
  beforeEach module 'chordsBookApp'

  # instantiate service
  Book = {}
  beforeEach inject (_Book_) ->
    Book = _Book_

  it 'should do something', () ->
    expect(!!Book).toBe true
