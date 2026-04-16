import { parseTests, getAllSlugs, getTestBySlug } from "@/lib/parse-tests";
import { renderMarkdown } from "@/lib/render-markdown";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const test = getTestBySlug(slug);

  if (!test) {
    notFound();
  }

  const contentHtml = await renderMarkdown(test.content);

  return (
    <main className="test-page">
      <nav className="test-nav">
        <Link href="/" className="back-link">
          &larr; Back to all tests
        </Link>
        <span className="test-category">{test.category}</span>
      </nav>
      <h1>{test.name}</h1>
      <div
        className="test-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </main>
  );
}
