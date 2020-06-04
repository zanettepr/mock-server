module.exports = {

    verificarParametroObrigatorio: (req, parametro) => {

        for(let i = 0; i < parametro.length; i++) {

            req.check(
                parametro[i], `${parametro[i]} deve ser informado.`
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