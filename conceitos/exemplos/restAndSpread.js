const usuario = {
    nome: 'romulo',
    idade: 20,
    empresa: 'netsupport'
};

const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params){
    return params.reduce((total, next)=>total+next);
}

console.log(soma(1, 2, 3, 4, 5, 6, 7));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usr1 = {
    nome: 'romulo',
    idade: 23,
    empersa: 'netsupport'
};

const usr2 = {...usr1, nome: 'augusto'};

console.log(usr1);
console.log(usr2);