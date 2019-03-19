module.exports = {
  getMultiFromString: (stringCommand) => {
    if (stringCommand) {
      console.log(stringCommand);
      const commands = stringCommand.split(' ');
      // TODO: test if command exist
      // TODO: valid if command syntax is ok
      return commands;
    }
    throw new Error('string command cannot be null');
  },
  getCommandType: (command) => {
    const KEYS_COMMANDS = ['KEYS'];
    const VALUES_COMMANDS = ['GET']
    if (KEYS_COMMANDS.includes(command[0].toUpperCase())) {
      return 'key';
    } else if (VALUES_COMMANDS.includes(command[0].toUpperCase())) {
      return 'value';
    }
    return 'other';
  },
};
