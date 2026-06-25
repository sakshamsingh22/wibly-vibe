import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Section } from "@/pages/Home";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES } from "@/data/articles";

export default function ResourcesSection() {
  // Get latest 3 articles
  const featuredArticles = ARTICLES.slice(0, 3);

  return (
    <Section 
      id="resources" 
      num="06" 
      eyebrow="Resources"
      title={<>Resources & <span className="font-serif italic text-[var(--accent-soft)]">Insights.</span></>}
      intro="Practical website, design, SEO and business growth guides for small businesses."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {featuredArticles.map((article, i) => (
          <ArticleCard key={article.slug} article={article} index={i} />
        ))}
      </div>
      
      <div className="mt-12 flex justify-center">
        <Link 
          to="/resources" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] hover:bg-[var(--bg-card)] transition-colors text-sm font-medium"
        >
          View all resources <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
