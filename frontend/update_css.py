with open("src/index.css", "a") as f:
    f.write('''
/* --- Premium SaaS Article Elements --- */

/* Base Typography for Readability */
.prose-premium {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--text);
    max-width: 820px;
    margin: 0 auto;
}

.prose-premium h2 {
    font-size: 2.25rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    color: #ffffff;
}

.prose-premium h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: #e5e5e5;
}

.prose-premium p {
    margin-bottom: 1.5rem;
}

/* Callout Boxes */
.callout {
    border-radius: 12px;
    padding: 24px;
    margin: 32px 0;
    position: relative;
    overflow: hidden;
}

.callout::before {
    content: '';
    position: absolute;
    top: 0; left: 0; bottom: 0;
    width: 4px;
}

.callout-protip {
    background: linear-gradient(to right, rgba(122, 108, 243, 0.1), rgba(122, 108, 243, 0.02));
    border: 1px solid rgba(122, 108, 243, 0.2);
}
.callout-protip::before { background: var(--accent-violet); }
.callout-protip strong { color: var(--accent-violet); display: block; margin-bottom: 8px; font-size: 1.1rem; }

.callout-mistake {
    background: linear-gradient(to right, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.02));
    border: 1px solid rgba(239, 68, 68, 0.2);
}
.callout-mistake::before { background: #ef4444; }
.callout-mistake strong { color: #ef4444; display: block; margin-bottom: 8px; font-size: 1.1rem; }

.callout-win {
    background: linear-gradient(to right, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.02));
    border: 1px solid rgba(16, 185, 129, 0.2);
}
.callout-win::before { background: #10b981; }
.callout-win strong { color: #10b981; display: block; margin-bottom: 8px; font-size: 1.1rem; }

/* Pull Quotes */
.pull-quote {
    font-family: 'Instrument Serif', serif;
    font-size: 2.5rem;
    line-height: 1.2;
    color: var(--accent-soft);
    text-align: center;
    margin: 48px auto;
    max-width: 90%;
    position: relative;
}
.pull-quote::before, .pull-quote::after {
    content: '"';
    color: rgba(255, 106, 44, 0.2);
}

/* Premium Tables */
.premium-table-wrapper {
    overflow-x: auto;
    margin: 40px 0;
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--bg-card);
}
.premium-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}
.premium-table th {
    background: rgba(255,255,255,0.03);
    padding: 16px 24px;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    border-bottom: 1px solid var(--border);
}
.premium-table td {
    padding: 20px 24px;
    border-bottom: 1px solid var(--border);
    vertical-align: top;
}
.premium-table tr:last-child td {
    border-bottom: none;
}
.premium-table td:first-child {
    font-weight: 500;
    color: #fff;
    width: 30%;
}

/* Checklist Cards */
.checklist-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 32px;
    margin: 40px 0;
}
.checklist-card h3 {
    margin-top: 0;
}
.checklist-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
}
.checklist-item:last-child {
    margin-bottom: 0;
}
.checklist-icon {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Image Captions */
.image-caption {
    text-align: center;
    font-size: 0.875rem;
    color: var(--text-muted);
    margin-top: -12px;
    margin-bottom: 32px;
}
''')
