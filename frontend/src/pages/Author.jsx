import { useMemo, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Linkedin, Instagram, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, AUTHORS } from "@/data/articles";

export default function Author() {
  const { id } = useParams();
  
  const author = useMemo(() => AUTHORS[id], [id]);
  const authorArticles = useMemo(() => {
    if (!author) return [];
    return ARTICLES.filter(a => a.authorId === id);
  }, [author, id]);

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!author) {
    return <Navigate to="/resources" replace />;
  }

  return (
    <div className="relative grain min-h-screen flex flex-col">
      <SEO 
        title={`${author.name} | WIBLY`}
        description={author.bio}
        canonical={`/author/${author.id}`}
      />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24 px-6">
        <div className="w-[min(1000px,100%)] mx-auto">
          {/* Back link */}
          <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] hover:text-white transition-colors mb-12">
            <ArrowLeft size={16} /> Back to Resources
          </Link>
          
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-10 items-start mb-20">
            <div className="shrink-0">
              <img 
                src={author.image} 
                alt={author.name} 
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border border-[var(--border)] bg-[var(--bg-card)] shadow-2xl"
              />
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
                {author.name}
              </h1>
              <div className="text-xl text-[var(--accent-soft)] font-medium mb-6">
                {author.title}
              </div>
              <p className="text-lg text-[var(--text-muted)] max-w-2xl leading-relaxed mb-8">
                {author.bio}
              </p>
              
              <div className="flex items-center gap-4">
                {author.socials.linkedin && (
                  <a href={author.socials.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                )}
                {author.socials.instagram && (
                  <a href={author.socials.instagram} target="_blank" rel="noreferrer" className="p-2.5 rounded-full border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Articles */}
          <div className="border-t border-[var(--border)] pt-16">
            <h2 className="text-2xl font-semibold mb-8">Articles by {author.name}</h2>
            
            {authorArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {authorArticles.map((article, i) => (
                  <ArticleCard key={article.slug} article={article} index={i} />
                ))}
              </div>
            ) : (
              <p className="text-[var(--text-muted)]">No articles published yet.</p>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
