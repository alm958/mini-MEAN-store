var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meanStoreDB');

mongoose.Promise = global.Promise;

var path = require('path');
var models_path = path.join(__dirname, './../models');

require(models_path + '/customerModel');
require(models_path + '/productModel');
require(models_path + '/orderModel');
