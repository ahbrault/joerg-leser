// export default function Hero() {
//     return (
//         <section className="w-screen text-center bg-white grid grid-cols-2 min-h-[70vh] mt-16 py-20 container">
//             <div className="flex items-center flex-col justify-center">
//                 <h1 className="text-5xl font-baskerville text-black">Joerg Leser</h1>
//                 <p className="text-xl mt-4">Brand & Concept Development - Hospitality</p>
//                 <button className="px-6 py-3 border font-medium text-lg mt-8">
//                     Contact Joerg
//                 </button>
//             </div>
//             <div className="flex justify-end">
//                 <div className="px-10">
//                     <div className="absolute border border-gold h-[60vh] z-10 w-96" id="hero-image" style={{
//                         transform: 'translate(30px, 30px)',
//                     }}/>
//                     <img src="/hero.webp" alt="" className="relative h-[60vh] w-96 z-30 object-cover"/>
//                 </div>
//             </div>
//         </section>
//     );
// }

'use client'

import Image from "next/image";

export default function Hero() {
    return (
        <div className="bg-white w-full pt-[70px]" id="home">
            <div className="relative">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
                        <svg
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                        >
                            <polygon points="0,0 90,0 50,100 0,100"/>
                        </svg>

                        <div className="relative px-6 pb-14 md:py-20 lg:px-8 lg:py-56 lg:pr-0">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                                <h1 className="text-5xl font-baskerville text-black">
                                    Hospitality Brand & Concept Development
                                </h1>
                                <hr className="border-gold w-32 mt-5 mb-6"/>
                                <p className="mt-8 text-pretty text-lg text-gray-500 sm:text-xl/8">
                                    We develop comprehensive brand and marketing strategies for hospitality businesses,
                                    leveraging our extensive network to connect you with key partners and stakeholders,
                                    creating a distinctive identity, engaging the right audience, and delivering
                                    memorable guest experiences that drive loyalty, growth, and long-term profitability.
                                </p>
                                <button className="px-6 btn-gold py-3 border font-medium text-lg mt-8">
                                    Contact Joerg
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden lg:block">
                    <Image
                        height={1080}
                        width={900}
                        className="aspect-[3/2] object-cover lg:aspect-auto w-full  lg:size-full object-center lg:object-left"
                        src="/hero.webp"
                        alt="Joerg Leser"
                    />
                </div>
            </div>
        </div>
    )
}
