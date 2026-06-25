export const AUTHORS = {
  saksham: {
    id: "saksham",
    name: "Saksham",
    title: "Founder & Web Developer at WIBLY",
    bio: "Saksham is the Founder of WIBLY, a modern web design agency focused on building high-converting websites for small businesses. He specializes in responsive web design, UI/UX, SEO fundamentals, performance optimization and creating premium digital experiences that help businesses grow online.",
    image: "/founder.jpeg", // Existing image of Sam
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
    readingTime: "8 min read",
    publishDate: "2026-06-25",
    image: "/images/resources/article-10-signs.png",
    authorId: "saksham",
    content: `
      <p class="lead">In today's digital landscape, your website is often the first interaction a potential customer has with your brand. It serves as your digital storefront, your most tireless salesperson, and the foundation of your online credibility.</p>
      
      <p>However, many small businesses treat their website like a digital brochure—they build it once and forget about it. The reality is that web standards, user expectations, and search engine algorithms evolve rapidly. A website that looked "good enough" three years ago might actively be driving customers into the arms of your competitors today.</p>

      <p>If you've noticed a drop in online inquiries, low conversion rates, or high bounce rates, the problem might not be your product or your marketing. The problem might be your website.</p>

      <p>Here are the 10 definitive signs that your website is costing you customers, along with actionable advice on how to fix them.</p>

      <hr />

      <h2 id="sign-1">1. Your Website Takes Longer Than 3 Seconds to Load</h2>
      <p>Patience is practically nonexistent on the modern internet. Studies consistently show that <strong>53% of mobile site visits are abandoned if pages take longer than 3 seconds to load</strong>. Furthermore, a mere one-second delay in page load time can result in a 7% reduction in conversions.</p>
      <div class="callout">
        <strong>The Fix:</strong> Optimize your images, leverage browser caching, minimize HTTP requests, and consider upgrading your hosting provider. Better yet, rebuild your site using modern, lightning-fast frameworks like React and Next.js that render pages instantly.
      </div>

      <h2 id="sign-2">2. It Is Not Fully Mobile-Responsive</h2>
      <p>As of recent data, mobile devices account for over half of all global web traffic. If your website requires users to pinch, zoom, or scroll horizontally to read your content on a smartphone, you are providing a deeply frustrating user experience.</p>
      <p>Worse, Google uses mobile-first indexing, meaning they predominantly use the mobile version of the content for indexing and ranking. A non-responsive site actively damages your SEO.</p>
      <div class="callout">
        <strong>The Fix:</strong> Implement a mobile-first design approach. Ensure tap targets (buttons, links) are large enough, text is readable without zooming, and the layout fluidly adapts to any screen size.
      </div>

      <h2 id="sign-3">3. Your Design Looks Outdated and Unprofessional</h2>
      <p>Users form an opinion about your website in 0.05 seconds. That first impression is almost entirely design-driven. An outdated design—characterized by cluttered layouts, non-standard fonts, stock photos from 2010, and clashing colors—screams "amateur" and erodes trust.</p>
      <p>If your website doesn't look premium, visitors will assume your services aren't premium either.</p>

      <h2 id="sign-4">4. Confusing Navigation and Poor UX</h2>
      <p>If a visitor cannot figure out what you do and how to hire you within the first 5 seconds of landing on your homepage, they will leave. Confusing menus, buried contact information, and a lack of clear hierarchy lead to incredibly high bounce rates.</p>
      <div class="callout">
        <strong>The Fix:</strong> Simplify your main navigation. Use clear, descriptive labels (e.g., "Services", "Pricing", "Contact"). Ensure your phone number or "Book a Call" button is prominently displayed in the top right corner of the header.
      </div>

      <h2 id="sign-5">5. There Is No Clear Call to Action (CTA)</h2>
      <p>What do you want a visitor to do when they land on your site? Call you? Fill out a form? Buy a product? If you don't explicitly tell them what the next step is, they won't take it.</p>
      <p>Websites littered with passive information but lacking a strong, contrasting CTA button suffer from terrible conversion rates.</p>

      <h2 id="sign-6">6. Poor Search Engine Optimization (SEO)</h2>
      <p>The most beautiful website in the world is useless if nobody can find it. If you aren't appearing on the first page of Google for your core services, you are invisible to the majority of your target market.</p>
      <p>Common SEO failures include missing meta tags, lack of proper heading structure (H1, H2), slow load times, and missing schema markup (JSON-LD).</p>
      <div class="callout">
        <strong>The Fix:</strong> Conduct a technical SEO audit. Ensure every page has a unique title and meta description. Implement structured data so Google understands exactly what your business does.
      </div>

      <h2 id="sign-7">7. Your Content is Me-Focused, Not Customer-Focused</h2>
      <p>Many businesses make the mistake of making their website all about <em>them</em>. "Our Company," "Our History," "Our Achievements."</p>
      <p>Customers don't care about you; they care about their own problems and how you can solve them. Your copy needs to address their pain points directly and position your service as the ultimate solution.</p>

      <h2 id="sign-8">8. No Social Proof or Testimonials</h2>
      <p>Trust is the currency of the internet. If a potential customer is on the fence about hiring you, a lack of social proof will tip them toward your competitor.</p>
      <p>Without case studies, Google reviews, or client testimonials, you are forcing visitors to take a massive leap of faith.</p>

      <h2 id="sign-9">9. High Bounce Rates and Low Time-on-Site</h2>
      <p>If you look at your Google Analytics and notice that your bounce rate (the percentage of visitors who leave after viewing only one page) is over 70%, your website is failing to engage users.</p>
      <p>This usually indicates a disconnect between what the user expected to find and what your website actually delivered.</p>

      <h2 id="sign-10">10. It Is Hard for YOU to Update</h2>
      <p>If updating a simple paragraph of text or adding a new service requires you to call a developer and wait two weeks, your website is holding your business back. Your website should be a dynamic, easily manageable asset that grows alongside your business.</p>

      <hr />
      
      <h2>Conclusion</h2>
      <p>Your website is an investment, not an expense. A well-designed, lightning-fast, conversion-optimized website will pay for itself many times over by capturing leads that you are currently losing to competitors.</p>
      <p>If you recognized more than two of these signs while reading this article, it is time to seriously consider a redesign. Don't let a bad website bottleneck your business growth.</p>
    `,
    faq: [
      {
        q: "How often should a business redesign its website?",
        a: "Generally, you should consider a redesign or a major refresh every 2 to 3 years to keep up with evolving design trends, technological standards, and user expectations."
      },
      {
        q: "How much does a bad website cost a small business?",
        a: "A poor website can cost thousands of dollars in lost revenue annually. If 100 potential customers visit your site each month and your poor UX causes your conversion rate to drop from 3% to 1%, you are losing 24 paying clients a year."
      },
      {
        q: "Does website speed really affect SEO?",
        a: "Yes. Google explicitly uses Core Web Vitals (which heavily factor in loading speed) as a ranking signal. Slow websites are penalized in search results."
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
