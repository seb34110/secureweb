import Image from "next/image";

export default function Header() {
  return (
    <>
      <section>
        <div className="sticky flex flex-col max-h-screen max-w-screen">
          <header className="header flex items-center justify-between px-4 md:px-4 lg:px-8 xl:px-16 2xl:px-24 py-4">
            <div className="flex items-center">
              <a href="./">
                <Image
                  src="/logos/logoSWC.jpg"
                  width="55"
                  height="55"
                  alt="logo"
                  className=""
                />
              </a>
            </div>
            <div>
              <div className="md:text-xl lg:text-xl xl:text-xl 2xl:text-4xl ml-4 flex justify-end">
                <div className="mr-3 hover:text-cyan-500">
                  <a href="./contact">
                    <button className="neonButton btn btn-ghost text-base md:text-lg">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Contact
                    </button>
                  </a>
                </div>
                <div className="hover:text-cyan-500">
                  <a href="./services">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <button className="neonButton btn btn-ghost text-lg">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Services
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>
    </>
  );
}
