"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { ChevronUp, ChevronDown, ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/types/resources";
import Link from "next/link";
import { optimizedImage } from "@/lib/blog-image";

const decodeEntities = (s: string) =>
  s
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const headingId = (inner: string) => decodeEntities(inner).toLowerCase().replace(/\s+/g, "-");

// Server-safe HTML prep: heading ids, table scroll wrappers, external link rel.
// Styling lives in .blog-prose (globals.css), so the first paint is already final.
function prepareContent(html: string) {
  const toc: { id: string; title: string }[] = [];
  const out = html
    .replace(/<(h[1-3])([^>]*)>([\s\S]*?)<\/\1>/g, (m, tag, attrs, inner) => {
      if (/\sid=/.test(attrs)) return m;
      const id = headingId(inner);
      if (tag === "h2") toc.push({ id, title: decodeEntities(inner) });
      return `<${tag}${attrs} id="${id.replace(/"/g, "&quot;")}">${inner}</${tag}>`;
    })
    .replace(/<table/g, '<div class="table-wrap"><table')
    .replace(/<\/table>/g, "</table></div>")
    .replace(/<a ([^>]*href="https?:\/\/[^"]*"[^>]*)>/g, '<a rel="noopener" $1>');
  return { html: out, toc };
}

export default function BlogContent({ blog }: { blog: BlogPost }) {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocOpen, setTocOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const { html, toc: tableOfContents } = useMemo(() => prepareContent(blog.content), [blog.content]);
  const heroSrc = blog.image ? optimizedImage(blog.image) : "";

  const tocListRef = useRef<HTMLUListElement>(null);
  const tocIds = useMemo(() => tableOfContents.map((t) => t.id), [tableOfContents]);

  // One rAF-throttled, passive scroll listener. Headings are looked up fresh on every
  // frame (a cached list goes stale if React re-creates the article DOM).
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setShowBackToTop(y > 300);
      const el = contentRef.current;
      if (el) {
        const r = el.getBoundingClientRect();
        const total = Math.max(1, r.height - window.innerHeight);
        setScrollProgress(Math.round(Math.min(100, Math.max(0, (-r.top / total) * 100))));
      }
      let current = "";
      for (const id of tocIds) {
        const h = document.getElementById(id);
        if (!h || !h.isConnected) continue;
        if (h.getBoundingClientRect().top <= 140) current = id;
        else break;
      }
      setActiveSection(current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [tocIds]);

  // Keep the active item visible inside the contents panel without moving the page.
  useEffect(() => {
    const list = tocListRef.current;
    const nav = list?.parentElement;
    const btn = list?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!nav || !btn) return;
    const top = btn.offsetTop - nav.offsetTop;
    if (top < nav.scrollTop + 60 || top > nav.scrollTop + nav.clientHeight - 90) {
      nav.scrollTo({ top: Math.max(0, top - 120), behavior: "smooth" });
    }
  }, [activeSection]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="bg-white py-8" ref={contentRef}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blogs Button */}
        <div className="mb-6">
          <Link
            href="/resources/blogs"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blogs</span>
          </Link>
        </div>

        {/* Hero */}
        <div className="mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-900 shadow-lg">
          <div className="flex flex-col gap-8 p-6 sm:p-10 md:flex-row md:items-center lg:p-12">
            <div className="text-white md:flex-1">
              <h1
                className="mb-6 max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]"
                style={{ lineHeight: 1.2 }}
              >
                {blog.title}
              </h1>
              {!blog.summary && (
                <p className="mb-6 max-w-2xl text-sm opacity-90 sm:text-base">{blog.excerpt}</p>
              )}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-indigo-50">
                <div className="flex items-center gap-2">
                  <img
                    src={blog.author?.avatar}
                    alt={blog.author?.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <span>{blog.author?.name}</span>
                </div>
                <span className="opacity-50">/</span>
                <span>{blog.date}</span>
                {blog.last_updated && blog.last_updated !== blog.date && (
                  <>
                    <span className="opacity-50">/</span>
                    <span>Updated {blog.last_updated}</span>
                  </>
                )}
                <span className="opacity-50">/</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
            {heroSrc && (
              <img
                src={heroSrc}
                alt={blog.title}
                width={1200}
                height={750}
                fetchPriority="high"
                decoding="async"
                className="hidden aspect-[16/10] w-full rounded-xl object-cover md:block md:w-[40%]"
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <nav
              aria-label="Table of contents"
              className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={tocOpen}
              >
                <span className="text-sm font-semibold text-slate-900">On this page</span>
                <ChevronDown
                  className={`h-4 w-4 text-slate-500 transition-transform ${tocOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div className="mt-3">
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-indigo-600 transition-[width] duration-150"
                    style={{ width: `${scrollProgress}%` }}
                  />
                </div>
                <div className="mt-1.5 flex justify-between text-xs tabular-nums text-slate-500">
                  <span>
                    {Math.max(0, tocIds.indexOf(activeSection) + 1)} of {tocIds.length} sections
                  </span>
                  <span>{scrollProgress}% read</span>
                </div>
              </div>
              {tocOpen && (
                <ul ref={tocListRef} className="mt-4 space-y-0.5">
                  {tableOfContents.map((item, i) => {
                    const active = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          aria-current={active ? "true" : undefined}
                          className={`flex w-full items-start gap-3 rounded-lg px-2.5 py-2 text-left text-[13px] leading-snug transition-colors ${
                            active
                              ? "bg-indigo-50 font-medium text-indigo-700"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                        >
                          <span
                            className={`mt-px w-5 shrink-0 text-xs tabular-nums ${
                              active ? "text-indigo-500" : "text-slate-400"
                            }`}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="line-clamp-3">{item.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </nav>
          </aside>

          {/* Main content */}
          <div className="min-w-0 max-w-[50rem]">
            {blog.summary && (
              <div className="mb-10 rounded-xl border border-indigo-200 bg-indigo-50 p-5 sm:p-6">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">In short</div>
                <p className="text-[1.0625rem] font-medium text-slate-900" style={{ lineHeight: 1.65 }}>
                  {blog.summary}
                </p>
              </div>
            )}
            <div className="blog-prose" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}