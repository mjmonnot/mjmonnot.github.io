---
layout: page
title: "Projects"
permalink: /projects.html
---

# Projects

> **Latest update:** Beat the 2019 SIOP ML Competition leaderboard post hoc — private-Test mean *r* **0.3215** vs. the original first-place **0.26021** (+0.061, ~23%) — with a leakage-safe stack of zero-shot LLM extractors. Poster, presentation deck, and video now published.

A selection of analytics and data-science projects connecting organizational psychology, finance, and AI-driven insight.  
For full code and technical details, visit my [GitHub profile](https://github.com/mjmonnot).

Several of these projects extend my research themes in [leadership, well-being, and organizational effectiveness](/themes/leadership-and-wellbeing.html): measuring personality and well-being at scale (2019, MIDUS profiles), keeping selection systems fair (2021), and understanding human skills alongside AI in the future of work (2026).

---

## SIOP Machine Learning Competitions

[View on GitHub →](https://github.com/mjmonnot/siop-ml-competitions)

A year-over-year, reproducible collection of solutions and teaching cases for the SIOP Machine Learning Competitions.

### 2026 — Automated Meta-Analytic Coding (team: *One Hot Key*)

An end-to-end pipeline that extracts zero-order Pearson *r* correlations directly from published I-O psychology PDFs, using a four-tier cascade (pdfplumber → Docling table ML → qwen2.5-VL vision model → regex + phi4) running entirely on local models. Built as a solo-plus-AI-agents experiment — a one-person team competing against teams of researchers and graduate students. Dev-set MSE **0.013641** (6th of 24); test set submitted April 2026.

🔗 [Project folder →](https://github.com/mjmonnot/siop-ml-competitions/tree/main/2026-meta-analysis) · [SIOP 2026 deck (PDF)](https://github.com/mjmonnot/siop-ml-competitions/blob/main/2026-meta-analysis/docs/one_hot_key_siop_2026.pdf) · [SIOP 2026 presentation video (MP4)](https://github.com/mjmonnot/siop-ml-competitions/raw/main/2026-meta-analysis/media/One_Hot_Key_ML_Competition_Presentation_1080p.mp4)  
*Relevant resources:* [Docling (document & table extraction)](https://github.com/docling-project/docling) · [PRISMA — systematic review & meta-analysis reporting](https://www.prisma-statement.org/)

### 2019 — Personality Prediction from Text (Post-Hoc Winning Solution)

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

🔗 [Read the preprint (PsyArXiv) →](https://doi.org/10.31234/osf.io/9r6hd_v1)  
*Manuscript under review.*

---

## AI Bubble Pressure Score (AIBPS)

[View on GitHub →](https://github.com/mjmonnot/aibps-v0-1)

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
