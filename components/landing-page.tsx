import Head from "next/head"
import Image from "next/image"
import { useState } from "react";
import { Nav } from "./nav"

const [BgColor, setBgColor] = useState(false);
const changeNavBgColor = () => {
  if (window.scrollY >= 80) {
    setBgColor(true);
  } else {
    setBgColor(false);
  }
  console.log("called");
};

export const landingPage = () => {
    return (
        <div className="relative bg-gray-100 mx-auto" onScroll={changeNavBgColor}>
      <Head>
        <title>Cena law - Your partner in immigration services</title>
      </Head>
      <div
        
        className={
          BgColor
            ? " p-3 sticky z-10 top-0 bg-gray-200"
            : " p-3 sticky z-10 top-0"
        }
      >
        <Nav />
      </div>
      <div className="h-screen border-solid border-2 border-gray-600">
        <div
          className="absolute inset-0 w-screen h-screen"
          style={{
            backgroundImage: `url(https://source.unsplash.com/X2CxUXFqKcM)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#cccccc",
            backgroundSize: "cover",
          }}
        >
          <div
            className="relative w-full inset-y-2/4"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: " white",
            }}
          >
            <p className=" font-serif text-xl text-center">
              "People are getting smarter nowadays; they are letting lawyers,
              instead of their conscience, be their guide."
            </p>
          </div>
        </div>
      </div>
      <main className="">
        <div className="border-solid border-2 border-gray-600">
          <div
            className="bg-fixed text-lg text-gray-900 px-40 py-5 text-center font-sans items-center h-full w-full"
            style={{
              backgroundImage: `url(https://source.unsplash.com/X2CxUXFqKcM)`,
            }}
          >
            <h2 className="my-3 p-3 text-5xl">Who We Are</h2>
            <p className="py-3">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
              urna sed consectetur neque tristique pellentesque. Blandit amet,
              sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi
              vel porttitor vitae ut. Amet vitae fames senectus vitae.
            </p>
            <p className="py-3">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
              urna sed consectetur neque tristique pellentesque. Blandit amet,
              sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi
              vel porttitor vitae ut. Amet vitae fames senectus vitae.
            </p>
          </div>
        </div>
        <div className="w-full">
          <section className=" mt-2 px-2">
            <h2 className="font-sans text-center text-5xl p-3">
              What We Offer
            </h2>
            <div className="grid grid-cols-2">
              <div>
                <p className="p-5 my-5">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                  nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                  senectus vitae.
                </p>
                <p className="p-5 my-5">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                  nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                  senectus vitae.
                </p>
                <p className="p-5 mt-5">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                  nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                  senectus vitae.
                </p>
              </div>
              <div className="m-3 p-3">
                <Image
                  className="rounded-md shadow-xl py-3"
                  src="https://source.unsplash.com/X2CxUXFqKcM"
                  alt="unsplash image"
                  layout="responsive"
                  height={500}
                  width={500}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 mb-3">
              <div className="mr-0 p-3 border-solid border-2 border-gray-600 h-full w-full object-cover object-center">
                <Image
                  className="rounded-md p-2 shadow-2xl border-solid border-2 border-yellow-200"
                  src="https://source.unsplash.com/X2CxUXFqKcM"
                  alt="unsplash image"
                  layout="fixed"
                  height={200}
                  width={500}
                />
              </div>
              <div>
                <p className="p-5 mt-5">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                  nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                  senectus vitae.
                </p>
                <p className="p-5 mt-5">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                  nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                  senectus vitae.
                </p>
                <p className="p-5 mt-5">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
                  nisl netus morbi vel porttitor vitae ut. Amet vitae fames
                  senectus vitae.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
    )
}
