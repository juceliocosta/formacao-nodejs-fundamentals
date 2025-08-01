const { getFullName, productType } = require("./services/products");
const products = require("./services/products");

const config = require("./services/config");
const database = require("./services/database");


(async function main() {
  console.log("carrinho compras:");

  getFullName("1", "teclado");
  products.getFullName("1", "teclado");

  console.log(productType);

  database.connectToDatabase("my-data");
})()