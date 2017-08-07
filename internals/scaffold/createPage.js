#!/usr/bin/env node

// Dependency Requires
const fs = require('fs');
const prompt = require('prompt');
const _ = require('lodash');
const pageTemplate = require('./pageTemplate');
const testTemplate = require('./testTemplate');

const newmask = 0;
process.umask(newmask);

// Schema for the Prompts
const schema = {
  properties: {
    componentName: {
      description: ('Page Name (lowercase w/ spaces): '),
      type: 'string',
      required: true,
    },
  },
};

// Start Prompting the Console
prompt.start();

// Get Prompt Results and Create Files
prompt.get(schema, (err, result) => {

  // Create text formatting variables
  const camelCaseName = _.camelCase(result.componentName);
  const capitalizedCaseName = _.upperFirst(camelCaseName);
  const kebabCaseName = _.kebabCase(result.componentName);

  // Make the Component Directory
  fs.mkdir(`./client-src/pages/${kebabCaseName}`, (err) => {
    if (err) console.error(err);
  });

  // Create Class Component file
  fs.writeFile(`./client-src/pages/${kebabCaseName}/index.js`, pageTemplate(capitalizedCaseName), (err) => {
    if (err) {
      return console.log(err);
    }
  });

  // Create Jest Test file
  fs.writeFile(`./client-src/pages/${kebabCaseName}/${camelCaseName}.test.js`, testTemplate(capitalizedCaseName), (err) => {
    if (err) {
      return console.log(err);
    }
  });

});

process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`);
});
