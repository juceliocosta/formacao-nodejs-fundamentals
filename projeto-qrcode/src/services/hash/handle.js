import chalk from "chalk";
import bcrypt from "bcrypt";

async function handle(err, myPlaintextPassword) {
    if (err) {
        console.log("Erro na aplicação");
        return;
    }

    const hash = bcrypt.hashSync(myPlaintextPassword.password, 10);
    console.log(chalk.yellow.bold("Hash gerado: "), chalk.green(hash));
}

export default handle;