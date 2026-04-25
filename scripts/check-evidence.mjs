import fs from "fs";
import path from "path";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RECIPIENTS = ["alexchinco@gmail.com", "dbonacco@gmail.com"];

// Build search queries from test data
const testsData = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "content", "tests-data.json"), "utf-8")
);

// Map slugs to human-readable search terms
function slugToSearchTerms(slug) {
  const mapping = {
    "mammography-digital-breast-cancer": "mammography breast cancer screening sensitivity specificity",
    "psa-prostate-cancer": "PSA prostate cancer screening sensitivity specificity",
    "low-dose-ct-ldct-lung-cancer": "low-dose CT lung cancer screening sensitivity specificity",
    "colonoscopy-colorectal-cancer": "colonoscopy colorectal cancer sensitivity specificity",
    "fit-fecal-immunochemical-test-colorectal-cancer": "fecal immunochemical test FIT colorectal cancer sensitivity specificity",
    "cologuard-multi-target-stool-dna-colorectal-cancer": "Cologuard stool DNA colorectal cancer sensitivity specificity",
    "pap-smear-cervical-cancer": "Pap smear cervical cancer sensitivity specificity",
    "high-sensitivity-troponin-acute-myocardial-infarction": "high sensitivity troponin myocardial infarction sensitivity specificity",
    "nt-probnp-heart-failure": "NT-proBNP heart failure sensitivity specificity",
    "d-dimer-pulmonary-embolism": "D-dimer pulmonary embolism sensitivity specificity",
    "coronary-artery-calcium-score-cac-0-vs-cac-0-ascvd-risk": "coronary artery calcium score ASCVD sensitivity specificity",
    "apob-130-mg-dl-ascvd-risk": "apolipoprotein B ASCVD cardiovascular risk",
    "hemoglobin-a1c-6-5-type-2-diabetes": "hemoglobin A1c diabetes sensitivity specificity",
    "fasting-plasma-glucose-126-mg-dl-type-2-diabetes": "fasting plasma glucose diabetes sensitivity specificity",
    "tsh-hypothyroidism": "TSH hypothyroidism sensitivity specificity",
    "anti-tpo-auto-immune-hypothyroidism": "anti-TPO thyroid peroxidase Hashimoto hypothyroidism sensitivity specificity",
    "rapid-strep-test-radt-group-a-streptococcal-pharyngitis": "rapid strep test RADT group A streptococcal sensitivity specificity",
    "rapid-influenza-diagnostic-test-ridt-influenza": "rapid influenza diagnostic test sensitivity specificity",
    "covid-19-rapid-antigen-test-covid-19": "COVID-19 rapid antigen test sensitivity specificity",
    "monospot-infectious-mononucleosis-ebv": "Monospot infectious mononucleosis EBV sensitivity specificity",
    "urea-breath-test-h-pylori-infection": "urea breath test H pylori sensitivity specificity",
    "rapid-antibody-test-hiv": "HIV rapid antibody test sensitivity specificity",
    "antibody-screen-hepatitis-c": "hepatitis C antibody screen sensitivity specificity",
    "rpr-vdrl-syphilis": "RPR VDRL syphilis sensitivity specificity",
    "naat-chlamydia-gonorrhea": "NAAT chlamydia gonorrhea sensitivity specificity",
    "quantiferon-tb-gold-latent-tuberculosis": "QuantiFERON TB Gold sensitivity specificity",
    "koh-prep-nail-onychomycosis": "KOH prep nail onychomycosis sensitivity specificity",
    "urine-nitrite-urinary-tract-infection": "urine nitrite UTI sensitivity specificity",
    "urine-leukocyte-esterase-urinary-tract-infection": "urine leukocyte esterase UTI sensitivity specificity",
    "ferritin-30-ng-ml-iron-deficiency-anemia": "ferritin iron deficiency anemia sensitivity specificity",
    "ana-1-80-titer-systemic-lupus-erythematosus": "ANA antinuclear antibody lupus SLE sensitivity specificity",
    "ana-1-320-titer-systemic-lupus-erythematosus": "ANA high titer lupus SLE sensitivity specificity",
    "anti-ccp-rheumatoid-arthritis": "anti-CCP rheumatoid arthritis sensitivity specificity",
    "rheumatoid-factor-rf-rheumatoid-arthritis": "rheumatoid factor RF sensitivity specificity",
    "ttg-iga-celiac-disease": "tTG-IgA celiac disease sensitivity specificity",
    "chest-x-ray-community-acquired-pneumonia": "chest X-ray pneumonia sensitivity specificity",
    "spirometry-fev1-fvc-0-70-copd": "spirometry FEV1 FVC COPD sensitivity specificity",
    "elecsys-ptau181-alzheimer-s-disease": "Elecsys pTau181 Alzheimer sensitivity specificity",
    "lumipulse-ptau217-a-42-ratio-alzheimer-s-disease": "Lumipulse pTau217 amyloid beta Alzheimer sensitivity specificity",
  };
  return mapping[slug] || slug.replace(/-/g, " ");
}

