'use strict';

var mongoose = require('mongoose'),
    Book = mongoose.model('Book');

/**
 * Create book
 */
exports.create = function (req, res, next) {
    var newBook = new Book(req.body);
    newBook.save(function(err, book) {
        if (err) return res.json(400, err);
        res.json(book); // return all todos in JSON format
    });
};

/**
 * Change book
 */
exports.edit = function(req, res, next) {
//    var userId = req.user._id;
//    var oldPass = String(req.body.oldPassword);
//    var newPass = String(req.body.newPassword);
//
//    Book.findById(userId, function (err, user) {
//        if(user.authenticate(oldPass)) {
//            user.password = newPass;
//            user.save(function(err) {
//                if (err) return res.send(400);
//
//                res.send(200);
//            });
//        } else {
//            res.send(403);
//        }
//    });
    return res.json(400);
};

/**
 *  Get all books
 */
exports.getAll = function (req, res, next) {
    Book.find(function(err, books) {
        if (err) return res.json(400, err);
        res.json(books); // return all todos in JSON format
    });
};

exports.get = function (req, res, next) {
    Book.find(function(err, books) {
        if (err) return res.json(400, err);
        res.json(books); // return all todos in JSON format
    });
};
