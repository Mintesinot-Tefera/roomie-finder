// "use client";
// import { useEffect, useState } from "react";
// import Table from "@/components/Table";

// const UserManagement = () => {
//   const [users, setUsers] = useState([]);

//   const fetchUsers = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/api/admin/users", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       const data = await res.json();
//       setUsers(data.users);
//     } catch (err) {
//       console.error("Failed to fetch users", err);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const handleDelete = (id) => {
//     // Add confirmation + API call here
//     alert(`Delete user with ID: ${id}`);
//   };

//   const handleSuspend = (id) => {
//     // Add suspend logic here
//     alert(`Suspend user with ID: ${id}`);
//   };

//   const columns = [
//     { key: "fullname", label: "Name" },
//     { key: "email", label: "Email" },
//     { key: "role", label: "Role" },
//   ];

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">User Management</h1>
//       <Table
//         columns={columns}
//         data={users}
//         actions={(user) => (
//           <div className="space-x-2">
//             <button
//               onClick={() => handleSuspend(user._id)}
//               className="text-yellow-600 hover:underline"
//             >
//               Suspend
//             </button>
//             <button
//               onClick={() => handleDelete(user._id)}
//               className="text-red-600 hover:underline"
//             >
//               Delete
//             </button>
//           </div>
//         )}
//       />
//     </div>
//   );
// };

// export default UserManagement;





"use client";
import { useEffect, useState } from "react";
import UserTable from "@/components/Table";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    // confirmation + DELETE call
    console.log("Delete user", userId);
  };

  const handleSuspend = async (userId) => {
    // suspend logic here
    console.log("Suspend user", userId);
  };

  return (
    <div className="p-6">
      <UserTable users={users} onDelete={handleDelete} onSuspend={handleSuspend} />
    </div>
  );
};

export default UsersPage;
