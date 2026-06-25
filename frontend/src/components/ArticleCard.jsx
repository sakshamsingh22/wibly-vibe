import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

export default function ArticleCard({ article, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link to={`/resources/${article.slug}`} className="group block h-full">
        <div className="card p-5 h-full flex flex-col hover:border-[var(--accent)]/40 hover:bg-[var(--bg-elev)] hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(255,106,44,0.15)] relative overflow-hidden">
          
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-card)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

          <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-xl bg-[var(--bg-card)] z-10">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[rgba(15,13,12,0.85)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-[10px] font-bold tracking-wider uppercase text-white shadow-xl">
                {article.category}
              </span>
            </div>
          </div>
          
          <div className="mt-6 flex-1 flex flex-col z-10">
            <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-4 font-medium uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[var(--accent-soft)]" /> {article.readingTime}
              </span>
              <span>{new Date(article.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold leading-snug group-hover:text-[var(--accent-soft)] transition-colors duration-300">
              {article.title}
            </h3>
            
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-muted)] line-clamp-3">
              {article.excerpt}
            </p>
            
            <div className="mt-auto pt-8 flex items-center gap-2 text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors tracking-wide">
              Read Article 
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300 ease-out" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
