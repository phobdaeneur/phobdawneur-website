import React from "react";
import java from "../images/iconTec/java.svg";
import java2 from "../images/iconTec/java2.svg";
import react from "../images/iconTec/react.svg";
import nodeJs from "../images/iconTec/nodeJs.svg";
import html from "../images/iconTec/html.svg";
import php from "../images/iconTec/php.svg";
import bg from "../images/bg.jpg";

function Document() {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" pt-10 overflow-hidden relative h-screen"
    >
      <div className="container xl:max-w-6xl mx-auto px-4 pt-12 pb-8">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-4xl leading-normal mb-2 font-mono text-back">
            Tecnologies / Frameworks
          </h2>
          <p className="text-back leading-relaxed font-mono text-xl mx-auto pb-2">
            My favorite tecnologies!
          </p>
        </header>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <a className="w-full ring-2 ring-amber-800/40 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2">
            <img src={php} className=" h-20 w-auto" />

            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">PHP</p>
              {/* <p className="text-base text-[#1A1A1A] font-normal">
                ________________________________________
              </p> */}
            </div>
          </a>

          <a className="w-full ring-2 ring-amber-800/40 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2">
            <img src={java2} className=" h-20 w-auto pt-4" />

            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">Java</p>
              {/* <p className="text-base text-[#1A1A1A] font-normal">
                ________________________________________
              </p> */}
            </div>
          </a>

          <a className="w-full ring-2 ring-amber-800/40 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2">
            <img src={java} className=" h-20 w-auto pt-4" />

            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">
                JavaScript
              </p>
              {/* <p className="text-base text-[#1A1A1A] font-normal">
                ________________________________________
              </p> */}
            </div>
          </a>

          <a className="w-full ring-2 ring-amber-800/40 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2">
            <img src={react} className=" h-20 w-auto pt-4" />

            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">React</p>
              {/* <p className="text-base text-[#1A1A1A] font-normal">
                ________________________________________
              </p> */}
            </div>
          </a>

          <a className="w-full ring-2 ring-amber-800/40 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2">
            <img src={nodeJs} className=" h-20" />

            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">NodeJS</p>
              {/* <p className="text-base text-[#1A1A1A] font-normal">
                ________________________________________
              </p> */}
            </div>
          </a>

          <a className="w-full ring-2 ring-amber-800/40 flex flex-col justify-center items-center transition duration-300 ease-in-out hover:-translate-y-2">
            <img src={html} className=" h-20 w-auto pt-4" />
            <div className="text-center">
              <p className="text-xl text-[#1A1A1A] font-bold mb-2">HTML/CSS</p>
              {/* <p className="text-base text-[#1A1A1A] font-normal">
                ________________________________________
              </p> */}
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Document;
