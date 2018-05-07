var app = angular.module("myApp", []);

app.controller("myController",['$scope','$log' , function($scope, $log){
    
    
   
    $scope.ItemList = ["Potato", "Tomato","Onion"];
    
    $scope.showaddbutton = true;

    $scope.addItem = function (item){
        $scope.errormsg =" ";
         if ($scope.ItemList.indexOf($scope.newItem) == -1) {
            $scope.ItemList.push(item);
           localStorage.setItem("ItemList", JSON.stringify($scope.ItemList));
            $scope.newItem = " ";
         }else{
            $scope.errormsg = "This Product is alredy in your cart";
        }
    }


    $scope.removeItem = function(item){

        $scope.ItemList.splice(item.$index,1);
        
    }

    $scope.editItem = function(item){
        $scope.showaddbutton = false;
        $scope.newItem = item.item;
        $scope.updateItem(item);
    }

    $scope.updateItem = function(item){
      
       $scope.updateviabutton  = function(changeitem){

                $scope.ItemList[item.$index] = changeitem;
                $scope.newItem = " ";
                $scope.showaddbutton = true;
       }
       
    }

    

}]);