//Casos de uso do Carrinho

export async function addItem(userCart, item) {
    userCart.push(item);
}

export async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS:")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`Total: ${result}`);
}

export async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name); // -1 se não encontrado

    if (index !== -1) {
        userCart.splice(index, 1);//shift() primeiro, .pop() ultimo 
        console.log(`\n "${name}" removida`);
    }
}

export async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex(p => p.name === item.name);

    if (indexFound == -1) {
        console.log("item não encontrado");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

export async function displayCart(userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`);
    });
}

//export {addItem, calculateTotal, deleteItem, removeItem, displayCart};