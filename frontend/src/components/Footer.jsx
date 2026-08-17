import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] mt-24" data-testid="footer">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Link to="/" className="flex items-center gap-3" data-testid="footer-logo">
            <Logo size={32} />
            <div>
              <div className="font-semibold">WIBLY</div>
              <div className="text-xs text-[var(--text-muted)]">Websites that grow businesses.</div>
            </div>
          </Link>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--text-muted)]">
            <a href="/#work" className="hover:text-[var(--text)] transition" data-testid="footer-work">Work</a>
            <a href="/#services" className="hover:text-[var(--text)] transition" data-testid="footer-services">Services</a>
            <a href="/#pricing" className="hover:text-[var(--text)] transition" data-testid="footer-pricing">Pricing</a>
            <a href="/#contact" className="hover:text-[var(--text)] transition" data-testid="footer-contact">Contact</a>
            <Link to="/privacy" className="hover:text-[var(--text)] transition" data-testid="footer-privacy">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[var(--text)] transition" data-testid="footer-terms">Terms &amp; Conditions</Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--text-muted)]">
          <div data-testid="footer-copyright">© 2026 WIBLY Studio. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/wibly.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition flex items-center gap-1.5" aria-label="Instagram">
              <Instagram size={15} /> <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/wibly-in/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition flex items-center gap-1.5" aria-label="LinkedIn">
              <Linkedin size={15} /> <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
