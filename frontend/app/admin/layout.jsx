// app/admin/layout.jsx
export default function AdminLayout({ children }) {
    return (
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-900 text-white p-6 space-y-6">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
          <nav className="space-y-2">
            <a href="/admin/dashboard" className="block hover:bg-blue-800 rounded px-3 py-2">Dashboard</a>
            <a href="/admin/users" className="block hover:bg-blue-800 rounded px-3 py-2">Users</a>
            <a href="/admin/rooms" className="block hover:bg-blue-800 rounded px-3 py-2">Rooms</a>
            <a href="/admin/roommates" className="block hover:bg-blue-800 rounded px-3 py-2">Roommates</a>
            <a href="/" className="block text-sm text-blue-200 hover:underline mt-6">Back to Home</a>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-6">{children}</main>
      </div>
    );
  }
  