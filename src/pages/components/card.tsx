import Image from "next/image";

export default function Card() {
  return (
    <>
      <section>
        <div className="hero">
          <div className="hero-content">
            <figure className="mb-10">
              <Image
                src="/logos/logoFirst.gif"
                width="200"
                height="200"
                alt="logo"
                className="rounded-full"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
