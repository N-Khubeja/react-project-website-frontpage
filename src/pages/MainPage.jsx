import SectionFirst from "../components/formainpage/SectionFirst"
import SectionSecond from "../components/formainpage/SectionSecond"
import SectionThird from "../components/formainpage/SectionThird"
import Header from "../components/header"
import CheckEnd from "../Hooks/CheckEnd"
import ToTop from "../Hooks/ToTop"


const MainPage = () => {

    const value = CheckEnd()
    const totop = ToTop()

    return(
        <div >
            <Header/>
            <SectionFirst/>
            <SectionSecond/>
            <SectionThird/>
            {value && <button onClick={() => totop()} className="p-2 bg-yellow-500">up</button>}
        </div>
    )
}

export default MainPage