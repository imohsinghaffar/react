import { useEffect, useState } from "react"

export function useLocalStorage(key, initialData)
{
    const [data, setData] = useState(initialData)

    
    
    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem(key));
        if(existingData)
            {
                setData(existingData)
            }
            else{
                localStorage.setItem(key, JSON.stringify(initialData))
            }
    }, [])
    
    const updateLocalStorage = (newdata)=>{
        if(typeof newdata === 'function')
        {
            localStorage.setItem(key, JSON.stringify(newdata(data)))
        }
else{

    localStorage.setItem(key, JSON.stringify(newdata))
}
        setData(newdata)
    }
    return [data, updateLocalStorage]
}