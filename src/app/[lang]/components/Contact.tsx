import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

interface ContactDict {
  title: string;
  address: string;
  phone: string;
  email: string;
  getInTouch: string;
}

interface ContactProps {
  dict: ContactDict;
}

export default function Contact({ dict }: ContactProps) {
  return (
    <section className="w-full bg-cream px-4 py-20" id="contact">
      <div className="mx-auto max-w-5xl text-center">
        <h2>{dict.title}</h2>
        <hr className="mx-auto mb-16 mt-2 w-32 border-gold" />
        <div className="mb-16 grid grid-cols-1 items-center justify-center gap-12 sm:grid-cols-3 md:flex-row md:items-start">
          <div className="space-y-3">
            <FaMapMarkerAlt className="mx-auto h-6 w-6 text-gold" />
            <p className="text-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
                href="https://www.google.fr/maps/place/182+Bd+Haussmann,+75008+Paris/@48.8752417,2.3044191,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66fc732088af9:0x49010a181ef58fea!8m2!3d48.8752417!4d2.306994!16s%2Fg%2F11cschy2r3?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              >
                {dict.address.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <FaPhoneAlt className="mx-auto h-6 w-6 text-gold" />
            <p className="text-center">
              <a href="tel:+33624646489" className="transition-colors hover:text-gold">
                {dict.phone}
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <FaEnvelope className="mx-auto h-6 w-6 text-gold" />
            <p className="text-center">
              <a href={`mailto:${dict.email}`} className="transition-colors hover:text-gold">
                {dict.email}
              </a>
            </p>
          </div>
        </div>
        <a href={`mailto:${dict.email}`} className="">
          <button className="btn-gold mx-auto mt-8 border px-6 py-3 text-lg font-medium">
            {dict.getInTouch}
          </button>
        </a>
      </div>
    </section>
  );
}
