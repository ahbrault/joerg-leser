import Image from "next/image";

export default function About() {
    return (
        <section className="w-full py-20 bg-cream" id="about">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <h2>Joerg Leser</h2>
                    <hr className="border-gold w-32 mb-10 mx-auto"/>
                    <p>
                        Graduate of Ecole Hôtelière de Lausanne, Joerg is a visionary leader with over 24 years of
                        international experience in the luxury hospitality sector, including leadership roles at
                        distinguished hotel brands such as Peninsula, Kempinski, and Park Hyatt. His extensive exposure
                        to global luxury markets has honed his ability to create compelling client experiences and drive
                        business growth through innovative hospitality concepts and strategic marketing initiatives.
                    </p>
                    <div className="grid xs:grid-cols-2 md:grid-cols-4 gap-16 mt-16 justify-items-center items-center">
                        <Image width={150} height={40} src="/hyatt.png"
                               className="max-h-10 max-w-36 object-contain" alt=""/>
                        <Image width={150} height={40} src="/kempinski.svg"
                               className="max-h-10 max-w-36 object-contain" alt="Kempinski"/>
                        <Image width={150} height={40} src="/peninsula.png"
                               className="max-h-10 max-w-36 object-contain" alt=""/>
                        <Image width={150} height={40} src="/ritz.png"
                               className="max-h-10 max-w-36 object-contain" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
}
