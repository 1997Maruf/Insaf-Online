import img1 from "../../assets/img/daily_pickup.svg";
import img2 from "../../assets/img/cod.svg";
import img3 from "../../assets/img/payment.svg";
import img4 from "../../assets/img/management.svg";
import img5 from "../../assets/img/realtime_track.svg";
import img6 from "../../assets/img/24_4_support.svg";

const WhyChoose = () => {
  return (
    <div>
      <div className="container w-full max-w-[1229px] px-4 mx-auto">
        <h2 className="text-[32px] text-[#171717] font-semibold leading-[40px] text-center mt-20">
          Why you should choose
        </h2>
        <h2 className="text-[32px] text-[#171717] font-semibold leading-[40px] text-center mb-16">
          Steadfast?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full max-w-[409px] px-[28px] py-[64px] border-[1px] border-[#e5e5e5] rounded-[20px] mx-auto">
            <img src={img1} alt="" />
            <h2 className="text-[24px] text-[#171717] font-semibold leading-[32px] my-4">
              Daily pickup, no limits
            </h2>
            <p className="text-[16px] text-[#737373] leading-[24px]">
              Steadfast Courier gives you the opportunity of unlimited pickup.
            </p>
          </div>

          <div className="w-full max-w-[409px] px-[28px] py-[64px] border-[1px] border-[#e5e5e5] rounded-[20px] mx-auto">
            <img src={img2} alt="" />
            <h2 className="text-[24px] text-[#171717] font-semibold leading-[32px] my-4">
              Cash on Delivery
            </h2>
            <p className="text-[16px] text-[#737373] leading-[24px]">
              At Steadfast Courier we will collect the cash on behalf of you.
            </p>
          </div>

          <div className="w-full max-w-[409px] px-[28px] py-[64px] border-[1px] border-[#e5e5e5] rounded-[20px] mx-auto">
            <img src={img3} alt="" />
            <h2 className="text-[24px] text-[#171717] font-semibold leading-[32px] my-4">
              Faster Payment Service
            </h2>
            <p className="text-[16px] text-[#737373] leading-[24px]">
              We provides multiple payment methods such as cash, Bank or Mobile
              Banking
            </p>
          </div>

          <div className="w-full max-w-[409px] px-[28px] py-[64px] border-[1px] border-[#e5e5e5] rounded-[20px] mx-auto">
            <img src={img4} alt="" />
            <h2 className="text-[24px] text-[#171717] font-semibold leading-[32px] my-4">
              Online Management
            </h2>
            <p className="text-[16px] text-[#737373] leading-[24px]">
              You can get all the information you need in your own user
              dashboard.
            </p>
          </div>

          <div className="w-full max-w-[409px] px-[28px] py-[64px] border-[1px] border-[#e5e5e5] rounded-[20px] mx-auto">
            <img src={img5} alt="" />
            <h2 className="text-[24px] text-[#171717] font-semibold leading-[32px] my-4">
              Real-Time Tracking
            </h2>
            <p className="text-[16px] text-[#737373] leading-[24px]">
              Steadfast Courier provides an unique tracking code for your every
              consignments.
            </p>
          </div>

          <div className="w-full max-w-[409px] px-[28px] py-[64px] border-[1px] border-[#e5e5e5] rounded-[20px] mx-auto">
            <img src={img6} alt="" />
            <h2 className="text-[24px] text-[#171717] font-semibold leading-[32px] my-4">
              24/7 Customer Service
            </h2>
            <p className="text-[16px] text-[#737373] leading-[24px]">
              Our Call Center Executives are always ready 24/7 to help you with
              your problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
