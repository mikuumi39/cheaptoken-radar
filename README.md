# CheapToken Radar

把各家 AI API 的价格，统一成「¥／100 万 Token」放进一张表，直接比价下单。

## 用途

跑 OpenCode／Codex／Claude Code 这类 Agent 编程，Token 账单很容易失控。这个站把分散的报价整理成决策看板：

- 统一换算成 ¥／M（美元平台约按 ¥7.2/$）
- 一眼看清：地板价、免费模型、活动包、长期按量价
- 重点提醒：输出价往往比输入价更伤钱包

## 两个页面

- **核心账本（首页）**：18 项精选价目 · 白嫖速报 · 筛选排序 · 月成本试算 · 计价陷阱 · 八种典型买法
- **全面监测**：12 平台 × 54 模型 · 30 秒刷新 · 最低／最高价 · 价格×智力曲线 · 官网直达

三语切换（简／繁／EN），明暗双主题，Excel 一键导出。

## 收录平台

SCNet · SiliconFlow · OpenRouter · DeepSeek · 百炼（阿里）· 智谱 · Moonshot（Kimi）· MiniMax · OpenAI · Anthropic · Google · xAI

## 本地开发

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # 产出 dist/
```

技术栈：React 18 · TypeScript · Vite · Tailwind v4 · Recharts · SheetJS。

## 部署

推送到 `main` 由 Actions 自动部署到 GitHub Pages；`vite.config.js` 已设 `base: "./"`，任意子路径可直接用。

## 价格说明

价格为整理时的公开报价，仅供采购参考；活动价通常有时间和限购条件，下单前以官方页面为准。「即时监测」的浮动为模拟演示，非真实报价。

## 授权

MIT