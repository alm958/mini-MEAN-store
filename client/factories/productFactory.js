app.factory('productFactory', ['$http', function($http){
    var pFactory = {};
    pFactory.prodlist = [];
    pFactory.addProd = function(prod, callback){
        $http.post('/products', prod)
            .then(function(addedProd){
                pFactory.prodlist.push(addedProd);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    pFactory.getProds = function(callback){
        $http.get('/products')
            .then(function(prods){
                pFactory.prodlist = prods.data;
                callback(pFactory.prodlist);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    pFactory.findProd = function(id){
        return pFactory.prodlist.find(prod => prod._id == id)
    };
    pFactory.updateProd = function(prod){
        $http.put(`/products/${prod._id}`, prod)
            .then(function(response){
                var prod = response.data;
                var updateIndex = pFactory.prodlist.findIndex(x => x._id === prod._id);
                if (updateIndex > -1) {
                 pFactory.prodlist[updateIndex] = prod;
                }
            })
            .catch(function(err){
                console.log(err);
            });
    }
    pFactory.delProd = function(id, callback){
        $http.delete(`/products/${id}`)
            .then(function(response){
                console.log(response);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }


    return pFactory;
}])
