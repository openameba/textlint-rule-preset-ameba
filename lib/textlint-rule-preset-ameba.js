const path = require('path');

module.exports = {
  'rules': {
    'prh': require('textlint-rule-prh')
  },
  'rulesConfig': {
    'prh': {
      'rulePaths': [`${path.resolve(__dirname)}/prh-ameba.yml`]
    }
  }
};
