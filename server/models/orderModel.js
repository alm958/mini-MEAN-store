var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema(
    {
        customer:{type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
        product:{type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
        quantity:{type:Number},
    },
    {
        timestamps:{createdAt:'created_at', updatedAt:'updated_at'}
    });

mongoose.model('Order', OrderSchema);
