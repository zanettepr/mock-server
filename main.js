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