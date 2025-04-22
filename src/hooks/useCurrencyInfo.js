import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const[data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_QKcDO7XIG9CYnAYHKj6i9B3zMb1sbxalb063G3uR`)
        .then((res) => res.json())
        .then((res) => setData(res.data))
        // console.log(data);
    },[currency]);
    console.log(data);
    return data
}
export default useCurrencyInfo;