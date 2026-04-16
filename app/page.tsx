import { parseTests } from "@/lib/parse-tests";
import { renderMarkdown } from "@/lib/render-markdown";
import SearchBar from "@/components/SearchBar";

export default async function Home() {
  const { intro, tests } = parseTests();
  const introHtml = await renderMarkdown(intro);

  const searchTests = tests.map((t) => ({
    name: t.name,
    slug: t.slug,
    category: t.category,
    condition: t.condition,
    bfPositive: t.bfPositive,
    bfNegative: t.bfNegative,
    baseRate: t.baseRate,
    content: t.content,
  }));

  return (
    <main className="home">
      <div className="home-left">
        <h1>Bayes Factor Reference</h1>
        <div
          className="intro-content"
          dangerouslySetInnerHTML={{ __html: introHtml }}
        />
      </div>
      <div className="home-right">
        <SearchBar tests={searchTests} />
      </div>
    </main>
  );
}
