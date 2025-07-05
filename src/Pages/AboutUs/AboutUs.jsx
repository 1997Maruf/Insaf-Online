import img1 from "../../assets/img/breadcump.svg";
import img2 from "../../assets/img/about_img.svg";
import img3 from "../../assets/img/mission.svg";
import img4 from "../../assets/img/vision.svg";
import img5 from "../../assets/img/sm_marchant.svg";
import img6 from "../../assets/img/sm_rider.svg";
import img7 from "../../assets/img/sm_hub.svg";
import img8 from "../../assets/img/md_delivery_van.png";
import { TiTickOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import LicensedMembership from "../Home/LicensedMembership";
import Feedback from "./Feedback";

const AboutUs = () => {
  return (
    <div className="">
      <div
        className="flex justify-center h-[150px] items-center bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <h1 className="text-[32px] text-center text-[#171717] font-semibold leading-[40px]">
          Grow with SteadFast
        </h1>
      </div>
      <div className="container mx-auto px-4 max-w-[1090px]">
        <div className="flex flex-col lg:flex-row my-[50px] gap-8">
          <div className="w-full lg:w-[453px]">
            <h4 className="text-[18px] text-[#a3a3a3] font-medium leading-[28px]">
              About Us
            </h4>
            <h2 className="mt-[12px] text-[40px] text-[#171717] leading-[56px] font-semibold">
              We Provide The
            </h2>
            <h2 className="mt-[12px] text-[40px] text-[#171717] leading-[56px] font-semibold">
              Best Quality Courier Services
            </h2>
            <p className="text-[16px] my-[27px] text-[#a3a3a3] leading-[24px]">
              Steadfast courier is a leading courier service company in
              Bangladesh dedicated to delivering reliable and efficient e-
              commerce logistics solutions in time.
            </p>
            <p className="flex items-center gap-[3px] text-[16px] leading-[24px]">
              <TiTickOutline className="text-[#ffa400] w-7 h-7" />
              <span>Daily pickups, no limitations</span>
            </p>
            <p className="flex items-center gap-[3px] text-[16px] leading-[24px]">
              <TiTickOutline className="text-[#ffa400] w-7 h-7" />
              <span>Faster Payment Service</span>
            </p>
            <p className="flex items-center gap-[3px] text-[16px] leading-[24px]">
              <TiTickOutline className="text-[#ffa400] w-7 h-7" />
              <span>Cash on Delivery</span>
            </p>
          </div>
          <div className="w-full lg:w-[634px]">
            <img src={img2} alt="" className="w-full h-auto" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-24">
          <div className="w-full lg:w-[515px]">
            <img src={img3} alt="" className="w-10 h-10" />
            <h3 className="mt-[16px] text-[24px] text-[#171717] font-bold leading-[32px]">
              Cash on Delivery
            </h3>
            <p className="text-[16px] text-[#737373] mt-2">
              To put a smile on your face by providing fast, secure, and
              hassle-free deliveries. We're here to connect people and
              e-commerce businesses worldwide with fast, secure, and top-notch
              service.
            </p>
          </div>
          <div className="w-full lg:w-[515px]">
            <img src={img4} alt="" className="w-10 h-10" />
            <h3 className="mt-[16px] text-[24px] text-[#171717] font-bold leading-[32px]">
              Our Vision
            </h3>
            <p className="text-[16px] text-[#737373] mt-2">
              Redefine the future of e-commerce logistics in Bangladesh through
              innovative solutions powered by modern technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-11 bg-[#F5F5F5] py-20 mt-24">
        <div className="w-[238.83px] h-[187px] bg-white rounded-[5px] border border-[#d4d4d4] py-[30px]">
          <div className="flex justify-center">
            <img src={img5} alt="" className="w-10 h-10" />
          </div>
          <p className="text-[20px] mt-[4px] text-center text-[#171717] font-bold">
            70K +
          </p>
          <p className="text-[16px] text-center text-[#737373]">
            Registered Merchant
          </p>
        </div>
        <div className="w-[238.83px] h-[187px] bg-white rounded-[5px] border border-[#d4d4d4] py-[30px]">
          <div className="flex justify-center">
            <img src={img6} alt="" className="w-10 h-10" />
          </div>
          <p className="text-[20px] mt-[4px] text-center text-[#171717] font-bold">
            5K +
          </p>
          <p className="text-[16px] text-center text-[#737373]">Delivery Man</p>
        </div>
        <div className="w-[238.83px] h-[187px] bg-white rounded-[5px] border border-[#d4d4d4] py-[30px]">
          <div className="flex justify-center">
            <img src={img7} alt="" className="w-10 h-10" />
          </div>
          <p className="text-[20px] mt-[4px] text-center text-[#171717] font-bold">
            1K +
          </p>
          <p className="text-[16px] text-center text-[#737373]">
            Delivery Point
          </p>
        </div>
        <div className="w-[238.83px] h-[187px] bg-white rounded-[5px] border border-[#d4d4d4] py-[30px]">
          <div className="flex justify-center">
            <img src={img8} alt="" className="w-10 h-10" />
          </div>
          <p className="text-[20px] mt-[4px] text-center text-[#171717] font-bold">
            5700K +
          </p>
          <p className="text-[16px] text-center text-[#737373]">
            Parcels Delivered
          </p>
        </div>
      </div>

      <LicensedMembership />
      <Feedback />
    </div>
  );
};

export default AboutUs;
