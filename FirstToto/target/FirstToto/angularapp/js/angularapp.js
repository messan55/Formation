// cette ligne crée un nouveau module angular
// le tanleau en 2eme argument comprend 
// les dependances a injecter dans ce module
// avec [] -> créer un module 
// sans [] -> récupérer un module
var todoApp = angular.module("todoApp", []);

// creation d'un controlleur "todoctrl" dans notre module
// le scope est automatiquement injecté par angular
todoApp.controller("ToDoCtrl", function($scope, $http){
    $scope.message = "Bonjour depuis toDOCtrl";
    $scope.taches = [];
    $http.get('../rest/tache').then(function(response){
        $scope.taches = response.data.taches;
    });
    /*$scope.taches =[{   "category":"maison",
                        "completed":false,
                        "dateCreated":"2016-01-13T00:00:00",
                        "id":1,
                        "libelle":"passer aspirateur"
                    },
                    {   "category":"chambre",
                        "completed":false,
                        "dateCreated":"2016-01-13T00:00:00",
                        "id":1,
                        "libelle":"passer aspirateur"
                    },
                    {   "category":"maison",
                        "completed":true,
                        "dateCreated":"2016-01-13T00:00:00",
                        "id":1,
                        "libelle":"passer aspirateur"
                    },
                    {   "category":"salon",
                        "completed":false,
                        "dateCreated":"2016-01-13T00:00:00",
                        "id":1,
                        "libelle":"passer aspirateur"
                    },
                    {   "category":"terasse",
                        "completed":true,
                        "dateCreated":"2016-01-12T00:00:00",
                        "id":2,
                        "libelle":"passer serpière"
                    }];*/
    $scope.incompleteCount = function() {
        var count = 0;
        angular.forEach($scope.taches, function(t){
           if(!t.completed) {
               count++;
           } 
        });
        return count;
    };
    
    $scope.warningLevel = function() {
        if($scope.incompleteCount() < 3){
            return "label-success";
        }
        else{
            return "label-warning";
        }
    };
    
    /*$scope.addNewTask = function(libelle, category){
        var tid = $scope.taches.length + 1;
        var tdate = "" + new Date();
        $scope.taches.push({
            "libelle" : libelle,
            "category" : category,
            "completed" : false,
            "id" : tid,
            "dateCreated" : tdate
        });
    }*/
    
    $scope.addNewTask = function(libelle, category) {
     $http.post('../rest/savetache/' + libelle + '/' + category,
      {}).success(function(response) {
         $scope.taches.push(response.tache);
      });
    };
});

todoApp.filter("completedTaskd", function(){
    return function(items, showCompleted) {
        var resultItems = [];
        angular.forEach(items, function(item){
            if (item.completed == false || showCompleted == true) {
                resultItems.push(item);
            }      
        });
        return resultItems;
    };
});