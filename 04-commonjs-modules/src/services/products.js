const productType = {
  version: "digital",
  tax: "x1",
};

const apiURL = {
  url: "www.google.com/api",
};

async function getFullName(codeId, productName) {
  console.log("productX: " + codeId + "--" + productName);
  await doBreakLine();
}

async function doBreakLine() {
  console.log("\n");
}

async function getProductLabel(productName) {
  console.log("Product " + productName);
}

module.exports = {
  getFullName,
  getProductLabel,
  productType,
};