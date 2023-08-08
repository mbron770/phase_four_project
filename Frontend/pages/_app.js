import "../styles/globals.css";
import { useState, useEffect, createContext, useContext} from "react";
import { useRouter } from 'next/router'
import Link from "next/link";


export const AuthContext = createContext()

function useAuth(){
    return useContext(AuthContext)
}
function MyApp({ Component, pageProps }) {
    const [user,setUser]=useState(null)
    const router = useRouter()


  //fetch for session
  function getSession() {
    const URL = "http://localhost:5555/session";
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          router.push('/')
          throw new Error('Error....')
        }
      })
      .then((user) => {
        if (user) {
          setUser(user);
        }
      }).catch((error) => alert(error.message))
  }

  useEffect(() => {
    getSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
        <Component {...pageProps} />
    </AuthContext.Provider>
);
}

export default MyApp;
export {useAuth}
