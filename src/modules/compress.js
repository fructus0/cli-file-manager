import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import {isFileExists, joinPathsIfNeeded} from "../helpers/fsHelper.js";
import { OPERATION_ERROR_MESSAGE } from "../constants/errors.js";

export const compress = async (context, args) => {
    const sourceFilePath = joinPathsIfNeeded(context.currentPath, args[0]);
    const destinationFilePath = joinPathsIfNeeded(context.currentPath, args[1]);

    const isSourceFileExists = await isFileExists(sourceFilePath);
    const isFDestinationFileAlreadyExists = await isFileExists(destinationFilePath);

    if(!isSourceFileExists) {
        throw new Error(OPERATION_ERROR_MESSAGE);
    }

    if(isFDestinationFileAlreadyExists) {
        throw new Error(OPERATION_ERROR_MESSAGE);
    }

    return new Promise((resolve, reject) => {
        const readStream = createReadStream(sourceFilePath);
        const writeStream = createWriteStream(destinationFilePath);
        const brotliCompress = createBrotliCompress();


        readStream.pipe(brotliCompress).pipe(writeStream);

        readStream.on('end', () => {
            resolve();
        });

        readStream.on('error', () => {
            reject(new Error(OPERATION_ERROR_MESSAGE));
        })

        writeStream.on('error', () => {
            reject(new Error(OPERATION_ERROR_MESSAGE));
        })
    })
};
