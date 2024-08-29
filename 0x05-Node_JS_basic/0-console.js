/**
 *  prints in STDOUT the string argument
 *  param {string} message
 */
function displayMessage(message) {
  process.stdout.write(message + '\n');
}

module.exports = displayMessage;
