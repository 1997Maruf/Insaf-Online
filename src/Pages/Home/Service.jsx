import img1 from "../../assets/img/ecom_delivry.svg";
import img2 from "../../assets/img/pick_n_drop.svg";
import img3 from "../../assets/img/packeging.svg";
import img4 from "../../assets/img/warehouse.svg";

const Service = () => {
  return (
    <div>
      <div className="container w-full max-w-[1196px] px-4 mx-auto">
        <h1 className="text-[32px] text-[#171717] my-24 font-bold leading-[40px] text-center">
          Our Service
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
