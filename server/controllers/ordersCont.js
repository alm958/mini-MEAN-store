var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = {
    create: function(req, res){
        Order.create(req.body)
            .then(function(order){
                console.log(order);
                Order.findOne({_id:order._id}).populate('customer product', 'name')
                    .then(function(uOrder){
                        console.log(uOrder);
                        res.json(uOrder);
                })
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    index: function(req, res){
        Order.find({}).populate('customer product', 'name')
            .then(function(orders){
                console.log(orders);
                res.json(orders);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    delete: function(req, res){
        console.log(req.params);
        Order.remove({_id:req.params.id})
            .then(function(){
                res.json(true);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    }

}
