import { join } from 'node:path';

export const up = (context) => {
    context.currentPath = join(context.currentPath, '..')
};
