# 作業報告書 — 2026-08-31

## 初期制作

- web-project-guide 1.11.0の新規Web制作ルートを確認
- Escape from Tarkovの現行バージョン 1.0.5.0.45581 を確認
- 初心者向け情報アーキテクチャを作成
- 出撃前 / 回復 / 弾・防具 / 戦闘 / 脱出 / SCAV / 経済 / 設定 / 操作 / 用語を実装
- localStorageによる進捗保存を実装
- 全文検索を実装
- Desktop / Mobile responsive layoutを実装
- 外部Runtime dependencyを0にした
- GitHub Pages deployment成功を確認

## 初心者大全拡張

ユーザー要望「初心者に必要な情報から、もっと情報量を増やす」に対応。

### 追加Page

- `beginner.html` — Beginner Complete Guide
- トップページのSidebarからJavaScriptで `初心者大全 →` 導線を追加
- 既存の検索・学習進捗機能を再利用

### 追加Content

- 最初の5レイド / Lv1〜5 / Lv5〜14 / Lv15+ の学習ロードマップ
- 死亡時の装備ロスとSecure Container
- Survived / Run Through / KIA / MIA / Found in Raid
- PMC / SCAVの使い分け
- 初心者Loadout優先順位
- Heavy/Light Bleed、Fracture、Destroyed body part、Surgery
- Hydration / Energy / Overweight / Stamina
- Ammo Damage / Penetration / Armor Zone / Plate / Durability
- Weapon Condition / Malfunction / Ergo / Recoil
- Earpiece / Audio / Movement
- Ground Zeroを入口にしたMap学習順
- Scav Karma / Fence Reputation
- InsuranceとMIA・回収対象外Location
- Lootの持ち帰り判断
- Stash整理
- Traderの役割
- Quest / Daily Task
- Hideout / Craft
- Lv15前後のMoney progression
- 初心者の習慣10項目

## Content確認

2026-08-31時点で主に以下を再照合:

- Official Escape from Tarkov Wiki — Current version
- Health system
- Ballistics / Armor plates
- Scavs / Fence / Scav Karma
- Insurance
- Found in raid
- Trading / Flea Market
- Quests
- Hideout / Crafts
- Ground Zero
- Weapon malfunctions
- Earpieces
- Tarkov.dev live data

確認した主な現行条件:

- Flea MarketでPlayer Offerを出せるのはPMC Level 15から
- FIR維持の基本はSurvived
- Run Through回避基準: 200 EXP以上またはレイド開始から7分以上
- Ground Zero matchmaking: Level <21 / Level 21+に分離
- Scav extract: Fence Rep +0.01
- Player Scav kill: -0.10（Traitor等の例外あり）
- PMC Vehicle extract: 場所ごと初回 +0.20
- Co-op extract: 場所ごと初回 +0.25
- Fence Rep +6で追加販売タブ / 30% discount
- Condition起因の機械的Weapon MalfunctionはDurability 93%超では発生しない

## Validation変更

`.github/workflows/validate.yml` に以下を追加:

- `beginner.html` 必須存在確認
- Beginner page主要Section存在確認
- TopからBeginner guideへの導線Contract確認

## Visual

- 既存Field Manual directionとComponentを再利用
- 新Page追加のため新規UI Framework / CDNは追加していない
- Layout / typography / responsive rulesは既存Baselineを継承
- Browser Screenshotによる最終Visual確認はこのChatGPT実行環境では未確認

## 未確認

- `beginner.html` のDesktop / Mobile最終Visual Screenshot
- 実ユーザーPCでの長文Pageのスクロール感・読みやすさ
- 実際の1080p / 1440pどちらを使用しているか
- 各マップの実FPS

## 次に価値が高い拡張

1. 各マップ専用初心者Page（目印3つ + 主要脱出2つ + 危険地点）
2. 口径別「初心者が使う弾 / 避ける弾」早見
3. 「このアイテム売っていい？」Quest / Hideout / Flea判断DB
4. PMC Levelに応じてTopの学習Stageを変える機能
5. 死亡理由を1クリック保存して死因を集計する機能
