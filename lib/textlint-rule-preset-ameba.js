const path = require('path');
const { moduleInterop } = require("@textlint/module-interop");

module.exports = {
  rules: {
    prh: moduleInterop(require('textlint-rule-prh')),
    'max-kanji-continuous-len': moduleInterop(require('textlint-rule-max-kanji-continuous-len')),
    'no-hankaku-kana': moduleInterop(require('textlint-rule-no-hankaku-kana')),
    'no-mixed-zenkaku-and-hankaku-alphabet': moduleInterop(require('textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet')),
    'no-insert-dropping-sa': moduleInterop(require('@textlint-ja/textlint-rule-no-insert-dropping-sa')),
    'prefer-tari-tari': moduleInterop(require('textlint-rule-prefer-tari-tari')),
    'ja-no-mixed-period': moduleInterop(require('textlint-rule-ja-no-mixed-period')),
    'no-dropping-the-ra': moduleInterop(require('textlint-rule-no-dropping-the-ra')),
    'ja-no-abusage': moduleInterop(require('textlint-rule-ja-no-abusage')),
    'ja-unnatural-alphabet': moduleInterop(require('textlint-rule-ja-unnatural-alphabet')),
    'no-doubled-joshi': moduleInterop(require('textlint-rule-no-doubled-joshi')),
    'no-nfd': moduleInterop(require('textlint-rule-no-nfd')),
    'max-ten': moduleInterop(require('textlint-rule-max-ten')),
    'no-mix-dearu-desumasu': moduleInterop(require('textlint-rule-no-mix-dearu-desumasu')),
    'ja-no-redundant-expression': moduleInterop(require('textlint-rule-ja-no-redundant-expression')),
    'no-synonyms': moduleInterop(require('@textlint-ja/textlint-rule-no-synonyms')),
    'no-insert-re': moduleInterop(require('@textlint-ja/textlint-rule-no-insert-re')),
    'no-dropping-i': moduleInterop(require('@textlint-ja/textlint-rule-no-dropping-i'))
  },
  rulesConfig: {
    prh: {
      rulePaths: [`${path.resolve(__dirname)}/prh-ameba.yml`]
    },
    'max-kanji-continuous-len': true,
    'no-hankaku-kana': true,
    'no-mixed-zenkaku-and-hankaku-alphabet': true,
    'no-insert-dropping-sa': true,
    'prefer-tari-tari': true,
    'ja-no-mixed-period': true,
    'no-dropping-the-ra': true,
    'ja-no-abusage': true,
    'ja-unnatural-alphabet': true,
    'no-doubled-joshi': true,
    'no-nfd': true,
    'max-ten': {
      max: 3
    },
    'no-mix-dearu-desumasu': true,
    'ja-no-redundant-expression': true,
    'no-synonyms': true,
    'no-insert-re': true,
    'no-dropping-i': true
  }
};
