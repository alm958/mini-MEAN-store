app.factory('orderFactory', ['$http', function($http){
    var oFactory = {};
    oFactory.orderlist=[];
    oFactory.addOrder = function(order, callback){
        console.log('in oFactory.addOrder');
        $http.post('/orders', order)
            .then(function(addedOrder){
                oFactory.orderlist.push(addedOrder);
                console.log(oFactory.orderlist);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }
    oFactory.getOrders = function(callback){
        $http.get('/orders')
            .then(function(orders){
                console.log('back from getOrders');
                console.log(orders.data);
                oFactory.orderlist = orders.data;
                callback(oFactory.orderlist);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    oFactory.delOrder = function(id, callback){
        $http.delete(`/orders/${id}`)
            .then(function(response){
                console.log(response);
                callback();
            })
            .catch(function(err){
                console.log(err);
            });
    }


    return oFactory;
}])
