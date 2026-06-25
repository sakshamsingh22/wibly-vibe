import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, CATEGORIES } from "@/data/articles";

export default function Resources() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || article.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="relative grain min-h-screen flex flex-col">
      <SEO 
        title="Resources & Insights | WIBLY Web Design Studio" 
        description="Expert articles, website tips, SEO guides and business growth strategies to help small businesses succeed online." 
        canonical="/resources" 
      />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="w-[min(1200px,100%)] mx-auto">
          {/* Header */}
          <div className="max-w-2xl text-center mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Resources & <span className="font-serif italic text-[var(--accent-soft)]">Insights.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-muted)]">
              Expert articles, website tips, SEO guides and business growth strategies to help small businesses succeed online.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === cat 
                      ? "bg-white text-black" 
                      : "bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={16} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[var(--bg-card)] border border-[var(--border)] text-white pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>
          </div>

          {/* Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, i) => (
                <ArticleCard key={article.slug} article={article} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-[var(--text-muted)]">Try adjusting your search or category filters.</p>
              <button 
                onClick={() => { setSearch(""); setCategory("All"); }}
                className="mt-6 px-6 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--bg-card)] transition-colors text-sm font-medium"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
