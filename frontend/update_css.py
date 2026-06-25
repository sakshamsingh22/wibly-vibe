with open("src/index.css", "a") as f:
    f.write('''
/* Article Premium Elements */
.highlight-box {
    background: linear-gradient(180deg, rgba(255, 106, 44, 0.1), rgba(255, 106, 44, 0.02));
    border: 1px solid rgba(255, 106, 44, 0.2);
    border-radius: 12px;
    padding: 24px;
    margin: 32px 0;
    color: var(--text);
    font-size: 1.05rem;
    line-height: 1.6;
}

.highlight-box strong {
    color: var(--accent-soft);
    display: block;
    margin-bottom: 8px;
    font-size: 1.1rem;
}

.key-takeaway {
    font-style: italic;
    color: var(--text-muted);
    border-left: 2px solid var(--accent);
    padding-left: 16px;
    margin: 16px 0 48px 0;
}
''')

# Also fix the global overflow in the html, body block
with open("src/index.css", "r") as f:
    content = f.read()

content = content.replace("html, body {\n    background: var(--bg);", "html, body {\n    background: var(--bg);\n    overflow-x: hidden;")

with open("src/index.css", "w") as f:
    f.write(content)
