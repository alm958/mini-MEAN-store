app.controller('productsController', ['$scope','$route','$routeParams', 'productFactory',function productsController($scope,$route,$routeParams,productFactory){

    function GetPList(plist){
        $scope.prodlist = plist;
    }
    $scope.prodlist = productFactory.prodlist;


    $scope.addProd = function(){
        console.log($scope.newProd);
        productFactory.addProd($scope.newProd, function(){
            console.log("new prod callback (dosn't do anything yet)");
            $scope.newProd = {};
            $scope.getProds();
        });
        console.log($scope.prodlist);
    }

    $scope.getProds = function(){
        productFactory.getProds(GetPList);
    }
    $scope.delProd = function(id){
        console.log(id);
        productFactory.delProd(id, function(){
            $scope.getProds();
        })
    }
    $scope.findProdById = function(){
        console.log($route.current.params.id);
        var id = $route.current.params.id;
        var prod = productFactory.findProd(id);
        $scope.prod = prod;
    }
    $scope.updateProd = function(){
        console.log($scope.prod);
        productFactory.updateProd($scope.prod)
    }




}])
