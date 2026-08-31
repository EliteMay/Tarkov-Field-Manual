# 要件定義

## 0. Guide / Project Profile

- Adopted Guide Version: 1.11.0
- Profiles: STATIC + TOOL + PUBLIC-CONTENT

## 1. 目的

- Escape from Tarkov初心者が、必要な知識を優先順に学ぶ。
- 情報過多を避け、「次に何を覚えるか」を迷わないようにする。
- 生還率を上げる基礎を先に習得する。

## 2. 使用者・公開範囲

- 自分用を主目的。GitHub Pages公開を想定。
- 主端末: Windows PC
- 主ブラウザ: Desktop browser
- Offline利用: 外部リンク以外は可能

## 3. 必要機能

### MVP

- 初心者向け優先順ガイド
- 出撃前チェック
- 進捗保存
- 検索
- 回復 / 弾 / 防具 / 脱出 / SCAV / 金策 / 設定 / 操作
- 参考情報への外部リンク

### 後回し

- タスク別ルート
- 武器ビルドデータベース
- 弾薬ライブデータAPI連携
- マップ別詳細ページ
- 死亡ログ / 自分用レビュー記録

## 4. 主要利用フロー

```text
サイトを開く
↓
START HEREで最優先項目を見る
↓
出撃前チェックを使う
↓
分からない項目を検索 / セクション参照
↓
覚えた項目を記録
↓
次の基礎へ進む
```

## 5. 画面構成

| 画面 | 目的 | 主操作 | 重要状態 |
|---|---|---|---|
| Single Page | 初心者知識の参照 | 検索 / ナビ / 進捗 | Search Empty / Storage unavailableでも閲覧可 |

## 5A. Visual Quality / Design Direction

- User-facing UI: Yes
- Visual Quality Baseline: Required
- Visual Ambition: baseline
- Design Concept: Field Manual / Tactical Reference
- Reference Direction: 軍用端末風ではなく、情報密度の高い実用品
- Layout Type: Sticky rail + long-form manual
- Navigation Type: Section rail + search
- Content Density: medium-high
- Typography Direction: 見出し強め、本文は読みやすい日本語
- Color Rule: Charcoal + muted olive accent。状態色は必要時のみ。
- Component Rule: 角丸・カード乱用を避け、line / table / row中心
- Decorative Effect Policy: 最小限。背景gridは低コントラスト。
- Wireframeを先に作る: Yes（構造を文章で固定）
- 構造的に異なるDesign Directionを比較する: Not needed（baseline）
- 最終Visual確認方法: Browser / Screenshot（この環境ではChromium headlessが完了せず未確認）
- 避けたいAI Template Pattern: 巨大Hero + 3カード + gradient CTA、glassmorphism、過剰shadow

## 6. データ構成

| データ | 正本 | Schema/ID | 想定最大量 |
|---|---|---|---|
| 学習コンテンツ | HTML | section id | 100 section未満 |
| 学習進捗 | localStorage | schemaVersion 1 + check id | 100件未満 |
| Project metadata | project-meta.json | fixed keys | 1件 |

## 7. 保存方法

| データ | 保存先 | Backup | 失敗時 |
|---|---|---|---|
| 学習進捗 | localStorage | 不要 | 保存なしで閲覧継続 |

- 未保存変更を持つか: No
- 複数タブ競合が問題になるか: No（単純なチェック進捗）

## 8. Development Diagnostics / Project Memory

- `PROJECT_LEARNINGS.md`: Yes
- Runtime Diagnosticsが必要か: No
- 理由: 外部APIなし・小規模Static Siteで、Core状態も軽量なため

## 9. 外部依存

- API: なし
- CDN: なし
- DB / Auth: なし
- 失敗時Fallback: 外部参考リンクが開けなくても本文は読める

## 10. 崩してはいけない仕様

1. 初心者の優先順位を上級者向け情報で埋めない。
2. 可変情報を固定値として過信させない。
3. Storage失敗で閲覧不能にしない。
4. 無断でゲーム画像やマップ画像を同梱しない。

## 11. 高コスト設計判断

- 保存Schema: localStorage schemaVersion 1
- ID: semantic check id
- GitHub Pages: Yes
- Migration: 進捗キー変更時のみ
- 外部Provider: なし
- Page Structure / Navigation: Single Page + sidebar
- Design Direction: Field Manual

## 12. 変更可能範囲

### 原則として改善してよい

- 説明文、知識順序、検索語、レスポンシブ、視認性

### 確認が必要

- 外部DB導入
- 画像・動画の大量同梱
- 学習データ保存方式の変更
- 一般公開向けの大規模ブランド変更

## 13. 性能・規模

- 初期読込: HTML/CSS/JSのみ
- 外部runtime dependency: 0
- 主要コンテンツ: 1 page

## 14. 完成条件

- [x] 主要利用フローが最後まで通る
- [x] 保存 / 再読込が正常（localStorage）
- [x] 主要ボタンが反応
- [x] Search Empty Stateあり
- [ ] 重大な横overflowなし（CSS上は対策済み。実Screenshotは未確認）
- [x] Static Validation成功
- [x] README / 要件 / 作業報告更新
- [x] `PROJECT_LEARNINGS.md`あり
- [x] Visual Quality Baselineを意識したUI
- [ ] Desktop / Mobile screenshotで確認（実行環境のChromium headlessが完了せず未確認）
- [x] 未確認事項を明示

## 15. 未確認予定

- 実ユーザー環境でのGitHub Pages表示
- モニター解像度に合わせた最終Tarkov設定
