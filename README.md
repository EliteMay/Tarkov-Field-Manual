# Tarkov Field Manual

Escape from Tarkov初心者向けの個人用「生存知識サイト」です。

## 目的

- 初心者が大量の情報を一度に覚えず、優先順に学べるようにする
- 「なぜ死んだか分からない」「回復が分からない」「脱出が分からない」を減らす
- 回復、弾、防具、SCAV/PMC、脱出、金策、設定、基本操作を1か所に集約する
- ゲーム更新で変わる具体値は外部の最新版へ誘導し、サイト内の古い数値を鵜呑みにしない構造にする

## Guide / Profile

- web-project-guide Version: `1.11.0`
- Profiles: `STATIC + TOOL + PUBLIC-CONTENT`
- Visual Ambition: `baseline`

## 主な機能

- 初心者向けの優先順ガイド
- 出撃前チェックリスト
- 「覚えた」進捗保存
- 全文検索（`/` キーで検索欄へ移動）
- 回復 / 弾・防具 / 戦闘 / 脱出 / SCAV / 金策 / 設定 / 操作 / 用語
- PC構成に合わせた設定の開始点
- 最新情報を確認する外部リンク

## 崩してはいけない仕様

1. 最初の優先順位は「生還・回復・弾・SCAV」で、上級知識を前面に出しすぎない。
2. 具体的な弾性能・価格・マップ条件など、更新で変わる情報は最新版の外部データを優先する。
3. チェック進捗は軽量なlocalStorageのみで保存し、Core閲覧機能はStorageが失敗しても使える。
4. 著作権が不明なゲーム画像・マップ画像をリポジトリへ同梱しない。

## 利用方法

GitHub Pagesで公開するのが基本です。ローカルでは `start.bat` を実行するか、任意のStatic Serverでフォルダを配信してください。

## GitHub Pages

- 対応: Yes
- URL: GitHub Pages有効化後 `https://elitemay.github.io/Tarkov-Field-Manual/`
- 注意: すべて相対パスで構成

## ファイル構成

```text
/
├─ index.html
├─ 404.html
├─ assets/
│  ├─ styles.css
│  └─ app.js
├─ README.md
├─ REQUIREMENTS.md
├─ PROJECT_LEARNINGS.md
├─ WORK_REPORT.md
├─ project-meta.json
├─ start.bat
└─ .github/workflows/validate.yml
```

## データ保存

| データ | 保存先 | Schema/Key | Backup |
|---|---|---|---|
| 学習進捗 | localStorage | `tarkov-field-manual:progress:v1` / schemaVersion 1 | 不要（軽量・再作成可能） |

## Development Diagnostics

- Runtime Diagnostics: No（単純なStatic Siteのため過剰実装しない）
- Core機能はStorageなしでも利用可能

## Project Memory

- Long-term learning: `PROJECT_LEARNINGS.md`
- Work history: `WORK_REPORT.md`

## 外部サービス / Dependencies

- 実行時CDN: なし
- 外部API: なし
- 外部DB/Auth: なし
- 参考リンク: Official Escape from Tarkov Wiki / TarkovWiki / 2026 settings guides

## 更新時の注意

- `確認日` と `project-meta.json` の `contentCheckedAt` を更新する
- ゲームバージョンを再確認する
- 弾 / 防具 / 脱出 / Flea / Scav Karmaなど可変情報を最新版と照合する
- UIを変更した場合はDesktop / MobileのScreenshotを確認する

## 既知の問題

- モニター解像度が未確定のため、設定は1080p / 1440p両対応の開始点としている
- 設定のFPS効果はマップ、モニター、ドライバ、ゲーム更新で変動する

## 未確認

- 実際のユーザー環境での各マップFPS
- GitHub Pagesの公開設定（Repositoryは作成済み。Pages有効化後に本番確認）
