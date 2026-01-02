import { FileText, AlertTriangle, Scale, Shield } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="container-custom py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: January 2, 2026</p>

      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-slate-600" />
            Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            By using Random Name Picker, you agree to these Terms of Service. 
            If you do not agree, please do not use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-slate-600" />
            Description of Service
          </h2>
          <p className="text-gray-600 mb-4">
            Random Name Picker is a free tool that randomly selects names from a list. Features include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Adding and managing names</li>
            <li>Random selection with animation</li>
            <li>Pick history tracking</li>
            <li>Import and export functionality</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Scale className="w-6 h-6 text-slate-600" />
            User Responsibilities
          </h2>
          <p className="text-gray-600 mb-4">When using our service, you agree to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Use the service only for lawful purposes</li>
            <li>Not attempt to reverse engineer or compromise the service</li>
            <li>Accept responsibility for any decisions made using the tool</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-slate-600" />
            Disclaimer
          </h2>
          <div className="card bg-yellow-50 border-yellow-200">
            <p className="text-yellow-800">
              This service is provided &quot;as is&quot; without warranties. While we use 
              cryptographically secure random number generation, we cannot guarantee 
              the outcome of any selection. Use at your own discretion.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600">
            We are not liable for any decisions, outcomes, or consequences resulting 
            from using this tool. The random selection is for entertainment and 
            convenience purposes.
          </p>
        </section>
      </div>
    </div>
  );
}
