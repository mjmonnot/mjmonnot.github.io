---
layout: page
title: "Research Themes"
permalink: /themes/leadership-and-wellbeing.html
---

<style>
.theme-jump { font-size: 0.95rem; color: #5f6b7a; margin: 0 0 0.4em; }
.theme-label { margin-top: 3.2em; }
.theme-takeaway { font-size: 1.5rem; line-height: 1.25; margin-top: 0.1em; }
.theme-sub { margin-top: 1.6em; }
.theme-table { margin: 0.6em 0 1.2em; }
.theme-table caption { caption-side: top; text-align: left; font-weight: 600; color: #1a2c4e; padding: 0 0 6px; }
.theme-updated { font-size: 0.9rem; color: #8a94a3; margin-top: 2.4em; }
</style>

# Research Themes

My research asks what keeps people well and effective at work, and what changes for them as AI arrives. The papers were not designed as a single program of research. They return to the same few questions, grouped here into six themes that begin with the two newest lines of work.

<div class="key-findings">
<p class="key-findings-label">New in 2026</p>
<ol>
<li>The 2026 preprints take the work on stress, self-compassion, meaning, and personality into national panels, randomized trials, and open data from other research teams.</li>
<li>One new line of work looks at AI from the employee&rsquo;s side. In a Dutch national panel, employees who felt replaceable by AI in 2020 were less satisfied with their jobs and lives five years later. How exposed their occupation was to AI did not carry that cost.</li>
<li>A second new line builds AI agents for research work and tests whether agents can improve themselves. In a first trial on synthetic tasks, a proposed change to the agents&rsquo; instructions had to do better on tasks held back from practice. It did not, and it was rejected.</li>
</ol>
</div>

<p class="theme-jump"><strong>Jump to:</strong> <a href="#ai-at-work">People and AI at work</a> &middot; <a href="#ai-agents">AI agents as research tools</a> &middot; <a href="#stress-and-recovery">Stress, support, and recovery</a> &middot; <a href="#self-compassion">Self-compassion</a> &middot; <a href="#goals-and-meaning">Goals, meaning, and motivation</a> &middot; <a href="#personality-and-selection">Personality, skills, and selection</a></p>

<p class="section-label theme-label" id="ai-at-work">Theme 1 &middot; People and AI at work</p>

<hr class="label-rule">

<h2 class="theme-takeaway">Feeling replaceable by AI carried the cost, not how exposed the occupation was</h2>

Three 2026 studies look at AI from the side of the person doing the job.

- **Dutch employees over five years.** Those who felt in 2020 that AI or robots could replace them were less satisfied with their jobs and lives in 2025. The feeling of being replaceable carried the cost, not how exposed their occupation was to AI.
- **Nurses over a decade.** In 7,695 nursing-forum posts coded by a language model, nurses named an AI system seven times. About one post in twenty named staffing ratios, productivity metrics, or documentation load, and the usual issue was losing control over how the work is done.
- **Professionals given ChatGPT.** In a reanalysis of a randomized experiment, professionals given access to ChatGPT enjoyed a writing task more. Two months later, the share who had used a chatbot at work in the past week was about 13 percentage points higher among them, with a range of about 3 to 24 points.

**Papers.** [Upward and Downward Spirals in Employee Well-Being](/publications/2026-wellbeing-spirals.html) · [The AI Paradox](/publications/2026-ai-paradox-meaningful-work.html) · [ChatGPT Access and Writing Skill](/publications/2026-chatgpt-writing.html)

<p class="section-label theme-label" id="ai-agents">Theme 2 &middot; AI agents as research tools</p>

<hr class="label-rule">

<h2 class="theme-takeaway">AI agents can do parts of a research workflow. Tests they have not practiced on decide what to keep.</h2>

I build AI agents for research work and test them as I would test any assessment: against a standard fixed in advance, on material held back from development.

- **Agents against human teams.** I entered the 2026 SIOP Machine Learning Competition as a one-person team working with AI agents. The entry pulled the reported correlations out of published articles with local language and vision models, and it ranked 6th of 24 on the development set.
- **Language models as measurement tools.** A post-hoc solution to the 2019 SIOP competition combined language-model scoring with classical text models. It predicted Big Five traits from five short written answers at a mean *r* of .32 on the private test set, which it touched once. The 2019 first-place entry scored .26. In the AI Paradox study, six prompt designs were tested once against a standard tied to agreement between human coders. None met it, so humans coded every predictor.
- **Agent teams with separated duties.** I design and coordinate teams of agents in which each has one job: holding the data partitions, building models on training data, recomputing results blind, auditing for leakage, or checking numbers and citations. Under the team's rules, no agent checks its own work. The workflow follows published work on running independent tasks in parallel (Kim et al., 2024) and on why multi-agent systems fail (Cemri et al., 2025).

<h3 class="theme-sub">Self-improving agents: the first proposed change was rejected</h3>

In November 2026 I directed a coding agent to set up local agents that run on Qwen3 8B through Ollama, inside the OpenClaw gateway, with no paid API. A learning loop records the outcome of each task and proposes changes to the agents' instructions and skills from a fixed catalog. A change is kept only if it scores higher on held-back tasks in repeated runs and breaks nothing that worked before. Answers are scored against the exact expected text or data, with no model acting as judge.

<table class="theme-table">
<caption>First run of the learning loop, 16 November 2026</caption>
<thead>
<tr><th>Tasks</th><th>Current instructions</th><th>Proposed change</th></tr>
</thead>
<tbody>
<tr><td>Used to develop the change (4 tasks, each run twice)</td><td>4 of 8 correct</td><td>6 of 8 correct</td></tr>
<tr><td>Held back (8 tasks, each run twice)</td><td>10 of 16 correct</td><td>9 of 16 correct</td></tr>
</tbody>
</table>

The proposed change scored higher on the tasks used to develop it and lower on the tasks held back. It was rejected, and a verified replay reproduced the rejection. A test of the review step added a second result: the same model, acting as reviewer, approved an answer with extra words where an exact answer was required. Where the correct answer is known, an exact check can now be set, and a failed check blocks approval.

The agents are configured with limits: at most three automated review rounds per task, file access limited to one folder, and shell access, external actions, and unattended runs switched off. So far they have worked only on synthetic test tasks, and they are not set up to reach research data. They have not been fine-tuned, a step that waits for a larger set of independently checked examples.

**Projects and papers.** [SIOP Machine Learning Competitions](/projects.html#siop-machine-learning-competitions) · [The AI Paradox](/publications/2026-ai-paradox-meaningful-work.html)

<p class="apa-cite">Cemri, M., Pan, M. Z., Yang, S., Agrawal, L. A., Chopra, B., Tiwari, R., Keutzer, K., Parameswaran, A., Klein, D., Ramchandran, K., Zaharia, M., Gonzalez, J. E., &amp; Stoica, I. (2025). <em>Why do multi-agent LLM systems fail?</em> arXiv. <a href="https://arxiv.org/abs/2503.13657">https://arxiv.org/abs/2503.13657</a></p>

<p class="apa-cite">Kim, S., Moon, S., Tabrizi, R., Lee, N., Mahoney, M. W., Keutzer, K., &amp; Gholami, A. (2024). An LLM compiler for parallel function calling. <em>Proceedings of Machine Learning Research, 235</em>, 24370&ndash;24391. <a href="https://arxiv.org/abs/2312.04511">https://arxiv.org/abs/2312.04511</a></p>

<p class="section-label theme-label" id="stress-and-recovery">Theme 3 &middot; Stress, support, and recovery</p>

<hr class="label-rule">

<h2 class="theme-takeaway">Where stress comes from matters, and switching off from work can be trained</h2>

- **Source of stress.** Role stress from a supervisor was most strongly tied to a weaker sense that one's work is meaningful. Supportive communication from coworkers partly cushioned it.
- **Recovery training.** Two six-week programs, one cognitive-behavioral and one mindfulness-based, each helped employees mentally switch off from work. Among employees who answered the follow-up survey, the gain over a wait-list group was about 0.9 points on a 7-point scale.
- **Early warning.** A short intake survey predicted, six months ahead, which Head Start staff would report high stress or little intention to stay in their jobs. Tested on staff whose data had been held back, it ranked a staff member who later struggled above one who did not about 7 times in 10.
- **Losses and gains.** In 18 years of annual surveys in a Dutch panel, a rise in distress was followed at the next survey by a larger drop in self-esteem than an equal rise in self-esteem was followed by a drop in distress.

**Papers.** [Subjective Well-Being at Work](/publications/2014-swb-stress-support.html) (2014) · [Active Recovery Is Not Just for Athletes](/publications/2026-recovery-training.html) · [Stress and Turnover in Helping Professions](/publications/2026-stress-turnover-headstart.html) · [Upward and Downward Spirals in Employee Well-Being](/publications/2026-wellbeing-spirals.html)

<p class="section-label theme-label" id="self-compassion">Theme 4 &middot; Self-compassion</p>

<hr class="label-rule">

<h2 class="theme-takeaway">More self-compassionate coaches reported less burnout, and more self-compassionate employees felt less overwhelmed by digital technology</h2>

Three 2026 studies ask whether that difference between people also appears within one person or cushions a shock.

- **Sports coaches.** Coaches who were more self-compassionate reported less burnout than coaches who were less so (*r* = −.48). Within the same coach, a period of higher-than-usual self-compassion was not reliably followed by lower burnout three months later.
- **German employees, 2018 to 2024.** Employees who were more self-compassionate in 2018 felt less overwhelmed by digital technology in 2024. They were also less lonely, a link that was not one of the planned tests. Across the 2020 to 2021 disruption, life satisfaction fell by about the same amount at every level of self-compassion.
- **A two-week meditation program.** Among 65 employees in an online program with no comparison group, self-compassion was no higher on the days they meditated than on the days they did not. A benefit that builds over days and carries into days without practice would not appear in a day-by-day comparison.

Together the studies show a stable difference between people. Neither within-person study showed a short-term effect, and self-compassion did not cushion the 2020 to 2021 disruption.

**Papers.** [Does Self-Compassion Precede Lower Burnout in Sports Coaches?](/publications/2026-coach-burnout.html) · [Buffer or Baseline?](/publications/2026-buffer-or-baseline.html) · [Does Daily Meditation Increase Self-Compassion?](/publications/2026-meditation-self-compassion-diary.html)

<p class="section-label theme-label" id="goals-and-meaning">Theme 5 &middot; Goals, meaning, and motivation</p>

<hr class="label-rule">

<h2 class="theme-takeaway">In surveys across Asian countries, people who put relationships, health, and growth ahead of money were more satisfied, including with their income. Central Asia was the exception.</h2>

- **Goals.** In surveys of about 46,000 people across Asian countries, those who rated health, relationships, community, or personal growth as more important than money and possessions reported more satisfaction with their lives, jobs, and incomes. That pattern did not hold in Central Asia.
- **Income.** More income went with more satisfaction, and each further step up added less. Among Chinese employees, a strong materialistic orientation weakened the gain from additional income.
- **Supervisors and meaning.** Communication with a supervisor went with a stronger sense that work is meaningful, most clearly for employees of lower social status.
- **Incentives.** A study across nations and cultural clusters found no single effect of incentives on intrinsic motivation. The effect depended on how the incentives were structured and understood.

**Papers.** [The Good Life Versus the "Goods Life"](/publications/2022-goods-life-swb.html) (2022) · [The Effect of Incentives on Intrinsic Motivation](/publications/2018-intrinsic-motivation.html) (2018) · [Marginal Utility and Economic Development](/publications/2017-marginal-utility-china.html) (2017) · [Relational-Interdependent Self-Construal With Supervisor](/publications/2016-supervisor-riscs.html) (2016). See also [The AI Paradox](/publications/2026-ai-paradox-meaningful-work.html) on where helping-profession workers find meaning in their work.

<p class="section-label theme-label" id="personality-and-selection">Theme 6 &middot; Personality, skills, and selection</p>

<hr class="label-rule">

<h2 class="theme-takeaway">In a U.S. study, the share of adults in a distressed personality pattern fell from about 30% to 7% over two decades</h2>

- **Patterns across midlife.** In a U.S. study that followed adults for about 20 years, people fell into four personality patterns: Resilient, Distressed, Reserved, and Antagonistic. A second sample recovered the Resilient pattern but not the Distressed pattern as its own group. Among those who left the Distressed pattern, people with a stronger sense of purpose in life were somewhat more likely to recover than to withdraw. Knowing which pattern a person fit did not predict skills and outcomes any better than their individual trait scores did.
- **Hiring.** In simulations fitted to published applicant evidence, with four in ten applicants faking on personality tests, 22% to 36% of hiring decisions changed and the average job performance of those hired fell by 8% to 19%. In most of the simulated conditions, the statistics used in bias audits barely moved.
- **Skills.** The term "soft skills" undersells abilities such as emotional intelligence, leadership, and teamwork. A 2019 essay proposes calling them CORE skills: Competence in Organizational and Relational Effectiveness.
- **Change agents.** In an organizational change simulation, hope, confidence, resilience, and optimism were associated with a change agent's influence, alongside cognitive ability and personality.

**Papers.** [Afloat or Adrift](/publications/2026-afloat-or-adrift.html) · [Compensatory Faking in Personnel Selection](/publications/2026-compensatory-faking.html) · [Getting to the CORE](/publications/2019-core-skills.html) (2019) · [Organizational Change Agent Influence](/publications/2017-change-agent-influence.html) (2017)

---

For methods and applied implications, see the [publication summaries](/publications.html) and the [projects page](/projects.html).

<p class="theme-updated">Last updated November 2026.</p>
