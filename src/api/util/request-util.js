module.exports = {
  getMultiFromString: (stringCommand) => {
    if(stringCommand) {
      console.log(stringCommand);
      const commands = stringCommand.split(' ');
      // TODO: test if command exist
      // TODO: valid if command syntax is ok
      return commands;
    }
    throw new Error('string command cannot be null');
  },
};
