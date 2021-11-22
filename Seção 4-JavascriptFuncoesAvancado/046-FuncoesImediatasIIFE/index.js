(function() {
    const sobrenome = 'Coelho';

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('André'));
    }

    falaNome();
})();