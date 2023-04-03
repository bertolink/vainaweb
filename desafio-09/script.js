//1 - crie uma função que exiba uma mensagem no console

function nome(André) {
  console.log(`Meu nome é ${André}`);
}
nome();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function comida(Massa) {
  console.log(Massa);
}
comida("Lasanha");
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function dados(nome, idade, musica) {
  console.log(
    `Meu nome é ${nome} e tenho ${idade} anos, minha musica favorita é ${musica}`
  );
}
dados("André", 20, "21 Savage - A lot");

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function info(filme, musica2) {
  console.log(filme, musica2);
}
info("a casa monstro", "21savage - a lot");

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function mat(n1) {
  return n1 * 3;
}
mat();
console.log(mat(5));

//6 - crie uma função que  verifique se uma  variável é true ou false
