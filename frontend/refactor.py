import re

with open("src/pages/Home.jsx", "r") as f:
    content = f.read()

# Make constants and small components exported
replacements = [
    ("const SERVICES =", "export const SERVICES ="),
    ("const PROCESS =", "export const PROCESS ="),
    ("const WORK =", "export const WORK ="),
    ("const PRICING =", "export const PRICING ="),
    ("const FAQ =", "export const FAQ ="),
    ("const TICKER =", "export const TICKER ="),
    ("function Section(", "export function Section("),
    ("function HeroMockup(", "export function HeroMockup("),
    ("function FAQItem(", "export function FAQItem("),
    ("function ContactForm(", "export function ContactForm(")
]
for old, new in replacements:
    content = content.replace(old, new)

# Extract Hero Section
hero_match = re.search(r'(<section className="relative pt-32 md:pt-40 pb-20 bg-noise" data-testid="hero">.*?</section>)', content, re.DOTALL)
hero_jsx = hero_match.group(1)

# Extract Problem Section
problem_match = re.search(r'(<Section id="problem".*?</Section>)', content, re.DOTALL)
problem_jsx = problem_match.group(1)

# Extract Services Section
services_match = re.search(r'(<Section id="services".*?</Section>)', content, re.DOTALL)
services_jsx = services_match.group(1)

# Extract Process Section
process_match = re.search(r'(<Section id="process".*?</Section>)', content, re.DOTALL)
process_jsx = process_match.group(1)

# Extract Work Section
work_match = re.search(r'(<Section id="work".*?</Section>)', content, re.DOTALL)
work_jsx = work_match.group(1)

# Extract Marquee Section
marquee_match = re.search(r'(<div className="relative py-8 border-y border-\[var\(--border\)\] overflow-hidden" data-testid="marquee">.*?</div>\n)', content, re.DOTALL)
marquee_jsx = marquee_match.group(1)

# Extract Pricing Section
pricing_match = re.search(r'(<Section id="pricing".*?</Section>)', content, re.DOTALL)
pricing_jsx = pricing_match.group(1)

# Extract About Section
about_match = re.search(r'(<Section id="about".*?</Section>)', content, re.DOTALL)
about_jsx = about_match.group(1)

# Extract FAQ Section
faq_match = re.search(r'(<Section id="faq".*?</Section>)', content, re.DOTALL)
faq_jsx = faq_match.group(1)

# Extract Contact Section
contact_match = re.search(r'(<Section id="contact".*?</Section>)', content, re.DOTALL)
contact_jsx = contact_match.group(1)

# Now, we will append these as exported functional components right before `export default function Home()`
components_code = f"""
export function HeroSection() {{
  return (
    {hero_jsx}
  );
}}

export function ProblemSection() {{
  return (
    {problem_jsx}
  );
}}

export function ServicesSection() {{
  return (
    {services_jsx}
  );
}}

export function ProcessSection() {{
  return (
    {process_jsx}
  );
}}

export function WorkSection() {{
  return (
    {work_jsx}
  );
}}

export function MarqueeSection() {{
  return (
    {marquee_jsx}
  );
}}

export function PricingSection() {{
  return (
    {pricing_jsx}
  );
}}

export function AboutSection() {{
  return (
    {about_jsx}
  );
}}

export function FAQSection() {{
  return (
    {faq_jsx}
  );
}}

export function ContactSection() {{
  return (
    {contact_jsx}
  );
}}

"""

# Rewrite Home component
home_replacement = f"""
export default function Home() {{
  return (
    <div className="relative grain" data-testid="home-page">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <MarqueeSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}}
"""

# Replace the sections inside the original string
# Find the start of Home
home_start_idx = content.find("export default function Home()")

# Find the end of ContactSection inside Home (which is right before Footer)
footer_idx = content.find("<Footer />", home_start_idx)
home_end_idx = content.find("}", footer_idx) + 1

new_content = content[:home_start_idx] + components_code + home_replacement + content[home_end_idx:]

with open("src/pages/Home.jsx", "w") as f:
    f.write(new_content)

print("Home.jsx successfully refactored!")
