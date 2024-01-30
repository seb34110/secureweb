import Image from "next/image";

export default function Service() {
  return (
    <>
      <section>
        <div>
          <div className="bordure flex justify-center">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h1 className="text-6xl">mes services</h1>
          </div>
          <div>
            <h1>app react/next.js</h1>
          </div>
          <div>
            <div className="card w-1/3 h-dvh shadow-lg shadow-white">
              <div className="card-body">
                <h2 className="card-title">Site vitrine</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
