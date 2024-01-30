import Image from "next/image";

export default function Profile() {
  return (
    <>
      <section>
        <div className="container mx-auto py-8 md:py-16 lg:py-20">
          <div className=" p-8 md:p-12 lg:p-16">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-10">
                SecureWeb Creation
              </h1>
              <h1 className="text-5xl md:text-4xl lg:text-6xl mt-4 ">
                Développeur Web, création de site web.
              </h1>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
