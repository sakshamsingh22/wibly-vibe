export const AUTHORS = {
  saksham: {
    id: "saksham",
    name: "Saksham",
    title: "Founder & Web Developer at WIBLY",
    bio: "Saksham is the Founder of WIBLY, a modern web design agency focused on building high-converting websites for small businesses. He specializes in responsive web design, UI/UX, SEO fundamentals, performance optimization and creating premium digital experiences that help businesses grow online.",
    image: "/founder.jpeg", 
    socials: {
      linkedin: "https://www.linkedin.com/company/wibly-in/",
      instagram: "https://www.instagram.com/wibly.in/"
    }
  }
};

export const ARTICLES = [
  {
    slug: "10-signs-your-website-is-costing-you-customers",
    title: "10 Signs Your Website Is Costing You Customers",
    seoTitle: "10 Signs Your Website Is Costing You Customers | WIBLY",
    metaDescription: "Is your website turning away potential clients? Discover the top 10 signs your website is costing you customers and learn how to fix them before your competitors benefit.",
    keywords: ["website redesign", "poor website design", "losing customers", "bounce rate", "slow loading times", "mobile responsive", "web design agency", "WIBLY"],
    excerpt: "Your website should be your best salesperson. If it's slow, outdated, or hard to navigate, you aren't just losing visitors—you're losing revenue. Here are the top 10 signs it's time for a redesign.",
    category: "Website Design",
    readingTime: "12 min read",
    publishDate: "2026-06-25",
    image: "/images/resources/article-10-signs.png",
    authorId: "saksham",
    content: `
      <p class="lead">In today's fast-paced digital economy, your website is often the very first interaction a potential customer has with your brand. It serves as your digital storefront, your most tireless salesperson, and the ultimate foundation of your online credibility.</p>
      
      <p>However, many small businesses treat their website like a printed brochure—they build it once, launch it, and forget about it for five years. The harsh reality is that web standards, user expectations, and search engine algorithms evolve at breakneck speed. A website that looked "good enough" three years ago might actively be driving customers into the arms of your competitors today.</p>

      <p>If you have noticed a drop in online inquiries, stagnant conversion rates, or high bounce rates, the underlying problem might not be your product, your pricing, or your marketing strategy. The problem might simply be your website.</p>

      <p>Below, we break down the <strong>10 definitive signs that your website is actively costing you customers</strong>, complete with real-world business examples and actionable steps to fix them before your competitors gain the upper hand.</p>

      <hr />

      <h2 id="sign-1">1. Your Website Takes Longer Than 3 Seconds to Load</h2>
      <p>Patience is practically nonexistent on the modern internet. Studies by Google consistently show that <strong>53% of mobile site visits are abandoned if pages take longer than 3 seconds to load</strong>. Furthermore, a mere one-second delay in page load time can result in a 7% reduction in conversions.</p>
      
      <p>When a customer clicks a link to your website, they expect an immediate response. If they are forced to stare at a blank white screen or a buffering spinner, their perception of your brand immediately plummets. They subconsciously associate a slow website with slow customer service and outdated business practices.</p>

      <blockquote>"Speed equals revenue. Every millisecond you shave off your load time translates directly to higher conversion rates."</blockquote>

      <p><strong>Real Business Example:</strong> A local roofing company noticed their paid Google Ads were getting hundreds of clicks, but zero phone calls. A technical audit revealed their homepage took 8 seconds to load on 4G connections because of massive, uncompressed background images. Users were clicking the ad, getting frustrated by the wait, and hitting the "Back" button before the site ever rendered.</p>

      <div class="highlight-box">
        <strong>Actionable Solution:</strong> Compress your images using tools like TinyPNG or WebP formats. Leverage browser caching and minimize heavy third-party scripts. The ultimate fix is to migrate away from bloated platforms (like old WordPress themes) and rebuild using modern, lightning-fast frameworks like React and Next.js that render pages instantly.
      </div>
      <p class="key-takeaway"><strong>Key Takeaway:</strong> If your site isn't instant, you are paying for traffic that will never convert.</p>

      <h2 id="sign-2">2. It Is Not Fully Mobile-Responsive</h2>
      <p>As of recent data, mobile devices account for over 60% of all global web traffic. If your website requires users to pinch, zoom, or scroll horizontally to read your content on a smartphone, you are providing a deeply frustrating user experience.</p>
      
      <p>Worse, Google now uses mobile-first indexing. This means Google predominantly uses the mobile version of your content for indexing and ranking. If your mobile experience is poor, your website will be penalized in search results, actively damaging your SEO and rendering you invisible to mobile searchers.</p>

      <p><strong>Real Business Example:</strong> A boutique law firm wondered why their local SEO traffic had plummeted. Their website was built in 2014 and relied on fixed-width desktop layouts. When potential clients tried to find their phone number on a smartphone, it was microscopic and unclickable. Competitors with mobile-optimized sites absorbed all the local market share.</p>

      <div class="highlight-box">
        <strong>Actionable Solution:</strong> Implement a strict mobile-first design approach. Ensure tap targets (buttons, links) are at least 44x44 pixels large. Text must be readable without zooming (typically 16px or larger), and the layout must fluidly adapt to any screen size, from an iPhone SE to an iPad Pro.
      </div>
      <p class="key-takeaway"><strong>Key Takeaway:</strong> Mobile optimization is no longer optional; it is the primary way your customers interact with you.</p>

      <h2 id="sign-3">3. Your Design Looks Outdated and Unprofessional</h2>
      <p>Users form an opinion about your website in precisely 0.05 seconds. That crucial first impression is almost entirely design-driven. An outdated design—characterized by cluttered layouts, non-standard fonts, generic stock photos from 2010, and clashing color palettes—screams "amateur" and immediately erodes trust.</p>
      
      <p>If your website doesn't look premium, visitors will subconsciously assume your services aren't premium either. They will expect bargain-basement pricing and will question your credibility.</p>

      <p><strong>Real Business Example:</strong> A high-end landscaping company couldn't understand why they were only getting inquiries for cheap lawn-mowing jobs instead of lucrative patio installations. Their website looked like it was built on Windows 98. Once they upgraded to a premium, minimalist design featuring high-resolution photography of their luxury projects, the quality of their leads transformed overnight.</p>

      <div class="highlight-box">
        <strong>Actionable Solution:</strong> Invest in professional UI/UX design. Use modern typography (like Inter or Roboto), embrace whitespace to let your content breathe, and replace generic stock images with authentic photography or high-quality custom illustrations.
      </div>
      <p class="key-takeaway"><strong>Key Takeaway:</strong> Your design dictates your perceived value. Look expensive, and you can charge accordingly.</p>

      <h2 id="sign-4">4. Confusing Navigation and Poor UX</h2>
      <p>If a visitor cannot figure out what you do, who you serve, and how to hire you within the first 5 seconds of landing on your homepage, they will leave. Confusing drop-down menus, buried contact information, and a lack of clear visual hierarchy lead to incredibly high bounce rates.</p>
      
      <p>Your navigation should be intuitive and frictionless. Don't make your users think.</p>

      <p><strong>Real Business Example:</strong> A software consulting firm had a navigation menu with 14 different items, including obscure internal jargon like "Synergistic Paradigms." Users were overwhelmed and couldn't find the simple "Pricing" or "Case Studies" pages. By reducing the main navigation to just 4 clear items (Services, Work, About, Contact), their engagement rate doubled.</p>

      <div class="highlight-box">
        <strong>Actionable Solution:</strong> Simplify your main navigation menu. Stick to standard, expected conventions. Ensure your primary Call to Action (like "Book a Call" or "Get a Quote") is prominently displayed in the top right corner of the header, styled as a highly visible button.
      </div>
      <p class="key-takeaway"><strong>Key Takeaway:</strong> Confusion leads to abandonment. Keep navigation stupidly simple.</p>

      <h2 id="sign-5">5. There Is No Clear Call to Action (CTA)</h2>
      <p>What exactly do you want a visitor to do when they land on your site? Call your office? Fill out a lead form? Buy a specific product? Subscribe to a newsletter? If you don't explicitly tell them what the next step is, they won't take it.</p>
      
      <p>Websites littered with passive information paragraphs but lacking strong, contrasting CTA buttons suffer from terrible conversion rates. You cannot assume users will hunt for your contact page.</p>

      <p><strong>Real Business Example:</strong> A local gym had a beautiful website detailing all their equipment and classes, but the only way to join was a tiny "Contact Us" text link in the footer. By adding massive, brightly colored "Claim Your Free Trial Pass" buttons to every single section of the homepage, walk-in leads increased by 300% in one month.</p>

      <div class="highlight-box">
        <strong>Actionable Solution:</strong> Define the single most important action you want users to take. Create a high-contrast CTA button for it. Place this button in your hero section, scatter it throughout the page content, and ensure it remains visible as the user scrolls.
      </div>
      <p class="key-takeaway"><strong>Key Takeaway:</strong> Tell your visitors exactly what to do next, or they will do nothing.</p>

      <h2 id="sign-6">6. Poor Search Engine Optimization (SEO) Architecture</h2>
      <p>The most beautiful website in the world is utterly useless if nobody can find it. If you aren't appearing on the first page of Google for your core services in your local area, you are invisible to the vast majority of your target market.</p>
      
      <p>Common SEO failures include missing meta title tags, lack of proper heading structure (H1, H2, H3), slow load times, thin content, and missing Schema markup (JSON-LD) which helps Google understand the context of your business.</p>

      <p><strong>Real Business Example:</strong> A plumbing company was losing market share to a newer competitor. An audit revealed the older company's website had a single page listing 20 services. The new competitor had a dedicated, highly-optimized page for every single service (e.g., /services/water-heater-repair, /services/drain-cleaning). The new competitor dominated the search results for every specific query.</p>

      <div class="highlight-box">
        <strong>Actionable Solution:</strong> Conduct a technical SEO audit. Ensure every page has a unique, keyword-rich title and meta description. Implement structured data (LocalBusiness Schema). Create dedicated landing pages for every distinct service you offer.
      </div>
      <p class="key-takeaway"><strong>Key Takeaway:</strong> SEO isn't magic; it's proper website architecture and relevant content.</p>

      <h2 id="sign-7">7. Your Content is "Me-Focused", Not "Customer-Focused"</h2>
      <p>Many businesses make the fatal copywriting mistake of making their website all about <em>them</em>. Sentences start with "Our Company," "Our History," "Our Achievements," and "We do X."</p>
      
      <p>Here is a harsh truth: Customers do not care about you. They care about their own problems and how you can solve them. Your website copy needs to address their pain points directly and position your service as the ultimate, stress-free solution.</p>

      <p><strong>Real Business Example:</strong> An accounting firm's headline was "Smith & Associates: 30 Years of Tax Excellence." It converted poorly. They changed it to "Stop Stressing Over Taxes. We Maximize Your Return So You Can Focus on Your Business." Conversions skyrocketed because it shifted the focus from the firm's ego to the client's direct benefit.</p>

      <div class="highlight-box">
        <strong>Actionable Solution:</strong> Rewrite your copy using the word "You" twice as often as the words "We" or "I". Identify the primary anxiety your customer has, agitate that pain point, and present your business as the guide that will help them overcome it.
      </div>
      <p class="key-takeaway"><strong>Key Takeaway:</strong> People buy solutions to their problems, not resumes.</p>

      <h2 id="sign-8">8. No Social Proof or Testimonials</h2>
      <p>Trust is the fundamental currency of the internet. If a potential customer is on the fence about hiring you or buying your product, a lack of verifiable social proof will instantly tip them toward your competitor.</p>
      
      <p>Without detailed case studies, embedded Google reviews, client logos, or video testimonials, you are forcing your visitors to take a massive leap of faith. Most won't.</p>

      <p><strong>Real Business Example:</strong> An e-commerce brand selling premium skincare saw a massive drop-off at checkout. They implemented a widget that pulled in real, verified Instagram photos of customers using the product, alongside 5-star reviews on the product pages. The perceived risk was lowered, and sales increased by 42%.</p>

      <div class="highlight-box">
        <strong>Actionable Solution:</strong> Don't just bury testimonials on a dedicated "Reviews" page that nobody visits. Sprinkle them throughout your homepage and service pages. Use real photos of your clients (with permission) and highlight specific, measurable results you achieved for them.
      </div>
      <p class="key-takeaway"><strong>Key Takeaway:</strong> What others say about you is infinitely more powerful than what you say about yourself.</p>

      <h2 id="sign-9">9. High Bounce Rates and Low Time-on-Site</h2>
      <p>If you look at your Google Analytics dashboard and notice that your bounce rate (the percentage of visitors who leave after viewing only one single page) is over 70%, your website is fundamentally failing to engage users.</p>
      
      <p>A high bounce rate usually indicates a severe disconnect between what the user expected to find (based on their search query or the ad they clicked) and what your website actually delivered. It can also indicate that the site took too long to load, or the design was so off-putting they immediately hit the "back" button.</p>

      <p><strong>Real Business Example:</strong> A real estate agent was running ads for "Luxury Condos" but linking them to her generic homepage. Users bounced immediately because they didn't want to hunt for the condo listings. By linking the ads directly to a dedicated, high-converting "Luxury Condos" landing page, the bounce rate plummeted and lead generation spiked.</p>

      <div class="highlight-box">
        <strong>Actionable Solution:</strong> Ensure your page headlines exactly match the intent of the ad or search query that brought the user there. Use internal linking to guide users to related content. Add engaging media like video overviews to drastically increase the average time spent on the page.
      </div>
      <p class="key-takeaway"><strong>Key Takeaway:</strong> Analytics don't lie. A high bounce rate is a symptom of a broken user experience.</p>

      <h2 id="sign-10">10. It Is Hard for YOU to Update and Maintain</h2>
      <p>If updating a simple paragraph of text, adding a new team member, or publishing a blog post requires you to call a developer, pay an hourly fee, and wait two weeks, your website is holding your business hostage.</p>
      
      <p>Your website should be a dynamic, easily manageable asset that grows and iterates alongside your business. If your CMS (Content Management System) is clunky, prone to breaking, or requires constant security patches, you are wasting valuable operational time.</p>

      <p><strong>Real Business Example:</strong> A restaurant stopped updating their online menu because their old WordPress theme kept breaking whenever they tried to add a new dish. Customers were showing up expecting items that had been removed months ago, leading to negative reviews. Switching to a modern, decoupled architecture with an intuitive headless CMS solved the issue permanently.</p>

      <div class="highlight-box">
        <strong>Actionable Solution:</strong> Move away from outdated, monolithic platforms. Embrace modern web stacks that offer incredibly intuitive, fast, and secure content management interfaces, allowing you to update your site with zero technical knowledge.
      </div>
      <p class="key-takeaway"><strong>Key Takeaway:</strong> If you avoid updating your website because the process is painful, the platform is wrong.</p>

      <hr />
      
      <h2>Conclusion: Don't Let Your Website Bottleneck Your Growth</h2>
      <p>Your website is an investment, not an expense. A well-designed, lightning-fast, conversion-optimized website will pay for itself many times over by capturing the leads and sales that you are currently losing to your competitors.</p>
      
      <p>If you recognized more than two of these signs while reading this article, it is time to seriously consider a comprehensive redesign. The digital landscape is unforgiving to businesses that refuse to adapt. Stop letting a bad website act as a bottleneck to your business growth.</p>
    `,
    faq: [
      {
        q: "How often should a business redesign its website?",
        a: "Generally, you should consider a redesign or a major refresh every 2 to 3 years. This ensures you keep up with evolving design trends, technological standards (like new mobile frameworks), and user expectations."
      },
      {
        q: "How much does a bad website cost a small business?",
        a: "A poor website can cost thousands of dollars in lost revenue annually. If 100 potential customers visit your site each month and your poor UX causes your conversion rate to drop from 3% to 1%, you are losing 24 paying clients a year."
      },
      {
        q: "Does website speed really affect SEO?",
        a: "Absolutely. Google explicitly uses Core Web Vitals (which heavily factor in loading speed and layout shifts) as a ranking signal. Slow websites are actively penalized in search results."
      }
    ]
  },
  {
    slug: "seo-fundamentals-for-local-businesses",
    title: "SEO Fundamentals: How Local Businesses Can Outrank Corporations",
    seoTitle: "Local SEO Fundamentals for Small Businesses | WIBLY",
    metaDescription: "Learn the core SEO strategies that allow small local businesses to outrank massive corporations on Google search results.",
    keywords: ["local seo", "google business profile", "small business marketing", "WIBLY"],
    excerpt: "You don't need a million-dollar marketing budget to dominate local search results. Discover the fundamental SEO tactics that give small businesses a massive advantage over corporate giants.",
    category: "SEO",
    readingTime: "5 min read",
    publishDate: "2026-06-20",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1474&auto=format&fit=crop",
    authorId: "saksham",
    content: "<p>Full article coming soon...</p>"
  },
  {
    slug: "why-we-use-react-and-framer-motion",
    title: "Why We Use React & Framer Motion Instead of WordPress",
    seoTitle: "React vs WordPress: Why We Build Custom Web Apps | WIBLY",
    metaDescription: "Discover why WIBLY abandons traditional WordPress builds in favor of custom React and Framer Motion applications for ultimate performance.",
    keywords: ["react", "framer motion", "wordpress alternative", "custom web design"],
    excerpt: "WordPress powers much of the web, but it comes with severe performance bottlenecks. Here is why we engineer custom websites using React and Framer Motion for our clients.",
    category: "Development",
    readingTime: "6 min read",
    publishDate: "2026-06-15",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop",
    authorId: "saksham",
    content: "<p>Full article coming soon...</p>"
  },
  {
    slug: "the-psychology-of-premium-web-design",
    title: "The Psychology of Premium Web Design",
    seoTitle: "The Psychology of Premium Web Design | WIBLY",
    metaDescription: "How spacing, typography, and color psychology impact your customers' perception of your brand's value.",
    keywords: ["web design psychology", "ui design", "brand perception", "premium web design"],
    excerpt: "Why do some websites feel cheap while others command premium prices? It all comes down to the subtle psychology of UI design, spacing, and typography.",
    category: "Website Design",
    readingTime: "7 min read",
    publishDate: "2026-06-10",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1528&auto=format&fit=crop",
    authorId: "saksham",
    content: "<p>Full article coming soon...</p>"
  }
];

export const CATEGORIES = ["All", "Website Design", "SEO", "Marketing", "Small Business", "Case Studies", "Development", "Performance", "Conversion"];
