import { useEffect, useState } from 'react'

export default function useLocalStorage(key, defaultValue) {
    
    //initialize app with any localally stored values
    const [value, setValue] = useState( () => {
        const jsonValue = localStorage.getItem(key)

        //return stored local item

        if(jsonValue != null) return JSON.parse(jsonValue)
        
        // check to seee if stored item is a function and execute it

        if(typeof defaultValue === 'function'){
            return defaultValue()
        } else {
            return defaultValue
        }
    });

    //update stored values when change occurs

    useEffect( ()=> {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    //return updated state values
    return [value, setValue]
}