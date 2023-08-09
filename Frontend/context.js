import { createContext, useEffect, useState } from "react";

export const data = createContext()


function Context({ children }) {
  const [allData, setAllData] = useState({});
  const [cart, setCart] = useState([])
  const [transactions, setTransactions] = useState({})
  const [orderNum, setOrderNum] = useState(1)
  const [user,setUser]=useState(null)
//   const router = useRouter()





  function checkOrderNum() {
    if (transactions !== {}) {
      setOrderNum(transactions["transaction_code"] + 1)
    }
  }
  useEffect(() => {fetch("http://localhost:5555/transactions").then(response=>response.json()).then(parsed => setTransactions(parsed))}, [])
  useEffect(()=>checkOrderNum())


  useEffect(() => {fetch("http://localhost:5555/products").then(response=>response.json()).then(parsed => setAllData(parsed))}, [])

  
  

  
    return (
      <data.Provider value={{ allData, setAllData, cart, setCart, orderNum, setOrderNum, transactions, setTransactions, user, setUser}}>
        {children} 
      </data.Provider>
    );
  }

export default Context



