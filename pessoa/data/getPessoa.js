module.exports = {

    getPessoaAtiva: () => {

        return {
            id: 1,
            nome: 'Paulo Zanette',
            ativo: true
        }
    },

    getPessoaInativa: () => {
        
        return {
            id: 2,
            nome: 'Paulo Henrique',
            ativo: false
        } 
    }
}