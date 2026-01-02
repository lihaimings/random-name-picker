import { BookOpen, Plus, Shuffle, Settings, History, Download } from "lucide-react";
import Link from "next/link";

export default function HowToUsePage() {
  const steps = [
    {
      icon: Plus,
      title: "1. Add Names",
      description: "Type names one at a time and press Enter, or paste a list of names separated by commas or new lines. You can also import from a text file."
    },
    {
      icon: Settings,
      title: "2. Configure Options",
      description: "Choose whether to remove names after they're picked. This is useful for elimination-style drawings where each name can only win once."
    },
    {
      icon: Shuffle,
      title: "3. Pick a Winner",
      description: "Click the 'Pick Random Name' button and watch the exciting animation as names are highlighted before the winner is revealed."
    },
    {
      icon: History,
      title: "4. View History",
      description: "Check the pick history to see all previous winners with timestamps. Great for keeping records of your drawings."
    },
    {
      icon: Download,
      title: "5. Export Names",
      description: "Export your name list to a text file for backup or to use later. Your names are also automatically saved in your browser."
    }
  ];

  return (
    <div className="container-custom py-16 max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
          <BookOpen className="w-8 h-8 text-slate-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Use</h1>
        <p className="text-xl text-gray-600">
          Pick random names in just a few simple steps
        </p>
      </div>

      <div className="space-y-6 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="card flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                <step.icon className="w-6 h-6 text-slate-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-slate-50 border-slate-200">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Pro Tips</h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-slate-500 mt-1">•</span>
            <span>Paste names from a spreadsheet - they&apos;ll be automatically separated</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-500 mt-1">•</span>
            <span>Use &quot;Remove after picking&quot; for tournament-style elimination</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-500 mt-1">•</span>
            <span>Export your list before a drawing to have a backup</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-slate-500 mt-1">•</span>
            <span>Your names are saved automatically - come back anytime!</span>
          </li>
        </ul>
      </div>

      <div className="text-center mt-12">
        <Link href="/#tool" className="btn-primary inline-flex items-center gap-2">
          Start Picking Names
        </Link>
      </div>
    </div>
  );
}
