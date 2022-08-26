import React from "react";
import bg2 from "../images/bg2.jpg";
import ki from "../images/ki.jpg";

function AboutUs() {
  return (
    <div className=" flex flex-row h-screen gap-12">
      <div className="w-1/4 h-screen bg-[#FFA446] px-10 flex flex-col gap-2 justify-between items-center">
        <div className=" pt-20">
          <img src={ki} className="rounded-full w-40 h-40" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="bg-[#FFFFFF] w-4/5 h-8">
            <p className="text-2xl font-mono px-5 text-[#FFA446]">Contact</p>
          </div>

          <div className=" flex flex-col">
            <p className=" text-base font-mono">
              Email : phobdawneur@gmail.com
            </p>
            <a
              href="https://github.com/phobdaeneur"
              target="_blank"
              rel="noopener"
              className=" text-base font-mono"
            >
              Github : Phobdawneur
            </a>
            <p className=" text-base font-mono">Phone : XXX-XXXX-XXX</p>
            <a
              href="https://www.google.com/maps/place/U+Chu+Liang+Building/@13.7272045,100.5396173,18.82z/data=!4m13!1m7!3m6!1s0x0:0x555e19b70438d79e!2zMTPCsDQzJzM3LjkiTiAxMDDCsDMyJzIzLjQiRQ!3b1!8m2!3d13.7271864!4d100.5398198!3m4!1s0x30e29f7b1807d7c9:0xaed3eeb8abfc73b!8m2!3d13.7272529!4d100.5405044"
              target="_blank"
              rel="noopener"
              className=" text-base font-mono"
            >
              Location : 968 U Chu Liang Building
              <p>Fl. 5, Rama 4 Rd, Silom, Bangrak,</p>
              <p> Bangkok 10500</p>
            </a>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-4 items-center px-5 pt-16 w-4/6">
        <div
          style={{ backgroundImage: `url(${bg2})` }}
          className=" w-full h-44 rounded-xl bg-bottom"
        ></div>
        <div className=" grid grid-cols-2 w-full">
          <div className=" flex flex-col bg-violet-300">
            <div className="bg-[#FFA446] w-3/5 h-8 flex flex-row justify-start">
              <p className="text-2xl font-mono text-end px-5 text-[#FFFFFF]">
                Contact
              </p>
            </div>
            <p className=" text-lg font-mono">Name : Dawruang Tanong</p>
            <p className=" text-lg font-mono">Birth day : 07/07/1998</p>
          </div>
          <div className=" flex flex-col items-end bg-green-300">
            <div className="bg-[#FFA446] w-3/5 h-8 flex flex-row justify-end">
              <p className="text-2xl font-mono text-end px-5 text-[#FFFFFF]">
                Contact
              </p>
            </div>
            <p className=" text-lg font-mono">Name : Dawruang Tanong</p>
            <p className=" text-lg font-mono">Birth day : 07/07/1998</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
