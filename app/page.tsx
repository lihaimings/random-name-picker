import Link from "next/link";
import { ArrowRight, Shuffle, Users, History, Trash2, Zap, Shield } from "lucide-react";
import ToolComponent from "@/components/tool/ToolComponent";

export default function HomePage() {
  const features = [
    {
      icon: Users,
      title: "Add Names Easily",
      description: "Type names one by one or paste a list. Import from text files."
    },
    {
      icon: Shuffle,
      title: "Animated Selection",
      description: "Watch the exciting animation as names are randomly highlighted."
    },
    {
      icon: History,
      title: "Pick History",
      description: "Keep track of all your picks with timestamps and remaining counts."
    },
    {
      icon: Trash2,
      title: "Remove After Pick",
      description: "Optionally remove picked names for elimination-style drawings."
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Fast, fair, and truly random selection every time."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "All data stays in your browser. Nothing is sent to servers."
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-gray-800" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="relative container-custom py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shuffle className="w-4 h-4" />
              100% Free & Random
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Random Name Picker
              <span className="block text-slate-300">Made Simple</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Pick random names for decisions, drawings, giveaways, and more. 
              Fair, fast, and fun with animated selection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#tool" className="btn-primary bg-white text-slate-700 hover:bg-slate-100 shadow-xl">
                Start Picking <ArrowRight className="w-5 h-5 inline ml-2" />
              </a>
              <Link href="/how-to-use" className="btn-secondary border-white/30 text-white hover:bg-white/10">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 115C120 110 240 100 360 95C480 90 600 90 720 92C840 94 960 98 1080 100C1200 102 1320 102 1380 102L1440 102V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Tool Section */}
      <section id="tool" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <ToolComponent />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Use Our Name Picker?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, fair, and feature-rich random selection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-slate-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-600 to-gray-800 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Pick a Winner?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto">
            Add your names and let fate decide. It&apos;s free and instant!
          </p>
          <a href="#tool" className="btn-primary bg-white text-slate-700 hover:bg-slate-100 shadow-xl inline-flex items-center gap-2">
            Pick Now <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
