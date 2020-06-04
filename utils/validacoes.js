module.exports = {

    verificarParametroObrigatorio: (req, parametros) => {

        for(let i = 0; i < parametros.length; i++) {

            req.check(
                parametros[i], `${parametros[i]} deve ser informado.`
            ).notEmpty();
        }

        return req.validationErrors();
    },

    verificarEnvioBody: (req) => {

        return !req.body ? false : true;
    },

    verificarContentType: (req) => {

        return !req.is('application/json') ? false : true;
    }
}