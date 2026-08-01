---
layout: default
title: "Matthew J. Monnot, PhD"
permalink: /
---

<section class="hero">
  <h1>Matthew J. Monnot, PhD</h1>
  <p class="tagline">Industrial-Organizational Psychologist <span class="sep">&middot;</span> People Scientist <span class="sep">&middot;</span> OD Consultant</p>
  <p class="lede">I partner with leaders and organizations to enhance performance, culture, and well-being &mdash; drawing on experience in academia, executive education, and corporate people analytics.</p>
  <hr class="gold-rule">
</section>

<div class="home-grid">
  <section>
    <p class="section-label">Selected Publications</p>
    <hr class="label-rule">
    <ol class="pub-list">
      <li>
        <div>
          <p class="pub-title"><a href="/publications/2026-afloat-or-adrift.html">Afloat or Adrift: Latent Personality Profiles and Future-of-Work Skills Across Midlife</a></p>
          <p class="pub-journal">PsyArXiv (preprint)</p>
        </div>
      </li>
      <li>
        <div>
          <p class="pub-title"><a href="/publications/2022-goods-life-swb.html">The Good Life Versus the &ldquo;Goods Life&rdquo;: Goal Contents Theory and Employee Subjective Well-Being Across Asian Countries</a></p>
          <p class="pub-journal">Journal of Happiness Studies</p>
        </div>
      </li>
      <li>
        <div>
          <p class="pub-title"><a href="/publications/2019-core-skills.html">Getting to the CORE: Putting an End to the Term &ldquo;Soft Skills&rdquo;</a></p>
          <p class="pub-journal">Journal of Management Inquiry</p>
        </div>
      </li>
      <li>
        <div>
          <p class="pub-title"><a href="/publications/2014-swb-stress-support.html">Subjective Well-Being at Work: Disentangling Source Effects of Stress and Support</a></p>
          <p class="pub-journal">Journal of Vocational Behavior</p>
        </div>
      </li>
    </ol>
    <a class="view-all" href="/publications.html">View all publications &rarr;</a>
  </section>

  <section>
    <p class="section-label">Featured Projects</p>
    <hr class="label-rule">
    <div class="feature-carousel" data-feature-carousel data-interval="10000" aria-roledescription="carousel" aria-label="Featured projects">
      <div class="feature-carousel-track">
        <article class="feature-card feature-slide is-active" data-slide="0" aria-hidden="false">
          <p class="feature-title">Predicting Personality from Text</p>
          <p class="feature-sub">SIOP 2019 Machine Learning Competition &mdash; post-hoc winning solution</p>
          <figure class="feature-figure">
            <a class="feature-figure-link" href="{{ "/assets/images/siop2019-roleplay-steps.png" | relative_url }}" data-lightbox aria-label="Enlarge role-play questionnaire pipeline diagram">
              <img src="{{ "/assets/images/siop2019-roleplay-steps.png" | relative_url }}" alt="Four-step role-play questionnaire pipeline: read five text answers, role-play the persona, answer 30 BFI-2 items in character, then reverse-score and aggregate to OCEAN trait scores." width="900" height="665" loading="lazy">
            </a>
            <figcaption>Role-play pipeline: text &rarr; persona &rarr; BFI-2 items &rarr; OCEAN scores <span class="feature-figure-hint">· click to enlarge</span></figcaption>
          </figure>
          <p class="feature-desc">A leakage-safe stack of zero-shot LLM extractors and classical models predicting Big Five traits from five short open-ended responses &mdash; beating the original leaderboard by ~23%.</p>
          <div class="feature-stat">
            <span class="stat-value">Test&nbsp;r&nbsp;=&nbsp;0.3215</span>
            <span class="stat-note">vs. 0.26021 for the 2019 first-place team &mdash; about 2&times; the entire original top-four spread</span>
          </div>
        </article>

        <article class="feature-card feature-slide" data-slide="1" aria-hidden="true">
          <p class="feature-title">Afloat or Adrift</p>
          <p class="feature-sub">Latent personality profiles &amp; future-of-work skills (MIDUS)</p>
          <figure class="feature-figure">
            <a class="feature-figure-link" href="{{ "/assets/images/midus-figure-1a.png" | relative_url }}" data-lightbox aria-label="Enlarge Figure 1A from the MIDUS preprint">
              <img src="{{ "/assets/images/midus-figure-1a.png" | relative_url }}" alt="Figure 1A from the MIDUS preprint: latent state means for four personality profiles across Neuroticism, Extraversion, Openness, Agreeableness, Conscientiousness, and Agency." width="880" height="464" loading="lazy">
            </a>
            <figcaption>Figure 1A &mdash; four replicated profiles (Resilient, Distressed, Reserved, Antagonistic) <span class="feature-figure-hint">· click to enlarge</span></figcaption>
          </figure>
          <p class="feature-desc">A longitudinal study of Big Five profile configurations across midlife &mdash; and whether people move between them over two decades &mdash; linking those patterns to future-of-work skills.</p>
          <div class="feature-stat">
            <span class="stat-value">N&nbsp;=&nbsp;7,108</span>
            <span class="stat-note">Distressed membership shrank from 29.5% to 7.2% across ~20 years</span>
          </div>
        </article>

        <article class="feature-card feature-slide" data-slide="2" aria-hidden="true">
          <p class="feature-title">Automated Meta-Analytic Coding</p>
          <p class="feature-sub">SIOP 2026 Machine Learning Competition &mdash; team One Hot Key</p>
          <figure class="feature-figure feature-figure--wide">
            <a class="feature-figure-link" href="{{ "/assets/images/siop2026-six-gates.png" | relative_url }}" data-lightbox aria-label="Enlarge six-gate pipeline diagram from the SIOP 2026 presentation">
              <img src="{{ "/assets/images/siop2026-six-gates.png" | relative_url }}" alt="Six-gate cascading pipeline from the SIOP 2026 presentation: PDF Acquisition, Layout Extraction, Regex plus phi4 Classifier, Vision Fallback, Structured LLM Extraction, and Imputation." width="2400" height="530" loading="lazy">
            </a>
            <figcaption>Gates 1&ndash;6 &mdash; cascading fallback from cheap precision to recovery <span class="feature-figure-hint">· click to enlarge</span></figcaption>
          </figure>
          <p class="feature-desc">An end-to-end local-model pipeline that extracts zero-order Pearson <em>r</em> correlations from published I-O PDFs &mdash; a solo-plus-AI-agents experiment against full research teams.</p>
          <div class="feature-stat">
            <span class="stat-value">MSE&nbsp;0.0136</span>
            <span class="stat-note">Dev-set rank 6th of 24; test set submitted April 2026</span>
          </div>
        </article>
      </div>

      <div class="feature-carousel-footer">
        <div class="feature-dots" role="tablist" aria-label="Choose featured project">
          <button type="button" class="feature-dot is-active" role="tab" aria-selected="true" aria-label="Show project 1 of 3: Predicting Personality from Text"></button>
          <button type="button" class="feature-dot" role="tab" aria-selected="false" aria-label="Show project 2 of 3: Afloat or Adrift (MIDUS)"></button>
          <button type="button" class="feature-dot" role="tab" aria-selected="false" aria-label="Show project 3 of 3: SIOP 2026 Meta-Analytic Coding"></button>
        </div>
        <a class="view-all" href="/projects.html">View projects &rarr;</a>
      </div>
    </div>
  </section>
</div>
