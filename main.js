// function soma(num1, num2){
//     return num1+num2;
// }

// console .log(soma(5,9));

// function areaQuadrado(ladoBase){
//     return ladoBase**2;
// }

// console .log(areaQuadrado(8));

// let media = function(valor1, valor2, valor3){
//     return (valor1+valor2+valor3)/3;
// }

// console .log(media(1,2,3));

// let nota1=parseInt(prompt('qual e a sua nota?'))
// let nota2=parseInt(prompt('qual e a sua nota?'))
// let nota3=parseInt(prompt('qual e a sua nota?'))
// let media= function(valor1, valor2, valor3){
//     return (valor1+valor2+valor3)/3;
// }
//     document.write(media(notas1, nota2, notas3));

let estados= ['Acre', 'Alagoas', 'Amapa', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

// let i=0;
// while(i<estados.length){
// console.log(i);
// console.log(estados [i])
// i= i+1;
// }

for (let j = 0; j < estados.length; j++) {
    console.log(j)
   console.log(estados[j])
    
}

let idade=parseInt(prompt('qual a sua idade?'));
if(idade>16){
    console.log('pode dirigir');

}
else{
    console.log('ilegal dirigir');
}