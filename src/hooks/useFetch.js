import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (url) => {
    const [data,setData] = useState([])
    const [loding,setLoding] = useState(false)
    const [error,setError] = useState(false)


    useEffect(()=>{
        const fetchdata = async() => {
            setLoding(true)
            try {
                const res = await axios.get(url)
                setData(res.data)
            } catch (error) {
                setError(error)
            }
            setLoding(false)
        }
        fetchdata();
    },[url])    

    const refetch = async () => {
        setLoding(true)
        try {
            const res =   await axios.get(url)
            setData(res.data)
        } catch (error) {
            setError(error)
        }
        setLoding(false)
    }
    return {data,loding,error,refetch}
}

export default useFetch;