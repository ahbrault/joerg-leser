import {FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";

export default function Contact() {
    return (
        <section className="w-full  py-20 bg-cream px-4" id="contact">
            <div className="max-w-5xl text-center mx-auto">

            <h2>Let’s create something extraordinary together.</h2>
            <hr className="mt-2 border-gold w-32 mx-auto mb-16"/>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 mb-16">
                <div className="space-y-3">
                    <FaMapMarkerAlt className="text-gold w-6 h-6 mx-auto"/>
                    <p className="text-center">
                        182, boulevard Haussmann<br/>
                        75008 Paris
                    </p>
                </div>

                <div className="space-y-3">
                    <FaPhoneAlt className="text-gold w-6 h-6 mx-auto"/>
                    <p className="text-center">
                        +33 6 24 64 64 89
                    </p>
                </div>

                <div className="space-y-3">
                    <FaEnvelope className="text-gold w-6 h-6 mx-auto"/>
                    <p className="text-center">
                        <a href="mailto:joerg.leser73@gmail.com" className="hover:text-gold transition-colors">
                            joerg.leser73@gmail.com
                        </a>
                    </p>
                </div>
            </div>
            <a href="mailto:joerg.leser@example.com" className="">
                <button className="px-6 py-3 border btn-gold font-medium text-lg mt-8 mx-auto">
                    Get in Touch
                </button>
            </a>
            </div>
        </section>
    );
}
