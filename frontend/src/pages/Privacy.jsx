import LegalLayout from "@/components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="Legal · Privacy"
      title={<>Privacy <span className="font-serif italic text-[var(--accent-soft)]">Policy.</span></>}
      lastUpdated="January 1, 2026"
      testId="privacy-page"
    >
      <p>
        This Privacy Policy explains how <strong>WIBLY Studio</strong> ("WIBLY", "we", "us", or "our") collects, uses, and protects information when you visit{" "}
        <a href="https://wibly-animations.preview.emergentagent.com">wibly-animations.preview.emergentagent.com</a> (the "Site"), engage with our web design,
        engineering, e-commerce, or maintenance services (the "Services"), or otherwise communicate with us. By using the Site or Services, you agree to this Policy.
      </p>

      <h2>1. Who we are</h2>
      <p>
        WIBLY Studio is an independent web design and engineering studio operated by Saksham ("Sam"). We work with clients worldwide and operate remotely. For any
        privacy-related question, you can reach us at <a href="mailto:wibly.in@gmail.com">wibly.in@gmail.com</a>.
      </p>

      <h2>2. Information we collect</h2>
      <h3>a) Information you give us</h3>
      <ul>
        <li><strong>Contact information</strong> — name, email address, business name, and the message you submit through our contact form or when you book a call.</li>
        <li><strong>Project information</strong> — brand assets, content, references, credentials, and any material you share to help us design or build your website.</li>
        <li><strong>Billing details</strong> — name, billing address, and payment confirmation. Card numbers and bank details are handled by our payment processors and never stored on our servers.</li>
      </ul>
      <h3>b) Information we collect automatically</h3>
      <ul>
        <li><strong>Usage data</strong> — pages visited, time on page, referrer, approximate location (city/country derived from IP), device type, and browser.</li>
        <li><strong>Cookies and similar technologies</strong> — small files that allow the Site to function correctly, remember preferences, and measure performance.</li>
      </ul>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To respond to enquiries, schedule calls, and send proposals.</li>
        <li>To design, develop, deliver, and maintain the website or service you've engaged us for.</li>
        <li>To send transactional communication such as invoices, project updates, and revision links.</li>
        <li>To improve the Site, our offerings, and overall client experience.</li>
        <li>To comply with legal, tax, or accounting obligations.</li>
      </ul>
      <p>We do not sell your personal data. We do not use your data for advertising profiling.</p>

      <h2>4. Cookies & analytics</h2>
      <p>
        The Site uses essential cookies for navigation and basic functionality, plus privacy-respecting analytics to understand traffic patterns (such as which sections
        of the site are most read). You can disable cookies at any time in your browser settings; some parts of the Site may not function as intended if you do.
      </p>

      <h2>5. Sharing your information</h2>
      <p>We only share information with trusted third parties to the extent strictly required to deliver our Services, including:</p>
      <ul>
        <li><strong>Hosting & infrastructure providers</strong> — to host the website we build or the Site itself.</li>
        <li><strong>Payment processors</strong> — to process invoices and one-time payments securely.</li>
        <li><strong>Email & communication tools</strong> — to reply to you and send project updates.</li>
        <li><strong>Legal & regulatory authorities</strong> — when required by law or to protect our rights.</li>
      </ul>

      <h2>6. How long we keep your data</h2>
      <p>
        We retain client information for as long as your project is active and for a reasonable period after delivery for warranty, accounting, and legal purposes
        (typically up to 7 years for financial records). Enquiries that don't lead to a project are typically deleted within 12 months.
      </p>

      <h2>7. Data security</h2>
      <p>
        We use reasonable technical and organisational measures to protect your information — including encrypted transport (HTTPS), restricted access, and regular
        backups. No method of transmission over the Internet is 100% secure, so we cannot guarantee absolute security but we work hard to come close.
      </p>

      <h2>8. Your rights</h2>
      <p>Depending on where you live, you may have the right to:</p>
      <ul>
        <li>Access the personal data we hold about you.</li>
        <li>Correct inaccurate or incomplete information.</li>
        <li>Request deletion of your data, subject to legal retention requirements.</li>
        <li>Object to or restrict certain uses of your data.</li>
        <li>Withdraw consent at any time, where processing is based on consent.</li>
      </ul>
      <p>To exercise any of these rights, email <a href="mailto:wibly.in@gmail.com">wibly.in@gmail.com</a>. We'll respond within a reasonable timeframe and within statutory deadlines where applicable.</p>

      <h2>9. International transfers</h2>
      <p>
        Because we work with clients and tools worldwide, your information may be processed in countries other than where you reside. We take steps to ensure your
        data is protected wherever it is processed.
      </p>

      <h2>10. Children's privacy</h2>
      <p>The Services are not directed at children under 16, and we do not knowingly collect personal data from them. If you believe a child has provided us with personal data, please contact us so we can delete it.</p>

      <h2>11. Third-party links</h2>
      <p>The Site may link to third-party websites (for example portfolio examples or social platforms). We are not responsible for the privacy practices of those sites and recommend reviewing their respective policies.</p>

      <h2>12. Changes to this policy</h2>
      <p>We may update this Privacy Policy from time to time. When we do, we'll change the "Last updated" date at the top of this page. Material changes will be communicated through the Site or directly to active clients.</p>

      <h2>13. Contact</h2>
      <p>
        For any privacy question, request, or concern, please contact: <br />
        <strong>WIBLY Studio</strong> · <a href="mailto:wibly.in@gmail.com">wibly.in@gmail.com</a>
      </p>
    </LegalLayout>
  );
}
