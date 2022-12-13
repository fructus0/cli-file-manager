import { createReadStream, createWriteStream } from 'fs';
import { rm } from 'fs/promises';
import {getFilenameFromPath, isFileExists, joinPathsIfNeeded} from "../helpers/fsHelper.js";
import {OPERATION_ERROR_MESSAGE} from "../constants/errors.js";

export const mv = async (context, args) => {
    const originalPath = joinPathsIfNeeded(context.currentPath, args[0]);
    const originalFilename = getFilenameFromPath(originalPath);

    const destinationPath = joinPathsIfNeeded(context.currentPath, args[1]);
    const destinationPathWithFilename = joinPathsIfNeeded(destinationPath, originalFilename);

    const isOriginalFileExists = await isFileExists(originalPath);
    const isFDestinationFileAlreadyExists = await isFileExists(destinationPathWithFilename);

    if(!isOriginalFileExists) {
        throw new Error(OPERATION_ERROR_MESSAGE);
    }

    if(isFDestinationFileAlreadyExists) {
        throw new Error(OPERATION_ERROR_MESSAGE);
    }

    return new Promise((resolve, reject) => {
        const readStream = createReadStream(originalPath);
        const writeStream = createWriteStream(destinationPathWithFilename);
        readStream.pipe(writeStream);

        readStream.on('end', async () => {
            await rm(originalPath);
            resolve();
        });

        readStream.on('error', () => {
            reject(new Error(OPERATION_ERROR_MESSAGE));
        })

        writeStream.on('error', () => {
            reject(new Error(OPERATION_ERROR_MESSAGE));
        })
    });
}
