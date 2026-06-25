import { useMemo, useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Clock, ArrowLeft, Linkedin, Twitter, Link2, ArrowRight, ChevronRight } from "lucide-react";
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66% 0px" }
    );
    toc.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

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
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--accent-violet)] to-[var(--accent)] z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="flex-1 pt-28 pb-24">
        
        {/* Massive Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col justify-end pb-16 px-6 md:px-12 overflow-hidden border-b border-[var(--border)]">
          <div className="absolute inset-0 z-0">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/80 to-[var(--bg)]/30" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          </div>
          
          <div className="w-[min(900px,100%)] mx-auto relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm font-medium text-white/60 mb-8">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link to="/resources" className="hover:text-white transition-colors">Resources</Link>
              <ChevronRight size={14} />
              <span className="text-[var(--accent-soft)] truncate max-w-[200px] md:max-w-none">{article.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-4 text-sm font-bold tracking-wider uppercase mb-6">
              <span className="px-4 py-1.5 rounded-full bg-[var(--accent)] text-white shadow-lg">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-white/80">
                <Clock size={16} /> {article.readingTime}
              </span>
              <span className="text-white/40">&bull;</span>
              <span className="text-white/80">
                {new Date(article.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white mb-10 text-balance">
              {article.title}
            </h1>

            {author && (
              <div className="flex items-center gap-4">
                <img src={author.image} alt={author.name} className="w-14 h-14 rounded-full object-cover border-2 border-white/10" />
                <div>
                  <div className="font-medium text-white text-lg">Written by <Link to={`/author/${author.id}`} className="hover:text-[var(--accent-soft)] transition-colors">{author.name}</Link></div>
                  <div className="text-sm text-white/60">{author.title}</div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Content Section */}
        <div className="w-[min(1200px,100%)] mx-auto px-6 md:px-12 mt-16 flex flex-col lg:flex-row gap-16 relative">
          
          {/* Sticky TOC */}
          {toc.length > 0 && (
            <aside className="hidden lg:block lg:w-[280px] shrink-0">
              <div className="sticky top-32">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-6">Table of Contents</h3>
                <ul className="space-y-4 border-l-2 border-[var(--border)]">
                  {toc.map(item => (
                    <li key={item.id}>
                      <a 
                        href={`#${item.id}`} 
                        className={`block pl-5 text-sm transition-all duration-300 border-l-2 -ml-[2px] ${
                          activeHeading === item.id 
                            ? "text-[var(--accent-soft)] border-[var(--accent)] font-medium translate-x-1" 
                            : "text-[var(--text-muted)] border-transparent hover:text-white"
                        }`}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}

          {/* Body */}
          <div className="flex-1 min-w-0">
            <FadeUp>
              <div 
                className="prose-premium"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </FadeUp>

            {/* Share */}
            <FadeUp delay={0.2}>
              <div className="mt-24 pt-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6 max-w-[820px] mx-auto">
                <div className="font-medium text-lg">Share this insight</div>
                <div className="flex items-center gap-4">
                  <button onClick={handleCopyLink} className="p-4 rounded-full border border-[var(--border)] hover:bg-[var(--bg-elev)] hover:border-[var(--accent)] transition-all group" aria-label="Copy link">
                    <Link2 size={20} className="group-hover:text-[var(--accent)]" />
                  </button>
                  <a href={`https://twitter.com/intent/tweet?url=https://www.wibly.in/resources/${article.slug}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer" className="p-4 rounded-full border border-[var(--border)] hover:bg-[var(--bg-elev)] hover:border-[#1DA1F2] transition-all group" aria-label="Share on Twitter">
                    <Twitter size={20} className="group-hover:text-[#1DA1F2]" />
                  </a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.wibly.in/resources/${article.slug}`} target="_blank" rel="noreferrer" className="p-4 rounded-full border border-[var(--border)] hover:bg-[var(--bg-elev)] hover:border-[#0A66C2] transition-all group" aria-label="Share on LinkedIn">
                    <Linkedin size={20} className="group-hover:text-[#0A66C2]" />
                  </a>
                </div>
              </div>
            </FadeUp>

            {/* Previous / Next Article Navigation */}
            <FadeUp delay={0.3}>
              <div className="mt-16 grid sm:grid-cols-2 gap-4 max-w-[820px] mx-auto">
                {prevArticle ? (
                  <Link to={`/resources/${prevArticle.slug}`} className="flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)]/50 transition-colors group">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2 group-hover:text-[var(--accent-soft)] transition-colors">Previous</span>
                    <span className="font-medium line-clamp-2">{prevArticle.title}</span>
                  </Link>
                ) : <div />}
                
                {nextArticle ? (
                  <Link to={`/resources/${nextArticle.slug}`} className="flex flex-col p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)]/50 transition-colors text-right group">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2 group-hover:text-[var(--accent-soft)] transition-colors">Next</span>
                    <span className="font-medium line-clamp-2">{nextArticle.title}</span>
                  </Link>
                ) : <div />}
              </div>
            </FadeUp>

            {/* CTA Banner */}
            <FadeUp delay={0.4}>
              <div className="mt-24 p-10 md:p-16 rounded-[2rem] bg-gradient-to-br from-[var(--bg-elev)] to-[var(--bg-card)] border border-[var(--border)] text-center relative overflow-hidden shadow-2xl max-w-[820px] mx-auto">
                <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
                <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-white relative z-10">Ready to build a website that actually converts?</h3>
                <p className="text-[var(--text-muted)] text-lg md:text-xl mb-10 max-w-lg mx-auto relative z-10">Stop losing customers to outdated design. Let's engineer a world-class digital experience for your brand.</p>
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
        <section className="py-32 bg-[var(--bg-elev)] border-t border-[var(--border)] px-6">
          <div className="w-[min(1200px,100%)] mx-auto">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-4xl font-semibold tracking-tight">Keep exploring</h2>
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
    </div>
  );
}
