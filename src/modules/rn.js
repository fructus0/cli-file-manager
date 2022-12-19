import { rename } from 'fs/promises';
import { dirname, join } from 'path';
import { joinPathsIfNeeded } from "../helpers/fsHelper.js";
import { OPERATION_ERROR_MESSAGE } from "../constants/errors.js";

export const rn = async (context, args) => {
    try {
        const filePath = joinPathsIfNeeded(context.currentPath, args[0]);
        const newFileName = args[1];
        const resultFilePath = join(dirname(filePath), newFileName);

        await rename(filePath, resultFilePath);

    } catch(error) {
        throw new Error(OPERATION_ERROR_MESSAGE);
    }
}
