import img from "../../assets/img/logo.svg";
import img1 from "../../assets/img/app_store.png";
import img2 from "../../assets/img/google_play.png";
import { SlSocialFacebook } from "react-icons/sl";
import { FiLinkedin } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="border-t-[1px] border-[#d4d4d4] bg-[#F9F9F9] mt-[100px]">
      <div className="container w-full max-w-[1195px] px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-10 justify-between py-[60px]">
          <div className="w-full md:w-[48%] lg:w-[300px]">
            <img src={img} alt="logo" />
            <p className="text-[16px] mt-[10px] text-[#171717] font-[400] leading-[24px]">
              House# 44, Rd No. 2/A, Dhanmondi,
              <br />
              Dhaka1209
            </p>
            <p className="text-[16px] mt-[10px] text-[#171717] font-[400] leading-[24px]">
              E-mail: info@steadfast.com.bd
            </p>
            <p className="text-[16px] mt-[10px] text-[#171717] font-[400] leading-[24px]">
              Hotline: 09678-045045
            </p>
          </div>

          <div className="w-full md:w-[48%] lg:w-auto">
            <h4 className="text-[20px] text-[#171717] font-bold leading-[28px]">
              Company
            </h4>
            <p className="mt-[16px] text-[16px] text-[#171717] hover:text-[#00B795] font-[400] leading-[24px]">
              Contact Us
            </p>
            <p className="mt-[10px] text-[16px] text-[#171717] hover:text-[#00B795] font-[400] leading-[24px]">
              Terms and Conditions
            </p>
          </div>

          <div className="w-full md:w-[48%] lg:w-[178px]">
            <h4 className="text-[20px] text-[#171717] font-bold leading-[28px]">
              Sister Concern
            </h4>
            <p className="mt-[16px] text-[16px] text-[#171717] hover:text-[#00B795] font-[400] leading-[24px]">
              Pixelax
            </p>
            <p className="mt-[10px] text-[16px] text-[#171717] hover:text-[#00B795] font-[400] leading-[24px]">
              Biggapon
            </p>
          </div>

          <div className="w-full md:w-[48%] lg:w-auto">
            <h4 className="text-[20px] text-[#171717] font-bold leading-[28px]">
              Follow Us
            </h4>
            <div className="mt-[20px] flex gap-3">
              <div className="border-[1px] border-[#d4d4d4] hover:border-[#00B795] bg-[#fafafa] hover:bg-[#E5F7F4] rounded-full p-[10px] duration-700">
                <SlSocialFacebook className="w-[30px] h-[30px] text-[#a3a3a3] hover:text-[#00B795]" />
              </div>
              <div className="border-[1px] border-[#d4d4d4] hover:border-[#00B795] bg-[#fafafa] hover:bg-[#E5F7F4] rounded-full p-[10px] duration-700">
                <FiLinkedin className="w-[30px] h-[30px] text-[#a3a3a3] hover:text-[#00B795]" />
              </div>
              <div className="border-[1px] border-[#d4d4d4] hover:border-[#00B795] bg-[#fafafa] hover:bg-[#E5F7F4] rounded-full p-[10px] duration-700">
                <CiTwitter className="w-[30px] h-[30px] text-[#a3a3a3] hover:text-[#00B795]" />
              </div>
            </div>
            <div className="flex gap-6 mt-7">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
          </div>
        </div>

        <p className="text-[14px] text-[#171717] text-center pb-7">
          © 2016 - 2025 SteadFast Courier Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
