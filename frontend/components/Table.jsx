// "use client";
// import classNames from "classnames";

// const Table = ({ columns = [], data = [], actions }) => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full border border-gray-200">
//         <thead className="bg-gray-100">
//           <tr>
//             {columns.map((col) => (
//               <th
//                 key={col.key}
//                 className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b"
//               >
//                 {col.label}
//               </th>
//             ))}
//             {actions && <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Actions</th>}
//           </tr>
//         </thead>
//         <tbody>
//           {data.length === 0 ? (
//             <tr>
//               <td colSpan={columns.length + 1} className="text-center py-4 text-gray-500">
//                 No data found.
//               </td>
//             </tr>
//           ) : (
//             data.map((row, index) => (
//               <tr
//                 key={row.id || index}
//                 className={classNames("hover:bg-gray-50", index % 2 === 1 && "bg-white")}
//               >
//                 {columns.map((col) => (
//                   <td key={col.key} className="px-4 py-2 border-b text-sm text-gray-700">
//                     {row[col.key]}
//                   </td>
//                 ))}
//                 {actions && (
//                   <td className="px-4 py-2 border-b text-sm text-gray-700">
//                     {actions(row)}
//                   </td>
//                 )}
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;







"use client";
import { useState } from "react";

const UserTable = ({ users, onDelete, onSuspend }) => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.fullname.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Users</h2>
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-64 text-sm"
        />
      </div>

      <table className="w-full table-auto text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user._id} className="border-t">
                <td className="px-4 py-2">{user.fullname}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2 capitalize">{user.role}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => onSuspend(user._id)}
                    className="text-yellow-600 hover:underline"
                  >
                    Suspend
                  </button>
                  <button
                    onClick={() => onDelete(user._id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4 text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
