import Hero from '../components/Hero';
import About from '../components/About';
// import Services from '../components/Services';
import Values from '../components/Values';
import Contact from '../components/Contact';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="w-full flex flex-col items-center">
            <Header/>
            <Hero/>
            <About/>
            {/*<Services/>*/}
            <Values/>
            <Contact/>
            <Footer/>
        </div>
    );
}
