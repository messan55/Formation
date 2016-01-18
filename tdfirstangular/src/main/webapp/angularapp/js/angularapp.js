var todoApp = angular.module("todoApp", []);

todoApp.controller("ToDoCtrl", function($scope, $http){
    $scope.produits = [];
    $http.get('../rest/produit').then(function(response){
        $scope.produits = response.data.produits;
    });
    
    $scope.warningLevel = function() {
        if($scope.incompleteCount() < 3){
            return "label-success";
        }
        else{
            return "label-warning";
        }
    };
    
    $scope.addNewTask = function(nom, prix, categorie, stock) {
     $http.post('../rest/saveproduit/' + nom + '/' + prix + '/' + categorie + '/' + stock,
      {}).success(function(response) {
         $scope.produits.push(response.produit);
      });
    };
    
    $scope.deleteTask = function(id) {
        $http.post('../rest/deleteproduit/' + id,
        {});
    };
    
    $scope.currentView = 'index.html';      
    $scope.navigateTo = function(view) {
        $scope.currentView = view;
    };

});

todoApp.filter("completedTaskd", function(){
    return function(items, showCompleted) {
        var resultItems = [];
        angular.forEach(items, function(item){
            if (item.stock > 0 || showCompleted == true) {
                resultItems.push(item);
            }      
        });
        return resultItems;
    };
});