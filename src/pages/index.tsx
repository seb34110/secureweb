import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import Profile from "./components/profile";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex-cols">
        <section>
          <div>
            <Profile />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
