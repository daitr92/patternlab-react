module.exports = function (plop) {
  'use strict'

  plop.setGenerator('new', {
    description: 'create new component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Select type:',
        choices: [
          '00-atoms',
          '01-molecules',
          '02-organisms',
          '03-templates',
          '04-pages'
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your new component name?',
        validate: function (value) {
          if ((/.+/).test(value)) { return true }
          return 'component name is required'
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'source/_patterns/{{ type }}/{{dashCase name}}/{{dashCase name}}.jsx',
        templateFile: 'templates/temp.jsx',
        abortOnFail: true
      },
      {
        type: 'add',
        path: 'source/_patterns/{{ type }}/{{dashCase name}}/{{dashCase name}}.scss',
        templateFile: 'templates/temp.scss',
        abortOnFail: true
      },
      {
        type: 'add',
        path: 'source/_patterns/{{ type }}/{{dashCase name}}/{{dashCase name}}.mustache',
        templateFile: 'templates/temp.mustache',
        abortOnFail: true
      }
    ]
  })
}