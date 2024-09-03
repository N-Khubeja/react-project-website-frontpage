import CountdownTimer from '../Count'
import logo1 from './team/logo.png'
import logo2 from './team/logo2.png'

const SectionSecond = () => {

    const matchDate = new Date('2024-10-15T16:00:00')
    return(
        <div className='secondSection'>
            <h1 className='p-2 border-b-2 text-black text-3xl	 hover:border-yellow-500 hover:text-yellow-500 ' style={{transition:'border-bottom 1s,color 1s'}}>შემდეგი თამაში</h1>
            <div className='match'>
                <div className='teams'>
                        <div className='home-team'>
                            <img src={logo1} alt="" className='w-16 h-auto' />
                            <p className='text-xl' id='team'>არაგვი</p>
                        </div>
                        <div className='date'>
                            <p className='text-xl'>შაბათი</p>
                            <p className='text-xl'>31 აგვისტო</p>
                            <p  className='text-xl'>18:00</p>
                        </div>
                        <div className='away-team'>
                            <img src={logo2} alt=""  className='w-16 h-auto'/>
                            <p id='team' className='text-xl'>ვიტ ჯორჯია</p>
                        </div>
                </div>
            <div  className='timer'>
            <CountdownTimer targetDate={matchDate}/>
            </div>
            </div>
        </div>
    )
}

export default SectionSecond