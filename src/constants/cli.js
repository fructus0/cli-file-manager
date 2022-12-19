export const UP_CLI_COMMAND = 'up';
export const CD_CLI_COMMAND = 'cd';
export const LS_CLI_COMMAND = 'ls';
export const CAT_CLI_COMMAND = 'cat';
export const ADD_CLI_COMMAND = 'add';
export const RN_CLI_COMMAND = 'rn';
export const CP_CLI_COMMAND = 'cp';
export const MV_CLI_COMMAND = 'mv';
export const RM_CLI_COMMAND = 'rm';
export const OS_CLI_COMMAND = 'os';
export const HASH_CLI_COMMAND = 'hash';
export const COMPRESS_CLI_COMMAND = 'compress';
export const DECOMPRESS_CLI_COMMAND = 'decompress';
export const EXIT_CLI_COMMAND = '.exit';

export const MAP_CLI_COMMAND_TO_ARGS_COUNT = {
    [UP_CLI_COMMAND]: 0,
    [CD_CLI_COMMAND]: 1,
    [LS_CLI_COMMAND]: 0,
    [CAT_CLI_COMMAND]: 1,
    [ADD_CLI_COMMAND]: 1,
    [RN_CLI_COMMAND]: 2,
    [CP_CLI_COMMAND]: 2,
    [MV_CLI_COMMAND]: 2,
    [RM_CLI_COMMAND]: 1,
    [OS_CLI_COMMAND]: 1,
    [HASH_CLI_COMMAND]: 1,
    [COMPRESS_CLI_COMMAND]: 2,
    [DECOMPRESS_CLI_COMMAND]: 2,
    [EXIT_CLI_COMMAND]: 0,
}

Object.freeze(MAP_CLI_COMMAND_TO_ARGS_COUNT);
