angular.module("listaDeCategorias", []);
angular.module("listaDeCategorias").controller("listaDeCategoriasCtrl", function($scope){
    $scope.categorias = [
        {nome: 'Casa'},
        {nome: 'Trabalho'},
        {nome: 'Faculdade'}
    ];
});
