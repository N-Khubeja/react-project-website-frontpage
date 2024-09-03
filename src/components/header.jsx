import { useEffect, useState } from 'react'
import logo from '../images/logo/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { changemode } from '../store/mode/mode.slice'
import { FaSun, FaMoon } from 'react-icons/fa';
import background1 from '../images/background/background-1.jpg'




const Header = () => {
 
    const [isopen,setisopen] = useState(false)
    const dispatch = useDispatch()
    const {toggle} = useSelector(state => state.mode)
    useEffect(() => {
        document.body.style.backgroundColor = toggle ? 'white' : 'red'
    },[toggle])

    
   
    return(
        <header className='flex items-center w-auto px-10  gap-2 justify-between pt-5 pb-12 border-b-2	 bg-slate-800 hover:border-yellow-500 '
        
        >

            <div className='flex items-center gap-5'>
                <img className='w-20 mt-5' src={logo} alt="" />
                <p className='text-2xl text-white hover:text-yellow-500' ><span className='text-base text-white hover:text-yellow-500'>საფეხბურთო კლუბი</span><br/>არაგვი</p>
            </div>
          
            <div>
            {toggle ? <FaMoon onClick={() => dispatch(changemode(!toggle))} className="text-yellow-400 cursor-pointer	" /> : <FaSun onClick={() => dispatch(changemode(!toggle))} className="text-red-500 cursor-pointer	" />}
            </div>

                <nav className='relative z-10' >
                    <div className='flex-row'>
                        <ul className='flex gap-3 '>
                            <li className='p-2 border-b-2 text-white	 hover:border-yellow-500 hover:text-yellow-500 ' style={{transition:'border-bottom 1s,color 1s'}} ><a href="#">მთავარი</a></li>
                            <li className='p-2 border-b-2  text-white underline-offset-1  hover:border-yellow-500  hover:text-yellow-500' style={{transition:'border-bottom 1s,color 1s'}}><a href="#">სიახლეები</a></li>
                            <li onMouseEnter={() => setisopen(true)} 
                                onMouseLeave={() => setisopen(false)} className='p-2 overflow-visible text-white border-b-2 relative  hover:border-yellow-500  hover:text-yellow-500' style={{transition:'border-bottom 1s,color 1s'}}>
                                <a href="#" className='"block p-4"'
                                >კლუბი</a>
                                {isopen && (
                                   <ul 
                                   onMouseEnter={() => setisopen(true)} 
                                   onMouseLeave={() => setisopen(false)}  
                                   class=" absolute -left-14 mt-3 w-48 bg-gray-700 text-white ">
                                   <li className=" text-white border-b border-gray-600 last:border-b-0  hover:border-yellow-500  hover:text-yellow-500" style={{transition:'border-bottom 0.7s,color 0.7s'}}>
                                     <a href="#" className="block p-4 hover:bg-gray-600">ისტორია</a>
                                   </li>
                                   <li className=" text-white border-b border-gray-600 last:border-b-0  hover:border-yellow-500  hover:text-yellow-500" style={{transition:'border-bottom 0.7s,color 0.7s'}}>
                                     <a href="#" className=" text-white border-b border-gray-600 last:border-b-0  hover:border-yellow-500  hover:text-yellow-500" style={{transition:'border-bottom 0.7s,color 0.7s'}}>ფინანსური განყოფილება</a>
                                   </li>
                                   <li>
                                     <a href="#" className="block p-4 hover:bg-gray-600  text-white  hover:text-yellow-500" style={{transition:'color 0.7s'}} >სტუქტურა</a>
                                   </li>
                                 </ul> 
                                )}

                                
                            </li>
                          
                            <li className='p-2 border-b-2 relative group  text-white hover:border-yellow-500  hover:text-yellow-500' style={{transition:'border-bottom 1s,color 1s'}}>
                                <a href="#" className='"block p-4 '

                                >გუნდი</a>
                                
                                   <ul 
                                   class="absolute -left-14 mt-3 w-48 bg-gray-700 text-white hidden group-hover:block ">
                                   <li className="border-b border-gray-600 last:border-b-0  text-white hover:border-yellow-500  hover:text-yellow-500" style={{transition:'border-bottom 0.7s,color 0.7s'}}>
                                     <a href="#" className="block p-4 hover:bg-gray-600">ადმინისტაცია</a>
                                   </li>
                                   <li className="border-b border-gray-600 last:border-b-0  text-white hover:border-yellow-500  hover:text-yellow-500" style={{transition:'border-bottom 0.7s,color 0.7s'}}>
                                     <a href="#" className="block p-4 hover:bg-gray-600  " >ფეხბურთელები</a>
                                   </li>
                                   <li className="border-b border-gray-600 last:border-b-0  text-white hover:border-yellow-500  hover:text-yellow-500" style={{transition:'border-bottom 0.7s,color 0.7s'}}>
                                     <a href="#" className="block p-4 hover:bg-gray-600" >მწვრთნელები</a>
                                   </li>
                                   <li>
                                     <a href="#" className="block p-4 hover:bg-gray-600  text-white  hover:text-yellow-500" style={{transition:'border-bottom 0.7s,color 0.7s'}}>პერსონალი</a>
                                   </li>
                                 </ul> 
                                

                                
                            </li>
                            <li className='p-2 border-b-2 relative group  text-white  hover:border-yellow-500  hover:text-yellow-500' style={{transition:'border-bottom 1s,color 1s'}}>
                                <a href="#">აკადემია</a>
                                <ul className='absolute -left-14 mt-3 w-48 bg-gray-700 text-white hidden group-hover:block '>
                                    <li className="border-b border-gray-600 last:border-b-0  text-white  hover:text-yellow-500" style={{transition:'border-bottom 0.7s,color 0.7s'}}>
                                        <a href="#" className="block p-4 hover:bg-gray-600">არაგვი 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='p-2 border-b-2  text-white hover:border-yellow-500  hover:text-yellow-500' style={{transition:'border-bottom 1s,color 1s'}}><a href="#">კონტაქტი</a></li>
                        </ul>
                    </div>
                </nav>
        </header>
    )
}

export default Header

      