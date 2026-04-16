import fs from "fs";
import path from "path";

export interface Test {
  name: string;
  slug: string;
  category: string;
  condition: string; // extracted from "Name — Condition" format
  bfPositive: string;
  bfNegative: string;
  baseRate: string;
  content: string; // raw markdown for the test
}

export interface ParsedContent {
  intro: string;
  tests: Test[];
  summaryTable: string;
  notes: string;
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

interface TestData {
  slug: string;
  bfPositive: string;
  bfNegative: string;
  baseRate: string;
}

function loadTestData(): TestData[] {
  const dataPath = path.join(process.cwd(), "content", "tests-data.json");
  return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
}

export function parseTests(): ParsedContent {
  const filePath = path.join(process.cwd(), "content", "tests.md");
  const raw = fs.readFileSync(filePath, "utf-8");
  const testData = loadTestData();

  // Split intro: everything before "## 1."
  const introEnd = raw.indexOf("## 1.");
  const intro = raw.substring(0, introEnd).replace(/^#\s+.*\n/, "").trim();

  // Split off summary table and notes
  const summaryStart = raw.indexOf("## Summary Table");
  const notesStart = raw.indexOf("## Notes on Interpretation");
  const summaryTable =
    summaryStart >= 0 && notesStart >= 0
      ? raw.substring(summaryStart, notesStart).trim()
      : "";
  const notes = notesStart >= 0 ? raw.substring(notesStart).trim() : "";

  // The test content is between introEnd and summaryStart
  const testContent = raw.substring(
    introEnd,
    summaryStart >= 0 ? summaryStart : undefined
  );

  // Parse categories and tests
  const tests: Test[] = [];
  let currentCategory = "";

  const lines = testContent.split("\n");
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Category heading: ## N. Name
    if (line.match(/^## \d+\./)) {
      currentCategory = line.replace(/^## \d+\.\s*/, "").trim();
      i++;
      continue;
    }

    // Test heading: ### Name — Condition
    if (line.startsWith("### ")) {
      const fullName = line.replace("### ", "").trim();
      const [testName, condition] = fullName.includes("—")
        ? fullName.split("—").map((s) => s.trim())
        : [fullName, ""];

      // Collect all content until next ### or ## heading
      const contentLines: string[] = [];
      i++;
      while (
        i < lines.length &&
        !lines[i].startsWith("### ") &&
        !lines[i].match(/^## /)
      ) {
        contentLines.push(lines[i]);
        i++;
      }

      const testContentRaw = contentLines.join("\n").trim();
      const slug = slugify(fullName);
      const data = testData.find((d) => d.slug === slug);

      tests.push({
        name: fullName,
        slug,
        category: currentCategory,
        condition,
        bfPositive: data?.bfPositive ?? "",
        bfNegative: data?.bfNegative ?? "",
        baseRate: data?.baseRate ?? "",
        content: testContentRaw,
      });
      continue;
    }

    i++;
  }

  return { intro, tests, summaryTable, notes };
}

export function getTestBySlug(slug: string): Test | undefined {
  const { tests } = parseTests();
  return tests.find((t) => t.slug === slug);
}

export function getAllSlugs(): string[] {
  const { tests } = parseTests();
  return tests.map((t) => t.slug);
}
