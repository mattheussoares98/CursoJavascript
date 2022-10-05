const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const products = {}

function addProduct(product) {
    if (!product.id) product.id = sequence.id

    products[product.id] = product

    return product || "Erro para inserir o produto"
}

function getProduct(id) {
    return products[id] || "Nenhum produto foi encontrado com esse ID"
}

function getProducts() {
    return Object.entries(products) || "Não há produtos no banco de dados"
}

function deleteProduct(id) {
    const productDeleted = products[id]
    delete products[id]
    return productDeleted || "Não foi encontrado produto com esse ID"
}

module.exports = { addProduct, getProduct, getProducts, deleteProduct }