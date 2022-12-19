import { isAbsolute, join, basename } from 'path';
import { stat, access } from 'fs/promises';
export const joinPathsIfNeeded = (currentPath, targetPath) => {
    return isAbsolute(targetPath) ? targetPath : join(currentPath, targetPath)
}

export const isFolderExists = async (pathToFolder) => {
    try {
        const stats = await stat(pathToFolder);

        return stats.isDirectory();
    } catch(error) {
        return false;
    }
}

export const isFileExists = async (filePath) => {
    try {
        await access(filePath);

        return true;
    } catch {
        return false;
    }
}

export const getFilenameFromPath = (path) => {
    return basename(path);
}
