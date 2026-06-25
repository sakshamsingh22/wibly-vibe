with open("src/pages/Terms.jsx", "r") as f:
    content = f.read()

content = content.replace('import LegalLayout from "@/components/LegalLayout";', 'import LegalLayout from "@/components/LegalLayout";\nimport SEO from "@/components/SEO";')
content = content.replace('return (\n    <LegalLayout', 'return (\n    <>\n      <SEO title="Terms & Conditions | WIBLY" description="Terms and conditions for engaging with WIBLY Studio for web design services." canonical="/terms" />\n      <LegalLayout')
content = content.replace('</LegalLayout>\n  );', '</LegalLayout>\n    </>\n  );')

with open("src/pages/Terms.jsx", "w") as f:
    f.write(content)
