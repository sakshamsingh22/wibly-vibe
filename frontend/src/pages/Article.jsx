import { useMemo, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, Linkedin, Twitter, Link2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, AUTHORS } from "@/data/articles";

export default function Article() {
  const { slug } = useParams();
  
  const article = useMemo(() => ARTICLES.find(a => a.slug === slug), [slug]);
  const author = useMemo(() => article ? AUTHORS[article.authorId] : null, [article]);
  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return ARTICLES.filter(a => a.slug !== slug && a.category === article.category).slice(0, 3);
  }, [article, slug]);

  // Scroll to top on mount/change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

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
    <div className="relative grain min-h-screen flex flex-col">
      <SEO 
        title={article.seoTitle || `${article.title} | WIBLY`}
        description={article.metaDescription || article.excerpt}
        canonical={`/resources/${article.slug}`}
        schema={articleSchema}
      />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6">
        <article className="w-[min(800px,100%)] mx-auto">
          {/* Header */}
          <header className="mb-12">
            <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-white transition-colors mb-8">
              <ArrowLeft size={16} /> Back to Resources
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium mb-6">
              <span className="px-3 py-1 rounded-full border border-[var(--border)] text-[var(--accent-soft)]">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                <Clock size={14} /> {article.readingTime}
              </span>
              <span className="text-[var(--text-muted)]">&middot;</span>
              <span className="text-[var(--text-muted)]">
                {new Date(article.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-10">
              {article.title}
            </h1>

            {author && (
              <div className="flex items-center gap-4 py-6 border-y border-[var(--border)]">
                <img src={author.image} alt={author.name} className="w-12 h-12 rounded-full object-cover bg-[var(--bg-card)]" />
                <div>
                  <div className="font-medium">Written by <Link to={`/author/${author.id}`} className="hover:text-[var(--accent)] transition-colors">{author.name}</Link></div>
                  <div className="text-sm text-[var(--text-muted)]">{author.title}</div>
                </div>
              </div>
            )}
          </header>

          {/* Hero Image */}
          <div className="mb-16 aspect-[16/9] rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] relative">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-[var(--accent)] hover:prose-a:text-[var(--accent-soft)] prose-img:rounded-xl prose-hr:border-[var(--border)] prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share */}
          <div className="mt-16 pt-8 border-t border-[var(--border)] flex items-center justify-between">
            <div className="font-medium">Share this article</div>
            <div className="flex items-center gap-3">
              <button onClick={handleCopyLink} className="p-2 rounded-full border border-[var(--border)] hover:bg-[var(--bg-card)] transition-colors" aria-label="Copy link">
                <Link2 size={18} />
              </button>
              <a href={`https://twitter.com/intent/tweet?url=https://www.wibly.in/resources/${article.slug}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noreferrer" className="p-2 rounded-full border border-[var(--border)] hover:bg-[var(--bg-card)] transition-colors" aria-label="Share on Twitter">
                <Twitter size={18} />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.wibly.in/resources/${article.slug}`} target="_blank" rel="noreferrer" className="p-2 rounded-full border border-[var(--border)] hover:bg-[var(--bg-card)] transition-colors" aria-label="Share on LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-16 p-8 md:p-12 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-soft)]" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Ready to stop losing customers?</h3>
            <p className="text-[var(--text-muted)] text-lg mb-8 max-w-md mx-auto">Let's build a modern website that helps your business grow and converts visitors into clients.</p>
            <a href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-[#f0f0f0] transition-colors">
              Get Free Quote
            </a>
          </div>
        </article>
      </main>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-24 border-t border-[var(--border)] px-6">
          <div className="w-[min(1200px,100%)] mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-semibold tracking-tight">Keep reading</h2>
              <Link to="/resources" className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition-colors">
                View all <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((a, i) => (
                <ArticleCard key={a.slug} article={a} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  );
}
