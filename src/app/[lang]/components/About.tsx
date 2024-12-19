import Image from 'next/image';

interface AboutDict {
  title: string;
  description: string;
}

interface AboutProps {
  dict: AboutDict;
}

export default function About({ dict }: AboutProps) {
  return (
    <section className="w-full bg-cream py-20" id="about">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <h2>{dict.title}</h2>
          <hr className="mx-auto mb-10 w-32 border-gold" />
          <p>{dict.description}</p>
          <div className="mt-16 grid items-center justify-items-center gap-16 xs:grid-cols-2 md:grid-cols-4">
            <Image
              width={150}
              height={40}
              src="/hyatt.png"
              className="max-h-10 max-w-36 object-contain"
              alt="Hyatt"
            />
            <Image
              width={150}
              height={40}
              src="/kempinski.svg"
              className="max-h-10 max-w-36 object-contain"
              alt="Kempinski"
            />
            <Image
              width={150}
              height={40}
              src="/peninsula.png"
              className="max-h-10 max-w-36 object-contain"
              alt="Peninsula"
            />
            <Image
              width={150}
              height={40}
              src="/ritz.png"
              className="max-h-10 max-w-36 object-contain"
              alt="Ritz"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
