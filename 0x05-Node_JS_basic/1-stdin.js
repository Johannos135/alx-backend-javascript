/**
 * program executed through cli
 * - it should display welcome message
 * - allow user to input their name
 * - display user name
 * - message when closing
 */

const { stdout, stdin } = process;

stdout.write('Welcome to Holberton School, what is your name?\n');
stdin.on('data', (data) => {
  stdout.write(`Your name is: ${data}`);
  process.exit();
});

process.on('exit', () => {
  stdout.write('This important software is now closing\n');
});
