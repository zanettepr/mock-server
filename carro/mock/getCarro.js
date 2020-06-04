module.exports = {

    getCarro: (req, res) => {

        const dadosResponse = require('../data/getCarro.js');

        switch(req.params.carroId) {
            case '1':
                return res.send(dadosResponse.getCarroAtivo());
            case '2':
                return res.send(dadosResponse.getCarroInativo());
            default:
                return res.send(400,
                    {
                        "message": 'Carro Id nao encontrado!'
                    }
                )
        }
    }
}