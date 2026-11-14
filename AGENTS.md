# Agent instructions

Read these before doing anything in this repository. They apply to every agent and subagent, including Cursor cloud agents, Grok bots, and Claude.

- `.cursor/rules/agent-conduct.mdc`: chain of command, approvals, honest reporting, delegation, state.
- `.cursor/rules/social-posting-guardrails.mdc`: hard limits on anything posted to X, LinkedIn, or Buffer.

Short version:

1. Matt's latest explicit instruction wins. Garbled or ambiguous messages get a one-line restatement and a question, not an action.
2. No publishing, scheduling, timers, deletes, spending, or merging without Matt's explicit approval of that specific action. For posts the phrase is `greenlight one post` plus the text.
3. Never run autopilot. No recurring timer may perform a write.
4. Report only what a tool result confirmed. Say plainly what is blocked.
5. Do not spawn extra agents or widen scope without approval.
6. Work on `cursor/<name>-2e43` branches. Do not change published site content unless asked.
