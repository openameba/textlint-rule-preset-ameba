# textlint-rule-preset-ameba ![test](https://github.com/openameba/textlint-rule-preset-ameba/workflows/test/badge.svg)

[Ameba](https://www.ameba.jp)で利用する[textlint](https://textlint.github.io/)ルールプリセットです。以下の目的で利用しています。

- 表記ゆれを修正するため
- わかりやすい日本語にするため
- 複数人により書かれた文章を、統一された基準で校正するため

ルールの詳細は[設定ファイル](./lib/textlint-rule-preset-ameba.js)をご覧ください。

## Installation

```
npm install --save-dev @openameba/textlint-rule-preset-ameba
```

or

```
yarn add --dev @openameba/textlint-rule-preset-ameba
```

## Usage

CLI、Node module、エディタ内など様々な方法で利用できます。利用方法の詳細は[textlint](https://github.com/textlint/textlint)をご覧ください。

`.textlintrc`

```json
{
  "rules": {
    "preset-ameba": true
  }
}
```
