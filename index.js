#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path');

const sourceFolder = 'empty-project';
const destination = process.argv[2] || './';

const destinationFolder = path.join(process.cwd(), destination);

fs.copySync(path.join(__dirname, sourceFolder), destinationFolder);

console.log('Facade project created successfully!');

