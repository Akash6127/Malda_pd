import React, { useContext, useEffect } from 'react'
import { createContext,useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UserContext = createContext();
function AuthContext({children}) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
      const verifyUser = async ()=>{
        try{
          const token = localStorage.getItem("token");
          if(token){
          const response = await axios.get("http://localhost:4000/api/auth/verify",{
            headers:{
              Authorization: `Bearer ${token}`
            }
          })
          if(response.data.success){
            setUser(response.data.user);
          }
        }else{
          setUser(null);
          setLoading(false);
          navigate("/login");
        }
        }catch(error){
        if(error.response && !error.response.data.success){
         setUser(null);
        }
        }finally{
          setLoading(false);
        }
      }
      verifyUser();
    },[])
    const login = (user)=>{
        setUser(user);
    }
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("token");
        navigate("/");
    }
  return (
    <UserContext.Provider value ={{user,login,logout}}>
        {children}
    </UserContext.Provider>
  )
}
export const useAuth = () => useContext(UserContext);

export default AuthContext