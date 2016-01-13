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
});