import { Shield, Eye, Lock, Server } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="container-custom py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: January 2, 2026</p>

      <div className="prose prose-lg max-w-none">
        <div className="card bg-slate-50 border-slate-200 mb-8">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Privacy Summary</h3>
              <p className="text-slate-700">
                We don&apos;t collect any personal data. All names you enter are stored 
                locally in your browser and never sent to our servers.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-slate-600" />
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We collect minimal, anonymous information:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Basic analytics (page views, browser type) through privacy-respecting analytics</li>
            <li>No personal information is collected</li>
            <li>No names or data you enter is ever transmitted</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-slate-600" />
            Local Storage
          </h2>
          <p className="text-gray-600 mb-4">
            All your data is stored locally:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Names you enter are saved in your browser&apos;s local storage</li>
            <li>Pick history is stored locally</li>
            <li>Settings and preferences are saved locally</li>
            <li>You can clear this data at any time through your browser settings</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Server className="w-6 h-6 text-slate-600" />
            No Server Storage
          </h2>
          <p className="text-gray-600">
            We do not have any backend servers that store your data. The random name 
            picker runs entirely in your browser. Your names never leave your device.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-600">
            If you have questions about this Privacy Policy, please contact us through our website.
          </p>
        </section>
      </div>
    </div>
  );
}
