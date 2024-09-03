import { useEffect, useState } from "react"
import team2 from './team/team-2.jpg'
import team3 from './team/team-3.jpg'
import team4 from './team/team-4.jpg'


const SectionFirst = () => {
    const [photoindex,setphotoindex] = useState(0)
    const [fade, setFade] = useState(false)
    const photos = [team2,team3,team4]
    

    useEffect(() => {
        setFade(true)
        setInterval(() => {
            setFade(true)
            setTimeout(() => {
                setphotoindex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1))
                setFade(false)
            }, 1000)
        },3000)

        return () => clearInterval()
    },[photos.length])

    const next = () => {
        setTimeout(() => {
            setphotoindex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
            setFade(false)
        }, 1000)
    }

    const back = () => {
        setFade(true)
        setTimeout(() => {
            setphotoindex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1))
            setFade(false)
        }, 1000)
    }



    return(
        <div className="relative z-0 border-solid-2 "  
            >
            <button onClick={back} className="nav-button">back</button>
           <div className="slider-container  bg-slate-800" 
            >  
            
                <div className={`image-wrapper ${fade ? 'fade' : ''}`}>
                <img src={photos[photoindex]} alt="team-photo" className="team-photo"  />
                </div>
           </div>
           <button onClick={next} className="nav-button">next</button>
        </div>
    )
}

export default SectionFirst