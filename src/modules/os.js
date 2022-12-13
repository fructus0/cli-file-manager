import { EOL, cpus, homedir, userInfo, arch } from 'os';
import {INVALID_INPUT_ERROR_MESSAGE} from "../constants/errors.js";

const EOL_CLI_ARG = '--EOL';
const CPUS_CLI_ARG = '--cpus';
const HOMEDIR_CLI_ARG = '--homedir';
const USERNAME_CLI_ARG = '--username';
const ARCHITECTURE_CLI_ARG = '--architecture';

export const os = (args) => {
    const [arg] = args;

    switch (arg) {
        case EOL_CLI_ARG:
            handleEolArg();
            break;
        case CPUS_CLI_ARG:
            handleCpusArg();
            break;
        case HOMEDIR_CLI_ARG:
            handleHomedirArg();
            break;
        case USERNAME_CLI_ARG:
            handleUsernameArg();
            break;
        case ARCHITECTURE_CLI_ARG:
            handleArchitectureArg();
            break;
        default:
            throw new Error(INVALID_INPUT_ERROR_MESSAGE)


    }
}

const handleEolArg = () => {
    console.log(`EOL: ${JSON.stringify(EOL)}`);
}

const handleCpusArg = () => {
    const cpusArray = cpus();

    console.log(`Number of CPUs: ${cpusArray.length}`);

    const mappedCpusValues = cpusArray.map((cpu) => ({
        'Clock Rate': cpu.speed / 1000,
        model: cpu.model,
    }));

    console.table(mappedCpusValues);
}

const handleHomedirArg = () => {
    console.log(`Homedir: ${homedir()}`)
}

const handleUsernameArg = () => {
    console.log(`Username: ${userInfo().username}`)
}

const handleArchitectureArg = () => {
    console.log(`Architecture: ${arch()}`)
}
