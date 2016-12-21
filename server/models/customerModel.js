var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema(
    {
        name:{type:String},
    },
    {
        timestamps:{createdAt:'created_at', updatedAt:'updated_at'}
    });

mongoose.model('Customer', CustomerSchema);
