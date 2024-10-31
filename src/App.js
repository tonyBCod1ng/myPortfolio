import Greeting from "./Greeting";
import "./App.css";
import {Route, Routes} from "react-router";
import Intro from "./Intro";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";


export default function App() {
    return (
        <div className="parentDiv row">
            <div className={"col col-12"}>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<Greeting/>}/>
                    <Route path="/portfolio" element={<Greeting/>}/>
                    <Route path="/intro" element={<Intro/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
                <Footer/>
            </div>
        </div>
    );
}
