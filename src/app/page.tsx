import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Expertise from "@/components/Expertise";

export default function Home() {
    return (
        <div className="w-full flex flex-col items-center">
            <Header/>
            <Hero/>
            <About/>
            {/*<Services/>*/}
            {/*<Values/>*/}
            <Expertise />
            <Contact/>
            <Footer/>
        </div>
    );
}
