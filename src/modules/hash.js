import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import {joinPathsIfNeeded} from "../helpers/fsHelper.js";
import {OPERATION_ERROR_MESSAGE} from "../constants/errors.js";

export const hash = async (context, args) => {
    try {
        const filePath = joinPathsIfNeeded(context.currentPath, args[0]);
        const fileContent = await readFile(filePath, { encoding: 'utf8' });
        const hash = createHash('sha256');

        hash.update(fileContent);
        const hex = hash.digest('hex');

        console.log(hex);
    } catch (error) {
        throw new Error(OPERATION_ERROR_MESSAGE);
    }
}
