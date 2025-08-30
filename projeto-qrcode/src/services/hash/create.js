import chalk from "chalk";
import handle from "./handle.js";
import promptSchemaHash from "../../prompts-schema/prompt-schema-hash.js";
import prompt from "prompt";

async function createHash() {
    prompt.get(promptSchemaHash, handle);
    
    prompt.start();
}

export default createHash;
