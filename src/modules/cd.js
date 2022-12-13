import {isFolderExists, joinPathsIfNeeded} from "../helpers/fsHelper.js";
import {OPERATION_ERROR_MESSAGE} from "../constants/errors.js";

export const cd = async (context, args) => {
    try {
        const targetPath = args[0];
        const newPath = joinPathsIfNeeded(context.currentPath, targetPath);

        const isExists = await isFolderExists(newPath);

        if(!isExists) {
            throw new Error(OPERATION_ERROR_MESSAGE);
        }

        context.currentPath = newPath;
    } catch (error) {
        throw new Error(OPERATION_ERROR_MESSAGE);
    }
}
