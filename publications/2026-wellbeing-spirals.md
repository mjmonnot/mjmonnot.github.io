---
layout: page
title: "Upward and Downward Spirals in Employee Well-Being: Personality Profiles and Psychological Resources Under AI-Related Workplace Change"
permalink: /publications/2026-wellbeing-spirals.html
---

# Upward and Downward Spirals in Employee Well-Being: Personality Profiles and Psychological Resources Under AI-Related Workplace Change (2026)

**Authors:** Matthew J. Monnot  
**Outlet:** *SSRN preprint*  
**DOI:** 10.2139/ssrn.7617538  
**Link:** [Read the preprint →](https://doi.org/10.2139/ssrn.7617538)  
**Companion site:** [Spiral explorer, evidence, and what organizations can watch →](https://mjmonnot.github.io/wellbeing-spirals/)

---

## 1 · TL;DR

AI is changing how work is assigned, paced, monitored, and rewarded. This study follows Dutch employees in the LISS panel for 18 years (2008–2025; *N* = 72,433 person-waves, 16,862 people) and asks what protects well-being when the job itself starts to feel replaceable.

Three results carry the paper. First, the four personality profiles found in U.S. midlife adults (**Distressed, Antagonistic, Reserved, Resilient**) reappear in a Dutch working-age panel on a different instrument (Tucker congruence = .96). Second, employees who in 2020 felt **replaceable by AI or robots**, or **exhausted** by technology-intensified work, reported lower job and life satisfaction five years later — and it was *perceived* replaceability, not an occupation's exposure score, that carried the cost. Third, among employees leaving the Distressed profile, **optimism, self-esteem, and work meaning** predicted recovery (to Resilient) rather than disengagement (to Reserved), and within persons a one-time rise in distress depleted self-esteem more deeply and durably than an equal gain in self-esteem relieved distress. Losses spiral faster than gains.

---

## 2 · Methodology (Technical)

- **Data:** LISS panel (Centerdata, Tilburg University), probability-based Dutch household panel. Core Personality study (IPIP-50 Big Five) across primary waves 2008–2025, plus annual Work and Health cores and one-off modules: PsyCap (2019), robotization and technostress (2020), work meaning (2023). Secondary analysis of de-identified archive data under a signed data-user agreement.
- **Profiles:** Measurement-invariant stacked diagonal Gaussian mixture model, *k* = 4 retained on multi-criterion grounds (entropy = .537); labels assigned by shape-matching to MIDUS centroids. Cross-software check in Mplus 8.8 (class means *r* ≥ .999). Membership dynamics from modal assignments; a three-step latent annual Markov chain with the misclassification matrix fixed from the invariant solution supplies classification-error-robust transition estimates.
- **H1 configural correspondence:** domain-score linking (mean *r* = .91) and orthogonal Procrustes rotation (Tucker φ = .96; disparity = .09) against the MIDUS four-profile solution; internal replication by re-enumeration within panel-entry cohorts.
- **H2 lagged stressor models:** standardized OLS with HC3 standard errors and demographic covariates, 2020 stressors → 2025 job satisfaction, SWLS, and positive affect (*n*s ≈ 790–1,430); Benjamini–Hochberg control within the family.
- **H3 moderation:** product-term and stratified simple-slope models by profile.
- **H4 destination logits:** Distressed leavers, Resilient versus Reserved destination, per-SD odds ratios; re-estimated under soft-weighted, 200-draw pseudo-class, and Firth sensitivities, then inside a sequence-based latent Markov model with fixed misclassification.
- **H5 within-person spirals:** person-mean-centered lagged models (Hamaker et al., 2015), then a random-intercept cross-lagged panel model estimated by Kalman-filter FIML, a measurement-error-separating latent AR model, and a person-level detrending sensitivity; loss-primacy asymmetry tested by person bootstrap and likelihood ratio.
- **H6 domain dissociation:** perceived displacement risk versus Felten AI Occupational Exposure (AIOE) scores crosswalked SOC → ISCO-08 and merged on occupation; piecewise growth with a 2020 knot and a prespecified heterogeneity sweep with a causal-forest counterweight.
- **H7 economic costs (exploratory):** health-related lost productive time valued at the wage (human-capital and Dutch friction-cost variants), quit intent, promotion prospects, realized exits; double/debiased ML counterweight with cross-fitted forests.

---

## 3 · Methods in Plain English

Rather than scoring each personality trait separately, the study sorts people into a small number of **configurations** — four recognizable patterns — and tracks whether they stay in one or move between them over 18 years. That makes it possible to ask not just *how much* distress there is, but *who leaves it and where they go*.

The AI piece comes from modules fielded in 2020 that asked employees whether their work could be done by new technology, whether their pace was set by a machine, whether their output was digitally logged, and whether work had become more exhausting. Those answers are related to how satisfied the same people were in 2025. Because the stressors were measured before the outcomes, the design establishes temporal order, though not causation.

The spiral test looks *within* each person: when your self-esteem dips below your own usual level this year, is your distress higher next year — and vice versa? Comparing the two directions tests a core claim of conservation of resources theory, that losses hurt more than equivalent gains help.

---

## 4 · Key Findings & Nuances

- **Profiles replicate across panels and instruments.** Antagonistic and Resilient re-emerged within independently recruited entry cohorts (φ = .88–.97); Distressed is a partial shape match (*r* = .69) recoverable only in the pooled invariant model.
- **Perceived displacement and exhaustion carried forward.** Displacement risk in 2020 predicted lower job satisfaction (β = −.11) and life satisfaction (β = −.11) in 2025; exhaustion predicted lower job satisfaction (β = −.22), life satisfaction (β = −.31), and positive affect (β = −.20). Algorithmic management was associated only with lower life satisfaction (β = −.10); technology self-efficacy with higher satisfaction (βs ≈ .10). Ten of 16 focal paths were significant and all survived FDR control.
- **Distressed membership did not amplify the stressors (H3 not supported).** Exploratory slopes were steepest among Antagonistic members, but this does not rescue the a priori hypothesis.
- **Resources steer the direction of exit.** Among Distressed leavers, higher optimism (OR = 1.78), self-esteem (OR = 1.62), and work meaning (OR = 1.77) per SD predicted recovery to Resilient rather than disengagement to Reserved, robust to classification-error sensitivities. Workplace relatedness (OR = 1.34) was frame-sensitive; PsyCap was underpowered (*n* = 44).
- **Loss primacy within persons.** Lagged distress → self-esteem (β = −.14) exceeded self-esteem → distress (β = −.08) in the RI-CLPM, with the asymmetry confirmed by likelihood ratio (*p* < .001). The optimism ↔ negative affect pair showed reciprocal paths but no asymmetry.
- **Appraisal, not occupation title.** Perceived displacement related to lower work meaning, relatedness, and job satisfaction and higher distress; occupation-level AIOE was null on all but one small path. Frey–Osborne automatability failed a pre-trend falsification check, indicating occupational selection rather than disruption.
- **Costs surface before anyone leaves.** Distressed members reported +65 lost work hours per year versus Resilient members and more than twice the quit-intent rate (17% vs. 8%), but realized exits by 2025 did not differ (9% vs. 9%) and Distressed members reported *more* self-rated effort. Euro translations were partly compositional under the ML counterweight.
- **What the design cannot say.** Observational; 2020 modules are single-shot, COVID-entangled, and pre-LLM; entropy is modest (.537); attrition left a modestly positively selected panel; no intervention effect is estimated.

---

## 5 · Implementation Ideas

### For Leaders & HR

- Treat employees' *appraisal* that their work is replaceable as the signal that matters, not an occupation's exposure score. The psychosocial costs ran through perceived replaceability.
- Exhaustion under technology-intensified work was the broadest predictor of later well-being, including the only consistent hit to positive affect. Pacing and workload under new tools deserve the same attention as the tools themselves.

### For People Analytics

- Monitor well-being as a within-person series, not a snapshot. Losses registered as abrupt changes and gains rode slow trends; a dip below someone's own baseline is more informative than their rank in the distribution.
- Do not pool exposure metrics interchangeably. AIOE passed its pre-trend check; Frey–Osborne did not.

### For Well-Being Program Design

- Among distressed employees, optimism, self-worth, and work meaning distinguished recovery from disengagement. The study does not show that raising them causes recovery, but they are the markers worth watching — and the lost-time and quit-intent costs appeared well before any exit. The [companion site](https://mjmonnot.github.io/wellbeing-spirals/) includes a spiral explorer built on the published cross-lagged coefficients and a [practice page](https://mjmonnot.github.io/wellbeing-spirals/playbook.html) that stays inside what the evidence supports.

---

## 6 · Endnotes (APA Style)

1. Monnot, M. J. (2026). Upward and downward spirals in employee well-being: Personality profiles and psychological resources under AI-related workplace change. *SSRN*. https://doi.org/10.2139/ssrn.7617538
2. Hobfoll, S. E., Halbesleben, J., Neveu, J.-P., & Westman, M. (2018). Conservation of resources in the organizational context: The reality of resources and their consequences. *Annual Review of Organizational Psychology and Organizational Behavior, 5*, 103–128. https://doi.org/10.1146/annurev-orgpsych-032117-104640
3. Hamaker, E. L., Kuiper, R. M., & Grasman, R. P. P. P. (2015). A critique of the cross-lagged panel model. *Psychological Methods, 20*(1), 102–116. https://doi.org/10.1037/a0038889
4. Felten, E., Raj, M., & Seamans, R. (2021). Occupational, industry, and geographic exposure to artificial intelligence: A novel dataset and its potential uses. *Strategic Management Journal, 42*(12), 2195–2217. https://doi.org/10.1002/smj.3286
5. Monnot, M. J. (2026). Afloat or adrift: A longitudinal study of latent personality profiles and future-of-work skills across midlife [Preprint]. PsyArXiv. https://doi.org/10.31234/osf.io/9r6hd_v1
6. Scherpenzeel, A., & Das, M. (2011). True longitudinal and probability-based internet panels: Evidence from the Netherlands. In M. Das, P. Ester, & L. Kaczmirek (Eds.), *Social and behavioral research and the internet* (pp. 77–104). Routledge.
