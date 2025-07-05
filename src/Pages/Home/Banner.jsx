 import img from "../../assets/img/react.svg"
 import img1 from "../../assets/img/sm_marchant.svg"
 import img2 from "../../assets/img/sm_rider.svg"
 import img3 from "../../assets/img/sm_hub.svg"
 import img4 from "../../assets/img/intro_bg.webp"
import { useEffect, useState } from "react"
import useAxiosSecure from "../../hooks/useAxiosSecure"
import { useQuery } from "@tanstack/react-query"
const Banner = () => {
 const [users, setUsers] = useState([]);
     const url = 'https://parcel-pro-server-livid.vercel.app/users';
         useEffect(() => {
             fetch(url)
               .then((res) => res.json())
               .then(data => {
                  const deliveryMan = data.filter(man => man.role === 'delivery');
                  setUsers(deliveryMan)
               });
           }, []);

      // All User
      const axiosSecure = useAxiosSecure();
  const { data: userss = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("users");
      console.log(res.data);
      return res.data;
    },
   
  });
  return (
    <div className=" ">
    <div className="container lg:w-[1275px] w-full pb-10 px-4 lg:px-0 mx-auto">
  <div
    className="flex flex-col lg:flex-row items-center pt-[70px] px-7 justify-center bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${img4})` }}
  >
    <div className="w-full lg:w-[448px]">
      <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-[#171717] font-bold leading-[44px] sm:leading-[50px] lg:leading-[60px] text-center lg:text-left">
        We Deliver
      </h1>
      <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] text-[#171717] font-bold leading-[44px] sm:leading-[50px] lg:leading-[60px] text-center lg:text-left">
        Parcel on Time with no Hassle
      </h1>
      <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#171717] leading-[24px] mt-6 text-center lg:text-left">
        Easy Tracking, fast Payment, and safe Delivery across country.
      </p>
      <div className="flex justify-center lg:justify-start mt-[40px]">
        <button className="w-[196px] h-[56px] bg-[#00b795] text-[18px] text-white px-[16px] py-[8px] rounded-[6px]">
          Become a Merchant
        </button>
      </div>
    </div>

    <div className="w-full lg:w-[496px] max-w-[438px] lg:mt-0 mt-[30px] mx-auto">
      <img src={img} alt="" className="w-full h-auto" />
    </div>

    <div className="hidden lg:block lg:ml-10 mt-10 lg:mt-0">
      <div className="flex items-center gap-[16px]">
        <div className="bg-[#fff2e1] w-[50px] h-[50px] flex justify-center items-center p-3 rounded-[5px] border-[2px] border-white">
          <img src={img1} alt="" />
        </div>
        <div>
          <p className="text-[32px] text-[#171717] font-semibold leading-[28px]">
            {userss.length} +
          </p>
          <p className="text-[#a3a3a3]">Registered Merchant</p>
        </div>
      </div>

      <div className="flex items-center mt-[30px] gap-[16px]">
        <div className="bg-[#fff2e1] w-[50px] h-[50px] flex justify-center items-center p-3 rounded-[5px] border-[2px] border-white">
          <img src={img2} alt="" />
        </div>
        <div>
          <p className="text-[32px] text-[#171717] font-semibold leading-[28px]">
            {users.length} +
          </p>
          <p className="text-[#a3a3a3]">Delivery Man</p>
        </div>
      </div>

      <div className="flex items-center mt-[30px] gap-[16px]">
        <div className="bg-[#fff2e1] w-[50px] h-[50px] flex justify-center items-center p-3 rounded-[5px] border-[2px] border-white">
          <img src={img3} alt="" />
        </div>
        <div>
          <p className="text-[32px] text-[#171717] font-semibold leading-[28px]">
            500 +
          </p>
          <p className="text-[#a3a3a3]">Delivery Point</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;
