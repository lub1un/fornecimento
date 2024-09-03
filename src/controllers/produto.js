const barbearia_controller = require("../constrollers/produto.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.quantidade != undefined &&
        body.id_mercado != undefined &&
        body.id_fornecedor != undefined

    ) {
        return {
            id,
            nome: body.nome,
            quantidade: body.quantidade,
            id_mercado: body.id_mercado,
            id_fornecedor: body.id_fornecedor
        }
    }
}

module.exports = model