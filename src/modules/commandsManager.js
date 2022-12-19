import {
    ADD_CLI_COMMAND,
    CAT_CLI_COMMAND,
    CD_CLI_COMMAND,
    COMPRESS_CLI_COMMAND,
    CP_CLI_COMMAND,
    DECOMPRESS_CLI_COMMAND,
    EXIT_CLI_COMMAND,
    HASH_CLI_COMMAND,
    LS_CLI_COMMAND,
    MV_CLI_COMMAND,
    OS_CLI_COMMAND,
    RM_CLI_COMMAND,
    RN_CLI_COMMAND,
    UP_CLI_COMMAND
} from "../constants/cli.js";
import { getCommandObjectFromInputString, isCommandObjectValid } from "../helpers/commandsHelper.js";
import { INVALID_INPUT_ERROR_MESSAGE } from "../constants/errors.js";
import { printCurrentPathMessage } from "../helpers/outputHelper.js";
import { cd } from "./cd.js";
import { ls } from "./ls.js";
import { cat } from "./cat.js";
import { up } from "./up.js";
import { add } from "./add.js";
import { cp } from "./cp.js";
import { rn } from "./rn.js";
import { mv } from "./mv.js";
import { rm } from "./rm.js";
import { os } from "./os.js";
import { hash } from "./hash.js";
import { compress } from "./compress.js";
import { decompress } from "./decompress.js";

export const processCommand = async (input, context) => {
    try {
        const commandObject = getCommandObjectFromInputString(input);

        if(!isCommandObjectValid(commandObject)) {
            throw new Error(INVALID_INPUT_ERROR_MESSAGE);
        }

        const { args } = commandObject;

        switch (commandObject.command) {
            case UP_CLI_COMMAND:
                up(context);
                break;
            case CD_CLI_COMMAND:
                await cd(context, args);
                break;
            case LS_CLI_COMMAND:
                await ls(context);
                break;
            case CAT_CLI_COMMAND:
                await cat(context, args);
                break;
            case ADD_CLI_COMMAND:
                await add(context, args);
                break;
            case RN_CLI_COMMAND:
                await rn(context, args);
                break;
            case CP_CLI_COMMAND:
                await cp(context, args);
                break;
            case MV_CLI_COMMAND:
                await mv(context, args);
                break;
            case RM_CLI_COMMAND:
                await rm(context, args);
                break;
            case OS_CLI_COMMAND:
                await os(args);
                break;
            case HASH_CLI_COMMAND:
                await hash(context, args);
                break;
            case COMPRESS_CLI_COMMAND:
                await compress(context, args);
                break;
            case DECOMPRESS_CLI_COMMAND:
                await decompress(context, args);
                break;
            case EXIT_CLI_COMMAND:
                context.interfaceInstance.close();
                return;
        }

        printCurrentPathMessage(context.currentPath);
    } catch (error) {
        console.log(error.message);
        printCurrentPathMessage(context.currentPath);
    }

}
