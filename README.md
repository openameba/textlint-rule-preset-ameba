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
    "@openameba/preset-ameba": true
  }
}
```

## Release

1. リリース対象の成果物を `main` ブランチにマージします
2. GitHub Actionsの[versioning](https://github.com/openameba/textlint-rule-preset-ameba/actions/workflows/version.yml)
    1. 「Run workflow」からアップデートするバージョンを記載のジョブを実行
    2. package.jsonのversionがアップデートされ自動的にPull requestが作成されます
    3. バージョンアップのPull requestを `main` ブランチにマージ
3. GitHub Actionsの[publish](https://github.com/openameba/textlint-rule-preset-ameba/actions/workflows/publish.yml)より「dry run」にチェックを入れた状態でジョブを実行
4. 「dry run」のジョブが成功したら「dry run」のチェックボックスを外してジョブを実行
5. リリースが完了したら[Releases](https://github.com/openameba/textlint-rule-preset-ameba/releases)の「Draft a new release」からリリースノートを作成しましょう
    1. 対象のリリースバージョンを選択後、「Generate release notes」ボタンを押して「Publish release」します
6. リリース作業完了となります
