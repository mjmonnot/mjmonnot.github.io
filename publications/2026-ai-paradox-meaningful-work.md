---
layout: page
title: "The AI Paradox: How Optimization May Undermine Meaningful Work in Helping Professions"
permalink: /publications/2026-ai-paradox-meaningful-work.html
---

# The AI Paradox: How Optimization May Undermine Meaningful Work in Helping Professions (2026)

**Authors:** Matthew J. Monnot & Isaac Thompson  
**Outlet:** *PsyArXiv preprint*  
**Link:** [Read the preprint →](https://osf.io/preprints/psyarxiv/jzngq_v1)  
**Companion site:** [Poster, figures, methods, readings, and code →](https://mjmonnot.github.io/lec-2026/)

<figure>
  <a href="/assets/images/mow-ai-paradox-fig4-prespecified-estimates.png"><img src="/assets/images/mow-ai-paradox-fig4-prespecified-estimates.png" alt="Figure 4 from the preprint: forest plot of the five prespecified year-ahead coefficients with 95% confidence intervals and Bayes factors favoring the null." width="1600" height="775" style="max-width:100%;height:auto;"></a>
  <figcaption><em>Figure 4.</em> Five prespecified year-ahead coefficients with 95% confidence intervals; every interval includes zero, and the Bayes factors favor the null. Click to enlarge.</figcaption>
</figure>

---

## 1 · TL;DR

Helping professions are adopting AI to automate documentation, monitoring, and coordination, on the premise that offloading routine tasks frees workers for meaningful care. That premise assumes managers know which tasks are routine and which are meaningful. This paper argues for a **task-contingent AI paradox**: meaning in helping work concentrates in identity-central tasks that are increasingly automatable.

Three studies bear on it. In a two-wave panel of 307 helping-profession workers (144 followed one year later), six prespecified predictions that human-coded meaning dimensions forecast later felt meaningfulness, exhaustion, or turnover intentions were estimated near zero. One association that was not prespecified survived multiplicity screening: narratives grounding meaning in competence were associated with higher turnover intentions and exhaustion a year later. In 7,695 nursing-forum posts captured 2016–2026, nurses named AI in seven events. About one post in twenty instead named an optimization or implementation object (ratios, metrics, dashboards, documentation load), and the facet at issue was control over means. That share did not change across the decade. No study measured individual AI exposure. Read against the automation frontier, the results locate the risk of optimization in the tasks workers name as meaningful, not in AI as such.

---

## 2 · Methodology (Technical)

- **Design:** Three studies of meaning in helping work. Study 1 is a two-wave critical-incident panel of helping-profession workers recruited through Amazon Mechanical Turk (Time 1, March 2016, *N* = 307; Time 2, February to March 2017, 144 longitudinal survey cases; about 55% health care). Study 2 codes 7,695 allnurses.com posts (at least 200 characters; 1,453 threads) from Internet Archive captures, 2016–2026. Study 3 contrasts the same posts across capture periods (2016–2019, 2020–2022, 2023–2026).
- **Coding scheme:** Thirteen binary facets grouped into four pathways of meaningful work (Individuation, Contribution, Self-Connection, Unification) and a 2 × 2 of Agency–Communion by Self–Others (Rosso et al., 2010).
- **Study 1 human coding:** Two coders (Monnot and a trained research assistant) coded the narratives independently, and disagreements on a stratified sample of cells were resolved in a blinded pass. Agreement (proportion of specific agreement) was .935 for agency and .844 for others-directed meaning. Communion (.48) was excluded from the confirmatory family because agreement was too low.
- **Study 1 tests:** Six prespecified predictions (five coefficients and one block test) of Time 2 felt meaningfulness, emotional exhaustion, and turnover intentions from Time 1 human-coded dimensions. OLS with HC3 standard errors; covariates were age, work centrality, occupation block, and the Time 1 baseline of the outcome where one exists (*n* = 128 to 136). Equivalence tests (±.20 and ±.30) and BIC-approximated Bayes factors were added after the primary tests, with interpretation criteria fixed before computation.
- **Language-model coding of narratives:** Six prompt configurations were developed on a training partition, frozen by hash, and evaluated once on a 55-case development partition against an acceptance standard tied to human agreement. None met it for agency (agreement .750 to .798 against ≥ .910), so humans coded all predictors.
- **Screening:** Associations that were not prespecified were screened with Benjamini–Hochberg control (*q* = .10) in a disclosed search of about 1,700 tests; four survived.
- **Studies 2 and 3:** A single language model coded each post for meaning events: facet, polarity (enacted, frustrated, or wished for), and the object implicated (a named AI system, a system implementation, an optimization practice, or none). Results are rates per 100 posts with thread-clustered bootstrap intervals. Period contrasts are descriptive screens, not prespecified tests. No human coding of forum text was done.
- **Exposure:** No study measured individual AI exposure. The paradox is read by placing the Study 1 meaning map against the independently documented automation frontier.

---

## 3 · Methods in Plain English

Rather than measuring who uses AI, the study maps where helping workers find meaning in their own work and reads that map against what is known about which tasks are being automated.

It does this in three steps:

1. Workers described their most meaningful work episodes in their own words. Two coders sorted each story into kinds of meaning, and the study checked whether those kinds forecast how workers felt about their work a year later.
2. The same scheme was applied to a decade of nurses' posts on a public forum, recording what nurses were frustrated about and what the frustration was attached to: a named AI system, a new system rollout, or an optimization practice such as staffing ratios or productivity targets.
3. The forum posts were compared across three time windows, to see whether that talk changed after generative AI became widely available.

---

## 4 · Key Findings & Nuances

- **Prespecified tests:** Estimates were near zero, and no interval excluded zero in the predicted direction. For the block of three meaning dimensions over Time 1 self-reported meaning, Δ*R*² = .012 and *BF*<sub>01</sub> = 481.5. Equivalence within ±.30 held for three of five coefficients and within ±.20 for none.
- **Same-wave convergence:** The same codes were associated with self-reported meaningfulness in the same wave (others-directed *r* = .24, agency *r* = .20; *n* = 272). The nulls concern prospective prediction a year ahead, not convergence with self-report.
- **One association that was not prespecified survived screening:** Narratives grounding meaning in competence or mastery were associated with higher turnover intentions (*b* = 1.40, 95% CI [0.58, 2.22]) and higher emotional exhaustion (*b* = 0.95, 95% CI [0.20, 1.70]) a year later. Adjusting for six survey measures, β = .29 and .30. It rests on 17 present-coded narratives among 140 matched cases, and a designed study should attempt to falsify it.
- **Automated coding:** No engineered prompt met the human-agreement standard for agency, so humans coded all predictors.
- **Nurses' forum, Study 2:** Nurses named a specific AI system in seven of 5,429 coded events, all in pages captured in 2020–2021. About one post in twenty carried an optimization or implementation object in every period. Of 629 events that named any object, 73% concerned an optimization practice and 26% a system implementation or rollout, and 49% targeted control and autonomy.
- **Across the decade, Study 3:** The share of posts carrying such an object was flat (4.8% in 2016–2019; 5.2% in 2023–2026). The one strain marker that rose, a sense of lacking control (10.5% to 14.5% of posts), is confounded with a 2019–2021 site template change, so rising frustration is not claimed.
- **Limits on what the data show:** Forum codes are model-assigned and were not checked against human coding, capture year is not posting year, and no study measured individual AI exposure. The results do not show that AI erodes meaning.

---

## 5 · Implementation Ideas

### For Leaders & HR

- Before automating a task in a helping role, ask the people who do it which parts they name as meaningful. The split between routine and meaningful tasks is usually assumed, not checked.
- Screen a deployment for what it does to the task (taken, added, or reconfigured) and to discretion over how the work is done. In these data, that screen fits the pattern better than screening for AI.
- Where automation removes work that people do not find meaningful, the efficiency case holds.

### For People Analytics

- Search occupational text for the instruments themselves (ratios, productivity targets, dashboards, documentation load, new systems) rather than for the word "AI." AI vocabulary appeared in under 1% of nurses' posts in any year.
- Track a sense of lacking control alongside burnout measures. Whether it is an earlier signal than burnout inventories has not been tested and would need a lagged, within-account design.
- Report rates from model-coded text as rates of model-assigned codes until they are checked against human judgment.

### For Coaching & OD

- Ask where a person's meaning is anchored. In Study 1, narratives that grounded meaning in competence or mastery were associated with higher exhaustion and turnover intentions a year later, which is a candidate effect, not a settled one.
- Protect the meaning resources workers still enact. Competence was the most enacted facet in every period, and the communion-related facets were more often enacted than frustrated. Deployments that displace skill or compress patient contact would act on the parts of the job that remain intact.

---

## 6 · Endnotes (APA Style)

1. Monnot, M. J., & Thompson, I. (2026). The AI paradox: How optimization may undermine meaningful work in helping professions [Preprint]. PsyArXiv. https://osf.io/preprints/psyarxiv/jzngq_v1  
2. Rosso, B. D., Dekas, K. H., & Wrzesniewski, A. (2010). On the meaning of work: A theoretical integration and review. *Research in Organizational Behavior, 30*, 91–127. https://doi.org/10.1016/j.riob.2010.09.001
