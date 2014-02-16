'use strict';

var mongoose = require('mongoose'),
    Book = mongoose.model('Book');

/**
 * Create book
 */
exports.create = function (req, res, next) {
//    var newUser = new Book(req.body);
//    newUser.provider = 'local';
//    newUser.save(function(err) {
//        if (err) return res.json(400, err);
//        req.logIn(newUser, function(err) {
//            if (err) return next(err);
//
//            return res.json(req.book.userInfo);
//        });
//    });
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
