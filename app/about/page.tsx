import { Shuffle, Shield, Zap, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container-custom py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Random Name Picker</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Random Name Picker is a free, easy-to-use tool for randomly selecting names 
          from a list. Perfect for giveaways, classroom activities, team decisions, and more.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="card">
            <Shuffle className="w-10 h-10 text-slate-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Truly Random</h3>
            <p className="text-gray-600">
              We use cryptographically secure random number generation 
              to ensure fair and unbiased selection every time.
            </p>
          </div>
          <div className="card">
            <Shield className="w-10 h-10 text-slate-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
            <p className="text-gray-600">
              All names are stored locally in your browser. 
              We never collect or transmit your data.
            </p>
          </div>
          <div className="card">
            <Zap className="w-10 h-10 text-slate-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast & Fun</h3>
            <p className="text-gray-600">
              Enjoy the animated selection process that builds 
              excitement before revealing the winner.
            </p>
          </div>
          <div className="card">
            <Heart className="w-10 h-10 text-slate-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Free Forever</h3>
            <p className="text-gray-600">
              No signup, no fees, no limits. Use our tool 
              as much as you need, completely free.
            </p>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use Cases</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Classroom activities and student selection</li>
            <li>Giveaways and contest winners</li>
            <li>Team building and group assignments</li>
            <li>Decision making when you can&apos;t choose</li>
            <li>Secret Santa and gift exchanges</li>
            <li>Sports team drafts and picks</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
