# Bayes Factor Reference: Common Family Medicine Diagnostic Tests

**How to use this document:** Each test has a **Bayes factor** — a round number you can do in your head. After a positive result, multiply the prior by the Bayes factor. After a negative result, divide. When a test is much stronger in one direction, separate positive and negative Bayes factors are reported.

$$\text{Pr}[\text{Disease} \mid \text{Positive test}] \;\approx\; \text{BF} \times \text{Prior}$$

All Bayes factors are rounded to mental-math-friendly values: 1.5, 2, 3, 5, 10, 20, 50, or 100.

Because $\text{BF} \times \text{Prior}$ is a shortcut, the result can exceed 100%. Don't worry about it. Approach is still informative. When $\text{BF} \times \text{Prior} \approx 100\%$, interpret it as *"more likely than not to have the disease."* When $\text{BF} \times \text{Prior} > 200\%$, interpret it as *"very likely to have the disease."* In these cases, the exact calculation is given below the table.

**Probability anchors — what these numbers feel like:**

| Probability | Feels like... |
|---|---|
| 0.01% (1 in 10,000) | Being in a fatal car crash this year |
| 0.1% (1 in 1,000) | Developing appendicitis this year |
| 0.5% (1 in 200) | Being an identical twin |
| 1% (1 in 100) | Having a shellfish allergy |
| 2% (1 in 50) | Having naturally red hair |
| 5% (1 in 20) | Being a vegetarian |
| 10% (1 in 10) | Being left-handed |
| 20% (1 in 5) | Drawing a face card from a shuffled deck |
| 50% (1 in 2) | A coin flip |

*Sources: NHTSA 2024 (39,345 US traffic fatalities / 335M population); StatPearls appendicitis (1.1 per 1,000/year); CDC twin birth data (3–4 per 1,000 births monozygotic); FARE shellfish allergy (~1.3%); global red hair prevalence (~2%); Gallup US vegetarian poll (~5%); handedness meta-analyses (~10%); card probability (12 face cards / 52 = 23%, ≈ 20%); coin symmetry.*


---

## 1. Cancer Screening

### Mammography (Digital) — Breast Cancer

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 13% (sensitivity 87%) |
| False-positive rate | 9% (specificity 91%) |
| Bayes factor | $10\times$ |
| Base rate | 1% of women undergoing screening mammography |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Average screening patient | 1% | $10 \times 1\% = 10\%$ | $\frac{1}{10} \times 1\% = 0.1\%$ |
| Family history of breast cancer | 5% | $10 \times 5\% = 50\%$ | $\frac{1}{10} \times 5\% = 0.5\%$ |

Even with a positive result, 9 out of 10 average-risk women recalled for workup will be cancer-free. Dense breast tissue lowers sensitivity, weakening the negative-test reassurance.

- **+ result:** risk goes from *shellfish allergy* (1%) to *left-handed* (10%)
- **− result:** risk drops to *appendicitis this year* (0.1%)

