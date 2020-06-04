//Pessoa
// Usando parâmetro da query nas validações
Sandbox.define('/pessoa', 'GET', (req, res) => {
    const pessoa = require('./pessoa/mock/getPessoa.js');
    pessoa.getPessoa(req, res);
});

// Usando parâmetro do body nas validações
Sandbox.define('/pessoa', 'POST', (req, res) => {
    const pessoa = require('./pessoa/mock/postPessoa.js');
    pessoa.postPessoa(req, res);
});

//Carro
// Usando parâmetro da rota nas validações
Sandbox.define('/carro/{carroId}', 'GET', (req, res) => {
    const carro = require('./carro/mock/getCarro.js');
    carro.getCarro(req, res);
});