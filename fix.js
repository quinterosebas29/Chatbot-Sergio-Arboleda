const fs = require('fs');
let code = fs.readFileSync('chatbot.js', 'utf8');

code = code.replace(/\\\`/g, '`');
code = code.replace(/\\\$/g, '$');

fs.writeFileSync('chatbot.js', code);
console.log('Fix applied.');
