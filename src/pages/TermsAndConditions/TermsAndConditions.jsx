import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-gray-800 px-6 py-10 max-w-4xl mx-auto pt-40">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">📚 Use of External Sources — Terms and Conditions</h1>
      <p className="text-sm text-gray-600 mb-8 text-center">Last Updated: 25.07.2025</p>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">🔗 1. Attribution and Citation</h2>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>We aim to properly attribute third-party content with source links, mentions of authors, or publisher names.</li>
            <li>Where required by law or license, we follow specified attribution guidelines.</li>
            <li>If you believe attribution is missing or incorrect, please contact us for correction.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">⚖️ 2. Licensing Compliance</h2>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>We only incorporate external content that is publicly available, shared under open licenses (e.g., Creative Commons), or used with explicit permission.</li>
            <li>Proprietary content not released for public use will not be republished or redistributed.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">🚫 3. No Endorsement Implied</h2>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>Inclusion of external sources does not imply endorsement of that entity’s views, products, or services.</li>
            <li>External references are used strictly for informational or educational purposes.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">🛡️ 4. Responsibility Disclaimer</h2>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>We are not responsible for the accuracy, legality, or reliability of content hosted on external sites.</li>
            <li>Users are encouraged to verify information independently before acting on it.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">🔄 5. Modification and Removal</h2>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>We reserve the right to update, replace, or remove external links and citations without prior notice.</li>
            <li>If an external source becomes outdated or unavailable, we may modify our content accordingly.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">🧾 6. User Contributions Using External Material</h2>
          <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
            <li>If users submit blog posts, comments, or media that include external sources, they are responsible for ensuring proper rights and attribution.</li>
            <li>We reserve the right to moderate or reject submissions that violate copyright or licensing laws.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">📞 7. Questions or Complaints</h2>
          <p className="mt-2 text-gray-700">
            For any questions or concerns about how we use external sources, reach out via:
          </p>
          <ul className="list-none mt-2 space-y-1 text-gray-700">
            <li>📧 <a href="mailto:naveencloudinfra@aol.com" className="text-blue-600 hover:underline">naveencloudinfra@aol.com</a></li>
            <li>🌐 <a href="https://vcloudinfra.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">vcloudinfra.com</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
