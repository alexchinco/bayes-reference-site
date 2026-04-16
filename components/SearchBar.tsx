"use client";

import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import Link from "next/link";

interface TestItem {
  name: string;
  slug: string;
  category: string;
  condition: string;
  bfPositive: string;
  bfNegative: string;
  baseRate: string;
  content: string;
}

export default function SearchBar({ tests }: { tests: TestItem[] }) {
  const [query, setQuery] = useState("");

  const fuse = useMemo(
    () =>
      new Fuse(tests, {
        keys: [
          { name: "name", weight: 3 },
          { name: "condition", weight: 2 },
          { name: "category", weight: 1.5 },
          { name: "content", weight: 1 },
        ],
        threshold: 0.3,
        includeScore: true,
      }),
    [tests]
  );

  const results = query.trim()
    ? fuse.search(query).map((r) => r.item)
    : tests;

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search tests (e.g., strep, iron, diabetes...)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
        autoFocus
      />
      <div className="search-results">
        {results.map((test) => (
          <Link
            key={test.slug}
            href={`/tests/${test.slug}`}
            className="test-card"
          >
            <div className="test-card-header">
              {test.condition && (
                <span className="test-card-condition">{test.condition}</span>
              )}
              <span className="test-card-category">{test.category}</span>
            </div>
            <h3 className="test-card-name">
              {test.name.includes("—")
                ? test.name.split("—")[0].trim()
                : test.name}
            </h3>
            <div className="test-card-stats">
              <span className="test-card-bf">
                {test.bfPositive
                  ? `BF+: ${test.bfPositive.replace(/\$/g, "").replace(/\\times/g, "\u00D7")}`
                  : ""}
              </span>
              <span className="test-card-bf">
                {test.bfNegative
                  ? `BF\u2212: ${test.bfNegative.replace(/\$/g, "").replace(/\\times/g, "\u00D7")}`
                  : ""}
              </span>
              {test.baseRate && (
                <span className="test-card-base">
                  Base: {test.baseRate.replace(/\$|\\/g, "")}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
