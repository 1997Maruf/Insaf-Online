import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img from "../../assets/img/arkaive.png"
import img1 from "../../assets/img/sifat.png"
import img2 from "../../assets/img/testmonial_bg.png"
const Feedback = () => {

     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
   autoplay: true,             
  autoplaySpeed: 2000,
    
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    return (
        <div className="bg-center  bg-no-repeat" style={{ backgroundImage: `url(${img2})` }}>
          <h2 className="text-[32px] font-bold leading-[40px] py-[70px] text-center">Customers Feedback</h2>

            <div className="py-10">
                 <Slider {...settings}>
                  
                      <div className=" bg-white p-6 rounded-[7px] w-[230px] border-[1px] border-[#d7d6d6]">
                     <img src={img} alt="" />
                     <p className="text-[16px] mt-[14px] text-[#737373]">দেড় বছরে যাত্রায় এক কোটিরও বেশি টাকার পণ্য গ্রাহকদের নিকট নিরাপদে পৌঁছে দিয়েছে স্টেডফাস্ট কুরিয়ার। স্টেডফাস্টের সবাইকে ধন্যবাদ।</p>
                      <div className="flex gap-[8px] mt-[10px]">
                        <img src={img1} alt="" className="rounded-full"/>
                        <div className="">
                            <h5 className="text-[16px] text-[#171717] font-semibold leading-[24px]">Sifat Sayok</h5>
                            <p className="text-[16px] text-[#525252] leading-[24px]">Founder</p>
                        </div>
                      </div>
                   </div>
                   <div className=" bg-white p-6 rounded-[7px] w-[230px] border-[1px] border-[#d7d6d6]">
                    <div className="">
                       <img src={img} alt="" />
                     <p className="text-[16px] mt-[14px] text-[#737373]">দেড় বছরে যাত্রায় এক কোটিরও বেশি টাকার পণ্য গ্রাহকদের নিকট নিরাপদে পৌঁছে দিয়েছে স্টেডফাস্ট কুরিয়ার। স্টেডফাস্টের সবাইকে ধন্যবাদ।</p>
                      <div className="flex gap-[8px] mt-[10px]">
                        <img src={img1} alt="" className="rounded-full"/>
                        <div className="">
                            <h5 className="text-[16px] text-[#171717] font-semibold leading-[24px]">Sifat Sayok</h5>
                            <p className="text-[16px] text-[#525252] leading-[24px]">Founder</p>
                        </div>
                      </div>
                    </div>
                   </div>
                   <div className=" bg-white p-6 rounded-[7px] w-[330px] border-[1px] border-[#d7d6d6]">
                     <img src={img} alt="" />
                     <p className="text-[16px] mt-[14px] text-[#737373]">দেড় বছরে যাত্রায় এক কোটিরও বেশি টাকার পণ্য গ্রাহকদের নিকট নিরাপদে পৌঁছে দিয়েছে স্টেডফাস্ট কুরিয়ার। স্টেডফাস্টের সবাইকে ধন্যবাদ।</p>
                      <div className="flex gap-[8px] mt-[10px]">
                        <img src={img1} alt="" className="rounded-full"/>
                        <div className="">
                            <h5 className="text-[16px] text-[#171717] font-semibold leading-[24px]">Sifat Sayok</h5>
                            <p className="text-[16px] text-[#525252] leading-[24px]">Founder</p>
                        </div>
                      </div>
                   </div>
                   <div className=" bg-white p-6 rounded-[7px] w-[330px] border-[1px] border-[#d7d6d6]">
                     <img src={img} alt="" />
                     <p className="text-[16px] mt-[14px] text-[#737373]">দেড় বছরে যাত্রায় এক কোটিরও বেশি টাকার পণ্য গ্রাহকদের নিকট নিরাপদে পৌঁছে দিয়েছে স্টেডফাস্ট কুরিয়ার। স্টেডফাস্টের সবাইকে ধন্যবাদ।</p>
                      <div className="flex gap-[8px] mt-[10px]">
                        <img src={img1} alt="" className="rounded-full"/>
                        <div className="">
                            <h5 className="text-[16px] text-[#171717] font-semibold leading-[24px]">Sifat Sayok</h5>
                            <p className="text-[16px] text-[#525252] leading-[24px]">Founder</p>
                        </div>
                      </div>
                   </div>
                   <div className=" bg-white p-6 rounded-[7px] w-[330px] border-[1px] border-[#d7d6d6]">
                     <img src={img} alt="" />
                     <p className="text-[16px] mt-[14px] text-[#737373]">দেড় বছরে যাত্রায় এক কোটিরও বেশি টাকার পণ্য গ্রাহকদের নিকট নিরাপদে পৌঁছে দিয়েছে স্টেডফাস্ট কুরিয়ার। স্টেডফাস্টের সবাইকে ধন্যবাদ।</p>
                      <div className="flex gap-[8px] mt-[10px]">
                        <img src={img1} alt="" className="rounded-full"/>
                        <div className="">
                            <h5 className="text-[16px] text-[#171717] font-semibold leading-[24px]">Sifat Sayok</h5>
                            <p className="text-[16px] text-[#525252] leading-[24px]">Founder</p>
                        </div>
                      </div>
                   </div>
                   <div className=" bg-white p-6 rounded-[7px] w-[330px] border-[1px] border-[#d7d6d6]">
                     <img src={img} alt="" />
                     <p className="text-[16px] mt-[14px] text-[#737373]">দেড় বছরে যাত্রায় এক কোটিরও বেশি টাকার পণ্য গ্রাহকদের নিকট নিরাপদে পৌঁছে দিয়েছে স্টেডফাস্ট কুরিয়ার। স্টেডফাস্টের সবাইকে ধন্যবাদ।</p>
                      <div className="flex gap-[8px] mt-[10px]">
                        <img src={img1} alt="" className="rounded-full"/>
                        <div className="">
                            <h5 className="text-[16px] text-[#171717] font-semibold leading-[24px]">Sifat Sayok</h5>
                            <p className="text-[16px] text-[#525252] leading-[24px]">Founder</p>
                        </div>
                      </div>
                   </div>
                   <div className=" bg-white p-6 rounded-[7px] w-[330px] border-[1px] border-[#d7d6d6]">
                     <img src={img} alt="" />
                     <p className="text-[16px] mt-[14px] text-[#737373]">দেড় বছরে যাত্রায় এক কোটিরও বেশি টাকার পণ্য গ্রাহকদের নিকট নিরাপদে পৌঁছে দিয়েছে স্টেডফাস্ট কুরিয়ার। স্টেডফাস্টের সবাইকে ধন্যবাদ।</p>
                      <div className="flex gap-[8px] mt-[10px]">
                        <img src={img1} alt="" className="rounded-full"/>
                        <div className="">
                            <h5 className="text-[16px] text-[#171717] font-semibold leading-[24px]">Sifat Sayok</h5>
                            <p className="text-[16px] text-[#525252] leading-[24px]">Founder</p>
                        </div>
                      </div>
                   </div>
               
                </Slider>
            </div>
        </div>
    );
};

export default Feedback;