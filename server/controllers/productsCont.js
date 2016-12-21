var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    create: function(req, res){
        Product.create(req.body)
            .then(function(product){
                console.log(product);
                res.json(product);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    index: function(req, res){
        Product.find({})
            .then(function(products){
                res.json(products);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    delete: function(req, res){
        console.log(req.params);
        Product.remove({_id:req.params.id})
            .then(function(){
                res.json(true);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    },
    update: function(req, res){
        console.log("in update");
        console.log(req.params.id);
        console.log(req.body);
        Product.findByIdAndUpdate(req.params.id, req.body, { new: true})
            .then(function(updatedProd){
                console.log(updatedProd);
                res.json(updatedProd);
            })
            .catch(function(err){
                console.log(err);
                res.json(err);
            });
    }


}
