# デザイン刷新メモ

## 今回の刷新方針

- 本文テキストは変更しない。
- 全ページを共通レイアウト化する。
- 主要ナビ、カテゴリナビ、ページ内ナビの3層に整理する。
- PCでは左サイドバーにページ内目次を表示する。
- スマホではページ内ナビを横スクロール型にする。
- ボタン、summary、入力欄は44px前後のタップ領域を確保する。
- 表はスマホで横スクロール可能にする。
- aria-label、aria-current、skip link、focus-visible を追加する。

## 主な対象

- index.html
- endday.html
- report-outline.html
- examples.html
- disease-test-map.html
- weekly-summary.html
- correction.html
- feedback-loop.html
- comments.html
- support.html
- privacy.html
- prints.html
- assets/styles.css
- assets/app.js
