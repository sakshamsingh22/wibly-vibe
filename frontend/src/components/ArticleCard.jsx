import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

export default function ArticleCard({ article, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/resources/${article.slug}`} className="group block h-full">
        <div className="card p-4 h-full flex flex-col hover:border-[var(--accent)]/30 transition-colors duration-500">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[var(--bg-card)]">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="px-2.5 py-1 rounded-full bg-[rgba(15,13,12,0.8)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-[10px] font-medium tracking-wide uppercase text-white">
                {article.category}
              </span>
            </div>
          </div>
          
          <div className="mt-5 flex-1 flex flex-col">
            <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
              <span className="flex items-center gap-1">
                <Clock size={12} /> {article.readingTime}
              </span>
              <span>&middot;</span>
              <span>{new Date(article.publishDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            </div>
            
            <h3 className="text-xl font-semibold leading-tight group-hover:text-[var(--accent-soft)] transition-colors duration-300">
              {article.title}
            </h3>
            
            <p className="mt-3 text-sm text-[var(--text-muted)] line-clamp-3">
              {article.excerpt}
            </p>
            
            <div className="mt-auto pt-6 flex items-center gap-2 text-sm font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
              Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
