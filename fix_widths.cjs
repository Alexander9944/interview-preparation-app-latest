const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.jsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    content = content.replace(/max-w-4xl/g, 'max-w-[896px]');
    content = content.replace(/max-w-3xl/g, 'max-w-[768px]');
    content = content.replace(/max-w-2xl/g, 'max-w-[672px]');
    content = content.replace(/max-w-xl/g, 'max-w-[576px]');
    content = content.replace(/max-w-lg/g, 'max-w-[512px]');
    content = content.replace(/max-w-md/g, 'max-w-[448px]');
    content = content.replace(/max-w-sm/g, 'max-w-[384px]');
    content = content.replace(/max-w-xs/g, 'max-w-[320px]');
    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log('Fixed ' + file);
    }
});
