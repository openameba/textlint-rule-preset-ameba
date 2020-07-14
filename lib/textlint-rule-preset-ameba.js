const path = require('path');
const { moduleInterop } = require("@textlint/module-interop");

module.exports = {
  rules: {
    // TODO: @tokimari @hiloki @herablog ルールの精査
    /**
     * 必ず直したいルール
     */

    // Amebaに関する表記ゆれを修正する
    prh: moduleInterop(require('textlint-rule-prh')),

    // 漢字が連続する最大文字数を制限する
    'max-kanji-continuous-len': moduleInterop(require('textlint-rule-max-kanji-continuous-len')),

    // 半角カナの利用を禁止する
    'no-hankaku-kana': moduleInterop(require('textlint-rule-no-hankaku-kana')),

    // 全角と半角アルファベットを混在をチェックする
    'no-mixed-zenkaku-and-hankaku-alphabet': moduleInterop(require('textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet')),

    // 不自然なアルファベットを検知する 例) 入力ミスによるtypo
    'ja-unnatural-alphabet': moduleInterop(require('textlint-rule-ja-unnatural-alphabet')),

    // Mac OS XでPDFやFinderからのコピペで問題となる濁点を見つけて、修正する
    'no-nfd': moduleInterop(require('textlint-rule-no-nfd')),

    // 一文に利用できる「、」の数を制限する
    'max-ten': moduleInterop(require('textlint-rule-max-ten')),

    // 文章中の同義語を表記ゆれをチェックする 例) サーバとサーバー
    'no-synonyms': moduleInterop(require('@textlint-ja/textlint-rule-no-synonyms')),

    // 半角文字と全角文字の間にスペースを入れない
    'ja-space-between-half-and-full-width': moduleInterop(require('textlint-rule-ja-space-between-half-and-full-width')),

    // 全角文字どうしの間にスペースを入れない
    'ja-no-space-between-full-width': moduleInterop(require('textlint-rule-ja-no-space-between-full-width')),

    // 中黒または半角スペースを用いてカタカナ語を区切る
    'ja-nakaguro-or-halfwidth-space-between-katakana': moduleInterop(require('textlint-rule-ja-nakaguro-or-halfwidth-space-between-katakana')),

    // かっこの外側、内側ともにスペースを入れない 例) 「よさげです」
    'ja-no-space-around-parentheses': moduleInterop(require('textlint-rule-ja-no-space-around-parentheses')),

    // 入力ミスで同じ単語が連続している問題を発見する 例) 「今日はは暑いです」
    'ja-no-successive-word': moduleInterop(require('textlint-rule-ja-no-successive-word')),

    /**
     * できれば直したいルール
     */

    // サ抜き、サ入れ表現の誤用をチェックする
    'no-insert-dropping-sa': moduleInterop(require('@textlint-ja/textlint-rule-no-insert-dropping-sa')),

    // 片方が「〜たり」表現なのにもかかわらず、もう片方の動詞が「〜たり」ではない場合をエラーとする
    'prefer-tari-tari': moduleInterop(require('textlint-rule-prefer-tari-tari')),

    // パラグラフの末尾に句点記号を付けていることをチェックする
    'ja-no-mixed-period': moduleInterop(require('textlint-rule-ja-no-mixed-period')),

    // ら抜き言葉を検出する 例) お刺身を食べれない。
    'no-dropping-the-ra': moduleInterop(require('textlint-rule-no-dropping-the-ra')),

    // よくある日本語の誤用をチェックする 例) 「適応」と「適用」
    'ja-no-abusage': moduleInterop(require('textlint-rule-ja-no-abusage')),

    // 1つの文中に同じ助詞が連続して出てくるのをチェックする
    'no-doubled-joshi': moduleInterop(require('textlint-rule-no-doubled-joshi')),

    // 敬体(ですます調)と常体(である調)の混在をチェックする
    'no-mix-dearu-desumasu': moduleInterop(require('textlint-rule-no-mix-dearu-desumasu')),

    // その文から省いても意味が通じるような冗長な表現を禁止する 例) することができる
    'ja-no-redundant-expression': moduleInterop(require('textlint-rule-ja-no-redundant-expression')),

    // れ足す言葉を検出する 例) お酒は飲めれない。
    'no-insert-re': moduleInterop(require('@textlint-ja/textlint-rule-no-insert-re')),

    // い抜き言葉を検出する 例) 開発してます。
    'no-dropping-i': moduleInterop(require('@textlint-ja/textlint-rule-no-dropping-i')),

    // 二重否定を検出する 例) 〜ないことはない
    'no-double-negative-ja': moduleInterop(require('textlint-rule-no-double-negative-ja'))
  },
  rulesConfig: {
    prh: {
      rulePaths: [`${path.resolve(__dirname)}/prh-ameba.yml`]
    },
    'max-kanji-continuous-len': true,
    'no-hankaku-kana': true,
    'no-mixed-zenkaku-and-hankaku-alphabet': true,
    'ja-unnatural-alphabet': true,
    'no-nfd': true,
    'max-ten': {
      max: 3
    },
    'no-synonyms': true,
    'ja-space-between-half-and-full-width': true,
    'ja-no-space-between-full-width': true,
    'ja-nakaguro-or-halfwidth-space-between-katakana': true,
    'ja-no-space-around-parentheses': true,
    'ja-no-successive-word': true,
    'no-insert-dropping-sa': {
      severity: 'warning'
    },
    'prefer-tari-tari': {
      severity: 'warning'
    },
    'ja-no-mixed-period': {
      severity: 'warning'
    },
    'no-dropping-the-ra': {
      severity: 'warning'
    },
    'ja-no-abusage': {
      severity: 'warning'
    },
    'no-doubled-joshi': {
      severity: 'warning'
    },
    'no-mix-dearu-desumasu': {
      severity: 'warning'
    },
    'ja-no-redundant-expression': {
      severity: 'warning'
    },
    'no-insert-re': {
      severity: 'warning'
    },
    'no-dropping-i': {
      severity: 'warning'
    },
    'no-double-negative-ja': {
      severity: 'warning'
    }
  }
};
