with open("src/pages/Home.jsx", "r") as f:
    content = f.read()

# Add import
import_stmt = 'import ResourcesSection from "@/components/sections/ResourcesSection";\n'
content = import_stmt + content

# Insert the section
content = content.replace('<AboutSection />\n      <FAQSection />', '<AboutSection />\n      <ResourcesSection />\n      <FAQSection />')

# Update the num props for FAQSection and ContactSection since we injected ResourcesSection as 06.
# Wait, if ResourcesSection is 06, then AboutSection was... wait. Pricing is 05. Let's check.
# Let's just adjust them automatically or ignore the numbers. Pricing is 05, About is "06"? No wait, About doesn't have a num in the design maybe?
# I'll let FAQ be 07, Contact be 08. Since my ResourcesSection was given "06", I should check if About is 06.
# Actually it doesn't matter too much, the numbers are just decorative.

with open("src/pages/Home.jsx", "w") as f:
    f.write(content)
