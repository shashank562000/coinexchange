import React, { useEffect } from 'react'
import axios from 'axios'

function Exchanges() {
useEffect(() => {
  const fetchExchanges = async()=>{
     const {data} = await axios.get()
  }
}, [])


  return (
    <div>Exchanges</div>
  )
}

export default Exchanges