import Image from "next/image";
import CookieBanner from "./cookie";

export default function Profile() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl lg:text-8xl font-bold mb-10">
              SecureWeb Creation
            </h1>
          </div>
          <div className="bg-gradient-to-b from-stone-900">
            <div className="mt-5 uppercase font-bold text-4xl lg:text-6xl text-center">
              <h2>Développeur web React, créons ensembles vos projets Web.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:grid mt-10 md:grid-cols-2 gap-4 md:flex justify-center h-38">
                <div className="flex-shrink-0">
                  <Image
                    src="/logos/react-logos.png"
                    width="128"
                    height="128"
                    alt="react-logo"
                    className="animate-pulse"
                  />
                </div>

                <div className="flex-shrink-0">
                  <Image
                    src="/logos/wordpress.png"
                    width="220"
                    height="220"
                    alt="wordpress-logo"
                    className="animate-pulse"
                  />
                </div>
              </div>
              <div className="h-35 divider divider-info" />
              <div className=" h-20">
                <h2 className="uppercase font-bold text-4xl lg:text-6xl">
                  Des sites web responsive.
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:grid mt-10 md:grid-cols-2 gap-4 md:flex justify-center h-38">
                <Image
                  src="/logos/responsiveDessign.png"
                  width="500"
                  height="500"
                  alt="responsive-design"
                  className=""
                />
              </div>
              <div className="h-35 divider divider-info" />
              <div>
                <div className="bordure flex">
                  <a href="https://sebastienwendling.vercel.app/">
                    <h1>Portfolio</h1>
                  </a>
                </div>
                <br />
                <div className="bordure flex">
                  <a href="./contact">
                    <h1>Contact</h1>
                  </a>
                </div>
                <br />
                <div className="bordure flex">
                  <a href="./services">
                    <h1>Services</h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CookieBanner />
    </>
  );
}
