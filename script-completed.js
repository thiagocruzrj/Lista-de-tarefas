angular.module("app", [])
    .controller('Tarefas', Tarefas)
    .controller('Categorias', Categorias)
    .controller('Index', Index);

function Tarefas(){
    let self = this;
    self.status = stats;
    self.tarefas = tasks;
    self.checkInput = checkInput;
    self.cadTask = cadTask;
    self.removeTask = removeTarefa;
}

function Categorias(){
    let self = this;
    self.categorias = category;
    self.verify = verify;
    self.addCategoria = addCategoria;
    self.removeCategoria = removeCategoria;
    self.eraseInput = eraseInput;
}

function Index{
    let self = this;
    self.year = (new Date()).getFullYear();
}

function cadTask (tInput, cInput, tlist) {
    let info = $('#button-info');
    let submit = $(#button-submit);
    if (tInput && tList){
        tList.push({
            nome: tInput,
            categoria: cInput,
            feito: false
        });
    }
}