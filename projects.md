---
layout: page
title: "Projects"
permalink: /projects.html
---

# Projects

> **Latest update:** SIOP Leading Edge Consortium 2026 digital goody bag is live — [The AI Paradox](/lec-2026/). Poster, figures, methods, readings, and the quarter kit. QR on the board points here.

A selection of analytics and data-science projects connecting organizational psychology, finance, and AI-driven insight.  
For full code and technical details, visit my [GitHub profile](https://github.com/mjmonnot).

Several of these projects extend my research themes in [leadership, well-being, and organizational effectiveness](/themes/leadership-and-wellbeing.html): measuring personality and well-being at scale (2019, MIDUS profiles), keeping selection systems fair (2021), and understanding human skills alongside AI in the future of work (2026).

---

## The AI Paradox (SIOP LEC 2026)

[Open the digital goody bag →](/lec-2026/)

<figure class="project-figure">
  <a href="/lec-2026/">
    <img src="/assets/images/lec2026-ai-paradox-summary.png" alt="Summary figure for The AI Paradox. Study 1, two-wave panel: four Rosso meaning pathways; agency positive specific agreement .93, communion .48; no engineered prompt met the acceptance bar; registered Time 2 null, BF01 = 481.5. Study 2, occupational talk on allnurses.com, captures January 2016 to September 2026, 7,709 posts: nurses named the apparatus, not AI; apparatus talk flat at one post in twenty; control moved, not skill; model codes with no human check." width="1120" height="620">
  </a>
  <figcaption>Study 1 pathways and locked tests beside Study 2 occupational talk, captures Jan 2016 – Sep 2026. Click through to the packet.</figcaption>
</figure>

Board session packet for *Shaping the Future of People Analytics*: how optimization can strip the meaning that keeps helping work staffed, and what it takes to measure that meaning without fooling yourself. Two-wave field study, a locked language-model coding pipeline, and ten years of nurses' forum talk. Human codes stayed on the map; no engineered prompt met the acceptance bar; no prompt was chosen on test. In the forum, nurses named the apparatus (ratios, metrics, charting), not AI, and what moved was control over the work, not skill.

<p class="apa-cite">Monnot, M. J., &amp; Thompson, I. (2026, September 30&ndash;October 1). <em>The AI paradox: How optimization may undermine meaningful work</em> [Poster presentation]. Society for Industrial and Organizational Psychology Leading Edge Consortium, Baltimore, MD, United States. <a href="https://mjmonnot.github.io/lec-2026/">https://mjmonnot.github.io/lec-2026/</a></p>

🔗 [Live packet](/lec-2026/) · [Digital poster](/lec-2026/poster.html) · [Print deck (PPTX)](/lec-2026/assets/Monnot_Poster_v4.pptx)

---

## SIOP Machine Learning Competitions

[View on GitHub →](https://github.com/mjmonnot/siop-ml-competitions)

A year-over-year, reproducible collection of solutions and teaching cases for the SIOP Machine Learning Competitions.

### 2026 — Automated Meta-Analytic Coding (team: *One Hot Key*)

<figure class="project-figure">
  <a href="https://github.com/mjmonnot/siop-ml-competitions/tree/main/2026-meta-analysis">
    <img src="/assets/images/siop2026-six-gates.png" alt="Six-gate cascading pipeline from the SIOP 2026 presentation: PDF acquisition, layout extraction, regex plus phi4 classifier, vision fallback, structured LLM extraction, imputation." width="1024" height="230">
  </a>
  <figcaption>Six gates from PDF to correlation table. Each gate only fires when the cheaper one before it fails.</figcaption>
</figure>

An end-to-end pipeline that extracts zero-order Pearson *r* correlations directly from published I-O psychology PDFs, using a four-tier cascade (pdfplumber → Docling table ML → qwen2.5-VL vision model → regex + phi4) running entirely on local models. Built as a solo-plus-AI-agents experiment — a one-person team competing against teams of researchers and graduate students. Dev-set MSE **0.013641** (6th of 24); test set submitted April 2026.

🔗 [Project folder →](https://github.com/mjmonnot/siop-ml-competitions/tree/main/2026-meta-analysis) · [SIOP 2026 deck (PDF)](https://github.com/mjmonnot/siop-ml-competitions/blob/main/2026-meta-analysis/docs/one_hot_key_siop_2026.pdf) · [SIOP 2026 presentation video (MP4)](https://github.com/mjmonnot/siop-ml-competitions/raw/main/2026-meta-analysis/media/One_Hot_Key_ML_Competition_Presentation_1080p.mp4)  
*Relevant resources:* [Docling (document & table extraction)](https://github.com/docling-project/docling) · [PRISMA — systematic review & meta-analysis reporting](https://www.prisma-statement.org/)

### 2019 — Personality Prediction from Text (Post-Hoc Winning Solution)

<figure class="project-figure">
  <a href="https://github.com/mjmonnot/siop-ml-competitions/blob/main/2019-personality-from-text/SOLUTION.md">
    <img src="/assets/images/siop2019-roleplay-steps.png" alt="Four-step role-play questionnaire pipeline: read the five text answers, role-play the persona, answer 30 BFI-2 items in character, reverse-score and aggregate to OCEAN." width="900" height="660">
  </a>
  <figcaption>Role-play scoring: the model answers a BFI-2 questionnaire as the respondent, then the items are scored like any inventory.</figcaption>
</figure>

A post-hoc solution to the 2019 competition — predicting Big Five trait scores from five short open-ended responses — that beats the original leaderboard by a wide margin under a strict, leakage-safe protocol (fit on Train only, select on Dev, touch the private Test once).

- Private-Test mean Pearson *r* **0.3215** vs. the 2019 first-place **0.26021** — **+0.061 (~23% relative)**, roughly 2× the entire original top-four spread
- Stacked generalization: zero-shot LLM extractors (multi-prompt trait scoring, a second-judge model, behavioral subfeatures, and a role-play BFI-2 questionnaire) combined with embedding-SVR, TF-IDF, and psycholinguistic bases under a per-trait Ridge meta-learner
- Result sits at or above the 2025–2026 published frontier for personality inference from short text ([e.g., Piastra & Catellani, 2025; Zhu et al., 2025](https://github.com/mjmonnot/siop-ml-competitions/blob/main/2019-personality-from-text/SOLUTION.md#references)); full write-up, negative results, and literature review included
- Directly extends my measurement research: construct validity, honest evaluation, and personality assessment at scale

🔗 [Project folder →](https://github.com/mjmonnot/siop-ml-competitions/tree/main/2019-personality-from-text) · [Poster (PDF)](https://github.com/mjmonnot/siop-ml-competitions/blob/main/2019-personality-from-text/docs/SIOP_2019_Poster_Landscape.pdf) · [Presentation deck (PDF)](https://github.com/mjmonnot/siop-ml-competitions/blob/main/2019-personality-from-text/docs/SIOP_Personality_From_Text.pdf) · [Presentation video (MP4)](https://github.com/mjmonnot/siop-ml-competitions/raw/main/2019-personality-from-text/media/Predicting_Personality_from_Text_MJMONNOT.mp4)  
*Relevant resources:* [Solution write-up (SOLUTION.md)](https://github.com/mjmonnot/siop-ml-competitions/blob/main/2019-personality-from-text/SOLUTION.md) · [International Personality Item Pool (IPIP)](https://ipip.ori.org/)

---

### Archived / Post-Hoc Competition Reconstructions

#### 2024 — Evaluating LLMs Across Four I-O Tasks (Post-Hoc Reconstruction)
- One unified prompt-engineering harness spanning all four 2024 tasks — empathy, interview generation, item clarity, and fairness  
- Shared format → call → parse flow with task-specific adapters, structured (constrained JSON) outputs, and similarity-based few-shot selection  
- Final scorecard pitting a single unified pipeline against four separately hand-tuned winning teams, task by task  
- Full end-to-end sweep on synthetic inputs recorded test composite **0.817** (dev **0.814**); not comparable to winner scores on official competition data  

🔗 [Project folder →](https://github.com/mjmonnot/siop-ml-competitions/tree/main/2024-evaluate-LLMs-via-benchmark) · [SIOP 2024 retrospective deck (PDF)](https://github.com/mjmonnot/siop-ml-competitions/blob/main/2024-evaluate-LLMs-via-benchmark/docs/SIOP-2024-ML-Retrospective.pdf) · [SIOP 2024 retrospective video (MP4)](https://github.com/mjmonnot/siop-ml-competitions/raw/main/2024-evaluate-LLMs-via-benchmark/media/SIOP%202024%20Retrospective_%20ML%20Competition%20Analysis_1080p.mp4)  
*Relevant resources:* [Original 2024 SIOP ML Competition](https://github.com/izk8/2024_SIOP_Machine_Learning_Competition) · [Sentence-Transformers (SBERT)](https://www.sbert.net/)

#### 2023 — Decision Making from Text
- Predicting assessment-center "decision making" ratings from open-ended text  
- End-to-end pipeline: validate → preprocess → features → train → evaluate → fairness audit  
- Transparent TF-IDF + Ridge baseline with a transformer-ready (SBERT) template  

🔗 [Project folder →](https://github.com/mjmonnot/siop-ml-competitions/tree/main/2023-decision-making-from-text)  
*Relevant resources:* [Guidelines for Assessment Center Operations](https://doi.org/10.1177/0149206314567780) · [Sentence-Transformers (SBERT)](https://www.sbert.net/)

#### 2021 — Fairness-Aware Selection Pipeline (Teaching Case)
- Decomposition of accuracy vs. adverse impact tradeoffs  
- Alignment with professional standards for employee selection  
- Designed as a teaching and practitioner case  

🔗 [Project folder →](https://github.com/mjmonnot/siop-ml-competitions/tree/main/2021-fairness-pipeline-case)  
*Relevant resources:* [Uniform Guidelines on Employee Selection Procedures](https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XIV/part-1607) · [SIOP Principles for Personnel Selection](https://www.apa.org/ed/accreditation/personnel-selection-procedures.pdf)

(Subsequent years will be added as independent modules.)

---

### Methods & Tooling

Python · Pandas · NumPy · scikit-learn pipelines · cross-validation · regularization and ensembles · stacked generalization (out-of-fold meta-learning) · zero-shot LLM feature extraction (Anthropic Claude) · sentence embeddings (E5, SBERT) · PDF extraction (PyMuPDF · pdfplumber · Docling) · local language and vision models (phi4 · qwen2.5-VL, served via Ollama) · model diagnostics · fairness metrics · reproducible GitHub workflows

---

## Afloat or Adrift: Latent Personality Profiles & Future-of-Work Skills (MIDUS)

[View on GitHub →](https://github.com/mjmonnot/LPAmidus)

<figure class="project-figure">
  <a href="https://osf.io/preprints/psyarxiv/9r6hd">
    <img src="/assets/images/midus-figure-1a.png" alt="Figure 1A from the MIDUS preprint: latent state means on anchored factor scores for four personality profiles across neuroticism, extraversion, openness, agreeableness, conscientiousness, and agency. Resilient 36 percent, Distressed 30 percent, Reserved 29 percent, Antagonistic 5 percent." width="880" height="460">
  </a>
  <figcaption>Figure 1A from the preprint: the four replicated profiles on six anchored trait scores.</figcaption>
</figure>

**Overview:**  
A fully reproducible, longitudinal study of person-centered Big Five personality profiles and how they relate to future-of-work skills across midlife, using the MIDUS (Midlife in the United States) national panel (*N* = 7,108 over ~20 years) with independent replication in the MIDUS Refresher (*N* = 3,577). Where the SIOP 2019 project predicts traits from text, this project asks what trait *configurations* mean — and, crucially, whether people move between them over two decades — connecting directly to my research on [well-being and meaningful work](/themes/leadership-and-wellbeing.html). Framed around self-determination theory and the psychological resources workers need to develop and retain AI-era skills.

**Built With:**  
R · latent profile analysis (LPA) and latent transition analysis via a joint latent Markov model · BCH / 3-step outcome modeling · Mplus confirmation · GitHub Actions CI · devcontainer for a reproducible environment

**Key Findings:**  
- Four replicated profiles: **Resilient** (36.4%), **Distressed** (29.5%), **Reserved** (29.0%), and **Antagonistic** (5.1%). Resilient members reported the highest psychosocial skills; Antagonistic members reported the highest income, prestige, and analytic performance.  
- An honest **null on incremental validity**: profile membership added no predictive power beyond continuous traits.  
- The Distressed profile shrank from **29.5% to 7.2%** across two decades through two distinct pathways — *recovery* (movement to Resilient) and *disengagement* (movement to Reserved).  
- Leaving the Distressed profile was associated with lower health-related lost productive time (recovered movers −$3,049 per worker-year, 95% CI [−$5,038, −$1,060]).  
- **Purpose in life** predicted recovery- versus disengagement-oriented transitions (OR = 1.23 per SD, 95% CI [1.01, 1.50]).  
- Event-sampled diary data (*N* = 2,314) corroborated the profile interpretations.  

🔗 [Read the preprint (PsyArXiv) →](https://osf.io/preprints/psyarxiv/9r6hd)  
*Manuscript under review.*

---

## AI Bubble Pressure Score (AIBPS)

[View on GitHub →](https://github.com/mjmonnot/aibps-v0-1) · [Live dashboard →](https://aibps-v0-1.streamlit.app)

<figure class="project-figure">
  <a href="https://github.com/mjmonnot/aibps-v0-1">
    <img src="/assets/images/aibps-summary.png" alt="Summary figure for the AI Bubble Pressure Score: six pillars (market, credit, capex, infrastructure, adoption, sentiment) feed a four-step pipeline of ingest, normalize, aggregate, and interpret, producing a 0 to 100 composite with low, healthy, frothy, and critical bands." width="1120" height="620">
  </a>
  <figcaption>Six pillars, one 0–100 composite. Click through to the repository.</figcaption>
</figure>

**Overview:**  
An ongoing project analyzing sentiment, valuation, and market momentum to estimate "bubble pressure" in the AI sector. The AIBPS integrates multiple data layers—equity performance, ETF flows, and public sentiment—to quantify how narrative intensity and capital inflows co-evolve across AI-related assets.

**Built With:**  
Python · Pandas · NumPy · Matplotlib · scikit-learn · GitHub Actions · CSV/REST data pipelines  

**Key Features:**  
- Automated ingestion of market and sentiment data  
- Rolling normalization (z-scores, percentiles)  
- Composite pressure index tracked over time  
- Automated updates via GitHub Actions  

**Use Cases:**  
- Identify when enthusiasm and capital concentration approach "hype cycle" territory  
- Compare AI-related funds and semiconductor equities  
- Demonstrate applied analytics for investment or strategic contexts  

---

## AI Hyperscaler Market-Cap Race

<figure class="project-figure">
  <a href="https://mjmonnot.github.io/ai-hyperscalers-marketcap-race/">
    <img src="/assets/images/hyperscaler-race-2026-09.png" alt="Final frame of the AI hyperscalers market-cap bar chart race, September 2026: NVIDIA leads above 5 trillion dollars, followed by Alphabet 4,162 billion, Microsoft 3,833, Amazon 2,686, TSMC 2,337, Meta 1,915, and AMD 1,028." width="1730" height="990">
  </a>
  <figcaption>Final frame, September 2026. Click through to run the race.</figcaption>
</figure>

A companion data-visualization piece: an animated D3.js bar chart race tracking the monthly market capitalization of leading AI hyperscalers and infrastructure firms over time, auto-updated through a GitHub Actions pipeline with no backend.

🔗 [Live visualization →](https://mjmonnot.github.io/ai-hyperscalers-marketcap-race/) · [View on GitHub →](https://github.com/mjmonnot/ai-hyperscalers-marketcap-race)

---

## Future Additions

Additional projects will be added over time, including:

- Leadership and coaching analytics  
- Employee well-being dashboards building on the MIDUS profile work  
- Applied ML and measurement pipelines  
- Visualization tools for organizational and market psychology  

---

### Explore All Repositories

🔗 [Browse all public GitHub repositories →](https://github.com/mjmonnot?tab=repositories)
