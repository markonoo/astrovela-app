import { PageLayout } from "@/components/shared/page-layout"

export default function TermsPage() {
  return (
    <PageLayout title="Terms & Conditions" description="Please read these terms carefully before using our services">
      <div className="bg-white rounded-lg shadow-sm p-6 prose prose-slate max-w-none">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Nordastro. These Terms and Conditions govern your use of our website, products, and services. By
          accessing or using Nordastro, you agree to be bound by these Terms. If you disagree with any part of the
          terms, you may not access our services.
        </p>

        <h2>2. Definitions</h2>
        <p>"Service" refers to the Nordastro website, mobile application, and personalized astrology products.</p>
        <p>"User," "You," and "Your" refers to the individual accessing or using the Service.</p>
        <p>"Company," "We," "Us," and "Our" refers to Nordastro.</p>
        <p>"Content" refers to text, images, audio, video, and other material provided through the Service.</p>

        <h2>3. Account Registration</h2>
        <p>
          Some features of our Service require registration. You must provide accurate and complete information and
          maintain the security of your account. You are responsible for all activities that occur under your account
          and must notify us immediately of any unauthorized use.
        </p>

        <h2>4. Products and Services</h2>
        <h3>4.1 Personalized Astrology Books</h3>
        <p>
          Our personalized astrology books are created based on the information you provide. The accuracy of your
          reading depends on providing correct birth information. We strive to provide accurate astrological
          interpretations, but results may vary based on individual circumstances.
        </p>

        <h3>4.2 Subscription Services</h3>
        <p>
          Our subscription services are billed on a recurring basis. You can cancel your subscription at any time, and
          your subscription will continue until the end of the current billing period. No refunds or credits will be
          provided for partial subscription periods.
        </p>

        <h2>5. Payments and Billing</h2>
        <p>
          All payments are processed securely through our payment processors. By providing payment information, you
          represent that you are authorized to use the payment method. Prices for products and services are subject to
          change without notice. We reserve the right to refuse or cancel your order if fraud or an unauthorized or
          illegal transaction is suspected.
        </p>

        <h2>6. Shipping and Delivery</h2>
        <p>
          Physical products are typically shipped within 3-5 business days of order confirmation. Delivery times vary
          based on location. Digital products are typically delivered via email within 24 hours of purchase. We are not
          responsible for delays due to customs, postal service issues, or incorrect shipping information.
        </p>

        <h2>7. Refunds and Returns</h2>
        <p>
          Due to the personalized nature of our products, we cannot accept returns or provide refunds unless the product
          is materially defective. If you receive a defective product, please contact us within 14 days of receipt.
        </p>

        <h2>8. Intellectual Property</h2>
        <p>
          All content included on the Service, such as text, graphics, logos, and software, is the property of Nordastro
          or its content suppliers and protected by copyright and other laws. Our trademarks and trade dress may not be
          used in connection with any product or service without prior written consent.
        </p>

        <h2>9. User Content</h2>
        <p>
          By submitting content to our Service (such as reviews or testimonials), you grant us a non-exclusive,
          perpetual, irrevocable, royalty-free, worldwide license to use, reproduce, modify, adapt, publish, translate,
          and distribute it in any media.
        </p>

        <h2>10. Disclaimers</h2>
        <p>
          Our Service and products are provided on an "as is" and "as available" basis. We make no warranties, expressed
          or implied, regarding the operation of our Service or the information, content, or materials included. Our
          astrological interpretations should not be considered as professional advice for medical, financial, legal, or
          psychological matters.
        </p>

        <h2>11. Limitation of Liability</h2>
        <p>
          In no event shall Nordastro be liable for any indirect, incidental, special, consequential or punitive
          damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
          resulting from your use of or inability to use the Service.
        </p>

        <h2>12. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless Nordastro from and against any claims, liabilities, damages,
          judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these
          Terms or your use of the Service.
        </p>

        <h2>13. Governing Law</h2>
        <p>
          These Terms shall be governed by the laws of the jurisdiction in which Nordastro is established, without
          regard to its conflict of law provisions.
        </p>

        <h2>14. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will provide notice of significant changes by
          posting the new Terms on our website or sending you an email. Your continued use of the Service constitutes
          your acceptance of the revised Terms.
        </p>

        <h2>15. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at{" "}
          <a href="mailto:legal@nordastro.com">legal@nordastro.com</a>.
        </p>

        <p className="text-sm text-gray-500 mt-8">Last updated: December 1, 2023</p>
      </div>
    </PageLayout>
  )
}

