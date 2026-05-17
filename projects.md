---
layout: page
title: "Projects"
permalink: /projects.html
---

# Projects

> **Latest update:** Completed the 2026 SIOP Machine Learning Competition as team *One Hot Key* — a solo-plus-AI-agents entry. Dev-set MSE **0.013641** (6th of 10); test set submitted April 2026.

A selection of analytics and data-science projects connecting organizational psychology, finance, and AI-driven insight.  
For full code and technical details, visit my [GitHub profile](https://github.com/mjmonnot).

---

## SIOP Machine Learning Competitions

[View on GitHub →](https://github.com/mjmonnot/siop-ml-competitions)

A year-over-year, reproducible collection of solutions and teaching cases for the SIOP Machine Learning Competitions.

### 2026 — Automated Meta-Analytic Coding (team: *One Hot Key*)

[View the 2026 project →](https://github.com/mjmonnot/siop-ml-competitions/tree/main/2026-meta-analysis)

The 2026 competition tackled one of the most labor-intensive steps in evidence synthesis: extracting **zero-order bivariate Pearson *r* correlations** directly from published industrial-organizational psychology PDFs. I entered as team **One Hot Key** and built an end-to-end pipeline that reads source articles and produces submission-ready effect sizes.

**The experiment.**  
This was a deliberate test of a new way of working — a one-person team (me, plus two AI agents) competing against teams of researchers, analysts, and graduate students. Claude handled diagnostics, PDF reading, prompt design, and file validation; Cursor implemented the code; PowerShell drove batch runs and spot checks. The division of labor was as much the point as the extraction accuracy.

**How the pipeline works.**  
Each PDF passes through a four-tier extraction cascade, where cheap, high-precision methods run first and a high-confidence result short-circuits the rest:

- **Tier 0** — geometric table parsing with pdfplumber
- **Tier 1** — Docling's ML TableFormer, with optional vision-model crop validation
- **Tier 1b** — qwen2.5-VL vision model run on rendered page images
- **Tier 2** — regex candidate generation, classified by the phi4 language model

PyMuPDF sits underneath every tier as the page reader, rasterizer, and region cropper. All model inference runs locally — no external API calls in the standard pipeline.

**Results.**

| Phase    | Studies                  | MSE      | Standing            |
|----------|--------------------------|----------|---------------------|
| Dev set  | 127                      | 0.013641 | 6 of 10             |
| Test set | 66 (23 construct pairs)  | 0.0351   | Submitted Apr 2026  |

The dev-set submission landed within 0.0005 MSE of the lab- and research-team entries ranked above it. The pipeline evolved through versions v9–v12.1; later versions added a dynamic construct-mapping system so the test pipeline could generalize beyond the dev set's single trust-and-wellbeing pairing to 23 distinct construct pairs across 66 papers.

**Why it matters.**  
Meta-analytic coding is slow, expensive, and a bottleneck for cumulative science. A transparent, auditable, locally run extraction pipeline is directly relevant to my work in measurement, evidence synthesis, and research automation — and the solo-plus-agents format is a working model for how applied I-O practitioners can scale.

---

### Archived / Post-Hoc Competition Reconstructions

#### 2019 — Personality Prediction from Text
- Interpretable ML baselines and feature engineering  
- Trait-level prediction diagnostics and residual analysis  
- Emphasis on construct validity and generalization  

#### 2021 — Fairness-Aware Selection Pipeline (Teaching Case)
- Decomposition of accuracy vs. adverse impact tradeoffs  
- Alignment with professional standards for employee selection  
- Designed as a teaching and practitioner case  

#### 2023 — Decision Making from Text
- Predicting assessment-center "decision making" ratings from open-ended text  
- End-to-end pipeline: validate → preprocess → features → train → evaluate → fairness audit  
- Transparent TF-IDF + Ridge baseline with a transformer-ready (SBERT) template  

(Subsequent years will be added as independent modules.)

---

### Methods & Tooling

Python · Pandas · NumPy · scikit-learn pipelines · cross-validation · regularization and ensembles · PDF extraction (PyMuPDF · pdfplumber · Docling) · local language and vision models (phi4 · qwen2.5-VL, served via Ollama) · model diagnostics · fairness metrics · reproducible GitHub workflows

---

### External Links

- 🔗 [Competition Site](https://computationaloutreach.com/siopmlcompetition2026/)  
- 🔗 [Leaderboard](https://computationaloutreach.com/siopmlcompetition2026/leaderboard.html)
- 🔗 [SIOP 2026 deck — One Hot Key](https://github.com/mjmonnot/siop-ml-competitions/blob/main/2026-meta-analysis/docs/one_hot_key_siop_2026.pdf)

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

## Future Additions

Additional projects will be added over time, including:

- Leadership and coaching analytics  
- Employee well-being dashboards  
- Applied ML and measurement pipelines  
- Visualization tools for organizational and market psychology  

---

### Explore All Repositories

🔗 [Browse all public GitHub repositories →](https://github.com/mjmonnot?tab=repositories)
