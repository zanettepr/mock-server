module.exports = {

    postPessoaAtiva: () => {
        return {
            id: 1,
            nome: 'Paulo Zanette',
            ativo: true
        }
    },

    postPessoaInativa: () => {
        return {
            id: 2,
            nome: 'Paulo Henrique',
            ativo: false
        } 
    }
}