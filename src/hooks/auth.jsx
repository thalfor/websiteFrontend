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

  async function signIn(params){
    try {
      const response = await api.post("/sessions", params);
      const { email, token } = response.data;

      localStorage.setItem("@loginProject:email", JSON.stringify(email));
      localStorage.setItem("@loginProject:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ email, token });

      alert("logIn successful!");

    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("something went wrong.");
      }
    }
  }

  async function updateProfile({ email }) {
    try {
      await api.put("/users", email);
      localStorage.setItem("@loginProject:email", JSON.stringify(email));

      setData({ email, token: data.token });
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
    const email = localStorage.getItem("@loginProject:user");

    if(token && email){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        email: JSON.parse(email)
      })
    }
  }, [])

  return(
    <AuthContext.Provider value={{ 
      signIn, 
      updateProfile, 
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  );
}
export { useAuth, AuthProvider };