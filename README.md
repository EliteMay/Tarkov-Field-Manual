# Tarkov Field Manual

Escape from Tarkov初心者向けの個人用「生存知識サイト」です。

## 目的

- 初心者が大量の情報を一度に覚えず、優先順に学べるようにする
- 「なぜ死んだか分からない」「回復が分からない」「脱出が分からない」を減らす
- 回復、弾、防具、SCAV/PMC、脱出、金策、設定、基本操作を1か所に集約する
- 死亡ロス、FIR、保険、Trader、Quest、Hideout、Stashなど「ゲームを続けるための知識」も初心者段階から確認できるようにする
- ゲーム更新で変わる具体値は外部の最新版へ誘導し、サイト内の古い数値を鵜呑みにしない構造にする

## Guide / Profile

- web-project-guide Version: `1.11.0`
- Profiles: `STATIC + TOOL + PUBLIC-CONTENT`
- Visual Ambition: `baseline`

## 主な機能

### 基礎トップ `index.html`

- 初心者向けの最小優先順ガイド
- 出撃前チェックリスト
- 「覚えた」進捗保存
- 全文検索（`/` キーで検索欄へ移動）
- 回復 / 弾・防具 / 戦闘 / 脱出 / SCAV / 金策 / 設定 / 操作 / 用語
- PC構成に合わせた設定の開始点

### 初心者大全 `beginner.html`

- 最初の5レイド → Lv1〜5 → Lv5〜14 → Lv15+ の学習ロードマップ
- 死亡時に失う物 / Secure Container / Gear Fear
- Survived / Run Through / KIA / MIA / Found in Raid
- PMCとSCAVの使い分け
- 最初の装備優先順位
- 医療の詳しい使い分け
- Hydration / Energy / Weight / Stamina
- Ammo / Armor / Plate / Durability
- 武器耐久 / 故障 / Ergo / Recoil
- Audio / Earpiece / 移動
- Ground Zeroを含むマップ学習順
- SCAV Karma / Fence Reputation
- Insurance
- Loot価値 / 持ち帰り判断
- Stash整理
- Traderの役割
- Quest / Daily Task
- Hideout / Craft
- Lv15前後の金策
- 初心者の習慣チェック

## 崩してはいけない仕様

1. 最初の優先順位は「生還・回復・弾・SCAV」で、上級知識を前面に出しすぎない。
2. `index.html` は最低限を素早く確認するページ、`beginner.html` は詳細を調べるページとして役割を分ける。
3. 具体的な弾性能・価格・マップ条件など、更新で変わる情報は最新版の外部データを優先する。
4. チェック進捗は軽量なlocalStorageのみで保存し、Core閲覧機能はStorageが失敗しても使える。
5. 著作権が不明なゲーム画像・マップ画像をリポジトリへ同梱しない。

## 利用方法

GitHub Pagesで公開しています。ローカルでは `start.bat` を実行するか、任意のStatic Serverでフォルダを配信してください。

## GitHub Pages

- 対応: Yes
- URL: `https://elitemay.github.io/Tarkov-Field-Manual/`
- 初心者大全: `https://elitemay.github.io/Tarkov-Field-Manual/beginner.html`
- 注意: すべて相対パスで構成
- Pages build / deployment: 2026-08-31に成功確認済み

## ファイル構成

```text
/
├─ index.html
├─ beginner.html
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
- 参考: Official Escape from Tarkov Wiki / Tarkov.dev / interactive map resources / settings guides

## 更新時の注意

- `確認日` と `project-meta.json` の `contentCheckedAt` を更新する
- ゲームバージョンを再確認する
- 弾 / 防具 / 脱出 / Flea / Scav Karma / FIR / Insuranceなど可変情報を最新版と照合する
- Beginner pageの順番を崩して、いきなり上級情報を最上部へ出さない
- UIを変更した場合はDesktop / MobileのScreenshotを確認する

## 既知の問題

- モニター解像度が未確定のため、設定は1080p / 1440p両対応の開始点としている
- 設定のFPS効果はマップ、モニター、ドライバ、ゲーム更新で変動する

## 未確認

- 実際のユーザー環境での各マップFPS
- Beginner pageのDesktop / Mobile最終Visual Screenshot

## 次に価値が高い拡張

1. 各マップの「初心者が覚える目印3つ + 脱出2つ + 危険地帯」専用ページ
2. 口径別の「初心者が使う弾 / 避ける弾」早見
3. 「このアイテム売っていい？」Quest / Hideout / Flea判断ページ
4. 現在のPMC Levelを選ぶと優先ページを変えるStage機能
5. 死亡理由を記録して、よくある死因を集計する機能
