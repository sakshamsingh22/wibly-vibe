export const AUTHORS = {
  saksham: {
    id: "saksham",
    name: "Saksham",
    title: "Founder & Web Developer at WIBLY",
    bio: "Saksham is the Founder of WIBLY, a modern web design agency focused on building high-converting websites for small businesses. He specializes in responsive web design, UI/UX, SEO fundamentals, performance optimization and creating premium digital experiences that help businesses grow online.",
    image: "/sam.jpg", 
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
      <div class="prose-premium">
        <p class="text-xl text-[var(--text-muted)] leading-relaxed mb-8">In today's fast-paced digital economy, your website is often the very first interaction a potential customer has with your brand. It serves as your digital storefront, your most tireless salesperson, and the ultimate foundation of your online credibility.</p>
        
        <p>However, many small businesses treat their website like a printed brochure—they build it once, launch it, and forget about it for five years. The harsh reality is that web standards, user expectations, and search engine algorithms evolve at breakneck speed.</p>

        <p>If you have noticed a drop in online inquiries, stagnant conversion rates, or high bounce rates, the underlying problem might not be your product, your pricing, or your marketing strategy. The problem might simply be your website.</p>

        <p>Below, we break down the <strong>10 definitive signs that your website is actively costing you customers</strong>, complete with real-world business examples and actionable steps to fix them before your competitors gain the upper hand.</p>

        <hr class="my-12 border-[var(--border)]" />

        <h2 id="sign-1">1. Your Website Takes Longer Than 3 Seconds to Load</h2>
        <p>Patience is practically nonexistent on the modern internet. Studies by Google consistently show that <strong>53% of mobile site visits are abandoned if pages take longer than 3 seconds to load</strong>. Furthermore, a mere one-second delay in page load time can result in a 7% reduction in conversions.</p>
        
        <div class="my-12">
          <img src="/images/resources/speed.png" alt="Speed vs Conversion Graph" class="w-full rounded-2xl border border-[var(--border)]" />
          <p class="image-caption">As page load time increases from 1 to 5 seconds, the probability of a user bouncing increases by 90%.</p>
        </div>

        <p>When a customer clicks a link to your website, they expect an immediate response. If they are forced to stare at a blank white screen or a buffering spinner, their perception of your brand immediately plummets. They subconsciously associate a slow website with slow customer service and outdated business practices.</p>

        <div class="callout callout-mistake">
          <strong>Real Business Example</strong>
          A local roofing company noticed their paid Google Ads were getting hundreds of clicks, but zero phone calls. A technical audit revealed their homepage took 8 seconds to load on 4G connections because of massive, uncompressed background images. Users were clicking the ad, getting frustrated by the wait, and hitting the "Back" button before the site ever rendered.
        </div>

        <div class="callout callout-protip">
          <strong>The Pro Tip Solution</strong>
          Compress your images using tools like TinyPNG or WebP formats. Leverage browser caching and minimize heavy third-party scripts. The ultimate fix is to migrate away from bloated platforms (like old WordPress themes) and rebuild using modern, lightning-fast frameworks like React and Next.js that render pages instantly.
        </div>

        <div class="checklist-card">
          <h3>Speed Optimization Checklist</h3>
          <div class="checklist-item">
            <div class="checklist-icon">✓</div>
            <div>Compress all images to WebP format.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-icon">✓</div>
            <div>Implement lazy loading for images below the fold.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-icon">✓</div>
            <div>Minify CSS and JavaScript files.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-icon">✓</div>
            <div>Upgrade to premium hosting or use a CDN (Content Delivery Network).</div>
          </div>
        </div>

        <h2 id="sign-2">2. It Is Not Fully Mobile-Responsive</h2>
        <p>As of recent data, mobile devices account for over 60% of all global web traffic. If your website requires users to pinch, zoom, or scroll horizontally to read your content on a smartphone, you are providing a deeply frustrating user experience.</p>
        
        <p>Worse, Google now uses mobile-first indexing. This means Google predominantly uses the mobile version of your content for indexing and ranking. If your mobile experience is poor, your website will be penalized in search results, actively damaging your SEO and rendering you invisible to mobile searchers.</p>

        <div class="my-12">
          <img src="/images/resources/mobile.png" alt="Mobile Optimization Illustration" class="w-full rounded-2xl border border-[var(--border)] shadow-2xl" />
        </div>

        <div class="callout callout-mistake">
          <strong>Real Business Example</strong>
          A boutique law firm wondered why their local SEO traffic had plummeted. Their website was built in 2014 and relied on fixed-width desktop layouts. When potential clients tried to find their phone number on a smartphone, it was microscopic and unclickable. Competitors with mobile-optimized sites absorbed all the local market share.
        </div>

        <div class="callout callout-win">
          <strong>The Quick Win</strong>
          Implement a strict mobile-first design approach. Ensure tap targets (buttons, links) are at least 44x44 pixels large. Text must be readable without zooming (typically 16px or larger), and the layout must fluidly adapt to any screen size.
        </div>

        <h2 id="sign-3">3. Your Design Looks Outdated and Unprofessional</h2>
        <p>Users form an opinion about your website in precisely 0.05 seconds. That crucial first impression is almost entirely design-driven. An outdated design—characterized by cluttered layouts, non-standard fonts, generic stock photos from 2010, and clashing color palettes—screams "amateur" and immediately erodes trust.</p>
        
        <p>If your website doesn't look premium, visitors will subconsciously assume your services aren't premium either. They will expect bargain-basement pricing and will question your credibility.</p>

        <div class="pull-quote">
          Your design dictates your perceived value. Look expensive, and you can charge accordingly.
        </div>

        <div class="callout callout-protip">
          <strong>Actionable Solution</strong>
          Invest in professional UI/UX design. Use modern typography (like Inter or Roboto), embrace whitespace to let your content breathe, and replace generic stock images with authentic photography or high-quality custom illustrations.
        </div>

        <h2 id="sign-4">4. Confusing Navigation and Poor UX</h2>
        <p>If a visitor cannot figure out what you do, who you serve, and how to hire you within the first 5 seconds of landing on your homepage, they will leave. Confusing drop-down menus, buried contact information, and a lack of clear visual hierarchy lead to incredibly high bounce rates.</p>

        <div class="premium-table-wrapper">
          <table class="premium-table">
            <thead>
              <tr>
                <th>Bad Navigation</th>
                <th>Good Navigation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"Synergistic Paradigms"</td>
                <td>"Services"</td>
              </tr>
              <tr>
                <td>14+ menu items</td>
                <td>4-6 core items</td>
              </tr>
              <tr>
                <td>Hidden in footer</td>
                <td>Sticky Header</td>
              </tr>
              <tr>
                <td>No obvious next step</td>
                <td>Bright "Get Quote" Button</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-mistake">
          <strong>Real Business Example</strong>
          A software consulting firm had a navigation menu with 14 different items. Users were overwhelmed and couldn't find the "Pricing" page. By reducing the main navigation to just 4 clear items, their engagement rate doubled.
        </div>

        <h2 id="sign-5">5. There Is No Clear Call to Action (CTA)</h2>
        <p>What exactly do you want a visitor to do when they land on your site? Call your office? Fill out a lead form? Buy a specific product? Subscribe to a newsletter? If you don't explicitly tell them what the next step is, they won't take it.</p>
        
        <div class="callout callout-protip">
          <strong>Actionable Solution</strong>
          Define the single most important action you want users to take. Create a high-contrast CTA button for it. Place this button in your hero section, scatter it throughout the page content, and ensure it remains visible as the user scrolls.
        </div>

        <h2 id="sign-6">6. Poor Search Engine Optimization (SEO) Architecture</h2>
        <p>The most beautiful website in the world is utterly useless if nobody can find it. If you aren't appearing on the first page of Google for your core services in your local area, you are invisible to the vast majority of your target market.</p>
        
        <div class="checklist-card">
          <h3>SEO Fundamentals Checklist</h3>
          <div class="checklist-item">
            <div class="checklist-icon">✓</div>
            <div>Every page has a unique Title and Meta Description.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-icon">✓</div>
            <div>Only ONE H1 tag per page.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-icon">✓</div>
            <div>Images have descriptive alt text.</div>
          </div>
          <div class="checklist-item">
            <div class="checklist-icon">✓</div>
            <div>LocalBusiness JSON-LD Schema is installed.</div>
          </div>
        </div>

        <h2 id="sign-7">7. Your Content is "Me-Focused", Not "Customer-Focused"</h2>
        <p>Many businesses make the fatal copywriting mistake of making their website all about <em>them</em>. Sentences start with "Our Company," "Our History," "Our Achievements," and "We do X."</p>
        
        <p>Here is a harsh truth: Customers do not care about you. They care about their own problems and how you can solve them. Your website copy needs to address their pain points directly and position your service as the ultimate, stress-free solution.</p>

        <div class="callout callout-win">
          <strong>The Quick Win</strong>
          Rewrite your copy using the word "You" twice as often as the words "We" or "I". Identify the primary anxiety your customer has, agitate that pain point, and present your business as the guide that will help them overcome it.
        </div>

        <h2 id="sign-8">8. No Social Proof or Testimonials</h2>
        <p>Trust is the fundamental currency of the internet. If a potential customer is on the fence about hiring you or buying your product, a lack of verifiable social proof will instantly tip them toward your competitor.</p>
        
        <div class="callout callout-protip">
          <strong>Actionable Solution</strong>
          Don't just bury testimonials on a dedicated "Reviews" page that nobody visits. Sprinkle them throughout your homepage and service pages. Use real photos of your clients (with permission) and highlight specific, measurable results you achieved for them.
        </div>

        <h2 id="sign-9">9. High Bounce Rates and Low Time-on-Site</h2>
        <p>If you look at your Google Analytics dashboard and notice that your bounce rate (the percentage of visitors who leave after viewing only one single page) is over 70%, your website is fundamentally failing to engage users.</p>
        
        <p>A high bounce rate usually indicates a severe disconnect between what the user expected to find (based on their search query or the ad they clicked) and what your website actually delivered.</p>

        <h2 id="sign-10">10. It Is Hard for YOU to Update and Maintain</h2>
        <p>If updating a simple paragraph of text, adding a new team member, or publishing a blog post requires you to call a developer, pay an hourly fee, and wait two weeks, your website is holding your business hostage.</p>

        <div class="callout callout-note">
          <strong>Important Note</strong>
          Move away from outdated, monolithic platforms. Embrace modern web stacks that offer incredibly intuitive, fast, and secure content management interfaces, allowing you to update your site with zero technical knowledge.
        </div>

        <hr class="my-12 border-[var(--border)]" />
        
        <h2>Conclusion: Don't Let Your Website Bottleneck Your Growth</h2>
        <p>Your website is an investment, not an expense. A well-designed, lightning-fast, conversion-optimized website will pay for itself many times over by capturing the leads and sales that you are currently losing to your competitors.</p>
        
        <p>If you recognized more than two of these signs while reading this article, it is time to seriously consider a comprehensive redesign. The digital landscape is unforgiving to businesses that refuse to adapt. Stop letting a bad website act as a bottleneck to your business growth.</p>
      </div>
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
    content: `
<p>There is a dangerous myth in the small business world: <em>"We can't win at SEO because big corporations have million-dollar marketing budgets."</em></p>

<p>If you are trying to rank for a broad, generic term like "running shoes" or "software," then yes, you will be crushed by Nike and Microsoft. But local businesses don't need to rank globally. They only need to dominate a 15-mile radius.</p>

<div class="highlight-box quick-win">
  <div class="highlight-title">The Local Advantage</div>
  <div class="highlight-content">Google's algorithm fundamentally favors proximity and hyper-relevance over pure corporate authority for local searches. A local plumber in Austin will always outrank Home Depot for the search term "emergency plumber near me."</div>
</div>

<h2 id="the-power-of-local-intent">1. The Power of "Local Intent"</h2>

<p>Search intent is everything. When a user searches for "best coffee shop," Google isn't looking for the most authoritative coffee brand in the world (like Starbucks' corporate site). It is looking at the user's GPS coordinates to find the best-rated coffee shop within a 5-minute drive.</p>

<p>This is your unfair advantage. Corporations have broad authority, but you have <strong>hyper-local authority</strong>.</p>

<h2 id="google-business-profile">2. Optimizing Your Google Business Profile</h2>

<p>Your Google Business Profile (GBP) is the nuclear weapon of local SEO. It is the single most important factor for ranking in the "Local Pack"—the map and top three local results that appear above standard organic links.</p>

<div class="highlight-box mistake">
  <div class="highlight-title">Fatal SEO Mistake</div>
  <div class="highlight-content">Treating your GBP like a static phone book listing. Many business owners set up their profile once, add a phone number, and never touch it again. This signals to Google that your business is stagnant.</div>
</div>

<p>To outrank corporate competitors, treat your GBP like an active social media profile:</p>

<div class="premium-list">
  <div class="list-item">
    <div class="list-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
    </div>
    <div class="list-content"><strong>Post weekly updates</strong> with photos of your work, special offers, or team members.</div>
  </div>
  <div class="list-item">
    <div class="list-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
    </div>
    <div class="list-content"><strong>Add comprehensive FAQs</strong> directly to your profile.</div>
  </div>
  <div class="list-item">
    <div class="list-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
    </div>
    <div class="list-content"><strong>Ensure your categories</strong> are hyper-specific (e.g., "Pediatric Dentist" instead of just "Dentist").</div>
  </div>
</div>

<h2 id="localized-on-page-content">3. Localized On-Page Content</h2>

<p>Corporations use generic templates for their localized landing pages. They have a script that generates thousands of pages like <code>/services/plumber-austin</code> with identical, soulless copy.</p>

<p>You can beat them by proving you actually exist in the community. Mention local landmarks, specific neighborhoods you serve, and local business partnerships. Write content that proves you are a real human working in that specific zip code.</p>

<blockquote class="pull-quote">
  "Google's algorithm is increasingly capable of detecting the difference between generic corporate templated copy and authentic, hyper-local community content."
</blockquote>

<h2 id="nap-consistency">4. NAP Consistency and Local Citations</h2>

<p>NAP stands for Name, Address, and Phone Number. Google cross-references your NAP data across the entire internet (Yelp, YellowPages, local chamber of commerce directories, Apple Maps).</p>

<div class="highlight-box pro-tip">
  <div class="highlight-title">The Pro Tip Solution</div>
  <div class="highlight-content">Run a citation audit. If your business is listed as "Smith & Sons Plumbing" on Yelp, but "Smith Plumbing LLC" on Facebook, Google gets confused and lowers your trust score. Ensure your NAP is 100% identical across every directory on the internet.</div>
</div>

<h2 id="the-review-velocity-metric">5. Mastering Review Velocity</h2>

<p>Having 500 reviews is great. But Google cares more about <strong>Review Velocity</strong>—the steady, consistent stream of new reviews.</p>

<p>A local business that gets 2 new reviews every week will consistently outrank a corporation that got 1,000 reviews three years ago and hasn't received a new one since.</p>

<p>Implement an automated system that texts or emails your customers immediately after a successful service, asking for a review while the positive experience is still fresh.</p>

<h2 id="conclusion">Conclusion</h2>

<p>You don't need to fight corporations on their turf. You just need to dominate your own backyard. By optimizing your GBP, maintaining perfect NAP consistency, generating steady reviews, and proving your local relevance, you can capture high-intent local traffic that corporate giants could never dream of converting.</p>
`
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
