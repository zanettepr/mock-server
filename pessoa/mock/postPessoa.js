module.exports = {

    postPessoa: (req, res) => {

        const validacao = require('../../utils/validacoes.js');

        if(!validacao.verificarContentType(req)) {
            return res.send(400,
                {
                    "message": 'Request body deve ser application/json!'
                }
            );
        }

        const dadosResponse = require('../data/postPessoa.js');

        switch(req.body.pessoaId) {
            case '1':
                return res.send(dadosResponse.postPessoaAtiva());
            case '2':
                return res.send(dadosResponse.postPessoaInativa());
            default:
                return res.send(404,
                    {
                        message: 'Pessoa Id nao encontrado!'
                    }
                );
        }
    }
}