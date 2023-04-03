// 01 - Crie um array que receba 5 itens e exiba no console.
let listaDePessoas = ["Jhow", "Lopes", "Lelet", "Bertolin", "Carol"];
console.log(listaDePessoas);

// 02 -  Utilize um método para adicionar um nome ao inicio do array.
listaDePessoas.unshift("Bernado");
console.log(listaDePessoas);

// 03 - Utilize um método para remover o último nome do array.
listaDePessoas.pop();
console.log(listaDePessoas);

//04 - Utilize um método para adicionar dois nomes ao fim do array.
listaDePessoas.push("Aike", "Gabriel");
console.log(listaDePessoas);

//05 - Utilize um método para remover o primeiro nome do array.
listaDePessoas.shift();
console.log(listaDePessoas);

//06 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort();
console.log(numbers);

//07 - Crie um objeto que receba ao menos três propriedades sobre você.

let meusDados = {
  nome: "Bertolin",
  idade: "20 anos",
  altura: 1.68,
};

//08 - Adicione uma nova propriedade sem alterar seu objeto inicial.
meusDados.filme = "O Pequeno Principe";

// 09 - Remova uma propriedade desse objeto.
delete meusDados.filme;

//10 - Mostre no console todas as propriedades desse objeto.
console.log(meusDados);

// 11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.

let cadastro = [
  {
    nome: "Jhow",
    idade: "23 anos",
    telefone: "(21)8888-8888",
    amigos: "Hotwells",
  },

  {
    nome: "Lopes",
    idade: "23 anos",
    telefone: "(21)7788-8888",
    amigos: "Nath",
  },

  {
    nome: "Lelet",
    idade: "25 anos",
    telefone: "(21)3333-8888",
    amigos: "Kadu",
  },

  {
    nome: "Carol",
    idade: "23 anos",
    telefone: "(21)8222-8888",
    amigos: "Minecraft",
  },

  {
    nome: "Bertolin",
    idade: "20 anos",
    telefone: "(21)9998-8888",
    amigos: "Catherine",
  },
];

console.log(cadastro[0].amigos);
console.log(cadastro[1].amigos);
console.log(cadastro[2].amigos);
console.log(cadastro[3].amigos);
console.log(cadastro[4].amigos);
//12 - Mostre no console o nome de um amigo de cada lista.
