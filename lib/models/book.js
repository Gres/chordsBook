'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Thing Schema
 */
var BookSchema = new Schema({
    name: String,
    info: String,
    order: Number,
    hidden: Boolean,
    owner: Schema.Types.ObjectId
});

mongoose.model('Book', BookSchema);