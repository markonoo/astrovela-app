"use client"

import type React from "react"

import { PageLayout } from "@/components/shared/page-layout"
import { Search, BookOpen, MessageSquare, FileText, Phone } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

// FAQ data organized by categories
const faqCategories = [
  {
    id: "ordering",
    name: "Ordering & Payment",
    icon: <FileText className="w-5 h-5" />,
    questions: [
      {
        id: "order-process",
        question: "How does the ordering process work?",
        answer:
          "After completing the astrology quiz, you'll be presented with different product options including paperback book, ebook, and app subscription. Select your preferred option, accept the terms, and click 'Order Now' to proceed to our secure checkout. Your personalized astrology book will be created based on your quiz answers.",
      },
      {
        id: "payment-methods",
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All payments are processed securely through Shopify's payment system.",
      },
      {
        id: "subscription-cancel",
        question: "How do I cancel my app subscription?",
        answer:
          "You can cancel your app subscription at any time by logging into your account, going to 'Subscription Management' and clicking 'Cancel Subscription'. Alternatively, you can email help@nordastro.com with your cancellation request. Your subscription will continue until the end of the current billing period.",
      },
      {
        id: "discount-codes",
        question: "Can I use discount codes?",
        answer:
          "Yes, we occasionally offer discount codes through promotions or to returning customers. You can enter your discount code at checkout in the designated field. Please note that discounts cannot be applied retroactively to completed orders.",
      },
    ],
  },
  {
    id: "delivery",
    name: "Shipping & Delivery",
    icon: <BookOpen className="w-5 h-5" />,
    questions: [
      {
        id: "delivery-time",
        question: "How long will it take to receive my paperback book?",
        answer:
          "Paperback books typically ship within 3-5 business days as each book is personalized and printed on demand. Delivery times depend on your location, generally ranging from 7-14 days after shipping. You'll receive tracking information via email once your order ships.",
      },
      {
        id: "ebook-delivery",
        question: "How do I access my ebook?",
        answer:
          "Your personalized ebook will be delivered to the email address you provided during checkout, usually within 24 hours of completing your order. You'll receive a secure download link that allows you to save the PDF to your device. The link remains active for 30 days.",
      },
      {
        id: "international-shipping",
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship to most countries worldwide. International shipping typically takes 10-21 business days depending on the destination and customs processing. Please note that any import duties or taxes are the responsibility of the recipient.",
      },
      {
        id: "shipping-updates",
        question: "How can I track my order?",
        answer:
          "Once your order ships, you'll automatically receive a tracking number via email. You can also view your order status and tracking information in your account under 'Order History'.",
      },
    ],
  },
  {
    id: "products",
    name: "Products & Content",
    icon: <MessageSquare className="w-5 h-5" />,
    questions: [
      {
        id: "book-content",
        question: "What's included in my personalized book?",
        answer:
          "Your personalized astrology book includes a detailed birth chart analysis, personality profile, relationship compatibility insights, career guidance, and life path predictions—all customized based on your birth date, time, and location. The book is typically 130-150 pages long and includes visualizations of your astrological placements.",
      },
      {
        id: "app-features",
        question: "What features are included in the app subscription?",
        answer:
          "The Nordastro app subscription includes daily horoscopes, real-time transit analysis (how current planetary movements affect you), compatibility reports with unlimited people, personalized affirmations, guided meditations based on your chart, and monthly in-depth forecasts.",
      },
      {
        id: "accuracy",
        question: "How accurate are the readings?",
        answer:
          "The accuracy of your reading depends on providing correct birth information. For the most precise analysis, we recommend including your exact birth time. Our interpretations are based on traditional and modern astrological techniques, providing insights that most users find remarkably relevant to your life experiences.",
      },
      {
        id: "astrology-level",
        question: "Do I need to understand astrology to use the book or app?",
        answer:
          "Not at all! Our content is designed to be accessible for beginners while also providing depth for those more familiar with astrology. We include explanations of key concepts and terms throughout, making it easy to understand regardless of your prior knowledge.",
      },
    ],
  },
  {
    id: "account",
    name: "Account & Technical Support",
    icon: <Phone className="w-5 h-5" />,
    questions: [
      {
        id: "account-creation",
        question: "Do I need to create an account?",
        answer:
          "While you don't need an account to take the quiz or make a one-time purchase, creating an account allows you to save your results, access your digital products, manage subscriptions, and track orders. We recommend creating an account for the best experience.",
      },
      {
        id: "login-issues",
        question: "I can't log in to my account. What should I do?",
        answer:
          "First, try using the 'Forgot Password' link to reset your password. Make sure you're using the same email address you used when creating your account. If you still can't log in, please contact our support team at support@nordastro.com for assistance.",
      },
      {
        id: "app-compatibility",
        question: "Which devices is the app compatible with?",
        answer:
          "The Nordastro app is available for iOS (iPhone/iPad) and Android devices. For the best experience, we recommend iOS 14+ or Android 8+. The app also works on tablets and can be accessed via web browsers on desktop computers.",
      },
      {
        id: "data-security",
        question: "Is my personal information secure?",
        answer:
          "Yes, we take data security very seriously. All personal information is encrypted and stored securely. We never share your information with third parties without your consent. For more details, please review our Privacy Policy.",
      },
    ],
  },
]

