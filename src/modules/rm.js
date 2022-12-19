import { rm as fsRm } from 'fs/promises';
import {joinPathsIfNeeded} from "../helpers/fsHelper.js";
import {OPERATION_ERROR_MESSAGE} from "../constants/errors.js";

export const rm = async (context, args) => {
    try {
        const pathToFile = joinPathsIfNeeded(context.currentPath, args[0]);

        await fsRm(pathToFile);
    } catch(error) {
        throw new Error(OPERATION_ERROR_MESSAGE);
    }
}
