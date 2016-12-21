var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
    create: function(req, res){
        Customer.create(req.body)
            .then(function(customer){
                console.log(customer);
                res.json(customer);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    index: function(req, res){
        Customer.find({})
            .then(function(customers){
                res.json(customers);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    delete: function(req, res){
        console.log(req.params);
        Customer.remove({_id:req.params.id})
            .then(function(){
                res.json(true);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    }

}
