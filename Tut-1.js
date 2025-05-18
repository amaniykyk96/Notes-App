const fs = require('fs')
fs.writeFileSync('notes.txt', 'This file was created byy Node.js! \n')

try {
  fs.appendFileSync('notes.txt', 'How you doing \n');
  console.log('Data appended synchronously.');
} catch (err) {
  console.error('Error appending synchronously:', err);
}

fs.appendFile('notes.txt', 'What can I do for you \n', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Data appended to file successfully.');
});