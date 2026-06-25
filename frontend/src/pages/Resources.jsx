import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Flame, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, CATEGORIES } from "@/data/articles";

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || article.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredArticle = ARTICLES[0];
  const trendingArticles = ARTICLES.slice(1, 4);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative grain min-h-screen flex flex-col overflow-x-hidden">
      <SEO 
        title="Resources & Insights | WIBLY" 
        description="Premium guides, deep-dives, and tutorials on web design, SEO, and growing your small business online."
        canonical="/resources"
      />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6 md:px-12">
        <div className="w-[min(1200px,100%)] mx-auto">
          
          <header className="mb-20 text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6"
            >
              Resources & <span className="font-serif italic text-[var(--accent)] pr-4">Insights.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[var(--text-muted)] leading-relaxed"
            >
              World-class insights, design deep-dives, and technical tutorials to help your business dominate the digital landscape.
            </motion.p>
          </header>

          {/* Search & Categories */}
          <div className="mb-20 space-y-10">
            <div className="relative max-w-2xl mx-auto group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-[var(--accent)] transition-colors" size={24} />
              <input
                type="text"
                placeholder="Search resources, tutorials, guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[rgba(255,255,255,0.03)] border border-[var(--border)] rounded-full py-5 pl-16 pr-8 text-lg outline-none focus:border-[var(--accent)] focus:bg-[rgba(255,106,44,0.05)] focus:ring-4 ring-[rgba(255,106,44,0.1)] transition-all placeholder:text-[var(--text-dim)] shadow-xl"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[var(--accent)] text-white shadow-[0_0_20px_rgba(255,106,44,0.4)] scale-105"
                      : "bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--text-muted)] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Show Featured & Trending ONLY if no search/filter is active */}
          {(searchQuery === "" && activeCategory === "All") && (
            <div className="mb-32 space-y-24">
              
              {/* Featured Article */}
              <section>
                <div className="flex items-center gap-2 mb-8 text-[var(--text-muted)] font-semibold tracking-widest uppercase text-sm">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  Featured Insight
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg-card)] grid lg:grid-cols-2 gap-0 transition-all hover:border-[var(--accent)]/30 hover:shadow-[0_30px_60px_-15px_rgba(255,106,44,0.15)]"
                >
                  <div className="p-10 md:p-16 flex flex-col justify-center order-2 lg:order-1 relative z-10">
                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-wider uppercase text-[var(--text-muted)] mb-8">
                      <span className="px-3 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent-soft)] border border-[var(--accent)]/20">
                        {featuredArticle.category}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} /> {featuredArticle.readingTime}
                      </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] mb-6 group-hover:text-[var(--accent-soft)] transition-colors">
                      {featuredArticle.title}
                    </h2>
                    
                    <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-10">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <Link to={`/resources/${featuredArticle.slug}`} className="btn-primary self-start px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 group/btn">
                      Read Deep Dive
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <div className="relative order-1 lg:order-2 h-[300px] lg:h-auto overflow-hidden">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-card)] via-transparent to-transparent hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent lg:hidden" />
                  </div>
                </motion.div>
              </section>

              {/* Trending Rail */}
              <section>
                <div className="flex items-center gap-2 mb-10 text-[var(--text-muted)] font-semibold tracking-widest uppercase text-sm">
                  <Flame size={18} className="text-[#ef4444]" />
                  Trending This Week
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {trendingArticles.map((article, i) => (
                    <ArticleCard key={article.slug} article={article} index={i} />
                  ))}
                </div>
              </section>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent" />
            </div>
          )}

          {/* All Articles Grid */}
          <section>
            {(searchQuery !== "" || activeCategory !== "All") && (
              <div className="mb-10 text-2xl font-semibold">
                Results for {activeCategory !== "All" ? activeCategory : "All"} {searchQuery && `"${searchQuery}"`}
              </div>
            )}
            
            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, i) => (
                  <ArticleCard key={article.slug} article={article} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32 border border-[var(--border)] rounded-3xl bg-[var(--bg-card)]">
                <p className="text-xl text-[var(--text-muted)]">No resources found matching your criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="mt-6 text-[var(--accent)] hover:underline font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
