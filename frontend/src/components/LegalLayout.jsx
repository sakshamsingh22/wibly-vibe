import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function LegalLayout({ eyebrow, title, lastUpdated, children, testId }) {
  return (
    <div className="relative min-h-screen grain" data-testid={testId}>
      <Navbar />
      <main className="relative z-10 pt-36 pb-12">
        <div className="max-w-[860px] mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition mb-10" data-testid="legal-back-home">
            <ArrowLeft size={14} /> Back to home
          </Link>

          <div className="eyebrow mb-4">{eyebrow}</div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]" data-testid="legal-title">
            {title}
          </h1>
          <p className="mt-4 text-sm text-[var(--text-muted)] font-mono" data-testid="legal-last-updated">
            Last updated: {lastUpdated}
          </p>

          <div className="divider my-10" />

          <article className="legal-content text-[15px] leading-[1.75] text-[var(--text-muted)]">
            {children}
          </article>

          <div className="divider my-14" />

          <div className="text-sm text-[var(--text-muted)]">
            Questions about this document? Email{" "}
            <a className="text-[var(--accent-soft)] hover:text-[var(--accent)]" href="mailto:wibly.in@gmail.com">
              wibly.in@gmail.com
            </a>
            .
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        .legal-content h2 {
          color: var(--text);
          font-size: 22px;
          font-weight: 600;
          margin: 36px 0 12px;
          letter-spacing: -0.01em;
        }
        .legal-content h3 {
          color: var(--text);
          font-size: 16px;
          font-weight: 600;
          margin: 24px 0 8px;
        }
        .legal-content p { margin: 10px 0; }
        .legal-content ul { margin: 10px 0 14px; padding-left: 1.25rem; }
        .legal-content ul li { list-style: disc; margin: 6px 0; }
        .legal-content strong { color: var(--text); font-weight: 600; }
        .legal-content a { color: var(--accent-soft); }
        .legal-content a:hover { color: var(--accent); }
      `}</style>
    </div>
  );
}
