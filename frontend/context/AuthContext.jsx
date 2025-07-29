'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';


const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/user/profile', {
          method: "GET",
          credentials: "include",
        });
        // const data = await res.json();
        // if (res.ok) setUser(data);

        // if (!res.ok) throw new Error('Not authenticated');
        // const data = await res.json();
        // setUser(data);



        // if (res.ok) {
        //   const data = await res.json();
        //   setUser(data);
        // } else {
        //   // Not authenticated — set user to null but no need to throw
        //   setUser(null);
        // }


        if (!res.ok) {
          setUser(null);
        } else {
          const data = await res.json();
          setUser(data.user); // or just `data` depending on your backend
        }

      } catch (err) {
        setUser(null);
        console.error("Failed to fetch user:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // ✅ Show spinner until auth check finishes
  if (loading) return <LoadingSpinner />;

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
