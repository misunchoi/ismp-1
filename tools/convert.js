// This is a tool for converting privacy policy and similar docs to html
// It would be ideal if this were automated so we can check in changes to a file
// and have it change the website, but currently here is the workflow:
// 1. Get Word doc of policy/terms/etc.
// 2. Paste here: https://euangoddard.github.io/clipboard2markdown/
// 3. Create a markdown file with the contents of the converted file
// 4. run node convert.js file
// 5. paste the resultant js into your file
const fs = require('fs'); 
const readline = require('readline'); 
  
const file = readline.createInterface({ 
    input: fs.createReadStream('terms-of-use.md'), 
    output: process.stdout, 
    terminal: false
}); 
  
let jsonDoc = {}
let lineNumber = 0;
let currentObjectName = '';
let bodyLineNumber = 1;

// use for privacy policy
const hasNote = true;

file.on('line', (line) => { 
    // skip blank lines
    if (!line) return;


    // special cases for first two lines
    if (lineNumber === 0) {
        jsonDoc['title'] = line
    } else if (lineNumber === 1) {
        jsonDoc['last_modified'] = line
    } else if (lineNumber === 2 && hasNote) {
        // terms of conditions has a note
        jsonDoc['note'] = line
    } else {
        // mark heading as the title
        if (line[0] === "*") {
            // remove asterisks
            trimmedLine = line.substring(2, line.length - 2);
            // remove special characters, spaces to _, lower case
            machineName = trimmedLine.toLowerCase().replace(/[^a-z0-9 ]/g, "").split(' ').join('_');

            currentObjectName = machineName; // todo: downcase and sub
            jsonDoc[currentObjectName] = {};
            jsonDoc[currentObjectName]['title'] = line;
            bodyLineNumber = 1;
        } else {
            if (jsonDoc[currentObjectName]) {
                jsonDoc[currentObjectName]['body' + bodyLineNumber] = line;
                bodyLineNumber++;
            } else {
                jsonDoc['undefined'] = line
            }
        }
    }
    lineNumber++;
}); 

file.on('close', () => {
    console.log(JSON.stringify(jsonDoc, null, 2));
})