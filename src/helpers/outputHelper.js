
const USERNAME_CLI_ARG_NAME = '--username='

export const printWelcomeMessage = () => {
   const username = getUsernameFromArgv();

   console.log(getGreetingsMessage(username))
}

export const printGoodbyeMessage = () => {
    const username = getUsernameFromArgv();

    console.log(getGoodbyeMessage(username))
}

export const printCurrentPathMessage = (currentDirectoryPath) => {
    console.log(`You are currently in ${currentDirectoryPath}`)
};

const getUsernameFromArgv = () => {
    const argvList = process.argv.slice(2);

    const username = argvList.find((arg) => {
        return arg.startsWith(USERNAME_CLI_ARG_NAME)
    })

    return username? username.slice(USERNAME_CLI_ARG_NAME.length) : ''
}

const getGreetingsMessage = (username) => `Welcome to the File Manager, ${username}!`;

const getGoodbyeMessage = (username) => `\nThank you for using File Manager, ${username}, goodbye!`

