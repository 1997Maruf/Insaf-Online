import img1 from "../../assets/img/license.svg";
import img2 from "../../assets/img/member.svg";
import img3 from "../../assets/img/dak_v.png";
import img4 from "../../assets/img/csab.png";
import img5 from "../../assets/img/sm_ecab.png";
const LicensedMembership = () => {
  return (
    <div>
      <div className="container w-full max-w-[950px] px-4 mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-36 mt-32 pb-20 items-start">
          <div className="w-full lg:w-[398px]">
            <div className="flex gap-[8px]">
              <img src={img1} alt="" />
              <p className="text-[16px] font-medium text-[#00b795]">Licensed</p>
            </div>
            <h3 className="mt-[15px] mb-[30px] text-[24px] leading-[32px] text-[#171717] font-bold">
              A licensed courier service of GPO
            </h3>
            <img src={img3} alt="" />
          </div>

          <div className="divider divider-horizontal hidden lg:flex">OR</div>
          <div className="divider lg:hidden flex justify-center">OR</div>

          <div className="w-full lg:w-[398px]">
            <div className="flex gap-[8px]">
              <img src={img2} alt="" />
              <p className="text-[16px] font-medium text-[#00b795]">
                Membership
              </p>
            </div>
            <h3 className="mt-[15px] mb-[30px] text-[24px] leading-[32px] text-[#171717] font-bold">
              We are Member of
            </h3>
            <div className="flex gap-3 flex-wrap">
              <img src={img4} alt="" />
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicensedMembership;
