import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE, (2 - PASSWORD ou (3 - Hash"),
        pattern: /^[1-3]+$/,
        message: "Escolha apenas entre 1 e 3",
        required: true,
    },
];

export default promptSchemaMain;