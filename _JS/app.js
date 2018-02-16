var app = angular.module("listaTarefas", []);
        app.controller("Controller", function($scope) {
            $scope.pendentes = "Tarefas Pendentes";
            $scope.concluidas = "Tarefas Concluidas";
            $scope.categorias1 = listaDeCategorias[0];
            $scope.categorias2 = listaDeCategorias[1];
            $scope.categorias3 = listaDeCategorias[2];
            $scope.tarefas = listaDeTarefas
        });

var app = angular.module("addCategoria", []);
        app.controller("ControllerCategoria", function($scope) {
            $scope.categorias = listaDeCategorias
            $scope.adicionarCategoria = function(categoria) {
                listaDeCategorias.push(angular.copy(categoria));
                $scope.categoria = "";
            }
        });

var app = angular.module("addTarefa", []);
        app.controller("ControllerTarefa", function($scope) {
            $scope.categorias = listaDeCategorias;
            $scope.tarefas = listaDeTarefas
            $scope.adicionarTarefa = function(tarefa) {
                listaDeTarefas.push(angular.copy(tarefa));
                tarefa.nome = "";
                tarefa.categoria = "";
            }
        });