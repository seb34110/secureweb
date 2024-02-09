import Image from "next/image";
import CookieBanner from "./cookie";

export default function Profile() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10">
              SecureWeb Creation
            </h1>
          </div>
          <div className="bg-gradient-to-b from-stone-900">
            <div className="text-4xl md:text-4xl lg:text-6xl font-bold mt-4 mb-10 text-center">
              <h2>
                Développeur web front-end React, créons ensembles vos projets
                Web.
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:grid mt-10 md:grid-cols-2 gap-4 md:flex justify-center h-38">
                <div className="flex-shrink-0">
                  <Image
                    src="/logos/react-logos.png"
                    width="128"
                    height="128"
                    alt="react-logo"
                    className=""
                  />
                </div>

                <div className="flex-shrink-0">
                  <Image
                    src="/logos/wordpress.png"
                    width="220"
                    height="220"
                    alt="wordpress-logo"
                    className=""
                  />
                </div>
              </div>
              <div className="h-35 divider divider-info" />
              <h2 className="text-4xl md:text-4xl lg:text-6xl font-bold mt-4 mb-10">
                Des sites web responsive.
              </h2>
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