// Search PubMed for recent articles
async function searchPubMed(query) {
  const now = new Date();
  const sixMonthsAgo = new Date(now);
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const minDate = `${sixMonthsAgo.getFullYear()}/${String(sixMonthsAgo.getMonth() + 1).padStart(2, "0")}/${String(sixMonthsAgo.getDate()).padStart(2, "0")}`;
  const maxDate = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getDate()).padStart(2, "0")}`;

  const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(query + " AND (meta-analysis[pt] OR systematic review[pt])")}&mindate=${minDate}&maxdate=${maxDate}&retmax=5&retmode=json&datetype=pdat`;

  try {
    const res = await fetch(searchUrl);
    const data = await res.json();
    const ids = data?.esearchresult?.idlist || [];
    if (ids.length === 0) return [];

    // Fetch article details
    const detailUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids.join(",")}&retmode=json`;
    const detailRes = await fetch(detailUrl);
    const detailData = await detailRes.json();

    const articles = [];
    for (const id of ids) {
      const article = detailData?.result?.[id];
      if (article) {
        articles.push({
          title: article.title,
          authors: article.authors?.map((a) => a.name).slice(0, 3).join(", "),
          journal: article.source,
          date: article.pubdate,
          url: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
        });
      }
    }
    return articles;
  } catch (e) {
    console.error(`Error searching for "${query}":`, e.message);
    return [];
  }
}

// Rate-limit helper
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// Send email via Resend
async function sendEmail(subject, htmlBody) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Bedside Bayes <onboarding@resend.dev>",
      to: RECIPIENTS,
      subject,
      html: htmlBody,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Failed to send email:", err);
    process.exit(1);
  }
  console.log("Email sent successfully.");
}

// Main
async function main() {
  console.log(`Checking ${testsData.length} tests for recent evidence...`);

  const findings = [];

  for (const test of testsData) {
    const query = slugToSearchTerms(test.slug);
    console.log(`  Searching: ${test.slug}`);
    const articles = await searchPubMed(query);

    if (articles.length > 0) {
      findings.push({
        test: test.slug,
        bfPositive: test.bfPositive,
        bfNegative: test.bfNegative,
        baseRate: test.baseRate,
        articles,
      });
    }

    await sleep(400); // PubMed rate limit: ~3 requests/sec
  }

  // Build email
  const now = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  if (findings.length === 0) {
    await sendEmail(
      `Bedside Bayes — ${now} — No updates found`,
      `<h2>Monthly Evidence Check — ${now}</h2><p>No new meta-analyses or systematic reviews found for any of the ${testsData.length} tests in the past 6 months.</p>`
    );
    return;
  }

  let html = `<h2>Monthly Evidence Check — ${now}</h2>`;
  html += `<p>Found recent meta-analyses or systematic reviews for <strong>${findings.length}</strong> of ${testsData.length} tests. Review these to see if any Bayes factors or base rates need updating.</p>`;
  html += `<hr>`;

  for (const f of findings) {
    const testName = f.test.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    html += `<h3>${testName}</h3>`;
    html += `<p style="color:#666;font-size:0.9em;">Current: BF+ ${f.bfPositive} | BF− ${f.bfNegative} | Base rate: ${f.baseRate}</p>`;
    html += `<ul>`;
    for (const a of f.articles) {
      html += `<li><a href="${a.url}">${a.title}</a><br><em>${a.authors} — ${a.journal}, ${a.date}</em></li>`;
    }
    html += `</ul>`;
  }

  html += `<hr><p style="color:#999;font-size:0.8em;">This is an automated check from bedsidebayes.com. Review the linked articles to determine if test characteristics have changed.</p>`;

  await sendEmail(`Bedside Bayes — ${now} — ${findings.length} tests with new evidence`, html);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
