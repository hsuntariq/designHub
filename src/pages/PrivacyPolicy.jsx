// pages/PrivacyPolicy.js
import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-purple-600">
            Home
          </Link>
          <span>›</span>
          <span>Privacy Policy</span>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                At DesignHub, we are committed to protecting your privacy. We
                collect minimal information to provide and improve our services:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Usage data and analytics to improve our tools</li>
                <li>Anonymous interaction data with our design tools</li>
                <li>
                  Technical information such as browser type and device
                  information
                </li>
                <li>
                  Cookies for functionality and analytics (see Cookie Policy)
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Provide, maintain, and improve our design tools</li>
                <li>Understand how users interact with our services</li>
                <li>Develop new features and functionality</li>
                <li>Ensure the security and integrity of our platform</li>
                <li>Communicate with you about updates and improvements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Data Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. We may share anonymous, aggregated data with:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Analytics providers to understand usage patterns</li>
                <li>
                  Advertising partners (Google AdSense) for relevant ad delivery
                </li>
                <li>Service providers who assist in operating our website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Cookies and Tracking
              </h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>
                  Deliver personalized advertisements through Google AdSense
                </li>
                <li>Improve user experience and tool functionality</li>
              </ul>
              <p className="text-gray-700">
                You can control cookie settings through your browser
                preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Third-Party Services
              </h2>
              <p className="text-gray-700 mb-4">
                Our website uses third-party services that have their own
                privacy policies:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>Google AdSense:</strong> Serves advertisements and may
                  use cookies for personalized ads
                </li>
                <li>
                  <strong>Google Analytics:</strong> Helps us understand how
                  users interact with our tools
                </li>
                <li>
                  <strong>Cloudflare:</strong> Provides security and performance
                  optimization
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your
                information from unauthorized access, alteration, or
                destruction. However, no internet transmission is completely
                secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Your Rights
              </h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Access any personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Children's Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                Our services are not directed to individuals under 13. We do not
                knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. International Transfers
              </h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in
                countries other than your own. We ensure appropriate safeguards
                are in place for international data transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">Email: hsuntariq@gmail.com</p>
                <p className="text-gray-700">
                  Contact Form:{" "}
                  <Link
                    to="/contact"
                    className="text-purple-600 hover:underline"
                  >
                    Visit Contact Page
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/terms"
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200 hover:border-purple-300"
          >
            <div className="text-2xl mb-3">📄</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Terms of Service
            </h3>
            <p className="text-gray-600 text-sm">
              Read our terms and conditions
            </p>
          </Link>

          <Link
            to="/contact"
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200 hover:border-purple-300"
          >
            <div className="text-2xl mb-3">📧</div>
            <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-gray-600 text-sm">Get in touch with our team</p>
          </Link>

          <Link
            to="/support"
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200 hover:border-purple-300"
          >
            <div className="text-2xl mb-3">🛠️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
            <p className="text-gray-600 text-sm">Get help with our tools</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
