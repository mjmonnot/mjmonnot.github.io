---
layout: page
title: "Projects"
permalink: /projects.html
---

# Projects

> **Latest update:** Completed the 2026 SIOP Machine Learning Competition as team *One Hot Key* — a solo-plus-AI-agents entry (dev-set MSE 0.013641, 6th of 10).

A selection of analytics and data-science projects connecting organizational psychology, finance, and AI-driven insight.  
For full code and technical details, visit my [GitHub profile](https://github.com/mjmonnot).

---

## SIOP Machine Learning Competitions

[View on GitHub →](https://github.com/mjmonnot/siop-ml-competitions)

A year-over-year, reproducible collection of solutions and teaching cases for the SIOP Machine Learning Competitions.

### 2026 — Automated Meta-Analytic Coding (team: *One Hot Key*)

[View the 2026 project →](https://github.com/mjmonnot/siop-ml-competitions/tree/main/2026-meta-analysis)

An end-to-end pipeline that extracts zero-order Pearson *r* correlations directly from published I-O psychology PDFs, using a four-tier cascade (pdfplumber → Docling table ML → qwen2.5-VL vision model → regex + phi4) running entirely on local models. Built as a solo-plus-AI-agents experiment — a one-person team competing against teams of researchers and graduate students. Dev-set MSE **0.013641** (6th of 24); test set submitted April 2026.

---

### Archived / Post-Hoc Competition Reconstructions

#### 2023 — Decision Making from Text
- Predicting assessment-center "decision making" ratings from open-ended text  
- End-to-end pipeline: validate → preprocess → features → train → evaluate → fairness audit  
- Transparent TF-IDF + Ridge baseline with a transformer-ready (SBERT) template  

#### 2021 — Fairness-Aware Selection Pipeline (Teaching Case)
- Decomposition of accuracy vs. adverse impact tradeoffs  
- Alignment with professional standards for employee selection  
- Designed as a teaching and practitioner case  

#### 2019 — Personality Prediction from Text
- Interpretable ML baselines and feature engineering  
- Trait-level prediction diagnostics and residual analysis  
- Emphasis on construct validity and generalization  

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

## AI Hyperscaler Market-Cap Race

A companion data-visualization piece: an animated D3.js bar chart race tracking the monthly market capitalization of leading AI hyperscalers and infrastructure firms over time, auto-updated through a GitHub Actions pipeline with no backend.

🔗 [Live visualization →](https://mjmonnot.github.io/ai-hyperscalers-marketcap-race/) · 🔗 [View on GitHub →](https://github.com/mjmonnot/ai-hyperscalers-marketcap-race)

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

