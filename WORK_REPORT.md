# 作業報告書 — 2026-08-31

## 実施内容

- web-project-guide 1.11.0の新規Web制作ルートを確認
- Escape from Tarkovの現行バージョン 1.0.5.0.45581 を確認
- 初心者向け情報アーキテクチャを作成
- 出撃前 / 回復 / 弾・防具 / 戦闘 / 脱出 / SCAV / 経済 / 設定 / 操作 / 用語を実装
- localStorageによる進捗保存を実装
- 全文検索を実装
- Desktop / Mobile responsive layoutを実装
- 外部Runtime dependencyを0にした
- 公式Wiki・マップ・設定資料への更新確認リンクを追加

## Content確認

主に以下を照合:
- Official Escape from Tarkov Wiki: current version / controls / health / ballistics / Scavs / insurance / found in raid
- TarkovWiki interactive maps
- 2026年8月時点のsettings guides

## Visual

- Field Manual direction
- Card乱用ではなくrow / table / rail中心
- Accentはmuted olive 1色を基本
- Desktop / mobile用responsive CSSを実装
- Chromium headlessでScreenshot確認を試行したが、この実行環境ではプロセスが完了せずVisualは未確認

## 未確認

- Desktop / Mobileの最終Visual Screenshot（Chromium headless実行不可）
- 実ユーザーPCでのGitHub Pages本番表示
- 実際の1080p / 1440pどちらを使用しているか
- 各マップの実FPS

## 次に価値が高い拡張

1. マップごとの「初心者が覚える目印3つ + 脱出2つ」
2. 現在使っている銃ごとの「買える弾 / 避ける弾」早見
3. 死亡理由を1クリック記録して、よくある死因を集計する機能
4. タスク進行に合わせて次に覚えるページを変えるStage機能
