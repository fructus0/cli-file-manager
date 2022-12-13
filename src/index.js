import { homedir } from 'os';
import { createInterface } from 'readline/promises';
import { stdin, stdout } from 'node:process';
import { printCurrentPathMessage, printGoodbyeMessage, printWelcomeMessage } from "./helpers/outputHelper.js";
import {processCommand} from "./modules/commandsManager.js";

const startFileManager = async () => {
    const currentPath = homedir();

    printWelcomeMessage();
    printCurrentPathMessage(currentPath);

    const readlineInterface = createInterface({ input: stdin, output: stdout });

    const context = {
        interfaceInstance: readlineInterface,
        currentPath,
    }

    readlineInterface.on('line', async (input) => {
        processCommand(input, context);
    })

    readlineInterface.on('SIGINT', () => {
        readlineInterface.close();
    });

    readlineInterface.on('close', () => {
        printGoodbyeMessage();
    })
}

await startFileManager();
