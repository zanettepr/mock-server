module.exports = {

    getCarroAtivo: () => {
        
        return {
            id: 1,
            nome: 'Fusca',
            ativo: true
        }
    },

    getCarroInativo: () => {
        
        return {
            id: 2,
            nome: 'Cruze',
            ativo: false
        }
    }
}