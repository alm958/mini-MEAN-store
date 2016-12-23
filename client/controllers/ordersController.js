app.controller('ordersController', ['$scope','$route','$routeParams', 'orderFactory', 'customerFactory', 'productFactory',function ordersController($scope,$route,$routeParams,orderFactory,customerFactory, productFactory){
    function GetPList(plist){
        $scope.prodlist = plist;
    }
    function GetCList(clist){
        $scope.custlist = clist;
    }
    function GetOList(olist){
        $scope.orderlist = olist;
    }
    $scope.nOrder = {};
    $scope.nOrder.quantity = 1;

    $scope.custlist = customerFactory.custlist;
    $scope.prodlist = productFactory.prodlist;
    $scope.orderlist = orderFactory.orderlist;

    $scope.getOrders = function(){
        orderFactory.getOrders(GetOList);
    }

    $scope.getLists = function(){
        customerFactory.getCusts(GetCList);
        productFactory.getProds(GetPList);
        $scope.getOrders();
        console.log($scope.orderlist);
    }
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;
    $scope.addOrder = function(){
        console.log($scope.nOrder);
        orderFactory.addOrder($scope.nOrder, function(){
            $scope.getOrders();
            $scope.nOrder = {};
            
        });
    }
    $scope.delOrder = function(id){
        console.log(id);
        orderFactory.delOrder(id, function(){
            $scope.getOrders();
        });
    }



}])
