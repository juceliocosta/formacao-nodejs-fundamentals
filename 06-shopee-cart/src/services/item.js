//Casos de uso dos Itens

export default 
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: function () { 
            return this.price * this.quantity;
        },
    };
}

//export default createItem;

//arrow function herdam o this do escopo pai, então, por não ter seu escopo interno, a função acima não atualizaria dinamicamente