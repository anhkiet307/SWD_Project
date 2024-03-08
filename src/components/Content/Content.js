import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import News from "../News/News";
import Contact from "../Contact/Contact";
import Card from "../Card/Card";
import { useContext } from "react";
import { ThemeContext } from "../../App";


export default function Content() {

    const { theme } = useContext(ThemeContext)

    return (

        <div className={`container-fluid pt-content pb-5 bg-info bg-gradient`}  style={{minHeight: '755px', overflow:"hidden"}}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/news' element={<News />} />
                <Route path='/contact' element={<Contact />} />
                <Route path="/card/*">
                    <Route path=":id" element={<Card/>} />
                </Route>
            </Routes>
        </div>
            
    )
}