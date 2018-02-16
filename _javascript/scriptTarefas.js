angular.module("criacaoTarefas", []);
angula.module("criacaoTarefas").controller("criacaoTarefasCtrl", function($scope){
    $scope.categorias = [{nome:'Casa'}, {nome:'Trabalho'},{nome:'Faculdade'}];
    $scope.tarefas = [
        {nome: 'Varrer o quarto', categoria: 'Casa', feito: false},
        {nome: 'Lavar a louça', categoria: 'Casa', feito: true},
        {nome: 'Lavar as roupas', categoria: 'Casa', feito: false},
        {nome: 'Consertar a porta', categoria: 'Casa', feito: false},
        {nome: 'Terminar o relatório', categoria: 'Trabalho', feito: false},
        {nome: 'Estudar para a próxima reunião', categoria: 'Trabalho', feito: false},
        {nome: 'Enviar o email sobre o problema', categoria: 'Trabalho', feito: false},
        {nome: 'Levar pó de café', categoria: 'Trabalho', feito: true},
        {nome: 'Comprar canetas novas', categoria: 'Trabalho', feito: true},
        {nome: 'Estudar etapa 1', categoria: 'Faculdade', feito: true},
        {nome: 'Estudar etapa 2', categoria: 'Faculdade', feito: true},
        {nome: 'Estudar etapa 3', categoria: 'Faculdade', feito: false},
        {nome: 'Fazer TP1', categoria: 'Faculdade', feito: false}   
    ];
})