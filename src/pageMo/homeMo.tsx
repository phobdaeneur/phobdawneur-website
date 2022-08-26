import React from "react";
import dawneur from "../images/homeIma/dawneur.jpg";
import dawneur2 from "../images/homeIma/dawneur2.jpg";
import dawneur3 from "../images/homeIma/dawneur3.jpg";
import dawneur4 from "../images/homeIma/dawneur4.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function HomeMo() {
  return (
    <div className="flex flex-col items-center justify-start h-screen w-screen pt-6">
      {/* Image */}
      <div className="w-3/4 h-auto flex items-center justify-center px-4">
        <AliceCarousel
          autoPlay
          autoPlayInterval={3000}
          infinite={true}
          renderPrevButton={() => {
            return <button className="px-4">Previous</button>;
          }}
          renderNextButton={() => {
            return <button className=" px-4">Nextstep</button>;
          }}
        >
          <img src={dawneur} className=" sliderimg" />
          <img src={dawneur2} className=" sliderimg" />
          <img src={dawneur3} className=" sliderimg" />
          <img src={dawneur4} className=" sliderimg" />
        </AliceCarousel>
      </div>

      {/* Data */}
      <div className="flex flex-col items-start gap-2 px-5 w-screen">
        <label className=" text-[#1A1A1A] text-xl font-serif">
          Welcome to my universe
        </label>
        <p className=" text-[#1A1A1A] text-md font-serif indent-6">
          ดาวเหนือ มีชื่อจริง ๆ ว่า ดาวโพลาริส (Polaris)
          เป็นดาวฤกษ์สว่างในกลุ่มดาวหมีเล็ก (Ursa Minor) แต่ที่เรามักเรียกว่า
          ดาวเหนือ นั่นก็เพราะดาวโพลาริส เป็นดาวฤกษ์ที่ปรากฏใกล้ “ขั้วฟ้าเหนือ”
          เป็นบริเวณที่แกนหมุนของโลกชี้ไปบนท้องฟ้าพอดีทำให้เป็นดาวที่ไม่ขึ้นไม่ตก
          และปรากฏอยู่นิ่ง ๆ เหนือขอบฟ้าทางทิศเหนือตลอดทั้งคืน
          เเล้วคุณเคยได้ยินประโยคที่บอกว่า
          เมื่อคุณเดินหลงทางให้มองหาดาวเหนือไหม? ดังนั้นเราจึงหวังว่าคุณจะ{" "}
          <a className="underline decoration-[#F9B301] decoration-wavy">
            พบดาวเหนือ(Phobdawneur)
          </a>{" "}
          ของคุณเองในสักวัน...
        </p>
      </div>
    </div>
  );
}

export default HomeMo;
