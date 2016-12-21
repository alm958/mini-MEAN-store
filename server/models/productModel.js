var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema(
    {
        name:{type:String},
        description:{type:String},
        quantity:{type:Number},
        image:{type:String},
    },
    {
        timestamps:{createdAt:'created_at', updatedAt:'updated_at'}
    });

mongoose.model('Product', ProductSchema);
