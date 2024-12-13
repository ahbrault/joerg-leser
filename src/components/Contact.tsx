import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";

export default function Contact() {
    return (
        <section className="w-full  py-20 bg-cream px-4" id="contact">
            <div className="max-w-5xl text-center mx-auto">

                <h2>Creating the extraordinary</h2>
                <hr className="mt-2 border-gold w-32 mx-auto mb-16"/>
                <div
                    className="grid grid-cols-1 sm:grid-cols-3 md:flex-row justify-center items-center md:items-start gap-12 mb-16">
                    <div className="space-y-3">
                        <FaMapMarkerAlt className="text-gold w-6 h-6 mx-auto"/>
                        <p className="text-center">
                            <a target="_blank" className="hover:text-gold transition-colors"
                               href="https://www.google.fr/maps/place/182+Bd+Haussmann,+75008+Paris/@48.8752417,2.3044191,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fc732088af9:0x49010a181ef58fea!8m2!3d48.8752417!4d2.306994!16s%2Fg%2F11cschy2r3?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                                182, boulevard Haussmann<br/>
                                75008 Paris
                            </a>
                        </p>
                    </div>

                    <div className="space-y-3">
                        <FaPhoneAlt className="text-gold w-6 h-6 mx-auto"/>
                        <p className="text-center">
                            <a href="tel:+33624646489" className="hover:text-gold transition-colors">
                                +33 6 24 64 64 89
                            </a>
                        </p>
                    </div>

                    <div className="space-y-3">
                        <FaEnvelope className="text-gold w-6 h-6 mx-auto"/>
                        <p className="text-center">
                            <a href="mailto:jl@joergleser.com" className="hover:text-gold transition-colors">
                                jl@joergleser.com
                            </a>
                        </p>
                    </div>
                </div>
                <a href="mailto:jl@joergleser.com" className="">
                    <button className="px-6 py-3 border btn-gold font-medium text-lg mt-8 mx-auto">
                        Get in Touch
                    </button>
                </a>
            </div>
        </section>
    );
}
