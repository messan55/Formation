// cette ligne crée un nouveau module angular
// le tanleau en 2eme argument comprend 
// les dependances a injecter dans ce module
// avec [] -> créer un module 
// sans [] -> récupérer un module
var todoApp = angular.module("todoApp", []);

// creation d'un controlleur "todoctrl" dans notre module
// le scope est automatiquement injecté par angular
todoApp.controller("ToDoCtrl", function($scope){
    $scope.message = "Bonjour depuis toDOCtrl";
    $scope.taches =[{   "category":"maison",
                        "completed":false,
                        "dateCreated":"2016-01-13T00:00:00",
                        "id":1,"libelle":"passer aspirateur"
                    },
                    {   "category":"chambre",
                        "completed":false,
                        "dateCreated":"2016-01-13T00:00:00",
                        "id":1,"libelle":"passer aspirateur"
                    },
                    {   "category":"maison",
                        "completed":true,
                        "dateCreated":"2016-01-13T00:00:00",
                        "id":1,"libelle":"passer aspirateur"
                    },
                    {   "category":"salon",
                        "completed":false,
                        "dateCreated":"2016-01-13T00:00:00",
                        "id":1,"libelle":"passer aspirateur"
                    },
                    {   "category":"terasse",
                        "completed":true,
                        "dateCreated":"2016-01-12T00:00:00",
                        "id":2,"libelle":"passer serpière"
                    }];
});