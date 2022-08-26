import React from "react";
import daisy from "../images/daisy.jpg";

function AboutAsMo() {
  return (
    <div className=" flex flex-col items-center justify-between h-screen w-screen px-6 pb-16 pt-6">
      <div className=" flex flex-col gap-4 items-center">
        <img src={daisy} className=" w-3/5 h-auto rounded-xl" />
        <div className=" flex flex-col">
          <p className=" text-lgmd font-mono">Name : Dawruang Tanong</p>
          <p className=" text-lg font-mono">Birth day : 07/07/1998</p>
        </div>
      </div>

      <div className=" flex flex-col gap-2">
        <p className=" text-xl font-mono">Contact</p>
        <div className=" flex flex-col">
          <p className=" text-sm font-mono">Email : phobdawneur@gmail.com</p>
          <a
            href="https://github.com/phobdaeneur"
            target="_blank"
            rel="noopener"
            className=" text-sm font-mono"
          >
            Github : Phobdawneur
          </a>
          <p className=" text-sm font-mono">Phone : XXX-XXXX-XXX</p>
          <a
            href="https://www.google.com/maps/place/U+Chu+Liang+Building/@13.7272045,100.5396173,18.82z/data=!4m13!1m7!3m6!1s0x0:0x555e19b70438d79e!2zMTPCsDQzJzM3LjkiTiAxMDDCsDMyJzIzLjQiRQ!3b1!8m2!3d13.7271864!4d100.5398198!3m4!1s0x30e29f7b1807d7c9:0xaed3eeb8abfc73b!8m2!3d13.7272529!4d100.5405044"
            target="_blank"
            rel="noopener"
            className=" text-sm font-mono pr-5"
          >
            Location : 968 U Chu Liang Building Fl. 5, Rama 4 Rd, Silom,
            Bangrak, Bangkok 10500
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutAsMo;
