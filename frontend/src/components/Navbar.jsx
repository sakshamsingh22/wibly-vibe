import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ExternalLink, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const NAV = [
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#work" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") return;
    
    const navIds = ["work", "services", "process", "pricing", "faq"];
    
    const handleScroll = () => {
      if (window.__isNavScrolling) return;

      const elements = navIds.map(id => document.getElementById(id)).filter(Boolean);
      let maxVisibleHeight = 0;
      let mostVisible = "";
      const viewportHeight = window.innerHeight;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Calculate visible height factoring in the navbar offset
        const visibleTop = Math.max(80, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          mostVisible = el.id;
        }
      });

      if (mostVisible) {
        setActive(mostVisible);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      setActive(id);
      window.__isNavScrolling = true;
      clearTimeout(window.__navScrollTimeout);
      window.__navScrollTimeout = setTimeout(() => {
        window.__isNavScrolling = false;
      }, 1000); // Wait for smooth scroll to finish
    }
  };

  const isLegal = location.pathname === "/privacy" || location.pathname === "/terms";

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100%-2rem))]" data-testid="navbar">
      <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-full border border-[var(--border)] bg-[rgba(15,13,12,0.78)] backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2 pl-2 pr-3 py-1" data-testid="nav-logo">
          <Logo size={26} />
          <span className="font-semibold tracking-tight">WIBLY</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" data-testid="nav-links">
          {NAV.map((n) => {
            const id = n.href.split("#")[1];
            const isActive = !isLegal && active === id;
            return (
              <a
                key={n.label}
                href={n.href}
                onClick={() => handleNavClick(id)}
                data-testid={`nav-${n.label.toLowerCase()}`}
                className={`px-3.5 py-1.5 text-sm rounded-full transition-all ${
                  isActive ? "bg-white text-black" : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {n.label}
              </a>
            );
          })}
        </nav>

        <a
          href="/#contact"
          onClick={() => handleNavClick("contact")}
          className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-[#f0f0f0] transition"
          data-testid="nav-book-call"
        >
          Book a call <ExternalLink size={13} />
        </a>

        <button
          className="md:hidden p-2 text-[var(--text)]"
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 rounded-2xl border border-[var(--border)] bg-[rgba(15,13,12,0.95)] backdrop-blur-xl p-4 flex flex-col gap-1" data-testid="mobile-menu">
          {NAV.map((n) => {
            const id = n.href.split("#")[1];
            return (
              <a
                key={n.label}
                href={n.href}
                onClick={() => {
                  setOpen(false);
                  handleNavClick(id);
                }}
                className="px-3 py-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)]"
              >
                {n.label}
              </a>
            );
          })}
          <a 
            href="/#contact" 
            onClick={() => {
              setOpen(false);
              handleNavClick("contact");
            }} 
            className="mt-2 px-4 py-2 rounded-full bg-white text-black text-sm font-medium text-center"
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  );
}
