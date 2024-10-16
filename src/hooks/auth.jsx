//
import { api } from '../services/api'
import { createContext, useContext, useState, useEffect } from 'react';
//
export const AuthContext = createContext({});
//
function useAuth(){
  const context = useContext(AuthContext);
  return context;
}
//
function AuthProvider({ children }){
  const [data, setData] = useState({});

  async function signIn({ email, password }){
    try {
      const response = await api.post("/session", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@loginProject:user", JSON.stringify(user));
      localStorage.setItem("@loginProject:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("something went wrong.");
      }
    }
  }

  async function updateProfile({ user }) {
    try {
      await api.put("/users", user);
      localStorage.setItem("@loginProject:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("password updated.");
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("something went wrong.");
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@loginProject:token");
    const user = localStorage.getItem("@loginProject:user");

    if(token && user){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])

  return(
    <AuthContext.Provider value={{ 
      singIn, 
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  );
}
export { useAuth, AuthProvider };