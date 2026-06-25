with open("src/pages/Home.jsx", "r") as f:
    content = f.read()

content = content.replace('import Footer from "@/components/Footer";', 'import Footer from "@/components/Footer";\nimport SEO from "@/components/SEO";')
content = content.replace('<div className="relative grain" data-testid="home-page">', '<div className="relative grain" data-testid="home-page">\n      <SEO title="WIBLY — Websites that grow businesses" description="We design and engineer premium websites that look world-class, load lightning fast, and convert visitors into customers." canonical="/" />')

with open("src/pages/Home.jsx", "w") as f:
    f.write(content)
