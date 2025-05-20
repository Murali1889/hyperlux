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
          heading.classList.add("text-[3rem]", "my-4", "mt-6");
          break;
        case "H2":
          heading.classList.add("text-[2rem]", "mb-2", "mt-4");
          break;
        case "H3":
          heading.classList.add("text-[1.75rem]", "mb-2", "mt-4");
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

    doc.querySelectorAll("blockquote").forEach((quote) => {
      quote.classList.add(
        "border-l-4",
        "border-indigo-500",
        "pl-4",
        "italic",
        "my-6",
      );
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

        {/* Featured Image */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <div className="relative aspect-[21/9] w-full">
            <div className="absolute inset-0 p-8 bg-gradient-to-r from-indigo-600 to-indigo-900 flex items-center justify-center">
              <div className="text-start text-white">
                <h1 className="text-[3rem] font-bold mb-4">{blog.title}</h1>
                <p className="text-base opacity-80">{blog.excerpt}</p>
              </div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center justify-center gap-4 text-white">
                  <div className="flex items-center gap-2">
                    <img
                      src={blog.author?.avatar}
                      alt={blog.author?.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="text-sm">{blog.author?.name}</div>
                  </div>
                  <div className="text-sm">|</div>
                  <div className="text-sm">{blog.date}</div>
                  <div className="text-sm">|</div>
                  <div className="text-sm">{blog.readTime}</div>
                </div>
              </div>
              {blog.image ? (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-2/3 h-2/3 rounded-lg object-cover"
                />
              ) : (
                <div className="relative w-full h-full">
                  {/* Abstract document classification visualization */}
                  <div className="absolute top-1/4 left-[15%] w-32 h-40 bg-white/10 rounded-lg transform rotate-6 backdrop-blur-sm border border-white/20"></div>
                  <div className="absolute top-1/3 right-[14%] w-40 h-32 bg-white/10 rounded-lg transform -rotate-3 backdrop-blur-sm border border-white/20"></div>
                  <div className="absolute bottom-1/4 left-[20%] w-36 h-28 bg-white/10 rounded-lg transform rotate-12 backdrop-blur-sm border border-white/20"></div>

                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1000 500"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M300,150 C400,100 600,100 700,150"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M300,250 C400,200 600,200 700,250"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M300,350 C400,300 600,300 700,350"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="300" cy="150" r="8" fill="rgba(255,255,255,0.5)" />
                    <circle cx="700" cy="150" r="8" fill="rgba(255,255,255,0.5)" />
                    <circle cx="300" cy="250" r="8" fill="rgba(255,255,255,0.5)" />
                    <circle cx="700" cy="250" r="8" fill="rgba(255,255,255,0.5)" />
                    <circle cx="300" cy="350" r="8" fill="rgba(255,255,255,0.5)" />
                    <circle cx="700" cy="350" r="8" fill="rgba(255,255,255,0.5)" />
                  </svg>
                </div>
              )}
            </div>
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