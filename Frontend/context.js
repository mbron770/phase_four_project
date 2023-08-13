import { createContext, useEffect, useState } from "react";

export const data = createContext()


function Context({ children }) {
  const [allData, setAllData] = useState({});
  const [cart, setCart] = useState([])
  const [transactions, setTransactions] = useState({})
  const [orderNum, setOrderNum] = useState(1)
  const [user,setUser]=useState(null)
  const [searchTerm, setSearchTerm] = useState('')
//   const router = useRouter()

  function checkOrderNum() {
    if (transactions !== {}) {
      setOrderNum(transactions["transaction_code"] + 1)
    }
  }
  useEffect(() => {fetch(" https://backend-phase-4.onrender.com/transactions").then(response=>response.json()).then(parsed => setTransactions(parsed))}, [])
  'http://localhost:5555'
  
 
  useEffect(()=>checkOrderNum(), [transactions])

  // useEffect(() => {

  // }, [])
  useEffect(()=>{
    getSession()
  },[])

  function getSession() {
    const URL = " https://backend-phase-4.onrender.com/session";
    fetch(URL)
    .then(res => {
        if (!res.ok) {
            throw new Error(`Error: ${res.statusText}`);
        }
        return res.json();
    })
    .then(user => {
        if (user) {
            setUser(user);
        }
    })
    .catch(error => {
        console.error("There was an issue:", error);
    });
 }
  




  useEffect(() => {fetch("https://backend-phase-4.onrender.com/products").then(response=>response.json()).then(parsed => setAllData(parsed))}, [])

  
  

  
    return (
      <data.Provider value={{ allData, setAllData, searchTerm, setSearchTerm, cart, setCart, orderNum, setOrderNum, transactions, setTransactions, user, setUser}}>
        {children} 
      </data.Provider>
    );
  }

export default Context



