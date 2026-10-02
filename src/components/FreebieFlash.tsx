import type { Lang } from "../i18n";
import { useI18n } from "../i18n";
import Reveal from "./Reveal";

/* ─────────────────────────────────────────────
   🆓 白嫖速报：近期可以免费/低成本白嫖 AI 的入口
   三语内容为一处本地数据，新增条目只需往 TIPS 加。
   ───────────────────────────────────────────── */

type Tip = {
  icon: string;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
  tags: Record<Lang, string[]>;
  accent: string; // 卡片左边的强调色
  links: { label: Record<Lang, string>; href: string }[];
};

const TIPS: Tip[] = [
  {
    icon: "🐇",
    accent: "border-l-emerald-400/80",
    title: {
      zhCN: "隐形LLM：Space Bunny（太空兔）限时免费",
      zhTW: "隱形LLM：Space Bunny（太空兔）限時免費",
      en: "Stealth LLM: Space Bunny, free for a limited time",
    },
    desc: {
      zhCN:
        "匿名发布的神秘模型，登顶全球调用量第一、效果接近 Opus 5。在 OpenRouter / AIMLAPI 搜 stealth/space-bunny-alpha 即可接入，1M 上下文＋推理可调，限时免费白嫖。",
      zhTW:
        "匿名發布的神祕模型，登頂全球呼叫量第一、效果接近 Opus 5。在 OpenRouter / AIMLAPI 搜 stealth/space-bunny-alpha 即可接入，1M 上下文＋推理可調，限時免費白嫖。",
      en:
        "An anonymous mystery model topping global call volume, with results close to Opus 5. Search stealth/space-bunny-alpha on OpenRouter / AIMLAPI — 1M context, adjustable reasoning, free for now.",
    },
    tags: {
      zhCN: ["限时免费", "1M 上下文", "匿名模型"],
      zhTW: ["限時免費", "1M 上下文", "匿名模型"],
      en: ["Limited free", "1M context", "Anonymous"],
    },
    links: [
      { label: { zhCN: "来源推文", zhTW: "來源推文", en: "Source tweet" }, href: "https://x.com/opencode/status/2102767716666941864?s=20" },
      { label: { zhCN: "OpenRouter 价格页", zhTW: "OpenRouter 價格頁", en: "OpenRouter page" }, href: "https://openrouter.ai/stealth/space-bunny-alpha" },
    ],
  },
  {
    icon: "🦋",
    accent: "border-l-violet-400/80",
    title: {
      zhCN: "Meta Muse：AI 智能体，白嫖 token 的新入口",
      zhTW: "Meta Muse：AI 智能體，白嫖 token 的新入口",
      en: "Meta Muse: the AI agent with free tokens",
    },
    desc: {
      zhCN:
        "Meta 新版个人 AI 智能体，深度集成 WhatsApp / Instagram，个人用户有免费额度，正陆续向中小企业开放。日常杂活丢给它，省下你付费 API 的 token。",
      zhTW:
        "Meta 新版個人 AI 智能體，深度整合 WhatsApp / Instagram，個人用戶有免費額度，正陸續向中小企業開放。日常雜活丟給它，省下你付費 API 的 token。",
      en:
        "Meta's new personal AI agent, deeply integrated with WhatsApp / Instagram, with free credits for individuals and an ongoing SMB rollout. Offload daily chores to it and save your paid API tokens.",
    },
    tags: {
      zhCN: ["免费额度", "个人 AI", "Agent"],
      zhTW: ["免費額度", "個人 AI", "Agent"],
      en: ["Free credits", "Personal AI", "Agent"],
    },
    links: [
      { label: { zhCN: "中文介绍", zhTW: "中文介紹", en: "Overview (CN)" }, href: "https://www.zhiding.cn/ai/2026/0909/3198805.shtml" },
      { label: { zhCN: "入门指南", zhTW: "入門指南", en: "How to use" }, href: "https://zapier.com/blog/muse-ai/" },
    ],
  },
  {
    icon: "🐻",
    accent: "border-l-coral-400/80",
    title: {
      zhCN: "百度 20 元代金券 → ¥4.9 推理包",
      zhTW: "百度 20 元代金券 → ¥4.9 推理包",
      en: "Baidu ¥20 voucher → ¥4.9 reasoning pack",
    },
    desc: {
      zhCN:
        "百度智能云发 20 元代金券，抵扣后推理套餐约 ¥4.9 拿下。⚠️ 体验注意：白天也可能触发 429 限流、响应偏慢，跑批量任务记得做指数退避重试。",
      zhTW:
        "百度智能雲發 20 元代金券，抵扣後推理套餐約 ¥4.9 拿下。⚠️ 體驗注意：白天也可能觸發 429 限流、回應偏慢，跑批量任務記得做指數退避重試。",
      en:
        "Baidu AI Cloud gives out a ¥20 voucher — the reasoning pack lands around ¥4.9 after the discount. ⚠️ Heads-up: 429 rate-limits can still hit during the day, so batch scripts should retry with exponential backoff.",
    },
    tags: {
      zhCN: ["券后 ¥4.9", "⚠️ 可能 429", "新人福利"],
      zhTW: ["券後 ¥4.9", "⚠️ 可能 429", "新人福利"],
      en: ["¥4.9 after voucher", "⚠️ 429 risk", "New-user perk"],
    },
    links: [
      { label: { zhCN: "百度智能云", zhTW: "百度智能雲", en: "Baidu AI Cloud" }, href: "https://cloud.baidu.com/" },
    ],
  },
];

export default function FreebieFlash() {
  const { lang, t } = useI18n();

  return (
    <section id="freebie" className="scroll-mt-28">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-xs font-bold tracking-[0.3em] text-emerald-400">🆓 · FREELOAD RADAR</p>
          <h2 className="mt-2 font-display text-3xl font-black text-mist-100 sm:text-4xl">{t("fbTitle")}</h2>
        </div>
        <p className="font-mono text-[11px] text-mist-500">
          {lang === "en" ? "Collected " : "收录日期 "}
          <span className="font-bold text-emerald-300">2026-10-02</span>
          {lang === "en" ? " · refreshed whenever a new freebie drops" : " · 有新白嫖入口会持续更新"}
        </p>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TIPS.map((tip, i) => (
          <Reveal key={tip.title[lang]} delay={i * 110}>
            <article className={`glass flex h-full flex-col rounded-[1.75rem] border-l-4 ${tip.accent} p-6`}>
              <header className="flex items-start gap-3">
                <span className="text-2xl leading-none">{tip.icon}</span>
                <h3 className="font-display text-lg font-black leading-snug text-mist-100">
                  {tip.title[lang]}
                </h3>
              </header>

              <ul className="mt-3 flex flex-wrap gap-1.5">
                {tip.tags[lang].map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line-14 bg-fill-5 px-2.5 py-0.5 font-mono text-[10px] font-bold text-mist-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm leading-relaxed text-mist-500">{tip.desc[lang]}</p>

              <footer className="mt-auto flex flex-wrap gap-2 pt-5">
                {tip.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-line-16 bg-fill-5 px-3 py-1.5 font-mono text-[11px] font-bold text-violet-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400/60 hover:bg-violet-500/12"
                  >
                    {link.label[lang]} ↗
                  </a>
                ))}
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}