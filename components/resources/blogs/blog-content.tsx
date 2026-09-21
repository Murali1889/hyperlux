"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronUp, ChevronRight, CheckCircle, ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/types/resources";
import Link from "next/link";

export default function BlogContent({ blog }: { blog: BlogPost }) {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocExpanded, setTocExpanded] = useState(true);
  const [tableOfContents, setTableOfContents] = useState<
    { id: string; title: string; level: number }[]
  >([]);
  const [processedContent, setProcessedContent] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);
  const tocRef = useRef<HTMLDivElement>(null);

  // Generate table of contents from the blog content
  const generateTableOfContents = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const headings = doc.querySelectorAll("h2");

    return Array.from(headings).map((heading) => {
      const id = heading.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      heading.id = id; // Add ID to the heading for scroll targeting
      return {
        id,
        title: heading.textContent || "",
        level: parseInt(heading.tagName[1]),
      };
    });
  };

  // Function to process and style HTML content
  const processHtmlContent = (content: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");

    // Add IDs to headings for scroll targeting
    doc.querySelectorAll("h1, h2, h3").forEach((heading) => {
      const id = heading.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      heading.id = id;
    });

    // Add classes to elements for styling
    doc.querySelectorAll("p").forEach((p) => {
      p.classList.add("text-slate-700", "mb-4");
    });

    doc.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((heading) => {
      heading.classList.add("scroll-mt-24", "font-bold", "text-slate-900");
      switch (heading.tagName) {
        case "H1":
          heading.classList.add("text-[2rem]", "md:text-[3rem]", "my-4", "mt-6");
          break;
        case "H2":
          heading.classList.add("text-[1.5rem]", "md:text-[2rem]", "mb-2", "mt-4");
          break;
        case "H3":
          heading.classList.add("text-[1.25rem]", "md:text-[1.75rem]", "mb-2", "mt-4");
          break;
        case "H4":
          heading.classList.add("text-[1.5rem]", "mb-2", "mt-4");
          break;
        case "H5":
          heading.classList.add("text-[1.25rem]", "mb-2", "mt-4");
          break;
        case "H6":
          heading.classList.add("text-[1.125rem]", "mb-2", "mt-4");
          break;
      }
    });

    doc.querySelectorAll("ul, ol").forEach((list) => {
      list.classList.add("list-disc", "pl-6", "mb-4");
    });

    doc.querySelectorAll("li").forEach((item) => {
      item.classList.add("mb-2");
    });

    doc.querySelectorAll("img").forEach((img) => {
      img.classList.add("rounded-lg", "shadow-md", "my-6", "w-full");
    });

    // Links must be visible as links (color alone is not enough), or readers never see the internal links
    doc.querySelectorAll("a").forEach((link) => {
      link.classList.add(
        "text-indigo-700",
        "underline",
        "decoration-indigo-300",
        "underline-offset-2",
        "hover:text-indigo-900",
        "hover:decoration-indigo-700",
      );
      const href = link.getAttribute("href") || "";
      if (/^https?:\/\//.test(href)) link.setAttribute("rel", "noopener");
    });

    doc.querySelectorAll("pre").forEach((pre) => {
      pre.classList.add(
        "bg-slate-900",
        "text-slate-100",
        "rounded-lg",
        "p-4",
        "text-sm",
        "leading-relaxed",
        "overflow-x-auto",
        "my-6",
        "font-mono",
      );
    });

    doc.querySelectorAll("pre code").forEach((code) => {
      code.classList.add("bg-transparent", "text-inherit", "p-0");
    });

    doc.querySelectorAll("code").forEach((code) => {
      if (!code.closest("pre")) {
        code.classList.add("bg-slate-100", "text-slate-800", "rounded", "px-1.5", "py-0.5", "text-[0.9em]", "font-mono");
      }
    });

    doc.querySelectorAll("blockquote").forEach((quote) => {
      quote.classList.add(
        "border-l-4",
        "border-indigo-500",
        "pl-4",
        "italic",
        "my-6",
      );
    });

    doc.querySelectorAll("table").forEach((table) => {
      table.classList.add("w-full", "border-collapse", "text-sm");
      const wrapper = doc.createElement("div");
      wrapper.className = "overflow-x-auto my-6 rounded-lg border border-slate-200";
      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });

    doc.querySelectorAll("thead").forEach((thead) => {
      thead.classList.add("bg-slate-50");
    });

    doc.querySelectorAll("th").forEach((th) => {
      th.classList.add(
        "px-4",
        "py-3",
        "text-left",
        "font-semibold",
        "text-slate-900",
        "border-b",
        "border-slate-200",
        "whitespace-nowrap",
      );
    });

    doc.querySelectorAll("td").forEach((td) => {
      td.classList.add(
        "px-4",
        "py-3",
        "text-slate-700",
        "border-b",
        "border-slate-100",
        "align-top",
      );
    });

    doc.querySelectorAll("tbody tr:last-child td").forEach((td) => {
      td.classList.remove("border-b", "border-slate-100");
    });

    return doc.body.innerHTML;
  };

  // Run DOMParser-dependent functions only on the client
  useEffect(() => {
    setTableOfContents(generateTableOfContents(blog.content));
    setProcessedContent(processHtmlContent(blog.content));
  }, [blog.content]);

  // Scroll handling
  const [readSections, setReadSections] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      if (contentRef.current) {
        const contentTop = contentRef.current.getBoundingClientRect().top;
        const contentHeight = contentRef.current.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;

        const scrollPercentage = Math.min(
          100,
          Math.max(
            0,
            ((scrollPosition - contentTop + windowHeight) /
              (contentHeight + windowHeight)) *
              100,
          ),
        );

        setScrollProgress(scrollPercentage);
      }

      const sections = document.querySelectorAll("h1, h2, h3");
      let currentActiveSection = "";
      const newReadSections = [...readSections];

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 150) {
          currentActiveSection = section.id;
          if (!newReadSections.includes(section.id)) {
            newReadSections.push(section.id);
          }
        }
      });

      if (currentActiveSection !== activeSection) {
        setActiveSection(currentActiveSection);
      }

      if (newReadSections.length !== readSections.length) {
        setReadSections(newReadSections);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, readSections]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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

        {/* Hero: responsive, title first, meta row, image only on wider screens */}
        <div className="mb-8 md:mb-10 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-900 shadow-lg">
          <div className="flex flex-col gap-6 p-5 sm:p-8 md:flex-row md:items-center md:p-10">
            <div className="text-white md:flex-1">
              <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-[2.75rem]">
                {blog.title}
              </h1>
              {!blog.summary && (
                <p className="mb-6 max-w-2xl text-sm opacity-90 sm:text-base">
                  {blog.excerpt}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <img
                    src={blog.author?.avatar}
                    alt={blog.author?.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>{blog.author?.name}</div>
                </div>
                <div className="opacity-60">|</div>
                <div>{blog.date}</div>
                {blog.last_updated && blog.last_updated !== blog.date && (
                  <>
                    <div className="opacity-60">|</div>
                    <div>Updated {blog.last_updated}</div>
                  </>
                )}
                <div className="opacity-60">|</div>
                <div>{blog.readTime}</div>
              </div>
            </div>
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="hidden aspect-[16/10] w-full rounded-lg object-cover md:block md:w-[42%]"
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
          {/* Table of Contents Sidebar */}
          <div className="hidden lg:block">
            <div
              ref={tocRef}
              className={`sticky top-24 transition-all duration-300 ease-in-out ${
                tocExpanded ? "w-full" : "w-16"
              }`}
            >
              <div
                className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 ${
                  tocExpanded ? "p-6" : "p-3"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`font-bold transition-opacity duration-200 ${
                      tocExpanded ? "opacity-100" : "opacity-0 w-0"
                    }`}
                  >
                    Table of contents
                  </h3>
                  <button
                    onClick={() => setTocExpanded(!tocExpanded)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <ChevronRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        tocExpanded ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${scrollProgress}%` }}
                    ></div>
                  </div>
                  <div
                    className={`flex justify-between mt-1 text-xs text-slate-500 transition-opacity duration-200 ${
                      tocExpanded ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span>0%</span>
                    <span>{Math.round(scrollProgress)}%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div
                  className={`space-y-1 items-start transition-all duration-300 ${
                    tocExpanded ? "" : "opacity-0 h-0 overflow-hidden"
                  }`}
                >
                  {tableOfContents.map((item, index) => (
                    <div
                      key={item.id}
                      className={`flex items-start group cursor-pointer`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      <div className="mr-3 flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full flex items-center justify-center transition-all duration-300 ${
                            activeSection === item.id
                              ? "bg-indigo-600 ring-4 ring-indigo-100"
                              : readSections.includes(item.id)
                              ? "bg-indigo-200"
                              : "bg-slate-200"
                          }`}
                        >
                          {readSections.includes(item.id) && (
                            <CheckCircle className="h-2 w-2 text-indigo-600" />
                          )}
                        </div>
                        {index < tableOfContents.length - 1 && (
                          <div
                            className={`w-0.5 h-8 transition-colors duration-300 ${
                              readSections.includes(item.id)
                                ? "bg-indigo-200"
                                : "bg-slate-200"
                            }`}
                          />
                        )}
                      </div>
                      <div
                        className={`text-sm transition-colors duration-200 ${
                          activeSection === item.id
                            ? "font-medium text-indigo-600"
                            : readSections.includes(item.id)
                            ? "text-slate-600"
                            : "text-slate-500"
                        }`}
                      >
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Collapsed view */}
                <div
                  className={`transition-all duration-300 ${
                    tocExpanded ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
                  }`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    {tableOfContents.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                          activeSection === item.id
                            ? "bg-indigo-600 ring-4 ring-indigo-100"
                            : readSections.includes(item.id)
                            ? "bg-indigo-200"
                            : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg prose-indigo max-w-none">
            {blog.summary && (
              <div className="not-prose mb-8 rounded-xl border border-indigo-200 bg-indigo-50 p-5 sm:p-6">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                  In short
                </div>
                <p className="text-lg font-medium leading-snug text-slate-900">
                  {blog.summary}
                </p>
              </div>
            )}
            <div
              dangerouslySetInnerHTML={{ __html: processedContent || blog.content }}
            />
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          aria-label="Back to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}