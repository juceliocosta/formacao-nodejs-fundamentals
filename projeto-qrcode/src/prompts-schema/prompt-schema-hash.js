import chalk from "chalk";

const promptSchemaHash = [
    {
        name: "password",
        description: chalk.yellow("Digite sua senha"),
        pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.{8,}).*$/,
        message: chalk.red.italic("Deve conter pelo menos 8 dígitos, 1 letra maiúscula e 1 caractere especial"),
        required: true,
    },
];

export default promptSchemaHash;