import { useEffect, useState } from "react"

const CheckEnd = () => {
    const [value,setvalue] = useState(false)
    useEffect(() => {
        const check = () => {
            if(document.documentElement.getBoundingClientRect().bottom <= window.innerHeight+150){
                setvalue(true)
                
            } else {
                setvalue(false)
                
            }
        }

        document.addEventListener('scroll',check)

        return () => document.removeEventListener('scroll',check)
    })

    return value
}

export default CheckEnd