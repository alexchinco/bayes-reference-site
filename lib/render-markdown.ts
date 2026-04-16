import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

// Convert LaTeX math to plain Unicode text
function latexToUnicode(md: string): string {
  // Replace display math blocks: $$...$$ -> centered paragraph
  md = md.replace(
    /\$\$([^$]+)\$\$/g,
    (_, expr) => `<p style="text-align:center;margin:1.5rem 0">${convertExpr(expr.trim())}</p>`
  );

  // Replace inline math: $...$ (but not $$)
  md = md.replace(/(?<!\$)\$(?!\$)([^$]+)\$(?!\$)/g, (_, expr) =>
    convertExpr(expr.trim())
  );

  return md;
}

function convertExpr(expr: string): string {
  let s = expr;

  // Detect negative result pattern: \frac{1}{N} \times Prior = Result
  // before converting \frac, so we can build the right stacked layout
  const negMatch = s.match(
    /^\\frac\{1\}\{(\d+)\}\s*\\times\s*(.+?)\s*=\s*(.+)$/
  );
  if (negMatch) {
    const [, denom, prior, result] = negMatch;
    const priorClean = prior.replace(/\\%/g, "%").replace(/[{}]/g, "").trim();
    const resultClean = result.replace(/\\%/g, "%").replace(/[{}]/g, "").trim();
    const inlineText = `1/${denom} \u00D7 ${priorClean} = ${resultClean}`;
    return `<span class="math-expr"><span class="math-inline">${inlineText}</span><span class="math-stacked"><span class="math-row">${priorClean}</span><span class="math-row math-op">\u00F7 ${denom}</span><span class="math-line"></span><span class="math-row math-result">${resultClean}</span></span></span>`;
  }

  // Detect positive result pattern: N \times Prior = Result
  const posMatch = s.match(
    /^([0-9.]+)\s*\\times\s*(.+?)\s*(=|\\geq)\s*(.+)$/
  );
  if (posMatch) {
    const [, bf, prior, op, result] = posMatch;
    const priorClean = prior.replace(/\\%/g, "%").replace(/[{}]/g, "").trim();
    const resultClean = result.replace(/\\%/g, "%").replace(/[{}]/g, "").trim();
    const opClean = op === "\\geq" ? "\u2265" : "=";
    const inlineText = `${bf} \u00D7 ${priorClean} ${opClean} ${resultClean}`;
    return `<span class="math-expr"><span class="math-inline">${inlineText}</span><span class="math-stacked"><span class="math-row">${priorClean}</span><span class="math-row math-op">\u00D7 ${bf}</span><span class="math-line"></span><span class="math-row math-result">${resultClean}</span></span></span>`;
  }

  // \text{...} -> just the text
  s = s.replace(/\\text\{([^}]*)\}/g, "$1");

  // \frac{a}{b} -> a/b
  s = s.replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, "$1/$2");

  // Common commands
  s = s.replace(/\\times/g, "\u00D7");
  s = s.replace(/\\approx/g, "\u2248");
  s = s.replace(/\\geq/g, "\u2265");
  s = s.replace(/\\leq/g, "\u2264");
  s = s.replace(/\\mid/g, "|");
  s = s.replace(/\\;/g, " ");
  s = s.replace(/\\,/g, " ");
  s = s.replace(/\\%/g, "%");
  s = s.replace(/\\_/g, "_");

  // Clean up remaining backslashes and braces
  s = s.replace(/[{}]/g, "");

  return s;
}

export async function renderMarkdown(md: string): Promise<string> {
  const converted = latexToUnicode(md);

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(converted);

  // Add class to tables with 4+ columns (interpreting results tables)
  let html = String(result);
  html = html.replace(/<table>/g, (match) => match)
    .replace(/<table>([\s\S]*?)<\/table>/g, (match, inner) => {
      const thCount = (inner.match(/<th/g) || []).length;
      if (thCount >= 4) {
        return match.replace('<table>', '<table class="results-table">');
      }
      return match;
    });

  return html;
}
