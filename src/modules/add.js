import { writeFile } from 'fs/promises';
import { join } from 'path';
import {OPERATION_ERROR_MESSAGE} from "../constants/errors.js";

export const add = async (context, args) => {
    try {
        const newFileName = args[0];

        const newFilePath = join(context.currentPath, newFileName);

        await writeFile(newFilePath, '', {flag: 'ax'});
    } catch (error) {
        throw new Error(OPERATION_ERROR_MESSAGE);
    }
}
