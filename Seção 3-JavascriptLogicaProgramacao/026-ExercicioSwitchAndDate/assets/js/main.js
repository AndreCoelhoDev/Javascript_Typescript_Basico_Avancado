const h1 = document.querySelector('.container h1');
const data = new Date();

/*
***** MANEIRA DE FAZER MAIS DIFÍCIL
** 
h1.innerHTML = formataData(data);

function getDiaSemanaTexto(diaSemana) {
    switch (diaSemana) {
        case 0: return 'domingo';
        case 1: return 'segunda-feira';
        case 2: return 'terça-feira';
        case 3: return 'quarta-feira';
        case 4: return 'quinta-feira';
        case 5: return 'sexta-feira';
        case 6: return 'sábado';
        default: return '';
    }
}

function getNomeMes(numeroMes) {
    switch (numeroMes) {
        case 0: return 'janeiro';
        case 1: return 'fevereiro';
        case 2: return 'março';
        case 3: return 'abril';
        case 4: return 'maio';
        case 5: return 'junho';
        case 6: return 'julho';
        case 7: return 'agosto';
        case 8: return 'setembro';
        case 9: return 'outubro';
        case 10: return 'novembro';
        case 11: return 'dezembro';
        default: return '';
    }
}

function formataData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}`;
}
*/

/*
***** MANEIRA DE FAZER MAIS FÁCIL
** 
*/
const opcoes = {
    dateStyle: 'full'
}
h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);