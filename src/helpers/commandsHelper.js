import { MAP_CLI_COMMAND_TO_ARGS_COUNT } from "../constants/cli.js";

const SPACE_SYMBOL = ' ';

export const getCommandObjectFromInputString = (input) => {
    const argumentsRegex = /(["|'][^"]+["|']|[^\s"]+)/gmi;
    const quotesRegex = /(["|'])/gmi;

    const command = input.split(SPACE_SYMBOL)[0];

    const matches = input.match(argumentsRegex).map(match => match.replaceAll(quotesRegex, '')).slice(1);

    return {
        command,
        args: matches
    };
}

export const isCommandObjectValid = (commandObj) => {
    return MAP_CLI_COMMAND_TO_ARGS_COUNT[commandObj.command] === commandObj.args.length
}