// Popular articles data
const popularArticles = [
  {
    id: 1,
    title: "Understanding Your Birth Chart: A Beginner's Guide",
    category: "Astrology Basics",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How to Interpret Your Moon Sign and Its Emotional Impact",
    category: "Self-Discovery",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Tracking Your Order and Delivery Timeframes",
    category: "Orders & Shipping",
    readTime: "3 min read",
  },
  {
    id: 4,
    title: "Accessing and Downloading Your Ebook on Different Devices",
    category: "Technical Support",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Managing and Updating Your Subscription Settings",
    category: "Account Management",
    readTime: "6 min read",
  },
]

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("ordering")

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  // Filter questions based on search query
  const filteredQuestions = searchQuery
    ? faqCategories.flatMap((category) =>
        category.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      )
    : []

  // Get the active category
  const activeCategoryData = faqCategories.find((cat) => cat.id === activeCategory)

  return (
    <PageLayout title="Help Center" description="Find answers to frequently asked questions and get support">
      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {searchQuery && (
          <div className="mt-6 max-w-xl mx-auto">
            <h3 className="font-semibold mb-4">Search Results:</h3>
            {filteredQuestions.length > 0 ? (
              <div className="space-y-4">
                {filteredQuestions.map((question) => (
                  <div key={question.id} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-2">{question.question}</h4>
                    <p className="text-sm text-gray-600">{question.answer}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                No results found. Please try different keywords or contact us directly.
              </p>
            )}
          </div>
        )}
      </div>

      {/* FAQ Categories */}
      {!searchQuery && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center p-4 rounded-lg ${
                  activeCategory === category.id
                    ? "bg-yellow-100 text-yellow-800 border-2 border-yellow-400"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    activeCategory === category.id ? "bg-yellow-400" : "bg-gray-100"
                  }`}
                >
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {activeCategoryData && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold mb-4">{activeCategoryData.name}</h3>
              <div className="space-y-6">
                {activeCategoryData.questions.map((question) => (
                  <div key={question.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <h4 className="font-medium mb-2">{question.question}</h4>
                    <p className="text-gray-600">{question.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Popular Articles */}
      {!searchQuery && (
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Popular Articles</h2>
          <div className="bg-white rounded-lg shadow-sm">
            {popularArticles.map((article, index) => (
              <div
                key={article.id}
                className={`p-4 flex items-start ${
                  index < popularArticles.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="bg-yellow-100 text-yellow-800 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <Link href="#" className="font-medium hover:text-yellow-600 transition-colors">
                    {article.title}
                  </Link>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <span className="mr-3">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Support */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Still need help?</h2>
        <p className="mb-4">Our support team is available to assist you with any questions or concerns.</p>
        <Link
          href="/contact-us"
          className="inline-block px-6 py-3 bg-yellow-400 rounded-full text-gray-900 font-medium hover:bg-yellow-500 transition-colors"
        >
          Contact Support
        </Link>
      </div>
    </PageLayout>
  )
}

