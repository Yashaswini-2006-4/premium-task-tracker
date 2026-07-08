import {
  User,
  Code2,
  Database,
  Globe,
  GitBranch,
} from "lucide-react";

function Settings() {
  return (
    <div className="max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Settings
      </h1>

      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 space-y-8">

        {/* Developer */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <User className="text-cyan-400" />
            Developer
          </h2>

          <div className="space-y-2 text-slate-300">
            <p><strong>Name:</strong> Yashaswini</p>
            <p><strong>Role:</strong> Full Stack Developer</p>
            <p><strong>Project:</strong> Premium Task Tracker</p>
          </div>
        </div>

        <hr className="border-slate-700" />

        {/* Tech Stack */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <Code2 className="text-cyan-400" />
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-slate-800 p-4 rounded-xl">
              ⚛️ React.js
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              🎨 Tailwind CSS
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              🟢 Node.js
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              🚀 Express.js
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              <div className="flex items-center gap-2">
                <Database size={18} />
                MongoDB Atlas
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              ☁️ REST API
            </div>

          </div>
        </div>

        <hr className="border-slate-700" />

        {/* Project Info */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <Globe className="text-cyan-400" />
            Project Information
          </h2>

          <div className="space-y-2 text-slate-300">
            <p><strong>Version:</strong> 1.0.0</p>
            <p><strong>Status:</strong> Production Ready 🚀</p>
            <p><strong>Database:</strong> MongoDB Atlas</p>
          </div>
        </div>

        <hr className="border-slate-700" />

        {/* GitHub */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
            <GitBranch className="text-cyan-400" />
            GitHub Repository
          </h2>

          <p className="text-slate-400 mb-4">
            Add your GitHub repository after publishing.
          </p>

          <button
            disabled
            className="bg-slate-700 px-5 py-3 rounded-xl cursor-not-allowed"
          >
            GitHub Link Coming Soon
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;