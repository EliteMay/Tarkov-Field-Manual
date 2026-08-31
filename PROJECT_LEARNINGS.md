# Project Learnings

## Success Patterns

### S-LOCAL-001: 初心者サイトは「網羅」より「順番」
- Evidence: EFTは回復・弾・脱出・装備・経済など同時に覚える対象が多い。
- Decision: START HEREで生還 / 回復 / 弾 / SCAVを最優先に固定。
- Reuse: 複雑なゲームの初心者ガイドでは段階式を優先する。

### S-LOCAL-002: 可変数値は外部最新版へ逃がす
- Evidence: Ammo / Flea / Map / settingsはアップデートで変わる。
- Decision: 原理を本文に残し、具体値はOfficial Wiki等へリンク。
- Reuse: Live game dataを静的サイトへ大量hardcodeしない。

### S-LOCAL-003: 画像なしでも「ゲームっぽさ」は構造で作れる
- Evidence: 著作権・ライセンス不明のゲーム画像を避けたい。
- Decision: Field Manual風のline / number / table / muted oliveで固有感を作る。
- Reuse: 外部assetなしでもTypography / spacing / information hierarchyを優先する。

## Known Risks

### R-001: SettingsはPCとPatch依存
- 影響: 推奨値を絶対値にすると古くなる。
- 対策: 「開始点」と明記し、同一ルート比較を推奨。

### R-002: 初心者向けでも情報量が増えやすい
- 影響: 本来の「何から覚えるか」が弱くなる。
- 対策: Advanced contentは後段または別ページへ分離する。
