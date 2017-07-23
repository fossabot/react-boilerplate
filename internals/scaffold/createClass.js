#!/usr/bin/env node

// Dependency Requires
const fs = require('fs');
const prompt = require('prompt');
const _ = require('lodash');
const classTemplate = require('./classTemplate');
const testTemplate = require('./testTemplate');
const scssTemplate = require('./scssTemplate');

const newmask = 0;
process.umask(newmask);

// Schema for the Prompts
const schema = {
  properties: {
    componentName: {
      description: ('Component Name (lowercase w/ spaces): '),
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
  fs.mkdir(`./client-src/components/${kebabCaseName}`, (err) => {
    if (err) console.error(err);
  });

  // Create Class Component file
  fs.writeFile(`./client-src/components/${kebabCaseName}/index.js`, classTemplate(capitalizedCaseName), (err) => {
    if (err) {
      return console.log(err);
    }
  });

  // Create Jest Test file
  fs.writeFile(`./client-src/components/${kebabCaseName}/${camelCaseName}.test.js`, testTemplate(capitalizedCaseName), (err) => {
    if (err) {
      return console.log(err);
    }
  });

  // Create Sass/SCSS file
  fs.writeFile(`./client-src/components/${kebabCaseName}/_${kebabCaseName}.scss`, scssTemplate(kebabCaseName), (err) => {
    if (err) {
      return console.log(err);
    }
  });

});
