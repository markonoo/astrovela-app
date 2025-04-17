import { PageLayout } from "@/components/shared/page-layout"

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy" description="Learn how we collect, use, and protect your personal information">
      <div className="bg-white rounded-lg shadow-sm p-6 prose prose-slate max-w-none">
        <h2>1. Introduction</h2>
        <p>
          At astrovela, we respect your privacy and are committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you visit our website, use our
          mobile application, or purchase our products.
        </p>
        <p>
          Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please
          do not access our services.
        </p>

        <h2>2. Information We Collect</h2>

        <h3>2.1 Personal Information</h3>
        <p>When you create an account, place an order, or use our services, we may collect:</p>
        <ul>
          <li>Contact information (name, email address, phone number, shipping address)</li>
          <li>Birth details (date, time, and place of birth) for personalized astrology services</li>
          <li>Payment information (credit card details, billing address)</li>
          <li>Account credentials (username, password)</li>
          <li>Information shared in communications with us</li>
          <li>Survey responses and feedback</li>
        </ul>

        <h3>2.2 Automatically Collected Information</h3>
        <p>When you visit our website or use our app, we may automatically collect:</p>
        <ul>
          <li>Device information (IP address, browser type, operating system)</li>
          <li>Usage data (pages visited, time spent on pages, referring website)</li>
          <li>Location information (with your consent)</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your information for various purposes, including to:</p>
        <ul>
          <li>Create and manage your account</li>
          <li>Process and fulfill your orders</li>
          <li>Generate personalized astrology content</li>
          <li>Provide customer support</li>
          <li>Send transactional emails and order updates</li>
          <li>Send marketing communications (with your consent)</li>
          <li>Improve our website, products, and services</li>
          <li>Analyze usage patterns and trends</li>
          <li>Protect against fraud and unauthorized transactions</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>4. How We Share Your Information</h2>
        <p>We may share your information with:</p>

        <h3>4.1 Service Providers</h3>
        <p>
          We share information with third-party vendors who provide services on our behalf, such as payment processing,
          order fulfillment, customer support, and marketing assistance. These providers have access to your personal
          information only to perform these tasks on our behalf and are obligated not to disclose or use it for any
          other purpose.
        </p>

        <h3>4.2 Legal Requirements</h3>
        <p>
          We may disclose your information where required by law or if we believe that such action is necessary to
          comply with a legal obligation, protect and defend our rights or property, prevent fraud, or protect the
          personal safety of users of the Service or the public.
        </p>

        <h3>4.3 Business Transfers</h3>
        <p>
          If astrovela is involved in a merger, acquisition, or sale of all or a portion of its assets, your information
          may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our
          website of any change in ownership or uses of your personal information.
        </p>

        <h2>5. Your Data Protection Rights</h2>
        <p>Depending on your location, you may have the following rights:</p>
        <ul>
          <li>Right to access personal information we hold about you</li>
          <li>Right to request correction of inaccurate information</li>
          <li>Right to request deletion of your information</li>
          <li>Right to object to or restrict processing of your information</li>
          <li>Right to data portability</li>
          <li>Right to withdraw consent at any time</li>
          <li>Right to lodge a complaint with a supervisory authority</li>
        </ul>
        <p>To exercise these rights, please contact us using the details provided below.</p>

        <h2>6. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our Service and hold certain
          information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
        </p>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li>Essential cookies: necessary for the operation of our website</li>
          <li>Analytical cookies: to understand how visitors interact with our website</li>
          <li>Functional cookies: to remember your preferences and settings</li>
          <li>Advertising cookies: to deliver relevant advertisements</li>
        </ul>
        <p>
          You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
          you do not accept cookies, you may not be able to use some portions of our Service.
        </p>

        <h2>7. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect the security of your personal
          information. However, please be aware that no method of transmission over the Internet or method of electronic
          storage is 100% secure.
        </p>
        <p>
          Your account information is protected by a password. To maintain the security of your account, we recommend
          choosing a strong password and keeping it confidential.
        </p>

        <h2>8. Data Retention</h2>
        <p>
          We will retain your personal information only for as long as is necessary for the purposes set out in this
          Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal
          obligations, resolve disputes, and enforce our policies.
        </p>

        <h2>9. Children's Privacy</h2>
        <p>
          Our Service is not directed to anyone under the age of 16. We do not knowingly collect personal information
          from children under 16. If you are a parent or guardian and you are aware that your child has provided us with
          personal information, please contact us so that we can take necessary actions.
        </p>

        <h2>10. International Data Transfers</h2>
        <p>
          Your information may be transferred to and maintained on computers located outside of your state, province,
          country, or other governmental jurisdiction where the data protection laws may differ. If you are located
          outside the United States and choose to provide information to us, please note that we transfer the
          information to the United States and process it there.
        </p>

        <h2>11. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last updated" date at the bottom.
        </p>
        <p>
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are
          effective when they are posted on this page.
        </p>

        <h2>12. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us:</p>
        <ul>
          <li>
            By email: <a href="mailto:privacy@astrovela.com">privacy@astrovela.com</a>
          </li>
          <li>By mail: astrovela Privacy Office, 123 Astrology Lane, Starfield, CA 12345, USA</li>
        </ul>

        <p className="text-sm text-gray-500 mt-8">Last updated: December 1, 2023</p>
      </div>
    </PageLayout>
  )
}

