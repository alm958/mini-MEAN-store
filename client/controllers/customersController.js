app.controller('customersController', ['$scope','$route','$routeParams', 'customerFactory',function customersController($scope,$route,$routeParams,customerFactory){
    function GetCList(clist){
        $scope.custlist = clist;
    }
    $scope.custlist = customerFactory.custlist;


    $scope.addCust = function(){
        console.log($scope.newCust);
        customerFactory.addCust($scope.newCust, function(){
            $scope.newCust = {};
            $scope.getCusts();
        });
        console.log($scope.custlist);
    }

    $scope.getCusts = function(){
        customerFactory.getCusts(GetCList);
    }
    $scope.delCust = function(id){
        console.log(id);
        customerFactory.delCust(id, function(){
            $scope.getCusts();
        });
    }
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;

}])
