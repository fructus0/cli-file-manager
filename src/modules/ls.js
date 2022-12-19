import { readdir } from 'node:fs/promises';
import {OPERATION_ERROR_MESSAGE} from "../constants/errors.js";
export const ls = async (context) => {
    try {
        const filesArray = [];
        const foldersArray = [];

        const files = await readdir(context.currentPath, {withFileTypes: true});

        const filteredFiles = files.filter((file) => file.isDirectory() || file.isFile());

        filteredFiles.forEach((file) => {
            file.isDirectory() ? foldersArray.push({
                name: file.name,
                type: 'directory'
            }) : filesArray.push({
                name: file.name,
                type: 'file'
            })
        })

        console.table([...foldersArray.sort(ascSort), ...filesArray.sort(ascSort)])
    } catch(error) {
        throw new Error(OPERATION_ERROR_MESSAGE)
    }

}

const ascSort = (leftValue, rightValue) => {
    return leftValue.name.localeCompare(rightValue.name);
}