**Sources:**
- BCSC. [Screening mammography benchmarks](https://www.bcsc-research.org/index.php/statistics/screening-performance-benchmarks-archive/screening-sens-spec-false-negative-archive), 2007–2013.
- Rosenberg et al. *Radiology*, 2017. [PMC 5375631](https://pmc.ncbi.nlm.nih.gov/articles/PMC5375631/).
- Kerlikowske et al. *Arch Intern Med*, 1996. [PubMed 8667537](https://pubmed.ncbi.nlm.nih.gov/8667537/).


### PSA — Prostate Cancer

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 7% (sensitivity 93%) |
| False-positive rate | 80% (specificity 20%) |
| Bayes factor (positive test) | $1.5\times$ |
| Bayes factor (negative test) | $1/3\times$ |
| Base rate | 5% of men aged 55–69 undergoing screening |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Average screening male aged 55–69 | 5% | $1.5 \times 5\% = 7.5\%$ | $\frac{1}{3} \times 5\% = 1.7\%$ |
| African American or strong family history | 10% | $1.5 \times 10\% = 15\%$ | $\frac{1}{3} \times 10\% = 3.3\%$ |

Nearly uninformative in both directions. A positive barely budges the prior; a negative offers only modest reassurance. Most false positives come from BPH. High sensitivity alone does not make a useful test.

- **+ result:** risk barely moves — from *vegetarian* (5%) to 7.5%
- **− result:** nearly useless in either direction

**Sources:**
- BMC Medicine systematic review and meta-analysis, 2022. PSA $\geq$4.0 ng/mL cutoff.
- USPSTF. [Prostate cancer screening recommendation](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/prostate-cancer-screening).


### Low-Dose CT (LDCT) — Lung Cancer

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 3% (sensitivity 97%) |
| False-positive rate | 4.8% (specificity 95.2%) |
| Bayes factor | $20\times$ |
| Base rate | 2% in high-risk screened populations (heavy smokers aged 50–80) |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Heavy smoker in screening program | 2% | $20 \times 2\% = 40\%$ | $\frac{1}{20} \times 2\% = 0.1\%$ |
| Smoking + occupational exposure (asbestos, radon) | 5% | $20 \times 5\% \geq 100\%$ | $\frac{1}{20} \times 5\% = 0.25\%$ |

$20 \times 5\% \geq 100\%$: the approximation saturates. Exact posterior (full Bayesian math) is 51%. One of the strongest screening tests available — powerful in both directions.

- **+ result:** risk goes from *red hair* (2%) to 40%
- **− result:** risk drops to *appendicitis this year* (0.1%)

**Sources:**
- SUMMIT prospective cohort study, 2025. 12-month episode sensitivity in high-risk smoking population.


### Colonoscopy — Colorectal Cancer

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 1.5% (sensitivity 98.5%) |
| False-positive rate | ~0% (specificity 99.9%) |
| Bayes factor | $100\times$ |
| Base rate | 0.5% for CRC in average-risk adults aged 45–75 |

**Interpreting Results**

Essentially a definitive diagnostic procedure — positive findings go directly to histological confirmation.

- **+ result:** goes directly to tissue diagnosis — essentially certain
- **− result:** base rate is at *identical twin* level (0.5%)

**Sources:**
- Head-to-head diagnostic meta-analysis, PMC, 2023.


### FIT (Fecal Immunochemical Test) — Colorectal Cancer

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 21% (sensitivity 79%) |
| False-positive rate | 6% (specificity 94%) |
| Bayes factor (positive test) | $10\times$ |
| Bayes factor (negative test) | $1/5\times$ |
| Base rate | 0.5% for CRC in average-risk adults |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Average-risk adult, age 45–75 | 0.5% | $10 \times 0.5\% = 5\%$ | $\frac{1}{5} \times 0.5\% = 0.1\%$ |
| First-degree relative with CRC | 2% | $10 \times 2\% = 20\%$ | $\frac{1}{5} \times 2\% = 0.4\%$ |

Positive FIT is a strong signal, but the 21% miss rate limits rule-out power. Positive result warrants follow-up colonoscopy.

- **+ result:** risk goes from *identical twin* (0.5%) to *vegetarian* (5%)
- **− result:** risk drops to *appendicitis this year* (0.1%)

**Sources:**
- Systematic review and meta-analysis, PMC, 2014. One-sample FIT in average-risk asymptomatic adults.


### Cologuard (Multi-target Stool DNA) — Colorectal Cancer

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 7% (sensitivity 93%) |
| False-positive rate | 16% (specificity 84%) |
| Bayes factor (positive test) | $5\times$ |
| Bayes factor (negative test) | $1/10\times$ |
| Base rate | 0.5% for CRC in average-risk adults |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Average-risk adult | 0.5% | $5 \times 0.5\% = 2.5\%$ | $\frac{1}{10} \times 0.5\% = 0.05\%$ |

Weaker positive Bayes factor than FIT due to higher false-positive rate, but stronger negative Bayes factor because it misses fewer cancers. Positive result warrants follow-up colonoscopy.

- **+ result:** risk goes from *identical twin* (0.5%) to near *red hair* (2.5%)
- **− result:** risk drops to near *fatal car crash* (0.05%)

**Sources:**
- USPSTF systematic review, 2021. sDNA-FIT combination test.


### Pap Smear — Cervical Cancer

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 45% (sensitivity 55%) |
| False-positive rate | 3% (specificity 97%) at HSIL threshold |
| Bayes factor (positive test) | $20\times$ |
| Bayes factor (negative test) | $1/2\times$ |
| Base rate | 0.1% for high-grade lesions or cancer in screened women |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Average screened woman | 0.1% | $20 \times 0.1\% = 2\%$ | $\frac{1}{2} \times 0.1\% = 0.05\%$ |
| Persistent HPV infection | 2% | $20 \times 2\% = 40\%$ | $\frac{1}{2} \times 2\% = 1\%$ |

One-directional test: positive is informative ($20\times$), but negative barely moves the needle ($1/2\times$) because it misses 45% of cases. This is why HPV co-testing has supplemented Pap-only screening.

- **+ result:** risk goes from *appendicitis this year* (0.1%) to *red hair* (2%)
- **− result:** barely changes it — this is why co-testing exists

**Sources:**
- NCI. [Cervical cancer screening (PDQ)](https://www.cancer.gov/types/cervical/hp/cervical-screening-pdq).
- AAFP. [Pap smear vs. HPV screening tests](https://www.aafp.org/pubs/afp/issues/2008/0615/p1740.html).


---

## 2. Cardiac

### High-Sensitivity Troponin — Acute Myocardial Infarction

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 6% (sensitivity 94%) |
| False-positive rate | 27% (specificity 73%) |
| Bayes factor (positive test) | $3\times$ |
| Bayes factor (negative test) | $1/10\times$ |
| Base rate | 10% of ED patients presenting with chest pain |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| ED chest pain (undifferentiated) | 10% | $3 \times 10\% = 30\%$ | $\frac{1}{10} \times 10\% = 1\%$ |
| Classic: substernal pressure, left arm, diaphoresis | 20% | $3 \times 20\% = 60\%$ | $\frac{1}{10} \times 20\% = 2\%$ |
| Low-risk: young, atypical, no cardiac history | 2% | $3 \times 2\% = 6\%$ | $\frac{1}{10} \times 2\% = 0.2\%$ |

A *rule-out* test. The positive Bayes factor ($3\times$) is modest — troponin rises in many non-MI conditions (HF, PE, sepsis, renal failure). But the negative Bayes factor ($1/10\times$) is powerful — a negative hs-troponin drops MI probability 10-fold.

- **+ result:** risk only moves to 30%
- **− result:** risk drops from *left-handed* (10%) to *shellfish allergy* (1%) — the key clinical use

**Sources:**
- Systematic review and meta-analysis, PMC, 2014. [PMC 4183183](https://pmc.ncbi.nlm.nih.gov/articles/PMC4183183/).
- ACC Expert Consensus, 2022. [JACC](https://www.jacc.org/doi/10.1016/j.jacc.2022.08.750).


### NT-proBNP — Heart Failure

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 10% (sensitivity 90%) |
| False-positive rate | 16% (specificity 84%) |
| Bayes factor (positive test) | $5\times$ |
| Bayes factor (negative test) | $1/10\times$ |
| Base rate | 2% of adults in primary care |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Unselected primary care patient | 2% | $5 \times 2\% = 10\%$ | $\frac{1}{10} \times 2\% = 0.2\%$ |
| Dyspnea, edema, and orthopnea | 20% | $5 \times 20\% \geq 100\%$ | $\frac{1}{10} \times 20\% = 2\%$ |

$5 \times 20\% \geq 100\%$: exact posterior is 56%. Age-related cutoffs: 450, 900, and 1800 pg/mL for ages <50, 50–75, and >75.

- **+ result:** risk goes from *red hair* (2%) to *left-handed* (10%)
- **− result:** risk drops to near *identical twin* (0.2%)

**Sources:**
- International pooled analysis of 1,256 patients, 2006. [European Heart Journal](https://academic.oup.com/eurheartj/article/27/3/330/2888121).


### D-dimer — Pulmonary Embolism

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 3% (sensitivity 97%) |
| False-positive rate | 59% (specificity 41%) |
| Bayes factor (positive test) | $1.5\times$ |
| Bayes factor (negative test) | $1/10\times$ |
| Base rate | 5% of ED patients with suspected PE (Wells low/moderate probability) |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Low-probability Wells score | 5% | $1.5 \times 5\% = 7.5\%$ | $\frac{1}{10} \times 5\% = 0.5\%$ |
| Moderate-probability Wells score | 20% | $1.5 \times 20\% = 30\%$ | $\frac{1}{10} \times 20\% = 2\%$ |

The paradigmatic *rule-out* test. A positive D-dimer is nearly worthless ($1.5\times$). But a negative D-dimer ($1/10\times$) drops PE probability 10-fold — in a low-probability patient, this avoids CT angiography. Always combine with Wells criteria.

- **+ result:** nearly worthless
- **− result:** risk drops from *vegetarian* (5%) to *identical twin* (0.5%) — that's the whole point

**Sources:**
- Systematic review and meta-analysis, *Blood Advances*, 2020. [ASH Publications](https://ashpublications.org/bloodadvances/article/4/18/4296/463726/).
- NEJM, 2019. [D-dimer adjusted to clinical probability](https://www.nejm.org/doi/full/10.1056/NEJMoa1909159).


### Coronary Artery Calcium Score (CAC = 0 vs. CAC > 0) — ASCVD Risk

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 6% (sensitivity 94%) |
| False-positive rate | 66% (specificity 34%) |
| Bayes factor (positive test) | $1.5\times$ |
| Bayes factor (negative test) | $1/5\times$ |
| Base rate | 7.5% 10-year ASCVD risk (borderline-risk patients) |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Borderline risk (5–7.5% 10-yr ASCVD) | 7.5% | $1.5 \times 7.5\% = 11\%$ | $\frac{1}{5} \times 7.5\% = 1.5\%$ |
| Intermediate risk (7.5–20% 10-yr ASCVD) | 15% | $1.5 \times 15\% = 22\%$ | $\frac{1}{5} \times 15\% = 3\%$ |

CAC works best as a *risk reclassifier* — moving patients between risk categories — rather than a traditional diagnostic test. The Bayes factor framework is not the best fit for it. A positive result (CAC > 0) is nearly useless on its own because most adults over 50 have some coronary calcium. The clinical value is almost entirely in the **negative result**: a CAC of zero is one of the strongest negative risk markers in cardiology, with an annual ASCVD event rate of ~0.03% and a "warranty period" of 5-10 years.

- **+ result:** nearly useless — most adults over 50 have some calcium
- **− result:** risk drops from *borderline* (7.5%) to *red hair* (1.5%) — strong reassurance, may defer statin therapy

**Sources:**
- Meta-analysis, *JAMA Internal Medicine*, 2004. [JAMA Network](https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/217101).
- MESA cohort, *JACC Cardiovascular Imaging*, 2020. [CAC=0 warranty period](https://www.jacc.org/doi/10.1016/j.jcmg.2020.06.048).
- AAFP. [CAC scoring for prevention](https://www.aafp.org/pubs/afp/issues/2022/0700/diagnostic-tests-coronary-artery-calcium-scoring.html).


---

## 3. Metabolic & Endocrine

### Hemoglobin A1c (≥6.5%) — Type 2 Diabetes

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 49% (sensitivity 51%) |
| False-positive rate | 4% (specificity 96%) |
| Bayes factor (positive test) | $10\times$ |
| Bayes factor (negative test) | $1/2\times$ |
| Base rate | 5% undiagnosed diabetes among US adults |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Unselected adult | 5% | $10 \times 5\% = 50\%$ | $\frac{1}{2} \times 5\% = 2.5\%$ |
| Obese, family history, acanthosis nigricans | 15% | $10 \times 15\% \geq 100\%$ | $\frac{1}{2} \times 15\% = 7.5\%$ |

$10 \times 15\% \geq 100\%$: exact posterior is 64%. A positive A1c is strong evidence ($10\times$). But the negative Bayes factor ($1/2\times$) is remarkably weak — A1c misses half of diabetics. For the high-risk patient, a normal A1c still leaves 7.5% probability. Consider fasting glucose or OGTT if suspicion remains.

- **+ result:** risk goes from *vegetarian* (5%) to *coin flip* (50%)
- **− result:** only drops to near *red hair* (2.5%) — it misses half of diabetics

**Sources:**
- Frontiers systematic review, 2023. [Frontiers in Medicine](https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2023.1016381/full).
- ADA. [Diabetes diagnosis & tests](https://diabetes.org/about-diabetes/diagnosis).


### Fasting Plasma Glucose (≥126 mg/dL) — Type 2 Diabetes

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 41% (sensitivity 59%) |
| False-positive rate | 1.2% (specificity 98.8%) |
| Bayes factor (positive test) | $50\times$ |
| Bayes factor (negative test) | $1/2\times$ |
| Base rate | 5% undiagnosed diabetes among US adults |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Unselected adult | 5% | $50 \times 5\% \geq 100\%$ | $\frac{1}{2} \times 5\% = 2.5\%$ |
| Low-risk young adult | 1% | $50 \times 1\% = 50\%$ | $\frac{1}{2} \times 1\% = 0.5\%$ |

$50 \times 5\% \geq 100\%$: exact posterior is 72%. Even more convincing than A1c when positive ($50\times$ vs. $10\times$), but the same weak negative Bayes factor ($1/2\times$). A normal fasting glucose does not rule out diabetes.

- **+ result:** risk goes from *vegetarian* (5%) to 72%
- **− result:** same weak negative as A1c

**Sources:**
- Systematic review, *PLOS One*, 2020. [PLOS One](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0242415).
- Frontiers in Medicine, 2023. [Network meta-analysis](https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2023.1016381/full).


### TSH — Hypothyroidism

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 2% (sensitivity 98%) |
| False-positive rate | 8% (specificity 92%) |
| Bayes factor (positive test) | $10\times$ |
| Bayes factor (negative test) | $1/50\times$ |
| Base rate | 5% of US adults (overt hypothyroidism) |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Unselected primary care patient | 5% | $10 \times 5\% = 50\%$ | $\frac{1}{50} \times 5\% = 0.1\%$ |
| Fatigue, weight gain, cold intolerance, family hx | 15% | $10 \times 15\% \geq 100\%$ | $\frac{1}{50} \times 15\% = 0.3\%$ |

$10 \times 15\% \geq 100\%$: exact posterior is 64%. TSH is exceptional: strong rule-in ($10\times$), *extraordinary* rule-out ($1/50\times$). A normal TSH essentially excludes primary hypothyroidism at any reasonable prior. Performance data from specialty settings; in unselected populations, false positives may be higher (acute illness, medications).

- **+ result:** risk goes from *vegetarian* (5%) to *coin flip* (50%)
- **− result:** risk drops to *appendicitis this year* (0.1%) — essentially ruling it out

**Sources:**
- AAFP. [Screening for thyroid disease](https://www.aafp.org/pubs/afp/issues/2004/0515/p2415.html).
- USPSTF. [Screening for thyroid dysfunction](https://www.acpjournals.org/doi/full/10.7326/M15-0483).
- *J Endocr Soc*, 2022. [PMC 9706417](https://pmc.ncbi.nlm.nih.gov/articles/PMC9706417/).


### Anti-TPO — Auto-Immune Hypothyroidism

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 7% (sensitivity 93%) |
| False-positive rate | 5% (specificity 95%) |
| Bayes factor (positive test) | $20\times$ |
| Bayes factor (negative test) | $1/10\times$ |
| Base rate | 5% of US adults |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Unselected adult | 5% | $20 \times 5\% \geq 100\%$ | $\frac{1}{10} \times 5\% = 0.5\%$ |
| Woman with fatigue, weight gain, family history | 15% | $20 \times 15\% \geq 100\%$ | $\frac{1}{10} \times 15\% = 1.5\%$ |
| Already diagnosed hypothyroid (etiology?) | 50% | $20 \times 50\% \geq 100\%$ | $\frac{1}{10} \times 50\% = 5\%$ |

$20 \times 5\% \geq 100\%$: exact posterior is 51%. $20 \times 15\% \geq 100\%$: exact posterior is 78%. $20 \times 50\% \geq 100\%$: exact posterior is 95%. Strong rule-in ($20\times$) confirms autoimmune etiology. Good rule-out ($1/10\times$) — a negative anti-TPO makes Hashimoto's unlikely but does not exclude it entirely (~5-10% of Hashimoto's patients are seronegative). Anti-TPO positivity can precede clinical hypothyroidism by years.

- **+ result:** risk goes from *vegetarian* (5%) to 51%
- **− result:** risk drops to *identical twin* (0.5%)

**Sources:**
- StatPearls. [Hashimoto Thyroiditis](https://www.ncbi.nlm.nih.gov/books/NBK459262/).
- Systematic review, *Frontiers in Public Health*, 2022. [PMC 9608544](https://pmc.ncbi.nlm.nih.gov/articles/PMC9608544/).


---

## 4. Infectious Disease

### Rapid Strep Test (RADT) — Group A Streptococcal Pharyngitis

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 14% (sensitivity 86%) |
| False-positive rate | 4.6% (specificity 95.4%) |
| Bayes factor (positive test) | $20\times$ |
| Bayes factor (negative test) | $1/5\times$ |
| Base rate | 15% of adults with sore throat; 30% of children with sore throat |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Adult with sore throat | 15% | $20 \times 15\% \geq 100\%$ | $\frac{1}{5} \times 15\% = 3\%$ |
| Child aged 5–15 with sore throat | 30% | $20 \times 30\% \geq 100\%$ | $\frac{1}{5} \times 30\% = 6\%$ |

$20 \times 15\% \geq 100\%$: exact posterior is 78%. $20 \times 30\% \geq 100\%$: exact posterior is 90%. Positive is very reliable. The 6% residual in children explains why IDSA recommends backup culture for negative RADTs in children.

- **+ result:** risk goes from 15% to 78% (adult) or 30% to 90% (child) — strong confirmation
- **− result:** risk drops meaningfully — helps avoid unnecessary antibiotics

**Sources:**
- Cochrane review. [Rapid tests for strep throat](https://www.cochrane.org/evidence/CD010502_what-performance-rapid-tests-diagnosis-strep-throat-children). 105 evaluations, 58,244 participants.
- PLOS One systematic review, 2014. [PLOS One](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0111727).
- CDC. [Clinical guidance for GAS pharyngitis](https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/strep-throat.html).


### Rapid Influenza Diagnostic Test (RIDT) — Influenza

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 38% (sensitivity 62%; adults ~54%, children ~67%) |
| False-positive rate | 1.8% (specificity 98.2%) |
| Bayes factor (positive test) | $50\times$ |
| Bayes factor (negative test) | $1/3\times$ |
| Base rate | 15% during flu season among patients with influenza-like illness |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| ILI symptoms during flu season | 15% | $50 \times 15\% \geq 100\%$ | $\frac{1}{3} \times 15\% = 5\%$ |
| ILI symptoms outside flu season | 2% | $50 \times 2\% \geq 100\%$ | $\frac{1}{3} \times 2\% = 0.7\%$ |

$50 \times 15\% \geq 100\%$: exact posterior is 90%. $50 \times 2\% \geq 100\%$: exact posterior is 51%. The asymmetry is the teaching point. Positive: $50\times$ (trust it). Negative: $1/3\times$ (don't trust it). A negative rapid flu during flu season still leaves 1-in-20 odds. Mirror image of D-dimer.

- **+ result:** risk goes from 15% to 90% during flu season
- **− result:** only drops to *vegetarian* (5%) — don't trust it

**Sources:**
- Chartrand et al. *Ann Intern Med*, 2012. [PubMed 22371850](https://pubmed.ncbi.nlm.nih.gov/22371850/).
- CDC. [Rapid influenza diagnostic tests](https://www.cdc.gov/flu/hcp/testing-methods/clinician_guidance_ridt.html).


### COVID-19 Rapid Antigen Test — COVID-19

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 27% (sensitivity 73% symptomatic; 45% asymptomatic) |
| False-positive rate | 0.7% (specificity 99.3%) |
| Bayes factor (positive test) | $100\times$ |
| Bayes factor (negative test) | $1/3\times$ |
| Base rate | 5–20% depending on community transmission |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Symptomatic during surge | 15% | $100 \times 15\% \geq 100\%$ | $\frac{1}{3} \times 15\% = 5\%$ |
| Asymptomatic, low prevalence | 2% | $100 \times 2\% \geq 100\%$ | $\frac{1}{3} \times 2\% = 0.7\%$ |

$100 \times 15\% \geq 100\%$: exact posterior is 95%. $100 \times 2\% \geq 100\%$: exact posterior is 67%. Like rapid flu but more extreme: massive positive Bayes factor makes a positive near-certain, but the negative is weak ($1/3\times$). Repeat in 24–48 hours for symptomatic patients with negative results.

- **+ result:** risk goes from 15% to 95% during a surge
- **− result:** only drops to *vegetarian* (5%) — repeat if suspicious

**Sources:**
- Meta-analysis of 166,943 samples, 2022. [PMC 9461282](https://pmc.ncbi.nlm.nih.gov/articles/PMC9461282/).
- Cochrane review, 2023. [AAFP summary](https://www.aafp.org/pubs/afp/issues/2023/0400/cochrane-poc-rapid-antigen-tests-for-diagnosis-of-covid-19.html).


### Monospot — Infectious Mononucleosis (EBV)

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 15% (sensitivity 85%) |
| False-positive rate | 5% (specificity 95%) |
| Bayes factor (positive test) | $20\times$ |
| Bayes factor (negative test) | $1/5\times$ |
| Base rate | 5% of adolescents/young adults with pharyngitis-like illness |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| College-age, sore throat, fatigue, lymphadenopathy | 5% | $20 \times 5\% \geq 100\%$ | $\frac{1}{5} \times 5\% = 1\%$ |
| Same + posterior cervical adenopathy, splenomegaly | 20% | $20 \times 20\% \geq 100\%$ | $\frac{1}{5} \times 20\% = 4\%$ |

$20 \times 5\% \geq 100\%$: exact posterior is 51%. $20 \times 20\% \geq 100\%$: exact posterior is 83%. Sensitivity is poor in first 1–2 weeks and in children <4. Atypical lymphocytes >20% on CBC have an even higher positive Bayes factor (~20×).

- **+ result:** risk goes from *vegetarian* (5%) to *coin flip* (51%)
- **− result:** risk drops to *shellfish allergy* (1%)

**Sources:**
- StatPearls. [Monospot test](https://www.ncbi.nlm.nih.gov/books/NBK539739/).
- AAFP. [Infectious mononucleosis: rapid evidence review](https://www.aafp.org/pubs/afp/issues/2023/0100/infectious-mononucleosis.html), 2023.


### Urea Breath Test — H. pylori Infection

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 4% (sensitivity 96%) |
| False-positive rate | 7% (specificity 93%) |
| Bayes factor | $10\times$ |
| Base rate | 30% of US adults overall |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Average US adult | 30% | $10 \times 30\% \geq 100\%$ | $\frac{1}{10} \times 30\% = 3\%$ |
| Young white adult | 20% | $10 \times 20\% \geq 100\%$ | $\frac{1}{10} \times 20\% = 2\%$ |
| Hispanic or African American, or age >60 | 55% | $10 \times 55\% \geq 100\%$ | $\frac{1}{10} \times 55\% = 5.5\%$ |

All positive-test entries saturate. Exact posteriors (full Bayesian math): average US adult = 81%, young white adult = 71%, Hispanic/African American/age >60 = 92%. Negative-test exact posteriors at these high base rates: 4%, 2%, 11%. PPI use within 2 weeks and recent antibiotics can cause false negatives.

- **+ result:** at a 30% base rate, risk pushes to 81%
- **− result:** risk drops to just under *vegetarian* (4%)

**Sources:**
- Systematic review, PMC, 2014. [PMC 4306177](https://pmc.ncbi.nlm.nih.gov/articles/PMC4306177/).
- AAFP. [Noninvasive diagnostic tests for H. pylori](https://www.aafp.org/pubs/afp/issues/2019/0701/p16.html).
- StatPearls. [Helicobacter pylori](https://www.ncbi.nlm.nih.gov/books/NBK534233/).


### Rapid Antibody Test — HIV

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 0.5% (sensitivity 99.5%) |
| False-positive rate | 0.5% (specificity 99.5%) |
| Bayes factor | $100\times$ |
| Base rate | 0.5% overall US adult prevalence |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Average-risk US adult | 0.5% | $100 \times 0.5\% = 50\%$ | $\frac{1}{100} \times 0.5\% = 0.005\%$ |
| IV drug use or MSM, high-prevalence area | 5% | $100 \times 5\% \geq 100\%$ | $\frac{1}{100} \times 5\% = 0.05\%$ |

$100 \times 5\% \geq 100\%$: exact posterior is 84%. The key teaching example: even with $\text{BF} = 100\times$, a positive test in the general population gives only 50% probability — about half of positives are false. Confirmatory testing always required. Negative is extraordinarily reassuring, except during window period (<4 weeks).

- **+ result:** risk goes from *identical twin* (0.5%) to *coin flip* (50%)
- **− result:** risk drops to well below *fatal car crash* (0.005%)

**Sources:**
- Meta-analysis of RDT operational characteristics, 2012–2020. [medRxiv](https://www.medrxiv.org/content/10.1101/2022.05.11.22274936v1.full).
- aidsmap. [Sensitivity and specificity of HIV tests](https://www.aidsmap.com/about-hiv/sensitivity-and-specificity-hiv-tests).


### Antibody Screen — Hepatitis C

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 2% (sensitivity 98%) |
| False-positive rate | 0.5% (specificity 99.5%) |
| Bayes factor (positive test) | $100\times$ |
| Bayes factor (negative test) | $1/50\times$ |
| Base rate | 2% of US adults |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Average US adult | 2% | $100 \times 2\% \geq 100\%$ | $\frac{1}{50} \times 2\% = 0.04\%$ |
| Baby boomer (born 1945–1965) | 5% | $100 \times 5\% \geq 100\%$ | $\frac{1}{50} \times 5\% = 0.1\%$ |
| History of IV drug use | 40% | $100 \times 40\% \geq 100\%$ | $\frac{1}{50} \times 40\% = 0.8\%$ |

$100 \times \text{prior} \geq 100\%$ for all rows: exact posteriors are 67% (average), 84% (baby boomer), 99% (IV drug use). Positive antibody may indicate cleared past infection — confirmatory HCV RNA always required.

- **+ result:** risk goes from *red hair* (2%) to 67%
- **− result:** risk drops to near *fatal car crash* (0.04%)

**Sources:**
- Systematic review, *Sci Rep*, 2019. [Nature](https://www.nature.com/articles/s41598-019-41139-8).
- PMC. [Hepatitis C screening](https://pmc.ncbi.nlm.nih.gov/articles/PMC4295744/).
- CDC. [Laboratory guidelines for HCV antibody testing](https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5203a1.htm).


### RPR/VDRL — Syphilis

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 18% (sensitivity 82%) |
| False-positive rate | 5% (specificity 95%) |
| Bayes factor (positive test) | $20\times$ |
| Bayes factor (negative test) | $1/5\times$ |
| Base rate | 0.1% in general population |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| General population | 0.1% | $20 \times 0.1\% = 2\%$ | $\frac{1}{5} \times 0.1\% = 0.02\%$ |
| MSM at STI clinic | 2% | $20 \times 2\% = 40\%$ | $\frac{1}{5} \times 2\% = 0.4\%$ |

Biological false positives occur with pregnancy, autoimmune conditions, IV drug use, TB. Confirmatory treponemal testing always required. In secondary syphilis, sensitivity is ~100% and the Bayes factor is much stronger ($100\times$).

- **+ result:** risk goes from *appendicitis this year* (0.1%) to *red hair* (2%)
- **− result:** risk drops to 0.02%

**Sources:**
- CDC. [Laboratory recommendations for syphilis testing, 2024](https://www.cdc.gov/mmwr/volumes/73/rr/rr7301a1.htm).
- AAFP. [Screening for syphilis infection](https://www.aafp.org/pubs/afp/issues/2004/1115/p1959.html).


### NAAT — Chlamydia/Gonorrhea

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 5% (sensitivity 95%) |
| False-positive rate | 1.5% (specificity 98.5%) |
| Bayes factor (positive test) | $50\times$ |
| Bayes factor (negative test) | $1/20\times$ |
| Base rate | 5% chlamydia in sexually active women <25; 1% gonorrhea in high-risk populations |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Sexually active woman <25, routine screening | 5% | $50 \times 5\% \geq 100\%$ | $\frac{1}{20} \times 5\% = 0.25\%$ |
| Mucopurulent discharge | 20% | $50 \times 20\% \geq 100\%$ | $\frac{1}{20} \times 20\% = 1\%$ |

$50 \times 5\% \geq 100\%$: exact posterior is 72%. $50 \times 20\% \geq 100\%$: exact posterior is 93%. Gold standard for STI detection.

- **+ result:** risk goes from *vegetarian* (5%) to 72%
- **− result:** risk drops to near *identical twin* (0.25%)

**Sources:**
- CDC. [Recommendations for lab-based detection of CT and NG, 2014](https://www.cdc.gov/mmwr/preview/mmwrhtml/rr6302a1.htm).
- PMC. [NAAT performance for CT/NG](https://pmc.ncbi.nlm.nih.gov/articles/PMC6340625/).
- USPSTF. [Chlamydia and gonorrhea screening](https://www.uspreventiveservicestaskforce.org/uspstf/document/RecommendationStatementFinal/chlamydia-and-gonorrhea-screening).


### QuantiFERON-TB Gold — Latent Tuberculosis

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 5% (sensitivity 95%) |
| False-positive rate | 3% (specificity 97%) |
| Bayes factor (positive test) | $20\times$ |
| Bayes factor (negative test) | $1/20\times$ |
| Base rate | 5% of US population |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Mixed primary care panel | 5% | $20 \times 5\% \geq 100\%$ | $\frac{1}{20} \times 5\% = 0.25\%$ |
| US-born healthcare worker | 1% | $20 \times 1\% = 20\%$ | $\frac{1}{20} \times 1\% = 0.05\%$ |
| Foreign-born or known TB contact | 20% | $20 \times 20\% \geq 100\%$ | $\frac{1}{20} \times 20\% = 1\%$ |

$20 \times 5\% \geq 100\%$: exact posterior is 51%. $20 \times 20\% \geq 100\%$: exact posterior is 83%. Strong in both directions. A negative result in a low-risk healthcare worker (1% prior) drops risk to near zero. A positive result in a foreign-born patient is highly confirmatory. False positives can occur with nontuberculous mycobacteria (NTM). Sensitivity may be reduced in immunocompromised patients.

- **+ result:** risk goes from *vegetarian* (5%) to 51%
- **− result:** risk drops to near *identical twin* (0.25%)

**Sources:**
- Systematic review and meta-analysis, *Clinical Infectious Diseases*, 2021. [PMC 8423471](https://pmc.ncbi.nlm.nih.gov/articles/PMC8423471/).
- Systematic review and meta-analysis, *BMC Infectious Diseases*, 2023. [Springer](https://link.springer.com/article/10.1186/s12879-023-08008-2).
- USPSTF. [Latent tuberculosis infection screening](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/latent-tuberculosis-infection-screening).


---

## 5. Urinary

### Urine Nitrite — Urinary Tract Infection

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 65% (sensitivity 35%) |
| False-positive rate | 4% (specificity 96%) |
| Bayes factor (positive test) | $10\times$ |
| Bayes factor (negative test) | $1/1.5\times$ |
| Base rate | 50% of women presenting with urinary symptoms |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Woman with dysuria and frequency | 50% | $10 \times 50\% \geq 100\%$ | $\frac{1}{1.5} \times 50\% = 33\%$ |
| Asymptomatic incidental finding | 5% | $10 \times 5\% = 50\%$ | $\frac{1}{1.5} \times 5\% = 3.3\%$ |

$10 \times 50\% \geq 100\%$: exact posterior is 91%. Negative-test exact posterior at 50% prior is 40% (simple approximation gives 33%). Positive is strong, but the test misses 65% of UTIs. Negative is nearly useless ($1/1.5\times$).

- **+ result:** at a *coin-flip* prior (50%), risk pushes to 91%
- **− result:** barely budges it — still 33–40%

**Sources:**
- StatPearls. [Urine nitrite test](https://www.ncbi.nlm.nih.gov/books/NBK470195/).


### Urine Leukocyte Esterase — Urinary Tract Infection

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 23% (sensitivity 77%) |
| False-positive rate | 30% (specificity 70%) |
| Bayes factor | $3\times$ |
| Base rate | 50% of women presenting with urinary symptoms |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Woman with dysuria and frequency | 50% | $3 \times 50\% \geq 100\%$ | $\frac{1}{3} \times 50\% = 17\%$ |

$3 \times 50\% \geq 100\%$: exact posterior is 75%. Negative-test exact posterior at 50% prior is 25% (simple approximation gives 17%). A positive LE is only weakly confirmatory. Combined dipstick (LE + nitrite both positive) has a substantially higher Bayes factor.

- **+ result:** at a *coin-flip* prior (50%), only pushes to 75%
- **− result:** weak — barely changes the prior

**Sources:**
- Primary care validation study, PMC, 2007. [PMC 1874525](https://pmc.ncbi.nlm.nih.gov/articles/PMC1874525/).


---

## 6. Hematologic

### Ferritin (<30 ng/mL) — Iron Deficiency Anemia

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 8% (sensitivity 92%) |
| False-positive rate | 2% (specificity 98%) |
| Bayes factor (positive test) | $50\times$ |
| Bayes factor (negative test) | $1/10\times$ |
| Base rate | 5% of adult women; 2% of adult men |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Woman with fatigue | 5% | $50 \times 5\% \geq 100\%$ | $\frac{1}{10} \times 5\% = 0.5\%$ |
| Menstruating woman with heavy periods | 10% | $50 \times 10\% \geq 100\%$ | $\frac{1}{10} \times 10\% = 1\%$ |
| Man, no obvious risk factors | 2% | $50 \times 2\% \geq 100\%$ | $\frac{1}{10} \times 2\% = 0.2\%$ |

All positive-test entries saturate. Exact posteriors: woman with fatigue = 72%, heavy periods = 85%, man = 51%. One of the strongest rule-in tests in primary care ($50\times$) and also a good rule-out ($1/10\times$). Critical caveat: ferritin is an acute-phase reactant — in patients with concurrent inflammation, a normal ferritin does *not* rule out iron deficiency. AGA recommends a higher threshold of <45 ng/mL in such patients.

- **+ result:** risk goes from *vegetarian* (5%) to 72%
- **− result:** risk drops to *identical twin* (0.5%) — one of the best tests in primary care

**Sources:**
- JAMA Network Open, 2024. [Ferritin cutoffs in primary care](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2821953).
- AAFP. [Iron deficiency anemia: evaluation and management](https://www.aafp.org/pubs/afp/issues/2013/0115/p98.html).
- AGA guidelines, 2021. [AAFP summary](https://www.aafp.org/pubs/afp/issues/2021/0800/p211.html).


---

## 7. Rheumatologic & Autoimmune

### ANA (1:80 titer) — Systemic Lupus Erythematosus

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 2% (sensitivity 98%) |
| False-positive rate | 25% (specificity 75%) |
| Bayes factor (positive test) | $5\times$ |
| Bayes factor (negative test) | $1/50\times$ |
| Base rate | 0.1% in the general adult population |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Unselected patient | 0.1% | $5 \times 0.1\% = 0.5\%$ | $\frac{1}{50} \times 0.1\% \approx 0\%$ |
| Young woman: malar rash, arthralgias, photosensitivity | 5% | $5 \times 5\% = 25\%$ | $\frac{1}{50} \times 5\% = 0.1\%$ |

Low-titer positive ($5\times$) is weak — most are false positives. The *negative* Bayes factor ($1/50\times$) is extraordinary — a negative ANA essentially rules out SLE. See also ANA at higher titers ($\geq$1:320) for a much stronger positive result.

- **+ result:** risk only moves from *appendicitis this year* (0.1%) to *identical twin* (0.5%)
- **− result:** risk drops to essentially zero

**Sources:**
- Meta-regression, *Arthritis Care Res*, 2017. [Wiley](https://acrjournals.onlinelibrary.wiley.com/doi/epdf/10.1002/acr.23292).
- AAFP. [Antibody testing for SLE](https://www.aafp.org/pubs/afp/issues/2011/1215/p1407.html).
- PMC. [Finding lupus in the ANA haystack](https://pmc.ncbi.nlm.nih.gov/articles/PMC7008709/).


### ANA (≥1:320 titer) — Systemic Lupus Erythematosus

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 2% (sensitivity 98%) |
| False-positive rate | 5% (specificity 95%) |
| Bayes factor (positive test) | $20\times$ |
| Bayes factor (negative test) | $1/50\times$ |
| Base rate | 0.1% in the general adult population |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Unselected patient | 0.1% | $20 \times 0.1\% = 2\%$ | $\frac{1}{50} \times 0.1\% \approx 0\%$ |
| Young woman: malar rash, arthralgias, photosensitivity | 5% | $20 \times 5\% \geq 100\%$ | $\frac{1}{50} \times 5\% = 0.1\%$ |

$20 \times 5\% \geq 100\%$: exact posterior is 51%. High titer is a much stronger positive signal than 1:80. Multiple autoantibodies ($\geq$3 positive: ~$50\times$) are even more informative. The *negative* Bayes factor ($1/50\times$) is extraordinary — a negative ANA essentially rules out SLE.

- **+ result:** risk goes from *appendicitis this year* (0.1%) to *red hair* (2%)
- **− result:** risk drops to essentially zero

**Sources:**
- Meta-regression, *Arthritis Care Res*, 2017. [Wiley](https://acrjournals.onlinelibrary.wiley.com/doi/epdf/10.1002/acr.23292).
- AAFP. [Antibody testing for SLE](https://www.aafp.org/pubs/afp/issues/2011/1215/p1407.html).
- PMC. [Finding lupus in the ANA haystack](https://pmc.ncbi.nlm.nih.gov/articles/PMC7008709/).


### Anti-CCP — Rheumatoid Arthritis

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 33% (sensitivity 67%) |
| False-positive rate | 5% (specificity 95%) |
| Bayes factor (positive test) | $10\times$ |
| Bayes factor (negative test) | $1/3\times$ |
| Base rate | 0.5% of US adults |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Unselected adult | 0.5% | $10 \times 0.5\% = 5\%$ | $\frac{1}{3} \times 0.5\% = 0.17\%$ |
| Symmetric polyarthritis, morning stiffness >1 hr | 15% | $10 \times 15\% \geq 100\%$ | $\frac{1}{3} \times 15\% = 5\%$ |

$10 \times 15\% \geq 100\%$: exact posterior is 64%. Better than RF. Negative ($1/3\times$) is weak — misses a third of RA cases. May be positive years before clinical onset.

- **+ result:** risk goes from *identical twin* (0.5%) to *vegetarian* (5%)
- **− result:** barely changes it

**Sources:**
- Meta-analysis, *Ann Intern Med*, 2007. [PubMed 17548411](https://pubmed.ncbi.nlm.nih.gov/17548411/).
- PMC. [Anti-CCP: a truly helpful RA test?](https://pmc.ncbi.nlm.nih.gov/articles/PMC4984588/).


### Rheumatoid Factor (RF) — Rheumatoid Arthritis

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 31% (sensitivity 69%) |
| False-positive rate | 15% (specificity 85%) |
| Bayes factor | $5\times$ |
| Base rate | 0.5% of US adults |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Unselected adult | 0.5% | $5 \times 0.5\% = 2.5\%$ | $\frac{1}{5} \times 0.5\% = 0.1\%$ |
| Symmetric polyarthritis, morning stiffness >1 hr | 15% | $5 \times 15\% = 75\%$ | $\frac{1}{5} \times 15\% = 3\%$ |

Most positive RF results in unselected patients are false positives (Sjögren's, hepatitis C, endocarditis, older age). Best used in combination with anti-CCP.

- **+ result:** risk goes from *identical twin* (0.5%) to near *red hair* (2.5%) — most positives in unselected patients are false
- **− result:** modest reassurance

**Sources:**
- Meta-analysis, *Ann Intern Med*, 2007. [PubMed 17548411](https://pubmed.ncbi.nlm.nih.gov/17548411/).


---

## 8. Gastrointestinal

### tTG-IgA — Celiac Disease

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 5% (sensitivity 95%) |
| False-positive rate | 7% (specificity 93%) |
| Bayes factor (positive test) | $10\times$ |
| Bayes factor (negative test) | $1/20\times$ |
| Base rate | 1% of the general population |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Unselected patient | 1% | $10 \times 1\% = 10\%$ | $\frac{1}{20} \times 1\% = 0.05\%$ |
| Chronic diarrhea, weight loss, iron deficiency | 5% | $10 \times 5\% = 50\%$ | $\frac{1}{20} \times 5\% = 0.25\%$ |
| First-degree relative of celiac patient | 10% | $10 \times 10\% \geq 100\%$ | $\frac{1}{20} \times 10\% = 0.5\%$ |

$10 \times 10\% \geq 100\%$: exact posterior is 53%. Highly elevated titers (≥10× ULN) have a much stronger Bayes factor (~$100\times$) and are now accepted for biopsy-free diagnosis. IgA-deficient patients (~2–3%) require IgG-based testing.

- **+ result:** risk goes from *shellfish allergy* (1%) to *left-handed* (10%)
- **− result:** risk drops to near *fatal car crash* (0.05%)

**Sources:**
- Systematic review, *Gastroenterology*, 2024. [Gastroenterology](https://www.gastrojournal.org/article/S0016-5085(23)05688-3/fulltext).
- Clinical Chemistry study, 2009. [PubMed 19799890](https://pubmed.ncbi.nlm.nih.gov/19799890/).
- Beyond Celiac. [Prevalence of celiac disease](https://www.beyondceliac.org/prevalence-of-celiac-disease/).


---

## 9. Respiratory

### Chest X-Ray — Community-Acquired Pneumonia

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 29% (sensitivity 71%) |
| False-positive rate | 14% (specificity 86%) |
| Bayes factor | $5\times$ |
| Base rate | 5% of primary care patients presenting with cough and fever |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Cough and low-grade fever | 5% | $5 \times 5\% = 25\%$ | $\frac{1}{5} \times 5\% = 1\%$ |
| High fever, productive cough, focal crackles | 20% | $5 \times 20\% \geq 100\%$ | $\frac{1}{5} \times 20\% = 4\%$ |

$5 \times 20\% \geq 100\%$: exact posterior is 56%. CXR misses ~30% of pneumonias, especially early in disease. Lung ultrasound (sensitivity ~93%) increasingly supplements CXR.

- **+ result:** risk goes from *vegetarian* (5%) to *face card from a deck* (25%)
- **− result:** risk drops to *shellfish allergy* (1%)

**Sources:**
- PMC. [Diagnostic accuracy of CXR for CAP](https://pmc.ncbi.nlm.nih.gov/articles/PMC3844354/).
- PMC. [CXR vs. ultrasound for pneumonia](https://pmc.ncbi.nlm.nih.gov/articles/PMC4608340/).


### Spirometry (FEV1/FVC < 0.70) — COPD

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 8% (sensitivity 92%) |
| False-positive rate | 16% (specificity 84%) |
| Bayes factor (positive test) | $5\times$ |
| Bayes factor (negative test) | $1/10\times$ |
| Base rate | 5% of US adults |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Unselected adult | 5% | $5 \times 5\% = 25\%$ | $\frac{1}{10} \times 5\% = 0.5\%$ |
| Current smoker with chronic dyspnea | 20% | $5 \times 20\% \geq 100\%$ | $\frac{1}{10} \times 20\% = 2\%$ |

$5 \times 20\% \geq 100\%$: exact posterior is 56%. Fixed FEV1/FVC threshold of 0.70 overdiagnoses COPD in older adults and underdiagnoses in younger patients.

- **+ result:** risk goes from *vegetarian* (5%) to *face card from a deck* (25%)
- **− result:** risk drops to *identical twin* (0.5%)

**Sources:**
- AAFP. [Office spirometry](https://www.aafp.org/pubs/afp/issues/2020/0315/p362.html).
- BMC Pulmonary Medicine, 2009. [Spirometry in primary care](https://bmcpulmmed.biomedcentral.com/articles/10.1186/1471-2466-9-31).


## 10. Neurological

### Elecsys pTau181 — Alzheimer's Disease

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 16% (sensitivity 84%) |
| False-positive rate | 22% (specificity 78%) |
| Bayes factor (positive test) | $3\times$ |
| Bayes factor (negative test) | $1/5\times$ |
| Base rate | 10% of adults over 65 presenting with memory concerns |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Adult over 65 with memory concerns | 10% | $3 \times 10\% = 30\%$ | $\frac{1}{5} \times 10\% = 2\%$ |
| Strong family history, progressive decline | 25% | $3 \times 25\% = 75\%$ | $\frac{1}{5} \times 25\% = 5\%$ |

The only FDA-cleared blood test for primary care. Designed as a **rule-out test** — a negative result has 97.9% negative predictive value in low-prevalence primary care populations. The positive result is weak ($3\times$) because the test is optimized for sensitivity over specificity. A positive pTau181 warrants referral for confirmatory testing (amyloid PET or CSF biomarkers). Single marker (pTau181 only), available through Labcorp. Not currently covered by Medicare or most insurance.

- **+ result:** risk goes from *left-handed* (10%) to 30% — needs confirmation
- **− result:** risk drops to *red hair* (2%) — strong reassurance

**Sources:**
- Roche. [Elecsys pTau181 FDA clearance](https://diagnostics.roche.com/us/en/news-listing/2025/fda-cleared-ptau181-alzheimers-blood-test.html).
- Alzheimer's Association. [FDA clearance statement](https://www.alz.org/news/2025/fda-clearance-blood-test-primary-care-rule-out-alzheimers-related-amyloid-pathology).


### Lumipulse pTau217/Aβ42 Ratio — Alzheimer's Disease

**Test Characteristics**

| Metric | Value |
|---|---|
| False-negative rate | 1% (sensitivity 99%) |
| False-positive rate | 15% (specificity 85%) |
| Bayes factor (positive test) | $5\times$ |
| Bayes factor (negative test) | $1/100\times$ |
| Base rate | 10% of adults over 65 presenting with memory concerns |

**Interpreting Results**

| Scenario | Prior | + Result | − Result |
|---|---|---|---|
| Adult over 65 with memory concerns | 10% | $5 \times 10\% = 50\%$ | $\frac{1}{100} \times 10\% = 0.1\%$ |
| Strong family history, progressive decline | 25% | $5 \times 25\% \geq 100\%$ | $\frac{1}{100} \times 25\% = 0.25\%$ |

$5 \times 25\% \geq 100\%$: exact posterior is 69%. First FDA-cleared blood test for diagnosing Alzheimer's (May 2025). Measures a two-marker ratio (pTau217 and β-amyloid 1-42). The FDA-cleared cutpoints prioritize sensitivity (99%) — don't miss anyone — at the cost of lower specificity (85%). A positive needs confirmation with amyloid PET or CSF. The negative BF ($1/100\times$) is extraordinary — a negative result essentially rules out amyloid pathology. Available through Labcorp. For adults 55+ with cognitive symptoms. Not currently covered by Medicare or most insurance.

- **+ result:** risk goes from *left-handed* (10%) to *coin flip* (50%) — needs confirmation
- **− result:** risk drops to *appendicitis this year* (0.1%) — essentially rules it out

**Sources:**
- FDA. [First blood test for Alzheimer's, May 2025](https://www.fda.gov/news-events/press-announcements/fda-clears-first-blood-test-used-diagnosing-alzheimers-disease).
- *Alzheimer's & Dementia*, 2025. [Diagnostic accuracy of pTau217/Aβ42](https://pmc.ncbi.nlm.nih.gov/articles/PMC11953589/).
- Labcorp. [pTau217/Aβ42 ratio test](https://www.labcorp.com/treatment-areas/neurology/clinical-testing/ptau217betaamyloid42ratio).


---

## Summary Table

| Test | Condition | $\text{BF}_{+}$ | $\text{BF}_{-}$ | Base Rate |
|---|---|---|---|---|
| Colonoscopy | CRC | 100× | — | 0.5% |
| HIV rapid antibody | HIV | 100× | 1/100× | 0.5% |
| Hepatitis C antibody | HCV | 100× | 1/50× | 2% |
| COVID rapid antigen | COVID-19 | 100× | 1/3× | 5–20% |
| RPR (secondary) | Syphilis | 100× | — | 0.1% |
| CT/GC NAAT | Chlamydia/Gonorrhea | 50× | 1/20× | 1–5% |
| Fasting glucose $\geq$126 | T2 Diabetes | 50× | 1/2× | 5% |
| Ferritin <30 | Iron deficiency | 50× | 1/10× | 5% women |
| Rapid influenza (RIDT) | Influenza | 50× | 1/3× | 15% ILI |
| RPR (primary) | Syphilis | 20× | 1/5× | 0.1% |
| LDCT | Lung cancer | 20× | 1/20× | 2% |
| Rapid strep (RADT) | GAS pharyngitis | 20× | 1/5× | 15–30% |
| Monospot | Mono (EBV) | 20× | 1/5× | 5% |
| Pap smear (HSIL) | Cervical cancer | 20× | 1/2× | 0.1% |
| HbA1c $\geq$6.5% | T2 Diabetes | 10× | 1/2× | 5% |
| Mammography | Breast cancer | 10× | 1/10× | 1% |
| H. pylori UBT | H. pylori | 10× | 1/10× | 30% |
| FIT | CRC | 10× | 1/5× | 0.5% |
| TSH | Hypothyroidism | 10× | 1/50× | 5% |
| Urine nitrite | UTI | 10× | 1/1.5× | 50% symptomatic |
| Anti-CCP | Rheumatoid arthritis | 10× | 1/3× | 0.5% |
| tTG-IgA | Celiac | 10× (100× at $\geq$10× ULN) | 1/20× | 1% |
| Cologuard | CRC | 5× | 1/10× | 0.5% |
| ANA (1:80) | SLE | 5× (20× at $\geq$1:320) | 1/50× | 0.1% |
| NT-proBNP | Heart failure | 5× | 1/10× | 2% |
| Spirometry | COPD | 5× | 1/10× | 5% |
| CXR | Pneumonia | 5× | 1/5× | 5% |
| RF | Rheumatoid arthritis | 5× | 1/5× | 0.5% |
| Troponin (hs) | AMI | 3× | 1/10× | 10% chest pain |
| Urine LE | UTI | 3× | 1/3× | 50% symptomatic |
| D-dimer | PE | 1.5× | 1/10× | 5% |
| PSA | Prostate cancer | 1.5× | 1/3× | 5% |


---

## Notes on Interpretation

1. **The approximation works when the base rate is low** (roughly <10%). At higher base rates, use full Bayesian math: $\text{Posterior odds} = \text{BF} \times \text{Prior odds}$.

2. **Base rates are not fixed.** The base rates here are population-level defaults. The interpretation tables show how the same Bayes factor applies to different patients.

3. **Tests fall into four categories:**
   - **Strong both ways**: HIV, LDCT, TSH, ferritin, colonoscopy, NAAT. Excellent tests — trust both positive and negative.
   - **Strong rule-in, weak rule-out** (trust positive, doubt negative): Rapid flu ($50\times$ / $1/3\times$), COVID antigen ($100\times$ / $1/3\times$), Pap ($20\times$ / $1/2\times$), HbA1c ($10\times$ / $1/2\times$), fasting glucose ($50\times$ / $1/2\times$).
   - **Weak rule-in, strong rule-out** (trust negative, doubt positive): D-dimer ($1.5\times$ / $1/10\times$), troponin ($3\times$ / $1/10\times$), ANA ($5\times$ / $1/50\times$).
   - **Weak both ways**: PSA ($1.5\times$ / $1/3\times$), urine LE ($3\times$ / $1/3\times$). Limited diagnostic value.
