import { createReadStream } from 'fs';
import { stdout } from 'process';
import { joinPathsIfNeeded } from "../helpers/fsHelper.js";
import {OPERATION_ERROR_MESSAGE} from "../constants/errors.js";

export const cat = async (context, args) => {
    const pathToFile = joinPathsIfNeeded(context.currentPath, args[0]);

    return new Promise((resolve, reject) => {
        const readStream = createReadStream(pathToFile);
        readStream.pipe(stdout);

        readStream.on('end', () => {
            resolve();
        });

        readStream.on('error', () => {
            reject(new Error(OPERATION_ERROR_MESSAGE));
        })
    });
}
