import "../styles/globals.css";
// import { useState, useEffect, createContext, useContext} from "react";
// import { useRouter } from 'next/router'
// import Link from "next/link";
// import Cookies from 'js-cookie';


// export const AuthContext = createContext()

// function useAuth(){
//     return useContext(AuthContext)
// }
// function MyApp({ Component, pageProps }) {
    
//     const [user,setUser]=useState(null)
//     const router = useRouter()
//     //fff


//   //fetch for session
//   function getSession() {
//     const URL = "http://localhost:5555/session"
//     fetch(URL)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           router.push('/')
//           throw new Error('Error....')
//         }
//       })
//       .then((user) => {
//         if (user) {
//           setUser(user)
//           Cookies.set('user', JSON.stringify(user), { expires: 7, sameSite: 'lax', path: '/'})
//         }
//       }).catch((error) => alert(error.message))
//   }

//   useEffect(() => {
//     const savedUser = Cookies.get('user')
//     if(savedUser){
//         setUser(JSON.parse(savedUser))

//     }
//     getSession();
//   }, [])

//   useEffect(() => {
//     Cookies.set('user', JSON.stringify(user), {expires: 7, sameSite: 'lax', path: '/'})

//   }, [user])

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//         <Component {...pageProps} />
//     </AuthContext.Provider>
// );
// }

// export default MyApp;
// export {useAuth}






import Context from "../context"




export default function MyApp({ Component, pageProps }) {
    return (
        <Context>
            <Component {...pageProps}/>
        </Context>
    )
  }