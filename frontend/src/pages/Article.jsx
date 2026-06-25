import { useMemo, useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Clock, ArrowLeft, Linkedin, Twitter, Link2, ArrowRight, ChevronRight, ArrowUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, AUTHORS } from "@/data/articles";

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function Article() {
  const { slug } = useParams();
  const [activeHeading, setActiveHeading] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const articleIndex = useMemo(() => ARTICLES.findIndex(a => a.slug === slug), [slug]);
  const article = ARTICLES[articleIndex];
  
  const author = useMemo(() => article ? AUTHORS[article.authorId] : null, [article]);
  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return ARTICLES.filter(a => a.slug !== slug && a.category === article.category).slice(0, 3);
  }, [article, slug]);

  const prevArticle = articleIndex > 0 ? ARTICLES[articleIndex - 1] : null;
  const nextArticle = articleIndex < ARTICLES.length - 1 ? ARTICLES[articleIndex + 1] : null;

  const toc = useMemo(() => {
    if (!article) return [];
    const headings = [];
    const regex = /<h2 id="([^"]+)">([^<]+)<\/h2>/g;
    let match;
    while ((match = regex.exec(article.content)) !== null) {
      headings.push({ id: match[1], text: match[2] });
    }
    return headings;
  }, [article]);

  // Calculate TOC translation
  const activeIndex = toc.findIndex(t => t.id === activeHeading);
  const itemHeight = 36; 
  const visibleItemsBeforeScroll = 4;
  const translateY = activeIndex > visibleItemsBeforeScroll 
    ? (activeIndex - visibleItemsBeforeScroll) * itemHeight 
    : 0;

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  useEffect(() => {
    if (!toc.length) return;
    
    const handleScrollSpy = () => {
      const headingElements = toc.map(t => document.getElementById(t.id)).filter(Boolean);
      if (!headingElements.length) return;

      // The offset includes the 110px navbar + a small buffer
      const offset = 140; 
      
      let currentActiveId = headingElements[0].id;
      for (const el of headingElements) {
        if (el.getBoundingClientRect().top <= offset) {
          currentActiveId = el.id;
        } else {
          break;
        }
      }
      
      setActiveHeading(currentActiveId);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [toc]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = Math.round((totalScroll / windowHeight) * 100);
      setScrollPercent(scroll);
      setShowBackToTop(totalScroll > 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
      setActiveHeading(id);
    }
  };

  if (!article) {
    return <Navigate to="/resources" replace />;
  }

  const articleSchema = {
    "@type": "Article",
    "headline": article.title,
    "image": `https://www.wibly.in${article.image}`,
    "datePublished": new Date(article.publishDate).toISOString(),
    "author": {
      "@type": "Person",
      "name": author?.name || "WIBLY",
      "url": `https://www.wibly.in/author/${article.authorId}`
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="relative grain min-h-screen flex flex-col bg-[var(--bg)]">
      <SEO 
        title={article.seoTitle || `${article.title} | WIBLY`}
        description={article.metaDescription || article.excerpt}
        canonical={`/resources/${article.slug}`}
        schema={articleSchema}
      />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent)] z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="flex-1 pt-28 pb-24">
        
        {/* Massive Hero Section */}
        <section className="relative min-h-[60vh] flex flex-col justify-end pb-16 px-6 md:px-12 overflow-hidden border-b border-[var(--border)]">
          <div className="absolute inset-0 z-0">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/90 to-[var(--bg)]/40" />
            <div className="absolute inset-0 bg-[var(--bg)]/50 backdrop-blur-sm" />
          </div>
          
          <div className="w-[min(1100px,100%)] mx-auto relative z-10 flex flex-col items-center text-center">
            {/* Breadcrumbs */}
            <nav className="flex flex-wrap justify-center items-center gap-2 text-sm font-medium text-[var(--text-muted)] mb-8 bg-[var(--bg-card)]/50 backdrop-blur-md px-4 py-2 rounded-full border border-[var(--border)]">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
              <ChevronRight size={14} />
              <span className="text-[var(--text)]">{article.title}</span>
            </nav>

            <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-semibold tracking-wider uppercase mb-8">
              <span className="px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent-soft)] border border-[var(--accent)]/20 shadow-lg">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                <Clock size={16} /> {article.readingTime}
              </span>
              <span className="text-[var(--text-muted)]">&bull;</span>
              <span className="text-[var(--text-muted)]">
                {new Date(article.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white mb-10 max-w-[900px] text-balance">
              {article.title}
            </h1>

            {author && (
              <div className="flex items-center gap-4">
                <img src={author.image} alt={author.name} className="w-14 h-14 rounded-full object-cover border-2 border-[var(--border)]" />
                <div className="text-left">
                  <div className="font-medium text-white text-lg">
                    Written by <Link to={`/author/${author.id}`} className="hover:text-[var(--accent-soft)] transition-colors">{author.name}</Link>
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">{author.title}</div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Content Section */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 mt-20 flex flex-col lg:flex-row items-start gap-16 relative">
          
          {/* Sticky TOC (Left Sidebar) */}
          {toc.length > 0 && (
            <aside className="hidden lg:block w-[300px] shrink-0 sticky top-[110px] self-start">
              <div className="flex flex-col gap-8">
                
                {/* Reading Status */}
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] mb-3">Reading Progress</div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-1.5 bg-[var(--bg-card)] rounded-full overflow-hidden border border-[var(--border)]">
                      <div className="h-full bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent)] transition-all duration-300 ease-out" style={{ width: `${scrollPercent}%` }} />
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)] w-8 text-right">{scrollPercent}%</span>
                  </div>
                  {activeHeading && (
                    <div className="mt-4 text-sm font-medium text-[var(--text)] border-l-2 border-[var(--accent-soft)] pl-3 py-1 bg-gradient-to-r from-[var(--accent)]/10 to-transparent">
                      Currently reading: <br/>
                      <span className="text-[var(--accent-soft)] truncate block mt-0.5">
                        {toc.find(t => t.id === activeHeading)?.text || "Introduction"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="h-px bg-[var(--border)] w-full" />

                {/* Table of Contents List */}
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-dim)] mb-6">Table of Contents</h3>
                  <nav className="flex flex-col relative h-[300px] overflow-hidden">
                    {/* Background line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--border)] rounded-full z-0" />
                    
                    <motion.ul 
                      animate={{ y: -translateY }}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      className="relative z-10 w-full"
                    >
                      {toc.map((item, index) => {
                        const isActive = activeHeading === item.id;
                        return (
                          <li key={item.id} className="relative h-[36px] flex flex-col justify-center">
                            {isActive && (
                              <motion.div 
                                layoutId="activeIndicator"
                                className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--accent)] rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                            )}
                            <a 
                              href={`#${item.id}`} 
                              onClick={(e) => handleScrollTo(e, item.id)}
                              className={`block pl-5 text-sm transition-all duration-200 leading-snug truncate ${
                                isActive 
                                  ? "text-white font-medium" 
                                  : "text-[var(--text-muted)] hover:text-white"
                              }`}
                            >
                              {item.text}
                            </a>
                          </li>
                        );
                      })}
                    </motion.ul>
                  </nav>
                </div>
              </div>
            </aside>
          )}

          {/* Body */}
          <div className="flex-1 w-full max-w-[820px]">
            <FadeUp>
              <div 
                className="prose-premium"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </FadeUp>

            {/* Share */}
            <FadeUp delay={0.1}>
              <div className="mt-20 pt-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="font-medium text-lg text-white">Did you find this helpful?</div>
                <div className="flex items-center gap-3">
                  <button onClick={handleCopyLink} className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all font-medium text-sm group" aria-label="Copy link">
                    <Link2 size={16} /> Copy Link
                  </button>
                  <a href={`https://twitter.com/intent/tweet?url=https://www.wibly.in/resources/${article.slug}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:border-[#1DA1F2] hover:text-[#1DA1F2] transition-all font-medium text-sm group" aria-label="Share on Twitter">
                    <Twitter size={16} /> Tweet
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.wibly.in/resources/${article.slug}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:border-[#0A66C2] hover:text-[#0A66C2] transition-all font-medium text-sm group" aria-label="Share on LinkedIn">
                    <Linkedin size={16} /> Share
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Previous / Next Article Navigation */}
            <FadeUp delay={0.2}>
              <div className="mt-12 grid sm:grid-cols-2 gap-4">
                {prevArticle ? (
                  <Link to={`/resources/${prevArticle.slug}`} className="flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)]/50 transition-colors group">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3 group-hover:text-[var(--accent-soft)] transition-colors">Previous Guide</span>
                    <span className="font-medium leading-snug line-clamp-2 text-[var(--text)] group-hover:text-white transition-colors">{prevArticle.title}</span>
                  </Link>
                ) : <div />}
                
                {nextArticle ? (
                  <Link to={`/resources/${nextArticle.slug}`} className="flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)]/50 transition-colors text-right group">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3 group-hover:text-[var(--accent-soft)] transition-colors">Next Guide</span>
                    <span className="font-medium leading-snug line-clamp-2 text-[var(--text)] group-hover:text-white transition-colors">{nextArticle.title}</span>
                  </Link>
                ) : <div />}
              </div>
            </FadeUp>

            {/* CTA Banner */}
            <FadeUp delay={0.3}>
              <div className="mt-20 p-10 md:p-14 rounded-3xl bg-gradient-to-br from-[var(--bg-elev)] to-[var(--bg-card)] border border-[var(--border)] text-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-soft)]" />
                
                <h3 className="text-3xl font-semibold mb-4 text-white relative z-10">Ready to build a website that converts?</h3>
                <p className="text-[var(--text-muted)] text-lg mb-10 max-w-lg mx-auto relative z-10">Stop losing customers to outdated design. Let's engineer a world-class digital experience for your brand.</p>
                <a href="/#contact" className="btn-primary inline-flex items-center justify-center px-10 py-4 rounded-full font-medium text-lg relative z-10">
                  Get Free Quote
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </main>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-24 bg-[var(--bg-elev)] border-t border-[var(--border)] px-6 relative z-10">
          <div className="w-[min(1200px,100%)] mx-auto">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-white">Keep exploring</h2>
              <Link to="/resources" className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition-colors uppercase tracking-widest">
                View all <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((a, i) => (
                <ArticleCard key={a.slug} article={a} index={i} />
              ))}
            </div>
            <div className="mt-12 text-center md:hidden">
              <Link to="/resources" className="btn-ghost inline-flex px-8 py-3 rounded-full text-sm font-medium uppercase tracking-widest">
                View all Resources
              </Link>
            </div>
          </div>
        </section>
      )}
      
      <Footer />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 p-4 rounded-full bg-[var(--bg-card)] border border-[var(--border)] shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all z-50 group backdrop-blur-md hidden md:flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
