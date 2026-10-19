import Home_Section1 from "./section/Home.Section1"
import Home_Section2 from "./section/Home.Section2"
import Home_Section3 from "./section/Home.Section3"
import Home_Section4 from "./section/Home.Section4"
import Carrossel from "../../components/Carrossel"

export default function Home() {
    return(
        <>
            <Home_Section1/>
            <Carrossel/>
            <Home_Section2/>
            <Home_Section3/>
            <Home_Section4/>
        </>
    )
}
