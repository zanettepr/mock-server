module.exports = {

    getPessoa: (req, res) => {

        const validacao = require('../../utils/validacoes.js');
        var parametro = ['pessoaId'];
        
        if(validacao.verificarParametroObrigatorio(req, parametro)) {

            return res.send(
                400, req.validationErrorsJson()
            );
        }

        const dadosResponse = require('../data/getPessoa.js');

        switch(req.query.pessoaId) {
            case '1':
                return res.send(dadosResponse.getPessoaAtiva());
            case '2':
                return res.send(dadosResponse.getPessoaInativa());
            default:
                return res.send(404,
                    {
                        message: 'Pessoa Id nao encontrado!'
                    }
                );
        }
    }
}