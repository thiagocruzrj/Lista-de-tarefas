var app = angular.module("listaTarefas", []);
app.controller("Controller", function($scope){
    $scope.pendentes = "Lista de pendentes";
    $scope.concluidas = "Lista de concluidas";
    $scope.tarefas = listaDeTarefas
});