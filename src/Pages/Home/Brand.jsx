import img from "../../assets/img/sm_ghor.png";
import img1 from "../../assets/img/sm_halal_food.png";
import img2 from "../../assets/img/rokomari.png";
import img3 from "../../assets/img/naturo-01.png";
import img4 from "../../assets/img/sm_online.png";
import img5 from "../../assets/img/othoba.png";
import img6 from "../../assets/img/lotto.png";
import img7 from "../../assets/img/sailor.png";
import img8 from "../../assets/img/fashion.png";
import img9 from "../../assets/img/htbazar.png";

const Brand = () => {
  return (
    <div>
      <div className="container w-full max-w-[1195px] px-4 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 pt-[40px]">
          <div className="w-[150px] flex justify-center mx-auto">
            <img src={img} alt="" />
          </div>
          <div className="w-[150px] flex justify-center mx-auto">
            <img src={img1} alt="" />
          </div>
          <div className="w-[150px] flex justify-center mx-auto">
            <img src={img2} alt="" />
          </div>
          <div className="w-[150px] flex justify-center mx-auto">
            <img src={img3} alt="" />
          </div>
          <div className="w-[150px] flex justify-center mx-auto">
            <img src={img4} alt="" />
          </div>
          <div className="w-[150px] flex justify-center mx-auto">
            <img src={img5} alt="" />
          </div>
          <div className="w-[150px] flex justify-center mx-auto">
            <img src={img6} alt="" />
          </div>
          <div className="w-[150px] flex justify-center mx-auto">
            <img src={img7} alt="" />
          </div>
          <div className="w-[150px] flex justify-center mx-auto">
            <img src={img8} alt="" />
          </div>
          <div className="w-[150px] flex justify-center mx-auto">
            <img src={img9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
