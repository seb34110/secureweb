import Image from "next/image";

export default function Footer() {
  return (
    <>
      <section>
        <div>
          <footer className="footer flex items-center justify-between w-screen">
            <aside className="flex items-center">
              <Image
                src="/logos/logoSWC.jpg"
                width="36"
                height="36"
                alt="logo"
              />

              <p className="ml-2">Copyright©2020</p>
              <a href="mailto:sebastienwendling@orange.fr" className="ml-2">
                <p className="text-yellow-500">Mon mail</p>
              </a>
            </aside>
            <nav className="flex items-center">
              <a href="https://github.com/seb34110" className="mr-2">
                <Image
                  src="/iconsSociaux/github.png"
                  width="24"
                  height="24"
                  alt="gitHub"
                  className="fill-current"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/s%C3%A9bastien-wendling-274817292/"
                className="mr-2"
              >
                <Image
                  src="/iconsSociaux/linkedin.png"
                  width="24"
                  height="24"
                  alt="linkedin"
                  className="fill-current"
                />
              </a>
              <a href="https://wa.me/782403442" className="mr-5">
                <Image
                  src="/iconsSociaux/whatsapp.png"
                  width="24"
                  height="24"
                  alt="whatsapp"
                  className="fill-current"
                />
              </a>
            </nav>
          </footer>
        </div>
      </section>
    </>
  );
}
