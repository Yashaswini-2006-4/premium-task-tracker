import { Bell, Search, UserCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="flex items-center justify-between mb-8">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-1">
          Welcome back! Manage your tasks efficiently.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex items-center bg-slate-900 rounded-xl px-4 py-2 border border-slate-800">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-3 text-white"
          />
        </div>

        {/* Notification */}
        <button className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800">
          <Bell size={20} />
        </button>

        {/* Profile */}
        <button className="p-3 rounded-xl bg-cyan-500 text-black">
          <UserCircle size={22} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;