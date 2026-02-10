import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1220] mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-5 gap-8 text-gray-400">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-orange-500 w-8 h-8 rounded-lg flex items-center justify-center">
              <Zap className="w-4 text-white" />
            </div>
            <span className="text-white font-bold text-lg">
              Hire<span className="text-orange-500">Mate</span>
            </span>
          </div>
          <p className="text-sm">
            Your AI copilot for job applications. Built for students.
          </p>
        </div>

        {/* Columns */}
        <div>
          <h4 className="text-white mb-3">Product</h4>
          <ul className="space-y-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Roadmap</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Help</li>
            <li>Templates</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3">Company</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3">Legal</h4>
          <ul className="space-y-2">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm pb-6">
        © 2026 HireMate. All rights reserved.
      </div>
    </footer>
  );
}
