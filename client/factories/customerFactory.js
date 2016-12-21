app.factory('customerFactory', ['$http', function($http){
    var cFactory = {};
    cFactory.custlist = [];
    cFactory.addCust = function(cust, callback){
        $http.post('/customers', cust)
            .then(function(addedcust){
                cFactory.custlist.push(addedcust);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    cFactory.getCusts = function(callback){
        $http.get('/customers')
            .then(function(custs){
                console.log('back from getCusts');
                cFactory.custlist = custs.data;
                console.log(cFactory.custlist);
                console.log(custs.data);
                callback(cFactory.custlist);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    cFactory.delCust = function(id, callback){
        $http.delete(`/customers/${id}`)
            .then(function(response){
                console.log(response);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }

    return cFactory;
}])
